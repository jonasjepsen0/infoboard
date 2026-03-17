// src/components/clock.ts

export function initClock(clockSelector = '#clock', dateSelector = '#date') {
  // Use non-null assertion (!) since we guarantee these elements exist after mounting
  const clockEl = document.querySelector<HTMLElement>(clockSelector)!;
  const dateEl = document.querySelector<HTMLElement>(dateSelector)!;

  // Set the date once
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('da-DK', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Update time every second
  function updateTime() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
  updateTime(); // initial render
  setInterval(updateTime, 1000);
}