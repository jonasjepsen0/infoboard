import { initClock } from './components/clock';

export function initApp(refs: {
  clockEl: HTMLElement;
  dateEl: HTMLElement;
}) {
  initClock(refs.clockEl, refs.dateEl);
}