import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Always start at the top regardless of browser scroll memory or URL hashes
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Clear any hash from the URL to prevent scrolling to an anchor
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
// Double-ensure scroll is at top after the frame renders
requestAnimationFrame(() => window.scrollTo(0, 0));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
