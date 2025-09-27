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
    
    // Experiência - Removido
    
    // Projetos
    featuredProjects: 'Projetos em Destaque',
    viewDetails: 'Ver Detalhes',
    viewSourceCode: 'Ver Código Fonte',
    liveDemo: 'Demo ao Vivo',
    watchDemo: 'Assistir Demo',
    keyFeatures: 'Principais Recursos',
    challengesResults: 'Desafios & Resultados',
    challengesOvercome: 'Desafios Superados:',
    resultsAchieved: 'Resultados Alcançados:',
    technologiesUsed: 'Tecnologias Utilizadas',
    more: 'mais',
    
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
    send: 'Enviar',
    
    // Footer
    footerDescription: 'Desenvolvedor fullstack apaixonado criando soluções robustas e escaláveis com tecnologias modernas.',
    builtWith: 'Construído com React, TypeScript e Tailwind CSS'
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
    
    // Experiência - Removido
    
    // Projetos
    featuredProjects: 'Featured Projects',
    viewDetails: 'View Details',
    viewSourceCode: 'View Source Code',
    liveDemo: 'Live Demo',
    watchDemo: 'Watch Demo',
    keyFeatures: 'Key Features',
    challengesResults: 'Challenges & Results',
    challengesOvercome: 'Challenges Overcome:',
    resultsAchieved: 'Results Achieved:',
    technologiesUsed: 'Technologies Used',
    more: 'more',
    
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
    send: 'Send',
    
    // Footer
    footerDescription: 'Passionate fullstack developer creating robust, scalable solutions with modern technologies.',
    builtWith: 'Built with React, TypeScript, and Tailwind CSS'
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