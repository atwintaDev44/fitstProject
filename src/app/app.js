import { navigate, startRouter } from "./router.js";
import { routes } from "./routes.js";

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

function renderCurrentRoute() {
  const app = document.getElementById("app");
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

startRouter({
  onNavigate: renderCurrentRoute
});

renderCurrentRoute();

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

