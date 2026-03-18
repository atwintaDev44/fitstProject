export function faqAhoPage() {
  return {
    title: "FAQ — АХО",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-300">Опишите проблему</div>
          <textarea
            id="ahoText"
            class="mt-2 h-32 w-full rounded-xl border border-slate-700 bg-slate-950/30 px-3 py-2 text-slate-100"
            placeholder="Например: не работает кондиционер в переговорной…"
          ></textarea>
          <button
            id="ahoSend"
            class="mt-3 w-full rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
          >
            Отправить в IBOLID (заглушка)
          </button>
          <div class="mt-2 text-xs text-slate-500">Интеграция с IBOLID будет добавлена на следующем этапе.</div>
        </div>
      </div>
      <script>
        (function () {
          const btn = document.getElementById("ahoSend");
          btn?.addEventListener("click", () => alert("Заглушка: отправка в IBOLID"));
        })();
      </script>
    `
  };
}

