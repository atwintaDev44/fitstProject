export function referralPage() {
  return {
    title: "Приведи друга",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-400">Информация</div>
          <div class="mt-2 text-slate-100">
            Здесь будет описание условий реферальной программы, этапы и выплаты.
          </div>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-300">Связь с HR</div>
          <div class="mt-2 flex flex-wrap gap-2">
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="mailto:hr@company.com">Написать</a>
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="tel:+70000000000">Позвонить</a>
          </div>
        </div>
      </div>
    `
  };
}

