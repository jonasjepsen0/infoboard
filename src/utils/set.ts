export function set(
  children: HTMLElement | HTMLElement[],
  parent: HTMLElement
): void {
  if (Array.isArray(children)) {
    children.forEach(child => parent.appendChild(child));
  } else {
    parent.appendChild(children);
  }
}