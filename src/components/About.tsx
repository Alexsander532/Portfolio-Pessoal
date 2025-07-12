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
  category: 'frontend' | 'backend' | 'database' | 'devops';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 93, category: 'frontend' },
  { name: 'JavaScript', level: 96, category: 'frontend' },
  { name: 'Tailwind CSS', level: 94, category: 'frontend' },
  { name: 'HTML/CSS', level: 98, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 92, category: 'backend' },
  { name: 'Express', level: 88, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Django', level: 80, category: 'backend' },
  { name: 'FastAPI', level: 78, category: 'backend' },
  { name: 'Java', level: 75, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', level: 88, category: 'database' },
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'MySQL', level: 82, category: 'database' },
  { name: 'Redis', level: 80, category: 'database' },
  
  // DevOps
  { name: 'Docker', level: 87, category: 'devops' },
  { name: 'AWS', level: 85, category: 'devops' },
  { name: 'Git', level: 95, category: 'devops' },
  { name: 'CI/CD', level: 82, category: 'devops' },
  { name: 'Linux', level: 85, category: 'devops' }
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                Olá! Sou Alexsander Lima, um desenvolvedor fullstack que respira tecnologia e inovação. Minha paixão genuína por desvendar como as coisas funcionam 'nos bastidores' impulsionou minha jornada, e hoje, com um olhar aguçado para a eficiência e a usabilidade, transformo ideias e desafios em soluções digitais robustas e completas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                Vejo a tecnologia como ponte entre problemas complexos e soluções elegantes. Além de minhas skills técnicas, trago para a equipe um espírito colaborativo, proativo, adaptável e comunicativo. Sou um aprendiz contínuo, aplicando ativamente novos conhecimentos para criar experiências digitais de alto impacto e excelência.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">My Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                Minha jornada na programação iniciou-se como Técnico em Programação com 
                especialização em Jogos Digitais pelo SENAI. Lá, adquiri uma base sólida em
                programação C#, lógica de programação, métodos ágeis e boas práticas de desenvolvimento. Também tive experiência prática com ferramentas como Unity, Blender, Visual Studio e Maya. Atualmente, aprofundo meus conhecimentos no Bacharelado em Engenharia de Computação pelo CEFET/MG, expandindo minha capacidade de transformar ideias em soluções tecnológicas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                Sempre em busca do próximo desafio, dedico tempo diário para estudar novas 
                tecnologias, contribuir para projetos open source e aplicar o aprendizado em 
                projetos práticos. Além disso, trabalho há mais de 2 anos como freelancer em 
                desenvolvimento web e mobile, sempre procurando novos desafios para colocar meus 
                conhecimentos em prática. A tecnologia evolui rapidamente, e eu evoluo junto com ela.
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
                Acredito em código limpo, bem documentado e testável. Priorizo arquiteturas 
                escaláveis, componentização inteligente e metodologias ágeis, valorizando sempre o 
                trabalho em equipe para alcançar os melhores resultados. A experiência do usuário 
                e a qualidade do código são pilares fundamentais em cada projeto.
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
                    { category: 'frontend', title: 'Frontend', color: 'from-primary to-primary-glow' },
                    { category: 'backend', title: 'Backend', color: 'from-secondary to-accent' },
                    { category: 'database', title: 'Banco de Dados', color: 'from-accent to-success' },
                    { category: 'devops', title: 'DevOps', color: 'from-warning to-destructive' }
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