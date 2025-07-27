import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos
export type Language = 'pt' | 'en';

// Traduções
const translations = {
  pt: {
    // Header
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
    hireMe: 'Contrate-me',
    
    // Hero
    fullstackDeveloper: 'Desenvolvedor Fullstack',
    heroSubtitle: 'Sempre em busca de novos conhecimentos e desafios, aplicando aprendizado contínuo na criação de soluções inovadoras e robustas.',
    viewMyWork: 'Ver meus trabalhos',
    downloadCV: 'Baixar Currículo',
    scrollToExplore: 'Role para explorar',
    
    // Experiência
    professionalJourney: 'Trajetória Profissional',
    experienceSubtitle: 'Minha jornada na tecnologia, da educação a cargos de desenvolvimento sênior',
    workExperience: 'Experiência de Trabalho',
    education: 'Educação',
    certifications: 'Certificações',
    
    // Projetos
    featuredProjects: 'Projetos em Destaque',
    projectsSubtitle: 'Demonstrando minha experiência em TypeScript, React e desenvolvimento web moderno',
    viewDetails: 'Ver Detalhes',
    
    // Contato
    getInTouch: 'Entre em Contato',
    contactSubtitle: 'Pronto para colaborar em seu próximo projeto? Vamos discutir como podemos dar vida às suas ideias',
    letsConnect: 'Vamos Conectar',
    followMe: 'Siga-me',
    availableForFreelance: 'Disponível para projetos freelance',
    sendMessage: 'Enviar Mensagem',
    yourName: 'Seu Nome',
    yourEmail: 'Seu Email',
    subject: 'Assunto',
    message: 'Mensagem',
    send: 'Enviar'
  },
  en: {
    // Header
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    hireMe: 'Hire Me',
    
    // Hero
    fullstackDeveloper: 'Fullstack Developer',
    heroSubtitle: 'Always seeking new knowledge and challenges, applying continuous learning in creating innovative and robust solutions.',
    viewMyWork: 'View My Work',
    downloadCV: 'Download CV',
    scrollToExplore: 'Scroll to explore',
    
    // Experiência
    professionalJourney: 'Professional Journey',
    experienceSubtitle: 'My path in technology, from education to senior development roles',
    workExperience: 'Work Experience',
    education: 'Education',
    certifications: 'Certifications',
    
    // Projetos
    featuredProjects: 'Featured Projects',
    projectsSubtitle: 'Showcasing my expertise in TypeScript, React, and modern web development',
    viewDetails: 'View Details',
    
    // Contato
    getInTouch: 'Get In Touch',
    contactSubtitle: 'Ready to collaborate on your next project? Let\'s discuss how we can bring your ideas to life',
    letsConnect: 'Let\'s Connect',
    followMe: 'Follow Me',
    availableForFreelance: 'Available for freelance projects',
    sendMessage: 'Send a Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send'
  }
};

// Tipo para o contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

// Criação do contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  // Função para obter traduções
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para usar o contexto
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}