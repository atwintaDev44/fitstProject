import { homePage } from "../pages/home/page.js";
import { vacanciesIndexPage } from "../pages/vacancies/page.js";
import { vacanciesWarehousePage } from "../pages/vacancies/warehouse/page.js";
import { vacanciesOfficePage } from "../pages/vacancies/office/page.js";
import { referralPage } from "../pages/referral/page.js";
import { lifeIndexPage } from "../pages/life/page.js";
import { lifeAboutPage } from "../pages/life/about/page.js";
import { lifeNewsPage } from "../pages/life/news/page.js";
import { officeMapPage } from "../pages/life/environment/office-map/page.js";
import { cafeteriaPage } from "../pages/life/environment/cafeteria/page.js";
import { gymPage } from "../pages/life/environment/gym/page.js";
import { shuttlePage } from "../pages/life/environment/shuttle/page.js";
import { employeesIndexPage } from "../pages/employees/page.js";
import { birthdaysPage } from "../pages/employees/birthdays/page.js";
import { newcomersPage } from "../pages/employees/newcomers/page.js";
import { faqIndexPage } from "../pages/faq/page.js";
import { faqAhoPage } from "../pages/faq/aho/page.js";
import { faqPassesPage } from "../pages/faq/passes/page.js";
import { faqSupportPage } from "../pages/faq/support/page.js";
import { remoteAccessPage } from "../pages/faq/remote-access/page.js";
import { hrFormsPage } from "../pages/forms/hr/page.js";
import { feedbackPage } from "../pages/feedback/page.js";

function normalize(path) {
  if (!path) return "/";
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}

const routeList = [
  { path: "/", page: homePage },
  { path: "/vacancies", page: vacanciesIndexPage },
  { path: "/vacancies/warehouse", page: vacanciesWarehousePage },
  { path: "/vacancies/office", page: vacanciesOfficePage },
  { path: "/referral", page: referralPage },
  { path: "/life", page: lifeIndexPage },
  { path: "/life/about", page: lifeAboutPage },
  { path: "/life/news", page: lifeNewsPage },
  { path: "/life/environment/office-map", page: officeMapPage },
  { path: "/life/environment/cafeteria", page: cafeteriaPage },
  { path: "/life/environment/gym", page: gymPage },
  { path: "/life/environment/shuttle", page: shuttlePage },
  { path: "/employees", page: employeesIndexPage },
  { path: "/employees/birthdays", page: birthdaysPage },
  { path: "/employees/newcomers", page: newcomersPage },
  { path: "/faq", page: faqIndexPage },
  { path: "/faq/aho", page: faqAhoPage },
  { path: "/faq/passes", page: faqPassesPage },
  { path: "/faq/support", page: faqSupportPage },
  { path: "/faq/remote-access", page: remoteAccessPage },
  { path: "/forms/hr", page: hrFormsPage },
  { path: "/feedback", page: feedbackPage }
];

export const routes = {
  match(pathname) {
    const p = normalize(pathname);
    return routeList.find((r) => r.path === p) ?? null;
  }
};

