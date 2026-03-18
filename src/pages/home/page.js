export function homePage() {
  return {
    title: "Главная",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <div class="text-sm text-slate-400">Старт</div>
          <div class="mt-1 text-slate-100">
            Это каркас PWA (HTML + JS + Tailwind) со структурой разделов по требованиям из <code class="text-slate-300">funcProject.txt</code>.
          </div>
        </div>

        <div class="grid grid-cols-1 gap-3">
          ${[
            ["Актуальные вакансии", "/vacancies"],
            ["Приведи друга", "/referral"],
            ["Наша жизнь", "/life"],
            ["Наши сотрудники", "/employees"],
            ["Частые вопросы", "/faq"],
            ["Бланки отдела кадров", "/forms/hr"],
            ["Обратная связь", "/feedback"]
          ]
            .map(
              ([label, href]) => `
                <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="${href}" data-link>
                  <div class="text-slate-100">${label}</div>
                  <div class="mt-1 text-xs text-slate-400">${href}</div>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    `
  };
}

