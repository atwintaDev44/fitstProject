export function remoteAccessPage() {
  return {
    title: "Удалённый доступ",
    content: `
      <div class="space-y-3">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Настроить</div>
          <div class="mt-2 text-sm text-slate-400">Пошаговая инструкция по настройке удалённого доступа.</div>
        </div>
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Не заходит / возникли сложности</div>
          <div class="mt-2 text-sm text-slate-400">Проверки и что делать в типовых случаях.</div>
        </div>
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Телефон дежурного сисадмина</div>
          <div class="mt-2">
            <a class="text-sky-400 hover:underline" href="tel:+70000000000">+7 (000) 000-00-00</a>
          </div>
          <div class="mt-2 text-xs text-slate-500">Замените номер на реальный.</div>
        </div>
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Отправка текста в IBOLID</div>
          <div class="mt-2 text-sm text-slate-400">Форма отправки будет добавлена (как в АХО).</div>
        </div>
      </div>
    `
  };
}

