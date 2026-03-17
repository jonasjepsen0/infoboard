import './style.css'
import { fetchMenu } from './data/menuapi'

const menu = await fetchMenu();

menu.forEach((day: any) => {
  const p = document.createElement('p');
  p.textContent = day.name + ': ' + day.dish;
  document.body.appendChild(p);
});