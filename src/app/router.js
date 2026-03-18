export function navigate(pathname) {
  if (location.pathname === pathname) return;
  history.pushState({}, "", pathname);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function startRouter({ onNavigate }) {
  window.addEventListener("popstate", () => onNavigate());
}

