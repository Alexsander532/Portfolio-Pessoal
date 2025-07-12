import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser';
import { emailjsConfig } from './lib/emailjs-config';

// Inicializa o EmailJS com a chave pública
const { publicKey } = emailjsConfig;
console.log("Inicializando EmailJS com a chave:", publicKey);
emailjs.init(publicKey);

createRoot(document.getElementById("root")!).render(<App />);
