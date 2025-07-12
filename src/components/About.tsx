import { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  Rocket, 
  Users, 
  Lightbulb, 
  Award,
  Heart,
  MessageSquare,
  RefreshCw,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool' | 'database';
}

const skills: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'language' },
  { name: 'JavaScript', level: 98, category: 'language' },
  { name: 'Python', level: 90, category: 'language' },
  { name: 'Go', level: 85, category: 'language' },
  { name: 'Java', level: 80, category: 'language' },
  { name: 'React', level: 95, category: 'framework' },
  { name: 'Next.js', level: 90, category: 'framework' },
  { name: 'Node.js', level: 92, category: 'framework' },
  { name: 'Express', level: 88, category: 'framework' },
  { name: 'Django', level: 85, category: 'framework' },
  { name: 'Tailwind CSS', level: 96, category: 'framework' },
  { name: 'PostgreSQL', level: 88, category: 'database' },
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'Redis', level: 82, category: 'database' },
  { name: 'Docker', level: 87, category: 'tool' },
  { name: 'AWS', level: 85, category: 'tool' },
  { name: 'Git', level: 95, category: 'tool' },
  { name: 'Kubernetes', level: 80, category: 'tool' }
];

const softSkills = [
  { icon: Users, title: 'Team Collaboration', description: 'Working effectively in cross-functional teams' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Breaking down complex challenges into manageable solutions' },
  { icon: MessageSquare, title: 'Communication', description: 'Clear technical communication with stakeholders' },
  { icon: RefreshCw, title: 'Continuous Learning', description: 'Staying updated with latest technologies and best practices' }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill.name]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate fullstack developer with a mission to create exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Introduction & Journey */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code2 className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Alex Johnson, a passionate fullstack developer with 5+ years of experience 
                  building scalable web applications. My love for technology drives me to constantly 
                  explore new frameworks and methodologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">My Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Started with a computer science degree, then dove deep into modern web development. 
                  From building my first React app to architecting enterprise-level systems, 
                  every project has been a learning opportunity that shaped my expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Development Philosophy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in clean, maintainable code with strong TypeScript typing, 
                  component-driven architecture using Tailwind CSS, and agile methodologies. 
                  User experience and code quality are never compromised.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="glass-card hover-glow h-fit">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-primary mr-3" />
                  Technical Skills
                </h3>

                {/* Skill Categories */}
                <div className="space-y-6">
                  {[
                    { category: 'language', title: 'Languages', color: 'from-primary to-primary-glow' },
                    { category: 'framework', title: 'Frameworks', color: 'from-secondary to-accent' },
                    { category: 'tool', title: 'Tools & Cloud', color: 'from-accent to-success' },
                    { category: 'database', title: 'Databases', color: 'from-warning to-destructive' }
                  ].map(({ category, title, color }) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold mb-3 text-primary">{title}</h4>
                      <div className="space-y-3">
                        {getSkillsByCategory(category).map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="skill-bar h-2">
                              <div 
                                className={`skill-progress bg-gradient-to-r ${color} ${
                                  animatedSkills.includes(skill.name) ? 'opacity-100' : 'opacity-0'
                                }`}
                                style={{ 
                                  width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Soft Skills */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Soft Skills</span> & Mindset
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="glass-card hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary 
                    flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;