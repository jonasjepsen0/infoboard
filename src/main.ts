import './style.css'

// src/main.ts
import { initClock } from './components/clock';

async function initDashboard() {
  // --- Clock ---
  initClock('#clock');
}

// --- Initial load ---
initDashboard();

// --- Auto-refresh dynamic data every 5 minutes ---
setInterval(() => {
  initDashboard();
}, 5 * 60 * 1000);
