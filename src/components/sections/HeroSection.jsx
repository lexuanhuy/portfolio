import { useCallback, memo } from "react";
import "./HeroSection.css";

const HeroSection = memo(() => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleViewWork = useCallback(() => {
    scrollToSection("projects");
  }, [scrollToSection]);

  const handleGetInTouch = useCallback(() => {
    scrollToSection("contact");
  }, [scrollToSection]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              With a passion for clean code and innovative solutions, I bring ideas to life 
              through modern web technologies.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={handleViewWork}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleGetInTouch}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection; 