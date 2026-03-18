export function vacanciesIndexPage() {
  return {
    title: "Актуальные вакансии",
    content: `
      <div class="space-y-3">
        <div class="text-sm text-slate-400">Разделы</div>
        <div class="grid gap-3">
          <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/vacancies/warehouse" data-link>
            <div class="text-slate-100">На склад</div>
            <div class="mt-1 text-xs text-slate-400">Комплектовщик, Контроль, Грузчик, Оператор 1С</div>
          </a>
          <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/vacancies/office" data-link>
            <div class="text-slate-100">Офисные позиции</div>
            <div class="mt-1 text-xs text-slate-400">Аналитик 1С, Помощник менеджера, Сисадмин, Закупки</div>
          </a>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-300">Связь с HR</div>
          <div class="mt-2 flex flex-wrap gap-2">
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="mailto:hr@company.com">Написать на почту</a>
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="tel:+70000000000">Позвонить</a>
          </div>
          <div class="mt-2 text-xs text-slate-500">Замените контакты на реальные.</div>
        </div>
      </div>
    `
  };
}

