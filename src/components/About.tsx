import { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  Rocket, 
  Users, 
  Lightbulb, 
  Heart,
  MessageSquare,
  RefreshCw,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechSkillsTabs } from '@/components/ui/tech-skills-tabs';
import { AboutTabs } from '@/components/ui/about-tabs';

const softSkills = [
  { icon: Users, title: 'Team Collaboration', description: 'Working effectively in cross-functional teams' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Breaking down complex challenges into manageable solutions' },
  { icon: MessageSquare, title: 'Communication', description: 'Clear technical communication with stakeholders' },
  { icon: RefreshCw, title: 'Continuous Learning', description: 'Staying updated with latest technologies and best practices' }
];

const whoIAmText = `Olá! Sou Alexsander Lima, um desenvolvedor fullstack que respira tecnologia e inovação. Minha paixão genuína por desvendar como as coisas funcionam 'nos bastidores' impulsionou minha jornada, e hoje, com um olhar aguçado para a eficiência e a usabilidade, transformo ideias e desafios em soluções digitais robustas e completas.

Vejo a tecnologia como ponte entre problemas complexos e soluções elegantes. Além de minhas skills técnicas, trago para a equipe um espírito colaborativo, proativo, adaptável e comunicativo. Sou um aprendiz contínuo, aplicando ativamente novos conhecimentos para criar experiências digitais de alto impacto e excelência.`;

const myJourneyText = `Minha jornada na programação iniciou-se como Técnico em Programação com especialização em Jogos Digitais pelo SENAI. Lá, adquiri uma base sólida em programação C#, lógica de programação, métodos ágeis e boas práticas de desenvolvimento. Também tive experiência prática com ferramentas como Unity, Blender, Visual Studio e Maya. Atualmente, aprofundo meus conhecimentos no Bacharelado em Engenharia de Computação pelo CEFET/MG, expandindo minha capacidade de transformar ideias em soluções tecnológicas.

Sempre em busca do próximo desafio, dedico tempo diário para estudar novas tecnologias, contribuir para projetos open source e aplicar o aprendizado em projetos práticos. Além disso, trabalho há mais de 2 anos como freelancer em desenvolvimento web e mobile, sempre procurando novos desafios para colocar meus conhecimentos em prática. A tecnologia evolui rapidamente, e eu evoluo junto com ela.`;

const developmentPhilosophyText = `Acredito em código limpo, bem documentado e testável. Priorizo arquiteturas escaláveis, componentização inteligente e metodologias ágeis, valorizando sempre o trabalho em equipe para alcançar os melhores resultados. A experiência do usuário e a qualidade do código são pilares fundamentais em cada projeto.`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <AboutTabs 
                  whoIAm={whoIAmText}
                  myJourney={myJourneyText}
                  developmentPhilosophy={developmentPhilosophyText}
                />
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

                {/* Tech Skills Tabs */}
                <TechSkillsTabs />
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