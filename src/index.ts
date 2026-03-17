// src/index.ts

// Page layout
import { Dashboard } from './pages/dashboard';

// Application initializer 
import { initApp } from './main';

// Get root mounting element from index.html
const root = document.querySelector('#app')!;

// Create dashboard layout + receieve element references
const { app, refs } = Dashboard();

// Mount application UI
root.appendChild(app);
// Initialize dynamic components
initApp(refs);