import { navigate, startRouter } from "./router.js";
import { routes } from "./routes.js";
import { requireAuth, login } from "../auth/msal.js";

function layout({ title, content }) {
  return `
    <div class="mx-auto flex min-h-dvh w-full max-w-md flex-col">
      <header class="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div class="px-4 py-4">
          <div class="text-sm text-slate-400">Корпоративное приложение</div>
          <div class="text-lg font-semibold text-slate-100">${title}</div>
        </div>
        <nav class="flex gap-2 overflow-x-auto px-4 pb-3 text-sm">
          ${[
            ["Главная", "/"],
            ["Вакансии", "/vacancies"],
            ["Наша жизнь", "/life"],
            ["Сотрудники", "/employees"],
            ["FAQ", "/faq"],
            ["Бланки", "/forms/hr"],
            ["Обратная связь", "/feedback"]
          ]
            .map(
              ([label, href]) => `
                <a
                  class="shrink-0 rounded-full border border-slate-800 px-3 py-1 text-slate-200 hover:bg-slate-900"
                  href="${href}"
                  data-link
                >${label}</a>
              `
            )
            .join("")}
        </nav>
      </header>

      <main class="flex-1 px-4 py-5">
        ${content}
      </main>

      <footer class="border-t border-slate-800 px-4 py-4 text-xs text-slate-500">
        <div>Если доступ к корпоративной почте отключён — доступ к приложению должен быть заблокирован.</div>
      </footer>
    </div>
  `;
}

function authScreen(content) {
  return `
    <div class="flex min-h-dvh flex-col items-center justify-center px-4 bg-slate-950">
      <div class="w-full max-w-sm space-y-6 text-center">
        <div class="text-2xl font-semibold text-slate-100">Corporate Hub</div>
        ${content}
      </div>
    </div>
  `;
}

const AUTH_SCREENS = {
  not_configured: authScreen(`
    <div class="rounded-xl border border-yellow-800 bg-yellow-950/40 px-5 py-4 text-left space-y-2">
      <div class="text-sm font-semibold text-yellow-400">Авторизация не настроена</div>
      <div class="text-sm text-slate-400">
        Параметры Microsoft Entra ID (tenant / client ID) ещё не указаны.
        Приложение работает в режиме заглушки.
      </div>
    </div>
    <div class="text-xs text-slate-600">
      Добавьте <code class="text-slate-400">window.APP_CONFIG</code> с <code class="text-slate-400">clientId</code>
      и <code class="text-slate-400">tenantId</code>, чтобы включить вход через рабочий Outlook.
    </div>
  `),

  unauthenticated: authScreen(`
    <div class="space-y-2">
      <div class="text-slate-400 text-sm">Для доступа необходим корпоративный аккаунт Microsoft.</div>
    </div>
    <button
      id="login-btn"
      class="w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-500 active:bg-sky-700"
    >
      Войти через рабочий Outlook
    </button>
  `),

  error: authScreen(`
    <div class="rounded-xl border border-red-800 bg-red-950/40 px-5 py-4 space-y-2">
      <div class="text-sm font-semibold text-red-400">Ошибка авторизации</div>
      <div class="text-sm text-slate-400">Не удалось проверить учётную запись. Попробуйте перезагрузить страницу.</div>
    </div>
    <button
      id="reload-btn"
      class="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm text-slate-200 hover:bg-slate-900"
    >
      Перезагрузить
    </button>
  `)
};

let _authStatus = null;

function attachAuthHandlers(status) {
  if (status === "unauthenticated") {
    document.getElementById("login-btn")?.addEventListener("click", () => login());
  }
  if (status === "error") {
    document.getElementById("reload-btn")?.addEventListener("click", () => location.reload());
  }
}

async function renderCurrentRoute() {
  const app = document.getElementById("app");

  if (_authStatus !== "authenticated") {
    const auth = await requireAuth();
    _authStatus = auth.status;
  }

  if (_authStatus !== "authenticated") {
    app.innerHTML = AUTH_SCREENS[_authStatus] ?? AUTH_SCREENS.error;
    attachAuthHandlers(_authStatus);
    return;
  }

  const route = routes.match(location.pathname);

  if (!route) {
    app.innerHTML = layout({
      title: "Не найдено",
      content: `
        <div class="space-y-3">
          <div class="text-slate-200">Страница не найдена.</div>
          <a class="text-sky-400 hover:underline" href="/" data-link>На главную</a>
        </div>
      `
    });
    return;
  }

  const page = route.page();
  app.innerHTML = layout(page);
}

async function init() {
  const auth = await requireAuth();
  _authStatus = auth.status;

  startRouter({ onNavigate: renderCurrentRoute });
  await renderCurrentRoute();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    });
  }

  document.addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[data-link]") : null;
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    e.preventDefault();
    navigate(href);
  });

  // Re-check auth when the user returns to the tab (e.g. after account is disabled).
  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState !== "visible") return;
    const auth = await requireAuth();
    if (auth.status !== _authStatus) {
      _authStatus = auth.status;
      await renderCurrentRoute();
    }
  });
}

init();
