import { NavLink } from "react-router";
import { NavItem } from "@/types";
import "./CyberNavigation.css";

export default function CyberNavigation() {
  const navItems: NavItem[] = [
    {
      id: "skills",
      label: "Kỹ Năng",
      icon: "⚡",
      path: "/skills",
    },
    {
      id: "projects",
      label: "Dự Án",
      icon: "🚀",
      path: "/projects",
    },
    {
      id: "about",
      label: "Về Tôi",
      icon: "👤",
      path: "/about-me",
    },
    {
      id: "blog",
      label: "Blog",
      icon: "📝",
      path: "/blog",
    },
    {
      id: "contact",
      label: "Liên Hệ",
      icon: "📧",
      path: "/contact",
    },
  ];

  return (
    <nav className="cyber-navigation">
      <div className="nav-container">
        <div className="nav-bar">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <div className="nav-icon">{item.icon}</div>
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
