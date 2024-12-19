import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const base = import.meta.env.MODE === 'production' ? '/learnovation-hub' : '/';
console.log("Environment mode:", import.meta.env.MODE);
console.log("Base URL configured as:", base);

createRoot(document.getElementById("root")!).render(<App basename={base} />);