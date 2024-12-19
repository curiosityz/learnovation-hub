import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const isProduction = window.location.hostname !== 'localhost';
const base = isProduction ? '/learnovation-hub' : '/';
console.log("Environment mode:", isProduction ? 'production' : 'development');
console.log("Base URL configured as:", base);

createRoot(document.getElementById("root")!).render(<App basename={base} />);