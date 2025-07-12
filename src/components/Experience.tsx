import { useEffect, useState, useRef } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award,
  GraduationCap,
  Code,
  Users,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  id: string;
  type: 'work' | 'education' | 'certification';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    id: 'senior-dev',
    type: 'work',
    title: 'Senior Fullstack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale applications using TypeScript, React, and Node.js',
    responsibilities: [
      'Architected and developed microservices using TypeScript and Express',
      'Built responsive frontends with React and Tailwind CSS',
      'Mentored junior developers on TypeScript best practices',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Led code reviews focusing on type safety and maintainable architecture'
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Tailwind CSS'],
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led team of 5 developers on critical product launch',
      'Implemented TypeScript migration reducing bugs by 70%'
    ]
  },
  {
    id: 'fullstack-dev',
    type: 'work',
    title: 'Fullstack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Developed full-stack applications from conception to deployment using modern web technologies',
    responsibilities: [
      'Built scalable React applications with TypeScript',
      'Designed and implemented RESTful APIs',
      'Integrated third-party services and payment systems',
      'Collaborated with designers to implement pixel-perfect UIs using Tailwind CSS',
      'Participated in agile development processes'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React', 'Python', 'Django', 'MongoDB'],
    achievements: [
      'Delivered 15+ features on schedule',
      'Improved user engagement by 35%',
      'Maintained 99.9% uptime for critical systems'
    ]
  },
  {
    id: 'frontend-dev',
    type: 'work',
    title: 'Frontend Developer',
    company: 'WebAgency Pro',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Specialized in creating responsive and interactive user interfaces for client projects',
    responsibilities: [
      'Developed responsive websites using React and modern CSS',
      'Collaborated with UX/UI designers on user interface implementation',
      'Optimized applications for performance and accessibility',
      'Maintained and updated legacy codebases'
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git'],
    achievements: [
      'Delivered 20+ client projects successfully',
      'Achieved 98% client satisfaction rate',
      'Reduced page load times by average of 50%'
    ]
  },
  {
    id: 'cs-degree',
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    location: 'California',
    period: '2015 - 2019',
    description: 'Comprehensive study of computer science fundamentals with focus on software engineering',
    responsibilities: [
      'Core coursework in algorithms, data structures, and software engineering',
      'Specialized in web development and database systems',
      'Completed capstone project using React and Node.js',
      'Participated in hackathons and coding competitions'
    ],
    technologies: ['Java', 'Python', 'JavaScript', 'SQL', 'React', 'Node.js'],
    achievements: [
      'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
      'Dean\'s List for 6 consecutive semesters',
      'Won university hackathon with TypeScript-based project'
    ]
  },
  {
    id: 'aws-cert',
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    company: 'Amazon Web Services',
    location: 'Online',
    period: '2023',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS',
    responsibilities: [
      'Mastered AWS core services and architecture patterns',
      'Learned best practices for security and scalability',
      'Gained expertise in cost optimization strategies'
    ],
    technologies: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation']
  },
  {
    id: 'ts-cert',
    type: 'certification',
    title: 'TypeScript Advanced Certification',
    company: 'Microsoft Learn',
    location: 'Online',
    period: '2022',
    description: 'Advanced certification in TypeScript development and best practices',
    responsibilities: [
      'Advanced type system concepts and generic programming',
      'Module systems and declaration merging',
      'Integration with modern frameworks and build tools'
    ],
    technologies: ['TypeScript', 'Node.js', 'React', 'Webpack']
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certification'>('work');
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

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'certification': return Award;
      default: return Briefcase;
    }
  };

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My path in technology, from education to senior development roles
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex rounded-lg glass-card p-1">
            {[
              { key: 'work' as const, label: 'Work Experience', icon: Briefcase },
              { key: 'education' as const, label: 'Education', icon: GraduationCap },
              { key: 'certification' as const, label: 'Certifications', icon: Award }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{key === 'certification' ? 'Certs' : label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
            
            {/* Experience Cards */}
            <div className="space-y-8">
              {filteredExperiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                return (
                  <div 
                    key={exp.id}
                    className={`relative transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ animationDelay: `${index * 200 + 500}ms` }}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    
                    {/* Experience Card */}
                    <Card className="ml-16 glass-card hover-glow">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                                <div className="flex items-center">
                                  <Briefcase className="w-4 h-4 mr-2" />
                                  {exp.company}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  {exp.period}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="grid lg:grid-cols-2 gap-6 mb-6">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <Code className="w-5 h-5 text-primary mr-2" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          {exp.achievements && (
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center">
                                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <div className="w-2 h-2 rounded-full bg-success mt-2 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary"
                                className="bg-primary/10 text-primary border-primary/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;