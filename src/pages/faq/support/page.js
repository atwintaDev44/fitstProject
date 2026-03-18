export function faqSupportPage() {
  return {
    title: "FAQ — Техподдержка",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Тех. поддержка</div>
          <div class="mt-2 text-sm text-slate-400">Заявки — через IBOLID (будет подключено).</div>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Контакты</div>
          <div class="mt-2 flex flex-wrap gap-2">
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="tel:+70000000000">
              Позвонить дежурному
            </a>
            <a class="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-900" href="mailto:it@company.com">
              Написать на почту
            </a>
          </div>
          <div class="mt-2 text-xs text-slate-500">Замените контакты на реальные.</div>
        </div>
      </div>
    `
  };
}

