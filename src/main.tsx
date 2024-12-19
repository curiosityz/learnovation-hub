import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const base = import.meta.env.MODE === 'production' ? '/learnovation-hub/' : '/';
createRoot(document.getElementById("root")!).render(<App basename={base} />);
