import { Link } from "react-router";
import "./CyberNavigation.css";

export default function CyberNavigation() {
  const navItems = [
    {
      id: "skills",
      label: "Kỹ Năng",
      icon: "⚡",
      path: "/skills"
    },
    {
      id: "projects", 
      label: "Dự Án",
      icon: "🚀",
      path: "/projects"
    },
    {
      id: "about",
      label: "Về Tôi",
      icon: "👤",
      path: "/about-me"
    },
    {
      id: "blog",
      label: "Blog",
      icon: "📝",
      path: "/blog"
    },
    {
      id: "contact",
      label: "Liên Hệ",
      icon: "📧",
      path: "/contact"
    }
  ];

  return (
    <nav className="cyber-navigation">
      <div className="nav-container">
        <div className="nav-bar">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="nav-item"
            >
              <div className="nav-icon">{item.icon}</div>
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 