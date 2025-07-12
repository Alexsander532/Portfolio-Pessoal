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
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import analyticsImage from '@/assets/project-analytics.jpg';

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
  liveUrl?: string;
  demoUrl?: string;
  icon: React.ElementType;
  category: 'frontend' | 'fullstack' | 'backend';
}

const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern React TypeScript frontend and scalable Node.js backend',
    longDescription: 'A comprehensive e-commerce platform built with TypeScript for type safety and Tailwind CSS for rapid UI development. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'AWS'],
    features: [
      'User authentication with JWT',
      'Product catalog with search and filters',
      'Shopping cart and wishlist functionality',
      'Stripe payment integration',
      'Admin dashboard for inventory management',
      'Real-time order tracking'
    ],
    challenges: [
      'Implementing type-safe API communication between frontend and backend',
      'Optimizing database queries for product search functionality',
      'Handling concurrent user sessions for cart management'
    ],
    results: [
      '40% faster development time using TypeScript',
      '99.9% uptime with AWS deployment',
      'Sub-200ms API response times'
    ],
    image: ecommerceImage,
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    icon: ShoppingCart,
    category: 'fullstack'
  },
  {
    id: 'taskmanager',
    title: 'Task Management System',
    description: 'Collaborative task management application with real-time updates and team collaboration features',
    longDescription: 'A powerful task management system built with React TypeScript and styled with Tailwind CSS. Features drag-and-drop functionality, real-time collaboration, and comprehensive project tracking.',
    technologies: ['TypeScript', 'React', 'Express', 'Socket.io', 'MongoDB', 'Tailwind CSS', 'Docker'],
    features: [
      'Drag-and-drop task boards',
      'Real-time collaboration with Socket.io',
      'Team member assignment and notifications',
      'Project timeline and milestone tracking',
      'File attachments and comments',
      'Mobile-responsive design'
    ],
    challenges: [
      'Implementing real-time updates with TypeScript interfaces',
      'Optimizing drag-and-drop performance with large datasets',
      'Designing responsive layouts with Tailwind CSS'
    ],
    results: [
      '60% improvement in team productivity',
      'Real-time sync across all devices',
      'Zero data loss with robust error handling'
    ],
    image: taskManagerImage,
    githubUrl: 'https://github.com/example/taskmanager',
    liveUrl: 'https://taskmanager-demo.com',
    demoUrl: 'https://demo.taskmanager.com',
    icon: CheckSquare,
    category: 'fullstack'
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive data visualizations and comprehensive reporting',
    longDescription: 'A sophisticated analytics platform featuring real-time data processing, interactive charts, and automated reporting. Built with TypeScript for reliability and Tailwind CSS for consistent styling.',
    technologies: ['TypeScript', 'React', 'D3.js', 'Python', 'FastAPI', 'Redis', 'Tailwind CSS'],
    features: [
      'Real-time data visualization with D3.js',
      'Interactive charts and graphs',
      'Automated report generation',
      'Custom dashboard creation',
      'Data export functionality',
      'Multi-tenant architecture'
    ],
    challenges: [
      'Processing large datasets with TypeScript type safety',
      'Creating responsive charts with Tailwind CSS',
      'Implementing real-time data streaming'
    ],
    results: [
      '10x faster data processing',
      'Real-time insights with <100ms latency',
      'Reduced reporting time by 80%'
    ],
    image: analyticsImage,
    githubUrl: 'https://github.com/example/analytics',
    liveUrl: 'https://analytics-demo.com',
    icon: BarChart3,
    category: 'fullstack'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in TypeScript, React, and modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`glass-card hover-glow group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
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
                      +{project.technologies.length - 3} more
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
                      setSelectedProject(project);
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Details
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
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
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
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <selectedProject.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.category}</p>
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
                      Key Features
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
                      Challenges & Results
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-warning mb-2">Challenges Overcome:</h5>
                        <ul className="space-y-1">
                          {selectedProject.challenges.map((challenge, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-success mb-2">Results Achieved:</h5>
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
                    Technologies Used
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
                    View Source Code
                  </Button>
                  {selectedProject.liveUrl && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Button>
                  )}
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