import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, technologies, image, liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Xem Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 