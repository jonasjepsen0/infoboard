// src/index.ts
import { Dashboard } from './pages/dashboard';
import { initApp } from './main';

// Mount dashboard layout
const app = Dashboard();
document.body.appendChild(app);

// Initialize dynamic components
initApp();