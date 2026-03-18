export function employeesIndexPage() {
  return {
    title: "Наши сотрудники",
    content: `
      <div class="grid gap-3">
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/employees/birthdays" data-link>
          <div class="text-slate-100">Дни рождения</div>
          <div class="mt-1 text-xs text-slate-400">Сегодня / выбор даты</div>
        </a>
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/employees/newcomers" data-link>
          <div class="text-slate-100">Новые сотрудники</div>
          <div class="mt-1 text-xs text-slate-400">Список последних присоединившихся</div>
        </a>
      </div>
    `
  };
}

