import { useCallback, memo } from "react";
import SkillCard from "@/components/ui/specifics/SkillCard";
import { FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiPhpFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiPostgresql, SiTypescript, SiVite } from "react-icons/si";
import "./SkillsSection.css";

const CATEGORIES = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  TOOLS: "Tools",
};

type SkillsType = {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
};

const SKILLS: SkillsType[] = [
  // Frontend
  { name: "React", icon: <FaReact />, level: 90, category: CATEGORIES.FRONTEND },
  { name: "Next.js", icon: <RiNextjsFill />, level: 85, category: CATEGORIES.FRONTEND },
  { name: "JavaScript", icon: <RiJavascriptFill />, level: 95, category: CATEGORIES.FRONTEND },
  { name: "TypeScript", icon: <SiTypescript />, level: 85, category: CATEGORIES.FRONTEND },
  { name: "Vite", icon: <SiVite />, level: 85, category: CATEGORIES.FRONTEND },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 88, category: CATEGORIES.FRONTEND },

  // Backend
  { name: "Node.js/Express.js", icon: <FaNodeJs />, level: 85, category: CATEGORIES.BACKEND },
  { name: "MongoDB", icon: <SiMongodb />, level: 82, category: CATEGORIES.BACKEND },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 78, category: CATEGORIES.BACKEND },
  { name: "PHP", icon: <RiPhpFill />, level: 78, category: CATEGORIES.BACKEND },

  // Tools & Others
  { name: "Git", icon: <FaGithub />, level: 90, category: CATEGORIES.TOOLS },
  { name: "Docker", icon: <FaDocker />, level: 70, category: CATEGORIES.TOOLS },
];

const SkillsSection = memo(() => {
  const filterSkillsByCategory = useCallback((category: string) => {
    return SKILLS.filter((skill) => skill.category === category);
  }, []);

  const renderSkillCard = useCallback((skill: SkillsType) => {
    return <SkillCard key={skill.name} skill={skill} />;
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Kỹ Năng & Công Nghệ</h2>
          <p className="section-subtitle">
            Đừng hỏi, hỏi chính là không biết 😅. Tôi có thể không nhớ code như thế nào nhưng tôi có
            thể tìm ra cách giải quyết trên google.
          </p>
        </div>

        <div className="skills-content">
          {Object.values(CATEGORIES).map((category) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {filterSkillsByCategory(category).map((skill) => renderSkillCard(skill))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
