// src/main.ts
import { initClock } from './components/clock';

export function initApp() {
  // Initialize dynamic components
  initClock('#clock', '#date');

  // Future dynamic components:
  // initWeather('#weather');
  // renderMenu(menuData);
  // renderBuses(busData);
  // renderActivities(activityData);
}