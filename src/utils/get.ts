export function get<T extends HTMLElement = HTMLElement>(
  selector: string
): T {
  const el = document.querySelector(selector);

  if (!el) {
    throw new Error(`Element not found: ${selector}`);
  }

  return el as T;
}