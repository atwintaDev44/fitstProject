export function lifeIndexPage() {
  return {
    title: "Наша жизнь",
    content: `
      <div class="grid gap-3">
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/life/about" data-link>
          <div class="text-slate-100">О компании</div>
          <div class="mt-1 text-xs text-slate-400">Сайт, презентация</div>
        </a>
        <a class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4 hover:bg-slate-900/40" href="/life/news" data-link>
          <div class="text-slate-100">Новости компании</div>
          <div class="mt-1 text-xs text-slate-400">Пресс-центр</div>
        </a>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/20 p-4">
          <div class="text-slate-100">Корпоративная среда</div>
          <div class="mt-3 grid gap-2">
            <a class="rounded-xl border border-slate-800 bg-slate-950/30 p-3 hover:bg-slate-900/40" href="/life/environment/office-map" data-link>Карта офиса</a>
            <a class="rounded-xl border border-slate-800 bg-slate-950/30 p-3 hover:bg-slate-900/40" href="/life/environment/cafeteria" data-link>Столовая — расписание/галерея</a>
            <a class="rounded-xl border border-slate-800 bg-slate-950/30 p-3 hover:bg-slate-900/40" href="/life/environment/gym" data-link>Спортзал — расписание/галерея</a>
            <a class="rounded-xl border border-slate-800 bg-slate-950/30 p-3 hover:bg-slate-900/40" href="/life/environment/shuttle" data-link>Развозка — расписание/галерея</a>
          </div>
        </div>
      </div>
    `
  };
}

