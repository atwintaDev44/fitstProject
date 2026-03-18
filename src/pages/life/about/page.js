export function lifeAboutPage() {
  return {
    title: "О компании",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-400">Наш сайт</div>
          <a class="mt-2 inline-block text-sky-400 hover:underline" href="https://example.com" target="_blank" rel="noreferrer">
            Открыть сайт компании
          </a>
          <div class="mt-2 text-xs text-slate-500">Замените ссылку на реальную.</div>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-400">Презентация о компании</div>
          <div class="mt-2 text-slate-100">Здесь будет файл/ссылка на презентацию.</div>
        </div>
      </div>
    `
  };
}

