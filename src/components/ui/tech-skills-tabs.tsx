import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, 
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiFastapi,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, 
  SiDocker, SiGit, SiGithubactions, SiLinux,
  SiReactrouter, SiReacthookform, SiReactquery, SiRedux,
  SiFlutter, SiKotlin, SiSwift, SiAndroid, SiApple
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiSpringboot } from "react-icons/si";

// Definição de tipo para habilidade técnica
interface TechSkill {
  name: string;
  icon: React.ElementType;
  color: string;
}

// Habilidades organizadas por categoria
const techSkills = {
  frontend: [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
    { name: 'React Hook Form', icon: SiReacthookform, color: '#EC5990' },
    { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' }
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' }
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' }
  ],
  devops: [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' }
  ],
  mobile: [
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
    { name: 'Swift', icon: SiSwift, color: '#FA7343' },
    { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
    { name: 'iOS', icon: SiApple, color: '#000000' }
  ]
};

interface TechSkillsTabsProps {
  className?: string;
}

export function TechSkillsTabs({ className }: TechSkillsTabsProps) {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("w-full", className)}
    >
      <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="database">Database</TabsTrigger>
        <TabsTrigger value="devops">DevOps</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>
      
      {/* Frontend */}
      <TabsContent value="frontend" className="space-y-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techSkills.frontend.map((skill) => (
            <TechSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </TabsContent>
      
      {/* Backend */}
      <TabsContent value="backend" className="space-y-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techSkills.backend.map((skill) => (
            <TechSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </TabsContent>
      
      {/* Database */}
      <TabsContent value="database" className="space-y-4">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {techSkills.database.map((skill) => (
            <TechSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </TabsContent>
      
      {/* DevOps */}
      <TabsContent value="devops" className="space-y-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techSkills.devops.map((skill) => (
            <TechSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </TabsContent>
      
      {/* Mobile */}
      <TabsContent value="mobile" className="space-y-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techSkills.mobile.map((skill) => (
            <TechSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Componente de card para cada habilidade técnica
function TechSkillCard({ skill }: { skill: TechSkill }) {
  const Icon = skill.icon;
  
  return (
    <div className="glass-card p-4 flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20">
      <Icon style={{ color: skill.color }} className="w-10 h-10 md:w-12 md:h-12 mb-3" />
      <p className="text-xs md:text-sm text-center font-medium">{skill.name}</p>
    </div>
  );
} 