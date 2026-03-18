export function hrFormsPage() {
  return {
    title: "Бланки отдела кадров",
    content: `
      <div class="space-y-4">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-sm text-slate-300">Выбор юр. лица</div>
          <div class="mt-2 grid grid-cols-2 gap-2">
            <button class="rounded-xl border border-slate-700 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 hover:bg-slate-900/40" data-entity="office">Офис</button>
            <button class="rounded-xl border border-slate-700 bg-slate-950/30 px-3 py-2 text-sm text-slate-100 hover:bg-slate-900/40" data-entity="warehouse">Склад</button>
          </div>
          <div class="mt-2 text-xs text-slate-500">Фильтрация и список файлов подключим позже.</div>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Каталог</div>
          <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Очередной оплачиваемый отпуск</li>
            <li>Отпуск за свой счёт</li>
            <li>Перевод (должность/график/подразделение)</li>
            <li>Трудовая книжка</li>
          </ul>
        </div>
      </div>
      <script>
        (function () {
          const buttons = document.querySelectorAll("button[data-entity]");
          buttons.forEach((b) => b.addEventListener("click", () => alert("Заглушка: фильтр " + b.dataset.entity)));
        })();
      </script>
    `
  };
}

