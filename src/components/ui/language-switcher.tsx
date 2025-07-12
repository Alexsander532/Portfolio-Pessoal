import React from 'react';
import { cn } from '@/lib/utils';
import BrazilFlag from '@/assets/Flag_of_Brazil.png';
import USAFlag from '@/assets/bandeiraeua.png';

type Language = 'pt' | 'en';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onChange: (language: Language) => void;
  className?: string;
}

export function LanguageSwitcher({ 
  currentLanguage, 
  onChange,
  className
}: LanguageSwitcherProps) {
  return (
    <div className={cn("relative flex items-center rounded-full p-1 bg-card/80 backdrop-blur-sm border border-border shadow-sm", className)}>
      <button
        onClick={() => onChange('pt')}
        className={cn(
          "flex items-center justify-center h-9 px-3 rounded-full transition-all duration-300 ease-in-out",
          currentLanguage === 'pt' 
            ? "bg-primary text-primary-foreground font-medium shadow-sm scale-105" 
            : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
        )}
        aria-label="Mudar para Português"
      >
        <div className="w-6 h-4 flex items-center justify-center overflow-hidden rounded">
          <img 
            src={BrazilFlag} 
            alt="Bandeira do Brasil" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-2 text-sm">PT</span>
      </button>

      <button
        onClick={() => onChange('en')}
        className={cn(
          "flex items-center justify-center h-9 px-3 rounded-full transition-all duration-300 ease-in-out",
          currentLanguage === 'en' 
            ? "bg-primary text-primary-foreground font-medium shadow-sm scale-105" 
            : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
        )}
        aria-label="Switch to English"
      >
        <div className="w-6 h-4 flex items-center justify-center overflow-hidden rounded">
          <img 
            src={USAFlag} 
            alt="USA Flag" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-2 text-sm">EN</span>
      </button>
    </div>
  );
} 