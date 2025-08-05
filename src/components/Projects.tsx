import { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  Play, 
  ShoppingCart, 
  BarChart3, 
  CheckSquare,
  Globe,
  Database,
  Shield,
  Zap,
  Code,
  Server,
  Layers,
  Smartphone,
  Cog
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portfolioImage from '@/assets/imagem_fundo_projetoportifoliopessoal.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import analyticsImage from '@/assets/project-analytics.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'automation';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  image: string;
  githubUrl: string;
  icon: React.ElementType;
  category: ProjectCategory;
}

// Definição dos projetos com suporte a tradução baseada no idioma selecionado
const projectsData = {
  pt: [
    {
      id: 'portfolio',
      title: 'Portfólio Pessoal',
      description: 'Portfólio profissional full-stack desenvolvido com React, TypeScript e Tailwind CSS para mostrar projetos e habilidades',
      longDescription: 'Um portfólio pessoal moderno e responsivo construído com React e TypeScript, utilizando Tailwind CSS e shadcn/ui para uma interface elegante e acessível. O site apresenta projetos, habilidades técnicas e informações de contato com suporte a múltiplos idiomas.',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'EmailJS', 'Vercel'],
      features: [
        'Design responsivo para todos os dispositivos',
        'Tema escuro com interface moderna e elegante',
        'Suporte a múltiplos idiomas (Português e Inglês)',
        'Animações suaves e transições interativas',
        'Formulário de contato integrado com EmailJS',
        'Exibição detalhada de projetos com modal'
      ],
      challenges: [
        'Implementação de sistema de internacionalização para suporte a múltiplos idiomas',
        'Criação de componentes reutilizáveis com TypeScript para tipagem segura',
        'Otimização de performance e acessibilidade em diferentes dispositivos'
      ],
      results: [
        'Interface moderna e responsiva com excelente experiência do usuário',
        'Tempo de carregamento rápido com otimização de assets',
        'Pontuação alta em métricas de acessibilidade e SEO'
      ],
      image: portfolioImage,
      githubUrl: 'https://github.com/Alexsander532/Portfolio-Pessoal',
      icon: Globe,
      category: 'fullstack'
    },
  ],
  en: [
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'Full-stack professional portfolio developed with React, TypeScript and Tailwind CSS to showcase projects and skills',
      longDescription: 'A modern and responsive personal portfolio built with React and TypeScript, using Tailwind CSS and shadcn/ui for an elegant and accessible interface. The website showcases projects, technical skills, and contact information with multi-language support.',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'EmailJS', 'Vercel'],
      features: [
        'Responsive design for all devices',
        'Dark theme with modern and elegant interface',
        'Multi-language support (Portuguese and English)',
        'Smooth animations and interactive transitions',
        'Contact form integrated with EmailJS',
        'Detailed project display with modal'
      ],
      challenges: [
        'Implementation of internationalization system for multi-language support',
        'Creation of reusable components with TypeScript for type safety',
        'Performance and accessibility optimization across different devices'
      ],
      results: [
        'Modern and responsive interface with excellent user experience',
        'Fast loading time with asset optimization',
        'High score in accessibility and SEO metrics'
      ],
      image: portfolioImage,
      githubUrl: 'https://github.com/Alexsander532/Portfolio-Pessoal',
      icon: Globe,
      category: 'fullstack'
    },
  ]
};

// Category icons mapping
const categoryIcons = {
  frontend: Code,
  backend: Server,
  fullstack: Layers,
  mobile: Smartphone,
  automation: Cog
};

// Category labels mapping for PT and EN
const categoryLabels = {
  pt: {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
    mobile: 'Mobile',
    automation: 'Automações'
  },
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
    mobile: 'Mobile',
    automation: 'Automation'
  }
};

const Projects = () => {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Seleciona os projetos com base no idioma atual
  const projects = projectsData[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'pt' ? 'Projetos em ' : 'Featured '}<span className="gradient-text">{language === 'pt' ? 'Destaque' : 'Projects'}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-500 transform ease-in-out opacity-100 scale-100">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`glass-card hover-glow group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-fade-in`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both' 
              }}
              onClick={() => setSelectedProject(project as Project)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/80 hover:bg-primary">
                      {categoryLabels[language][project.category]}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} {t('more')}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project as Project);
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {t('viewDetails')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <Card 
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card animate-fade-in-scale"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors"
                  >
                    ×
                  </button>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/80">
                      {categoryLabels[language][selectedProject.category]}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <selectedProject.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{categoryLabels[language][selectedProject.category]}</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-primary mr-2" />
                      {t('keyFeatures')}
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Results */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-2" />
                      {t('challengesResults')}
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-warning mb-2">{t('challengesOvercome')}</h5>
                        <ul className="space-y-1">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-success mb-2">{t('resultsAchieved')}</h5>
                        <ul className="space-y-1">
                          {selectedProject.results.map((result, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Database className="w-5 h-5 text-primary mr-2" />
                    {t('technologiesUsed')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-gradient-primary hover-glow"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t('viewSourceCode')}
                  </Button>

                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;