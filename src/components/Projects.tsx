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
      description: 'Portfólio profissional full-stack desenvolvido com React, TypeScript e Tailwind CSS para mostrar projetos e habilidades.',
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
    {
      id: 'todo-list',
      title: 'Todo List (Java/SpringBoot)',
      description: 'Aplicação de lista de tarefas desenvolvida com Java e Spring Boot, focada em produtividade e organização.',
      longDescription: 'Uma aplicação web para gerenciamento de tarefas, construída com Java, Spring Boot e banco de dados relacional. Permite criar, editar, excluir e marcar tarefas como concluídas, com autenticação e interface responsiva.',
      technologies: ['Java 17', 'Spring Boot 3.5.4', 'Spring Data JPA', 'H2 Database', 'BCrypt', 'Lombok', 'Maven'],
      features: [
        'CRUD completo de tarefas',
        'Autenticação de usuários',
        'Interface responsiva',
        'Persistência em banco de dados H2 Database',
        'Filtros e busca de tarefas'
      ],
      challenges: [
        'Implementação de autenticação segura',
        'Integração com banco de dados relacional',
        'Design intuitivo e responsivo'
      ],
      results: [
        'Facilita a organização pessoal e produtividade',
        'Código limpo e bem estruturado',
        'Pronto para deploy em servidores Java'
      ],
      image: taskManagerImage,
      githubUrl: 'https://github.com/Alexsander532/Todolist_JavaSpringBoot',
      icon: CheckSquare,
      category: 'backend'
    },
    {
      id: 'video-api',
      title: 'API de Gerenciamento de Vídeos (Node.js + Fastify)',
      description: 'API RESTful para gerenciamento de vídeos, desenvolvida com Node.js, Fastify e PostgreSQL (Neon).',
      longDescription: 'API REST para gerenciamento de vídeos, desenvolvida com Node.js e Fastify. O projeto aborda rotas HTTP, manipulação assíncrona de dados, parâmetros de rota e query, persistência em memória e PostgreSQL (Neon), além de deploy automatizado com Render.',
      technologies: ['Node.js', 'Fastify', 'JavaScript', 'PostgreSQL', 'Neon', 'Render'],
      features: [
        'CRUD de vídeos com métodos HTTP (GET, POST, PUT, DELETE)',
        'Encapsulamento e POO com JavaScript',
        'Async/await para operações assíncronas',
        'Query Parameters e Route Parameters',
        'Retorno e consumo de dados em JSON',
        'Armazenamento em memória local para testes',
        'Migração para banco de dados online (Neon/PostgreSQL)',
        'Deploy automatizado com Render'
      ],
      challenges: [
        'Estruturação de rotas RESTful com Fastify',
        'Persistência de dados com PostgreSQL',
        'Configuração de ambiente para deploy na nuvem',
        'Boas práticas de organização de código'
      ],
      results: [
        'API funcional e escalável pronta para consumo por aplicações front-end',
        'Aprendizado prático de Fastify, PostgreSQL e deploy com Render',
        'Código limpo e organizado, fácil de manter e evoluir'
      ],
      image: analyticsImage,
      githubUrl: 'https://github.com/Alexsander532/Projeto_Gerenciamentovideos_nodejs',
      icon: Server,
      category: 'backend'
    },
  ],
  en: [
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'Full-stack professional portfolio developed with React, TypeScript and Tailwind CSS to showcase projects and skills.',
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
    {
      id: 'todo-list',
      title: 'Todo List (Java/SpringBoot)',
      description: 'Task list application developed with Java and Spring Boot, focused on productivity and organization.',
      longDescription: 'A web application for task management, built with Java, Spring Boot and relational database. Allows creating, editing, deleting and marking tasks as completed, with authentication and responsive interface.',
      technologies: ['Java 17', 'Spring Boot 3.5.4', 'Spring Data JPA', 'H2 Database', 'BCrypt', 'Lombok', 'Maven'],
      features: [
        'Full CRUD for tasks',
        'User authentication',
        'Responsive interface',
        'Persistence in H2 Database',
        'Task filters and search'
      ],
      challenges: [
        'Implementation of secure authentication',
        'Integration with relational database',
        'Intuitive and responsive design'
      ],
      results: [
        'Facilitates personal organization and productivity',
        'Clean and well-structured code',
        'Ready for deployment on Java servers'
      ],
      image: taskManagerImage,
      githubUrl: 'https://github.com/Alexsander532/Todolist_JavaSpringBoot',
      icon: CheckSquare,
      category: 'backend'
    },
    {
      id: 'video-api',
      title: 'Video Management API (Node.js + Fastify)',
      description: 'RESTful API for video management, developed with Node.js, Fastify and PostgreSQL (Neon).',
      longDescription: 'REST API for video management, built with Node.js and Fastify. Covers HTTP routes, async data handling, route/query parameters, in-memory and PostgreSQL (Neon) persistence, and automated deployment with Render.',
      technologies: ['Node.js', 'Fastify', 'JavaScript', 'PostgreSQL', 'Neon', 'Render'],
      features: [
        'CRUD for videos with HTTP methods (GET, POST, PUT, DELETE)',
        'Encapsulation and OOP with JavaScript',
        'Async/await for asynchronous operations',
        'Query Parameters and Route Parameters',
        'Returning and consuming data in JSON',
        'Local memory storage for tests',
        'Migration to online database (Neon/PostgreSQL)',
        'Automated deployment with Render'
      ],
      challenges: [
        'Structuring RESTful routes with Fastify',
        'Data persistence with PostgreSQL',
        'Cloud deployment environment setup',
        'Best practices for code organization'
      ],
      results: [
        'Functional and scalable API ready for consumption by front-end applications',
        'Practical learning of Fastify, PostgreSQL and deployment with Render',
        'Clean and organized code, easy to maintain and evolve'
      ],
      image: analyticsImage,
      githubUrl: 'https://github.com/Alexsander532/Projeto_Gerenciamentovideos_nodejs',
      icon: Server,
      category: 'backend'
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