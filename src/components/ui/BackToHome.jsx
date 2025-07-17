import { Link } from "react-router";
import "./BackToHome.css";

export default function BackToHome() {
  return (
    <Link to="/" className="back-to-home">
      <div className="back-arrow">←</div>
      <span className="back-text">Trang Chủ</span>
      <div className="back-glow"></div>
    </Link>
  );
} 