// Microsoft Entra ID (Azure AD) auth via MSAL browser.
// Config is read from window.APP_CONFIG (set in a non-committed config.js).
// Expected shape: { clientId: "...", tenantId: "..." }

const MSAL_CDN =
  "https://cdn.jsdelivr.net/npm/@azure/msal-browser@3/dist/msal-browser.esm.js";

let _msalInstance = null;

function getConfig() {
  const c = window.APP_CONFIG;
  if (!c || !c.clientId || !c.tenantId) return null;
  return c;
}

async function getMsalInstance() {
  if (_msalInstance) return _msalInstance;

  const { PublicClientApplication } = await import(MSAL_CDN);
  const cfg = getConfig();

  _msalInstance = new PublicClientApplication({
    auth: {
      clientId: cfg.clientId,
      authority: `https://login.microsoftonline.com/${cfg.tenantId}`,
      redirectUri: window.location.origin,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    },
  });

  await _msalInstance.initialize();
  return _msalInstance;
}

export async function requireAuth() {
  if (!getConfig()) {
    return { status: "not_configured" };
  }

  try {
    const msal = await getMsalInstance();

    // Handle redirect response when returning from Entra login page.
    await msal.handleRedirectPromise();

    const accounts = msal.getAllAccounts();
    if (accounts.length === 0) {
      return { status: "unauthenticated" };
    }

    // Silent token acquisition confirms the account is still active.
    try {
      const result = await msal.acquireTokenSilent({
        scopes: ["User.Read"],
        account: accounts[0],
      });
      return { status: "authenticated", account: result.account };
    } catch (_silentError) {
      // Token expired or account disabled — treat as unauthenticated.
      return { status: "unauthenticated" };
    }
  } catch (err) {
    console.error("[auth] requireAuth error:", err);
    return { status: "error", error: err };
  }
}

export async function login() {
  if (!getConfig()) return;
  try {
    const msal = await getMsalInstance();
    await msal.loginRedirect({ scopes: ["User.Read"] });
  } catch (err) {
    console.error("[auth] login error:", err);
  }
}

export async function logout() {
  if (!getConfig()) return;
  try {
    const msal = await getMsalInstance();
    const accounts = msal.getAllAccounts();
    if (accounts.length > 0) {
      await msal.logoutRedirect({ account: accounts[0] });
    }
  } catch (err) {
    console.error("[auth] logout error:", err);
  }
}
