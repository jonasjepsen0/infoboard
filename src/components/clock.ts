// src/components/clock.ts

export function initClock(
  clockEl: HTMLElement,
  dateEl: HTMLElement
) {
  function update() {
    const now = new Date();

    dateEl.textContent = now.toLocaleDateString('da-DK', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    clockEl.textContent = now.toLocaleTimeString('da-DK', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  update();
  setInterval(update, 1000);
}