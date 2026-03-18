export function birthdaysPage() {
  return {
    title: "Дни рождения",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-400">Сегодня</div>
          <div class="mt-2 text-slate-100">Данные подключим позже (каталог сотрудников/HR-система).</div>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <label class="text-sm text-slate-300" for="birthDate">Выбор даты</label>
          <input id="birthDate" type="date" class="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/30 px-3 py-2 text-slate-100" />
          <div class="mt-2 text-xs text-slate-500">Фильтрация по выбранной дате будет добавлена позже.</div>
        </div>
      </div>
    `
  };
}

