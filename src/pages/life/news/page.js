export function lifeNewsPage() {
  return {
    title: "Новости компании",
    content: `
      <div class="space-y-3">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-400">Пресс-центр</div>
          <div class="mt-2 text-slate-100">Подключим ленту новостей (API/JSON) позже.</div>
        </div>
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 text-sm text-slate-300">
          Пример карточек новостей:
          <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-400">
            <li>Запуск нового склада</li>
            <li>Открытие спортзала</li>
            <li>Обновление расписания столовой</li>
          </ul>
        </div>
      </div>
    `
  };
}

