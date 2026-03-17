import { memo } from "react";
import CyberNavigation from "@ui/CyberNavigation";
import "./HomeContainer.css";

const HomeContainer = memo(() => {
  return (
    <div className="home-container">
      {/* Cyber background elements */}
      <div className="cyber-grid"></div>
      <div className="cyber-particles"></div>
      <div className="cyber-scanlines"></div>
      <div className="cyber-border"></div>

      {/* Cyber Navigation */}
      <CyberNavigation />

      {/* Content goes here */}
      <div className="content">
        <h1 className="cyber-title">LÊ XUÂN HUY</h1>
        <p className="cyber-subtitle">Full-Stuck Developer</p>
        <p className="cyber-subtitle max-w-4xl">
          Là người vừa kẹt ở frontend, vừa kẹt ở backend, vừa không biết deploy, vừa quên mất cách
          dùng Git 😅
        </p>
      </div>
    </div>
  );
});

HomeContainer.displayName = "HomeContainer";

export default HomeContainer;
