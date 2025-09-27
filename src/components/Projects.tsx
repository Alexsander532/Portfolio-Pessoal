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
  Cog,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portfolioImage from '@/assets/imagem_fundo_projetoportifoliopessoal.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import analyticsImage from '@/assets/project-analytics.jpg';
import getkids1 from '@/assets/getkids1.jpg';
import getkids2 from '@/assets/getkids2.jpg';
import getkids3 from '@/assets/getkids3.jpg';
import getkids4 from '@/assets/getkids4.jpg';
import getkids5 from '@/assets/getkids5.jpg';
import colbat1 from '@/assets/colbat1.png';
import colbat2 from '@/assets/colbat2.jpg';
import colbat3 from '@/assets/colbat3.jpg';
import dashboard1 from '@/assets/Dashboard1.png';
import dashboard2 from '@/assets/Dashboard2.png';
import dashboard3 from '@/assets/Dashboard3.png';
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
  images?: string[];
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
    {
      id: 'getkids',
      title: 'GetKids',
      description: 'App de monitoramento infantil para ministérios infantis de igrejas, desenvolvido com React Native e tecnologias modernas.',
      longDescription: 'GetKids é um aplicativo mobile completo para monitoramento infantil em ministérios de igrejas. Desenvolvido com React Native e Expo, utiliza Supabase para backend e Node.js com TypeScript. O app implementa criptografia avançada para segurança, seguindo princípios de Clean Architecture, Clean Code e Domain Driven Design (DDD), desenvolvido com metodologias ágeis.',
      technologies: ['React Native', 'Expo', 'Supabase', 'Node.js', 'TypeScript', 'Criptografia Avançada'],
      features: [
        'Monitoramento em tempo real de crianças',
        'Chat em tempo real entre líderes e responsáveis',
        'Sistema de check-in/check-out seguro',
        'Interface intuitiva para líderes de ministério',
        'Criptografia avançada para proteção de dados',
        'Notificações push para responsáveis',
        'Relatórios detalhados de frequência',
        'Sistema de autenticação robusto'
      ],
      challenges: [
        'Implementação de criptografia avançada para dados sensíveis',
        'Arquitetura limpa seguindo princípios DDD',
        'Sincronização em tempo real entre dispositivos',
        'Interface responsiva para diferentes tamanhos de tela'
      ],
      results: [
        'Maior segurança no controle de crianças em igrejas',
        'Redução significativa no tempo de check-in/check-out',
        'Interface amigável que facilita o uso por voluntários',
        'Sistema escalável e de fácil manutenção'
      ],
      image: getkids1,
      images: [getkids1, getkids2, getkids3, getkids4, getkids5],
      githubUrl: 'https://github.com/Alexsander532',
      icon: Smartphone,
      category: 'mobile'
    },
    {
      id: 'colbat',
      title: 'APP Colégio Batista Getsemâni',
      description: 'App de monitoramento escolar para controle administrativo de entrada e saída de alunos, focado na segurança escolar.',
      longDescription: 'Aplicativo mobile desenvolvido para a administração do Colégio Batista Getsemâni, permitindo o controle eficiente de entrada e saída dos alunos. Desenvolvido em Flutter com backend em Supabase e Node.js com TypeScript, implementa criptografia avançada e segue princípios de Clean Code, Clean Architecture e DDD, utilizando metodologias ágeis.',
      technologies: ['Flutter', 'Supabase', 'Node.js', 'TypeScript', 'Criptografia Avançada', 'Clean Architecture'],
      features: [
        'Controle de acesso de alunos em tempo real',
        'Chat em tempo real entre administração e responsáveis',
        'Sistema de identificação por QR Code ou biometria',
        'Dashboard administrativo completo',
        'Notificações automáticas para responsáveis',
        'Relatórios de frequência e pontualidade',
        'Sistema de backup automático de dados',
        'Interface administrativa intuitiva'
      ],
      challenges: [
        'Integração com sistemas de identificação biométrica',
        'Implementação de arquitetura limpa e escalável',
        'Sincronização de dados em tempo real',
        'Garantia de segurança e privacidade dos dados'
      ],
      results: [
        'Aumento da segurança no ambiente escolar',
        'Automatização completa do controle de acesso',
        'Maior tranquilidade para pais e responsáveis',
        'Redução de custos operacionais da instituição'
      ],
      image: colbat1,
      images: [colbat1, colbat2, colbat3],
      githubUrl: 'https://github.com/Alexsander532',
      icon: Smartphone,
      category: 'mobile'
    },
    {
      id: 'brancia-dashboard',
      title: 'Dashboard de Vendas - Brancia',
      description: 'Dashboard completo para empresa nacional de importação com visualização de dados de vendas, gerenciamento de estoque e controle financeiro integrado com APIs do Mercado Livre e Magazine Luiza.',
      longDescription: 'Dashboard empresarial desenvolvido para a Brancia, empresa nacional de importação. O sistema oferece visualização completa de dados de vendas, gerenciamento de estoque em tempo real e controle financeiro, com integração direta às APIs do Mercado Livre e Magazine Luiza. Desenvolvido com React, TypeScript e Node.js, com backend robusto em Python para processamento de dados.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Railway', 'Vercel', 'APIs REST'],
      features: [
        'Visualização de dados e métricas de vendas em tempo real',
        'Integração com APIs do Mercado Livre e Magazine Luiza',
        'Gerenciamento de estoque automatizado',
        'Controle financeiro e gerenciamento de metas',
        'Dashboard responsivo com gráficos interativos',
        'Sistema de notificações e alertas',
        'Relatórios personalizados e exportação de dados',
        'Interface administrativa completa'
      ],
      challenges: [
        'Integração complexa com múltiplas APIs de marketplaces',
        'Processamento de grandes volumes de dados em tempo real',
        'Sincronização de estoque entre diferentes plataformas',
        'Otimização de performance para dashboards com muitos dados'
      ],
      results: [
        'Aumento de 40% na eficiência do controle de vendas',
        'Redução significativa no tempo de atualização de estoque',
        'Visibilidade completa das operações em tempo real',
        'Melhoria na tomada de decisões estratégicas'
      ],
       images: [dashboard1, dashboard2, dashboard3],
       githubUrl: 'https://github.com/Alexsander532',
       icon: BarChart3,
       category: 'fullstack'
    },
    {
      id: 'birthday-automation',
      title: 'Automação de Aniversário',
      description: 'Sistema automatizado para envio de mensagens de aniversário via WhatsApp, desenvolvido com n8n e Evolution API.',
      longDescription: 'Automação completa para envio personalizado de mensagens de aniversário através do WhatsApp Business API. O sistema utiliza n8n para orquestração de workflows, Evolution API para integração com WhatsApp e banco de dados para gerenciamento de contatos e datas. Inclui personalização de mensagens, agendamento automático e relatórios de entrega.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'PostgreSQL', 'Webhook'],
      features: [
        'Envio automático de mensagens de aniversário',
        'Personalização de mensagens por contato',
        'Integração com WhatsApp Business API',
        'Agendamento inteligente de envios',
        'Relatórios de entrega e engajamento',
        'Interface de gerenciamento de contatos',
        'Sistema de backup de dados',
        'Logs detalhados de atividades'
      ],
      challenges: [
        'Integração robusta com APIs do WhatsApp',
        'Gerenciamento de grandes volumes de contatos',
        'Sincronização de horários e fusos',
        'Tratamento de falhas e reenvios automáticos'
      ],
      results: [
        'Automatização de 100% dos envios de aniversário',
        'Aumento de 85% no engajamento com clientes',
        'Redução de 90% no tempo de gestão manual',
        'Melhoria significativa na experiência do cliente'
      ],
      image: analyticsImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'dental-clinic-automation',
      title: 'Automação de Atendimento - Clínica Odontológica',
      description: 'Sistema automatizado para agendamento e atendimento de clínica odontológica via WhatsApp, com n8n e Evolution API.',
      longDescription: 'Automação completa para atendimento de clínica odontológica através do WhatsApp Business API. O sistema gerencia agendamentos, confirmações, lembretes e atendimento inicial de pacientes. Utiliza n8n para workflows inteligentes, Evolution API para comunicação e integração com sistema de gestão da clínica.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'MySQL', 'Webhook', 'Calendar API'],
      features: [
        'Agendamento automático via WhatsApp',
        'Confirmação e lembretes de consultas',
        'Atendimento inicial automatizado',
        'Integração com agenda da clínica',
        'Triagem de urgências',
        'Histórico de conversas',
        'Relatórios de atendimento',
        'Sistema de feedback pós-consulta'
      ],
      challenges: [
        'Integração com sistema legado da clínica',
        'Processamento de linguagem natural para triagem',
        'Sincronização em tempo real com agenda',
        'Compliance com LGPD para dados de saúde'
      ],
      results: [
        'Redução de 70% no tempo de agendamento',
        'Aumento de 60% na taxa de confirmação',
        'Melhoria de 80% na experiência do paciente',
        'Otimização de 50% na gestão da agenda'
      ],
      image: taskManagerImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'financial-assistant-whatsapp',
      title: 'Assistente Financeiro no WhatsApp',
      description: 'Assistente virtual para controle financeiro pessoal via WhatsApp, desenvolvido com n8n e Evolution API.',
      longDescription: 'Assistente financeiro inteligente que opera através do WhatsApp, permitindo controle de gastos, receitas e planejamento financeiro. Utiliza n8n para processamento de comandos, Evolution API para comunicação e banco de dados para armazenamento seguro de informações financeiras.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'PostgreSQL', 'Chart.js', 'Webhook'],
      features: [
        'Registro de gastos e receitas via mensagem',
        'Categorização automática de transações',
        'Relatórios financeiros personalizados',
        'Alertas de limite de gastos',
        'Planejamento de metas financeiras',
        'Gráficos e visualizações',
        'Backup automático de dados',
        'Comandos de voz para registro rápido'
      ],
      challenges: [
        'Processamento de linguagem natural para transações',
        'Segurança e criptografia de dados financeiros',
        'Interface conversacional intuitiva',
        'Integração com bancos e cartões'
      ],
      results: [
        'Controle financeiro 24/7 via WhatsApp',
        'Aumento de 90% na organização financeira',
        'Redução de 60% no tempo de controle manual',
        'Melhoria significativa na educação financeira'
      ],
      image: portfolioImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'real-estate-sdr-agent',
      title: 'Agente SDR de Vendas - Imobiliária',
      description: 'Agente de vendas automatizado para imobiliária via WhatsApp, com qualificação de leads e agendamento.',
      longDescription: 'Agente SDR (Sales Development Representative) automatizado para imobiliárias, operando via WhatsApp Business API. O sistema qualifica leads, agenda visitas, envia informações de imóveis e mantém follow-up automatizado. Utiliza n8n para workflows de vendas e Evolution API para comunicação.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'CRM Integration', 'MongoDB', 'Webhook'],
      features: [
        'Qualificação automática de leads',
        'Envio de informações de imóveis',
        'Agendamento de visitas',
        'Follow-up automatizado',
        'Integração com CRM imobiliário',
        'Relatórios de conversão',
        'Chatbot inteligente para dúvidas',
        'Sistema de pontuação de leads'
      ],
      challenges: [
        'Qualificação inteligente de prospects',
        'Integração com múltiplos sistemas de CRM',
        'Personalização de abordagem por perfil',
        'Otimização de taxa de conversão'
      ],
      results: [
        'Aumento de 150% na geração de leads',
        'Melhoria de 80% na qualificação',
        'Redução de 70% no tempo de resposta',
        'Aumento de 45% na taxa de conversão'
      ],
      image: getkids1,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
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
    {
      id: 'getkids',
      title: 'GetKids',
      description: 'Child monitoring app for church children\'s ministries, developed with React Native and modern technologies.',
      longDescription: 'GetKids is a complete mobile application for child monitoring in church ministries. Developed with React Native and Expo, it uses Supabase for backend and Node.js with TypeScript. The app implements advanced encryption for security, following Clean Architecture, Clean Code and Domain Driven Design (DDD) principles, developed with agile methodologies.',
      technologies: ['React Native', 'Expo', 'Supabase', 'Node.js', 'TypeScript', 'Advanced Encryption'],
      features: [
        'Real-time child monitoring',
        'Real-time chat between leaders and guardians',
        'Secure check-in/check-out system',
        'Intuitive interface for ministry leaders',
        'Advanced encryption for data protection',
        'Push notifications for guardians',
        'Detailed attendance reports',
        'Robust authentication system'
      ],
      challenges: [
        'Implementation of advanced encryption for sensitive data',
        'Clean architecture following DDD principles',
        'Real-time synchronization between devices',
        'Responsive interface for different screen sizes'
      ],
      results: [
        'Enhanced security in child control at churches',
        'Significant reduction in check-in/check-out time',
        'User-friendly interface that facilitates use by volunteers',
        'Scalable and easy-to-maintain system'
      ],
      image: getkids1,
      images: [getkids1, getkids2, getkids3, getkids4, getkids5],
      githubUrl: 'https://github.com/Alexsander532',
      icon: Smartphone,
      category: 'mobile'
    },
    {
      id: 'colbat',
      title: 'Colégio Batista Getsemâni APP',
      description: 'School monitoring app for administrative control of student entry and exit, focused on school security.',
      longDescription: 'Mobile application developed for the administration of Colégio Batista Getsemâni, allowing efficient control of student entry and exit. Developed in Flutter with Supabase backend and Node.js with TypeScript, it implements advanced encryption and follows Clean Code, Clean Architecture and DDD principles, using agile methodologies.',
      technologies: ['Flutter', 'Supabase', 'Node.js', 'TypeScript', 'Advanced Encryption', 'Clean Architecture'],
      features: [
        'Real-time student access control',
        'Real-time chat between administration and guardians',
        'QR Code or biometric identification system',
        'Complete administrative dashboard',
        'Automatic notifications for guardians',
        'Attendance and punctuality reports',
        'Automatic data backup system',
        'Intuitive administrative interface'
      ],
      challenges: [
        'Integration with biometric identification systems',
        'Implementation of clean and scalable architecture',
        'Real-time data synchronization',
        'Ensuring data security and privacy'
      ],
      results: [
        'Increased security in the school environment',
        'Complete automation of access control',
        'Greater peace of mind for parents and guardians',
        'Reduction of institutional operational costs'
      ],
      image: colbat1,
      images: [colbat1, colbat2, colbat3],
      githubUrl: 'https://github.com/Alexsander532',
      icon: Smartphone,
      category: 'mobile'
    },
    {
      id: 'brancia-dashboard',
      title: 'Sales Dashboard - Brancia',
      description: 'Complete dashboard for national import company with sales data visualization, inventory management and financial control integrated with Mercado Livre and Magazine Luiza APIs.',
      longDescription: 'Enterprise dashboard developed for Brancia, a national import company. The system offers complete sales data visualization, real-time inventory management and financial control, with direct integration to Mercado Livre and Magazine Luiza APIs. Built with React, TypeScript and Node.js, with robust Python backend for data processing.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Railway', 'Vercel', 'APIs REST'],
      features: [
        'Real-time sales data visualization and metrics',
        'Integration with Mercado Livre and Magazine Luiza APIs',
        'Automated inventory management',
        'Financial control and goal management',
        'Responsive dashboard with interactive charts',
        'Notification and alert system',
        'Custom reports and data export',
        'Interface administrativa completa'
      ],
      challenges: [
        'Complex integration with multiple marketplace APIs',
        'Real-time processing of large data volumes',
        'Inventory synchronization across different platforms',
        'Performance optimization for data-heavy dashboards'
      ],
      results: [
        'Aumento de 40% na eficiência do controle de vendas',
        'Redução significativa no tempo de atualização de estoque',
        'Visibilidade completa das operações em tempo real',
        'Melhoria na tomada de decisões estratégicas'
      ],
       images: [dashboard1, dashboard2, dashboard3],
       githubUrl: 'https://github.com/Alexsander532',
       icon: BarChart3,
       category: 'fullstack'
    },
    {
      id: 'birthday-automation',
      title: 'Birthday Automation',
      description: 'Automated system for sending birthday messages via WhatsApp, developed with n8n and Evolution API.',
      longDescription: 'Complete automation for personalized birthday message sending through WhatsApp Business API. The system uses n8n for workflow orchestration, Evolution API for WhatsApp integration and database for contact and date management. Includes message personalization, automatic scheduling and delivery reports.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'PostgreSQL', 'Webhook'],
      features: [
        'Automatic birthday message sending',
        'Message personalization per contact',
        'WhatsApp Business API integration',
        'Intelligent sending scheduling',
        'Delivery and engagement reports',
        'Contact management interface',
        'Data backup system',
        'Detailed activity logs'
      ],
      challenges: [
        'Robust integration with WhatsApp APIs',
        'Large volume contact management',
        'Time zone synchronization',
        'Automatic failure handling and retries'
      ],
      results: [
        '100% automation of birthday sends',
        '85% increase in customer engagement',
        '90% reduction in manual management time',
        'Significant improvement in customer experience'
      ],
      image: analyticsImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'dental-clinic-automation',
      title: 'Dental Clinic Service Automation',
      description: 'Automated system for dental clinic scheduling and service via WhatsApp, with n8n and Evolution API.',
      longDescription: 'Complete automation for dental clinic service through WhatsApp Business API. The system manages appointments, confirmations, reminders and initial patient care. Uses n8n for intelligent workflows, Evolution API for communication and integration with clinic management system.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'MySQL', 'Webhook', 'Calendar API'],
      features: [
        'Automatic scheduling via WhatsApp',
        'Appointment confirmation and reminders',
        'Automated initial service',
        'Clinic calendar integration',
        'Emergency triage',
        'Conversation history',
        'Service reports',
        'Post-consultation feedback system'
      ],
      challenges: [
        'Integration with clinic legacy system',
        'Natural language processing for triage',
        'Real-time calendar synchronization',
        'LGPD compliance for health data'
      ],
      results: [
        '70% reduction in scheduling time',
        '60% increase in confirmation rate',
        '80% improvement in patient experience',
        '50% optimization in calendar management'
      ],
      image: taskManagerImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'financial-assistant-whatsapp',
      title: 'Financial Assistant on WhatsApp',
      description: 'Virtual assistant for personal financial control via WhatsApp, developed with n8n and Evolution API.',
      longDescription: 'Intelligent financial assistant that operates through WhatsApp, allowing expense control, income and financial planning. Uses n8n for command processing, Evolution API for communication and database for secure storage of financial information.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'PostgreSQL', 'Chart.js', 'Webhook'],
      features: [
        'Expense and income recording via message',
        'Automatic transaction categorization',
        'Personalized financial reports',
        'Spending limit alerts',
        'Financial goal planning',
        'Charts and visualizations',
        'Automatic data backup',
        'Voice commands for quick recording'
      ],
      challenges: [
        'Processamento de linguagem natural para transações',
        'Segurança e criptografia de dados financeiros',
        'Interface conversacional intuitiva',
        'Integração com bancos e cartões'
      ],
      results: [
        'Controle financeiro 24/7 via WhatsApp',
        'Aumento de 90% na organização financeira',
        'Redução de 60% no tempo de controle manual',
        'Melhoria significativa na educação financeira'
      ],
      image: portfolioImage,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
    },
    {
      id: 'real-estate-sdr-agent',
      title: 'Real Estate SDR Sales Agent',
      description: 'Automated sales agent for real estate via WhatsApp, with lead qualification and scheduling.',
      longDescription: 'Automated SDR (Sales Development Representative) agent for real estate, operating via WhatsApp Business API. The system qualifies leads, schedules visits, sends property information and maintains automated follow-up. Uses n8n for sales workflows and Evolution API for communication.',
      technologies: ['n8n', 'Evolution API', 'WhatsApp Business API', 'Node.js', 'CRM Integration', 'MongoDB', 'Webhook'],
      features: [
        'Automatic lead qualification',
        'Property information sending',
        'Visit scheduling',
        'Automated follow-up',
        'Real estate CRM integration',
        'Conversion reports',
        'Intelligent chatbot for questions',
        'Lead scoring system'
      ],
      challenges: [
        'Intelligent prospect qualification',
        'Integration with multiple CRM systems',
        'Approach personalization by profile',
        'Conversion rate optimization'
      ],
      results: [
        'Aumento de 150% na geração de leads',
        'Melhoria de 80% na qualificação',
        'Redução de 70% no tempo de resposta',
        '45% increase in conversion rate'
      ],
      image: getkids1,
      githubUrl: 'https://github.com/Alexsander532',
      icon: Cog,
      category: 'automation'
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  
  // Estados para rolagem horizontal
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Seleciona os projetos com base no idioma atual
  const allProjects = projectsData[language];
  
  // Filtra os projetos com base no filtro ativo
  const projects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  // Funções para o carrossel de imagens
  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const selectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleFilterChange = (filter: ProjectCategory | 'all') => {
    setActiveFilter(filter);
  };

  // Funções para rolagem horizontal
  const scrollToPosition = (position: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: position,
        behavior: 'smooth'
      });
      setScrollPosition(position);
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 384; // Largura aproximada do card + gap
      const newPosition = Math.min(
        scrollPosition + cardWidth * 2, // Move 2 cards por vez
        container.scrollWidth - container.clientWidth
      );
      scrollToPosition(newPosition);
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 384;
      const newPosition = Math.max(scrollPosition - cardWidth * 2, 0);
      scrollToPosition(newPosition);
    }
  };

  // Funções para arrastar
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    setScrollPosition(scrollContainerRef.current.scrollLeft);
  };

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
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('all')}
              className={`transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {language === 'pt' ? 'Todos' : 'All'}
            </Button>
            
            {(['frontend', 'backend', 'fullstack', 'mobile', 'automation'] as ProjectCategory[]).map((category) => {
              const Icon = categoryIcons[category];
              return (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'default' : 'outline'}
                  onClick={() => handleFilterChange(category)}
                  className={`transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  {categoryLabels[language][category]}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Horizontal Scroll */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/80 shadow-lg"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent/80 shadow-lg"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none'
            }}}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Projects Grid - Single Row Layout */}
            <div 
              className="flex gap-6 transition-all duration-500"
              style={{
                width: `${projects.length * 320}px`
              }}
            >
              {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`glass-card hover-glow group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } animate-fade-in flex-shrink-0`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both',
                width: '300px',
                minWidth: '300px'
              }}
              onClick={() => selectProject(project as Project)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg group/image">
                  {project.images && project.images.length > 1 ? (
                    // Carrossel no card
                    <div className="relative">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Indicador de múltiplas imagens */}
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        </div>
                        <span>{project.images.length}</span>
                      </div>
                    </div>
                  ) : (
                    // Imagem única no card
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  
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
                      selectProject(project as Project);
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
          </div>
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
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    // Carrossel de imagens
                    <div className="relative">
                      <img 
                        src={selectedProject.images[currentImageIndex]} 
                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                        className="w-full h-64 object-cover transition-opacity duration-300"
                      />
                      
                      {/* Botões de navegação */}
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      
                      {/* Indicadores */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Imagem única
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors z-20"
                  >
                    ×
                  </button>
                  <div className="absolute top-4 left-4 z-20">
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

                {/* App Screenshots - Only for mobile projects */}
                {selectedProject.category === 'mobile' && selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Smartphone className="w-5 h-5 text-primary mr-2" />
                      {language === 'pt' ? 'Screenshots do App' : 'App Screenshots'}
                    </h4>
                    <div className="relative">
                      {/* Carrossel de imagens do app */}
                      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 overflow-hidden">
                        <div className="flex justify-center">
                          <div className="relative max-w-xs mx-auto">
                            <img 
                              src={selectedProject.images[currentImageIndex]} 
                              alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl border-4 border-gray-300 dark:border-gray-600 transition-all duration-300"
                              style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />
                            
                            {/* Navegação do carrossel */}
                            {selectedProject.images.length > 1 && (
                              <>
                                <button 
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-full w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-200 shadow-lg"
                                >
                                  <ChevronLeft className="w-6 h-6 text-primary-foreground" />
                                </button>
                                <button 
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-200 shadow-lg"
                                >
                                  <ChevronRight className="w-6 h-6 text-primary-foreground" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {/* Indicadores de posição */}
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-center mt-6 gap-2">
                            {selectedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                  index === currentImageIndex 
                                    ? 'bg-primary scale-110' 
                                    : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        
                        {/* Contador de imagens */}
                        {selectedProject.images.length > 1 && (
                          <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                            {currentImageIndex + 1} / {selectedProject.images.length}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dashboard Screenshots - For fullstack projects with images */}
                {selectedProject.category === 'fullstack' && selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <BarChart3 className="w-5 h-5 text-primary mr-2" />
                      {language === 'pt' ? 'Screenshots do Dashboard' : 'Dashboard Screenshots'}
                    </h4>
                    <div className="relative">
                      {/* Carrossel de imagens do dashboard */}
                      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 overflow-hidden">
                        <div className="flex justify-center">
                          <div className="relative max-w-4xl mx-auto">
                            <img 
                              src={selectedProject.images[currentImageIndex]} 
                              alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                              className="w-full h-auto rounded-lg shadow-2xl border-4 border-gray-300 dark:border-gray-600 transition-all duration-300"
                              style={{ maxHeight: '600px', objectFit: 'contain' }}
                            />
                            
                            {/* Navegação do carrossel */}
                            {selectedProject.images.length > 1 && (
                              <>
                                <button 
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-full w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-200 shadow-lg"
                                >
                                  <ChevronLeft className="w-6 h-6 text-primary-foreground" />
                                </button>
                                <button 
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-full w-12 h-12 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-200 shadow-lg"
                                >
                                  <ChevronRight className="w-6 h-6 text-primary-foreground" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                        
                        {/* Indicadores de posição */}
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-center mt-6 gap-2">
                            {selectedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                  index === currentImageIndex 
                                    ? 'bg-primary scale-110' 
                                    : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        
                        {/* Contador de imagens */}
                        {selectedProject.images.length > 1 && (
                          <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                            {currentImageIndex + 1} / {selectedProject.images.length}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

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
