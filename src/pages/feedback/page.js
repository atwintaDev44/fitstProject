export function feedbackPage() {
  return {
    title: "Обратная связь",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-300">Улучшить / предложить новое для чат-бота/приложения</div>
          <div class="mt-2 text-sm text-slate-400">Поделитесь мнением или задайте вопросы.</div>
        </div>

        <form
          class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4"
          onsubmit="event.preventDefault(); alert('Спасибо! (заглушка)');"
        >
          <label class="text-sm text-slate-300" for="fbText">Сообщение</label>
          <textarea
            id="fbText"
            class="mt-2 h-32 w-full rounded-xl border border-slate-700 bg-slate-950/30 px-3 py-2 text-slate-100"
            placeholder="Например: добавьте поиск по бланкам…"
            required
          ></textarea>
          <button class="mt-3 w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">
            Отправить
          </button>
          <div class="mt-2 text-xs text-slate-500">Позже подключим отправку в почту/тикеты/форму.</div>
        </form>
      </div>
    `
  };
}

