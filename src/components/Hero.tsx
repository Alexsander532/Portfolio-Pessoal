import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWorkspace from '@/assets/hero-workspace.jpg';
import profilePhoto from '@/assets/profile-photo.png';
import cvPortugues from '@/assets/CV - Alexsander Augusto Portugues.pdf';
import cvIngles from '@/assets/CV - Alexsander Augusto Ingles.pdf';
import { useLanguage } from '@/contexts/LanguageContext';
import { XIcon } from '@/components/ui/x-logo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    // Determinar qual versão do CV baixar com base no idioma atual
    const curriculumPDF = language === 'pt' ? cvPortugues : cvIngles;
    const fileName = language === 'pt' 
      ? 'CV - Alexsander Augusto Portugues.pdf' 
      : 'CV - Alexsander Augusto Ingles.pdf';
    
    // Criar um link temporário para o download
    const link = document.createElement('a');
    link.href = curriculumPDF;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroWorkspace} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Profile Photo */}
          <div className="mt-20 mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-float">
              <img 
                src={profilePhoto} 
                alt="Developer profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{t('fullstackDeveloper')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover-glow px-8 py-4 text-lg group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('viewMyWork')}
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-primary/30 hover:border-primary/60 hover:bg-primary/10"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2" />
              {t('downloadCV')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Alexsander532"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 
                transition-all duration-300 hover-glow group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexsander-augusto-9b49221b4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 
                transition-all duration-300 hover-glow group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/AlexDev2025"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/40 
                transition-all duration-300 hover-glow group"
            >
              <XIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;