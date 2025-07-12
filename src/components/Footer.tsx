import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologies = [
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'Python',
    'AWS'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Alex Johnson</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Passionate fullstack developer creating robust, scalable solutions with 
              modern technologies. Specializing in TypeScript, React, and cloud architecture.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alex.johnson@developer.com"
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover-glow"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full glass-card border border-primary/20 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 mx-2 text-primary" />
            <span>using TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;