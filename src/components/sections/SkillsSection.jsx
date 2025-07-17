import { useMemo, useCallback, memo } from "react";
import SkillCard from "@/components/ui/specifics/SkillCard";
import "./SkillsSection.css";

const SkillsSection = memo(() => {
  const skills = useMemo(() => [
    // Frontend
    { name: "React", icon: "⚛️", level: 90, category: "Frontend" },
    {
      name: "Next.js",
      icon: (
        <svg
          aria-label="Vercel logomark"
          height="22"
          role="img"
          // style="width:auto;overflow:visible"
          viewBox="0 0 74 64"
        >
          <path
            d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
            fill="var(--geist-foreground)"
          ></path>
        </svg>
      ),
      level: 85,
      category: "Frontend",
    },
    { name: "JavaScript", icon: "🟨", level: 95, category: "Frontend" },
    { name: "TypeScript", icon: "🔷", level: 85, category: "Frontend" },
    { name: "HTML/CSS", icon: "🎨", level: 90, category: "Frontend" },
    {
      name: "Tailwind CSS",
      icon: (
        <svg
          viewBox="0 0 42 21"
          fill="none"
          class="h-5 text-black dark:text-white"
        >
          <path
            class="fill-sky-400"
            d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
          ></path>
        </svg>
      ),
      level: 88,
      category: "Frontend",
    },

    // Backend
    { name: "Node.js", icon: "🟢", level: 85, category: "Backend" },
    { name: "Go", icon: "🐹", level: 80, category: "Backend" },
    { name: "Express.js", icon: "🚂", level: 88, category: "Backend" },
    { name: "MongoDB", icon: "🍃", level: 82, category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", level: 78, category: "Backend" },

    // Tools & Others
    { name: "Git", icon: "📝", level: 90, category: "Tools" },
    { name: "Docker", icon: "🐳", level: 70, category: "Tools" },
    { name: "Figma", icon: "🎯", level: 80, category: "Tools" },
    { name: "Vite", icon: "⚡", level: 85, category: "Tools" },
  ], []);

  const categories = useMemo(() => ["Frontend", "Backend", "Tools"], []);

  const filterSkillsByCategory = useCallback((category) => {
    return skills.filter((skill) => skill.category === category);
  }, [skills]);

  const renderSkillCard = useCallback((skill, index) => {
    return <SkillCard key={`${skill.name}-${index}`} skill={skill} />;
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Kỹ Năng & Công Nghệ</h2>
          <p className="section-subtitle">
            Đừng hỏi, hỏi chính là không biết 😅. Tôi có thể không nhớ code như
            thế nào nhưng tôi có thể tìm ra cách giải quyết trên google.
          </p>
        </div>

        <div className="skills-content">
          {categories.map((category) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {filterSkillsByCategory(category).map((skill, index) =>
                  renderSkillCard(skill, index)
                )}
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
