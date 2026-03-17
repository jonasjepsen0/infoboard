import './style.css'
import { fetchMenu } from './data/menuapi'

fetchMenu().then((menu) => {
  document.body.innerHTML = menu
    .map((day) => `<p>${day.name}: ${day.dish}</p>`)
    .join('');
});