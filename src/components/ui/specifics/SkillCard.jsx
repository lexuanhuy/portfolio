import "./SkillCard.css";

export default function SkillCard({ skill }) {
  const { name, icon } = skill;

  return (
    <div className="skill-card">
      <div className="skill-icon">
        <span className="skill-emoji">{icon}</span>
      </div>
      <div className="skill-content">
        <h4 className="skill-name">{name}</h4>
        {/* <div className="skill-level">
          <div className="skill-bar">
            <div 
              className="skill-progress" 
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <span className="skill-percentage">{level}%</span>
        </div> */}
        {/* <span className="skill-category">{category}</span> */}
      </div>
    </div>
  );
} 