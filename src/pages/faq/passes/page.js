export function faqPassesPage() {
  return {
    title: "FAQ — Пропуск",
    content: `
      <div class="space-y-3">
        ${[
          ["Не работает / утерян", "Что делать, если пропуск не работает или потерян."],
          ["Гостевой пропуск", "Как оформить гостевой пропуск."],
          ["Нет с собой. Что делать?", "Инструкция на случай, если забыли пропуск."]
        ]
          .map(
            ([h, d]) => `
              <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
                <div class="text-slate-100">${h}</div>
                <div class="mt-2 text-sm text-slate-400">${d}</div>
              </div>
            `
          )
          .join("")}
      </div>
    `
  };
}

