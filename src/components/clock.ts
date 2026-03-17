// src/components/clock.ts
import { create, get, set } from '../utils';

export function initClock(containerSelector = '#clock') {
  const container = get(containerSelector);

  const timeEl = create('div');
  timeEl.className = 'text-6xl font-bold';

  set(timeEl, container);

  function updateTime() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  updateTime(); // initial render
  setInterval(updateTime, 1000); // update every second
}