import React from 'react';
import { 
  Code, BarChart3
} from 'lucide-react';
import {
  FaPython, FaJava, FaJs, FaPhp, FaReact, FaGitAlt, FaAws, 
  FaGoogle, FaDocker
} from 'react-icons/fa';
import {
  SiCplusplus, SiMysql, SiPytorch, SiTensorflow, SiKeras, 
  SiApachespark, SiApachehadoop, SiFlask, SiLangchain,
  SiKubernetes, SiTerraform, SiApachekafka, SiMlflow,
  SiHuggingface
} from 'react-icons/si';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const { ref } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython size={20} />, color: "#3776ab" },
        { name: "Java", icon: <FaJava size={20} />, color: "#f89820" },
        { name: "C++", icon: <SiCplusplus size={20} />, color: "#00599c" },
        { name: "JavaScript", icon: <FaJs size={20} />, color: "#f7df1e" },
        { name: "PHP", icon: <FaPhp size={20} />, color: "#777bb4" },
        { name: "MySQL", icon: <SiMysql size={20} />, color: "#4479a1" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "PyTorch", icon: <SiPytorch size={20} />, color: "#ee4c2c" },
        { name: "TensorFlow", icon: <SiTensorflow size={20} />, color: "#ff6f00" },
        { name: "Keras", icon: <SiKeras size={20} />, color: "#d00000" },
        { name: "Spark", icon: <SiApachespark size={20} />, color: "#e25a1c" },
        { name: "Hadoop", icon: <SiApachehadoop size={20} />, color: "#66ccff" },
        { name: "React", icon: <FaReact size={20} />, color: "#61dafb" },
        { name: "Flask", icon: <SiFlask size={20} />, color: "#d00000" },
        { name: "LangChain", icon: <SiLangchain size={20} />, color: "#1c3c3c" },
        { name: "LangGraph", icon: <Code size={20} />, color: "#1c3c3c" },
        { name: "HuggingFace", icon: <SiHuggingface size={20} />, color: "#ff9d00" },
      ],
    },
    {
      title: "DevOps & MLOps Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt size={20} />, color: "#f05032" },
        { name: "AWS", icon: <FaAws size={20} />, color: "#ff9900" },
        { name: "GCP", icon: <FaGoogle size={20} />, color: "#4285f4" },
        { name: "Docker", icon: <FaDocker size={20} />, color: "#2496ed" },
        { name: "Kubernetes", icon: <SiKubernetes size={20} />, color: "#326ce5" },
        { name: "Terraform", icon: <SiTerraform size={20} />, color: "#623ce4" },
        { name: "Kafka", icon: <SiApachekafka size={20} />, color: "#0194e2" },
        { name: "MLflow", icon: <SiMlflow size={20} />, color: "#0194e2" },
        { name: "DVC", icon: <FaGitAlt size={20} />, color: "#13adc7" },
        { name: "Hydra", icon: <Code size={20} />, color: "#ff6b6b" },
        { name: "W&B", icon: <BarChart3 size={20} />, color: "#ffbe00" },
        { name: "Evidently AI", icon: <BarChart3 size={20} />, color: "#00d4aa" },
      ],
    },
  ];

  // Flatten all skills into one array
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2 className="display-2 text-center mb-5 gradient-text">
          Skills & Technologies
        </h2>
        
        <div className="skills-horizontal-container">
          <div className="skills-horizontal-track skills-horizontal-track-slow">
            {/* First set of skills */}
            {allSkills.map((skill, index) => (
              <div
                key={`first-${skill.name}`}
                className="skill-horizontal-card"
                style={{
                  animationDelay: `${index * 10}ms`
                }}
              >
                <div 
                  className="skill-horizontal-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                    animationDelay: `${index * 10}ms`
                  }}
                >
                  {skill.icon}
                </div>
                <div className="skill-horizontal-name">{skill.name}</div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`second-${skill.name}`}
                className="skill-horizontal-card"
                style={{
                  animationDelay: `${(allSkills.length + index) * 10}ms`
                }}
              >
                <div 
                  className="skill-horizontal-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                    animationDelay: `${(allSkills.length + index) * 10}ms`
                  }}
                >
                  {skill.icon}
                </div>
                <div className="skill-horizontal-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;