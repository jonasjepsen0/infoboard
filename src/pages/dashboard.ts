// src/pages/dashboard.ts
import { create, set } from '../utils';

export function Dashboard() {
  const app = create('div');
  app.className = 'flex h-screen font-sans bg-gray-100';

  const sidebar = create('aside');
  sidebar.className =
    'w-1/3 bg-gradient-to-b from-blue-600 to-blue-400 text-white p-6 flex flex-col';

  const sidebarTop = create('div');

  const dateEl = create('div');
  dateEl.id = 'date';
  dateEl.className = 'text-lg uppercase mb-2';

  const clockEl = create('div');
  clockEl.id = 'clock';
  clockEl.className = 'text-6xl font-bold mb-4';

  set([dateEl, clockEl], sidebarTop);
  set([sidebarTop], sidebar);

  const main = create('main');
  main.className = 'flex-1 bg-white p-6';

  set([sidebar, main], app);

  return {
    app,
    refs: {
      clockEl,
      dateEl,
    },
  };
}