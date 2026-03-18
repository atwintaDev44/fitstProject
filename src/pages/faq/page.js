export function faqIndexPage() {
  return {
    title: "Частые вопросы",
    content: `
      <div class="grid gap-3">
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/faq/aho" data-link>
          <div class="text-slate-100">АХО</div>
          <div class="mt-1 text-xs text-slate-400">Опишите проблему → заявка в IBOLID</div>
        </a>
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/faq/passes" data-link>
          <div class="text-slate-100">Пропуск</div>
          <div class="mt-1 text-xs text-slate-400">Не работает/утерян, гостевой пропуск, «нет с собой»</div>
        </a>
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/faq/support" data-link>
          <div class="text-slate-100">Техподдержка</div>
          <div class="mt-1 text-xs text-slate-400">Заявки и контакты</div>
        </a>
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/faq/remote-access" data-link>
          <div class="text-slate-100">Удалённый доступ</div>
          <div class="mt-1 text-xs text-slate-400">Инструкции / проблемы / телефон дежурного</div>
        </a>
      </div>
    `
  };
}

