import { useMemo, memo } from "react";
import ProjectCard from '@/components/ui/specifics/ProjectCard';
import WebsitePortfolioImg from '@assets/images/project/website-portfolio.png';
import "./ProjectsSection.css";

const ProjectsSection = memo(() => {
  const projects = useMemo(() => [
    // {
    //   title: "Nền Tảng Thương Mại Điện Tử",
    //   description: "Một nền tảng thương mại điện tử full-stack được xây dựng với React, Node.js và MongoDB. Các tính năng bao gồm xác thực người dùng, quản lý sản phẩm, giỏ hàng và tích hợp thanh toán.",
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/ecommerce"
    // },
    // {
    //   title: "Ứng Dụng Quản Lý Công Việc",
    //   description: "Một ứng dụng quản lý công việc cộng tác với cập nhật thời gian thực, chức năng kéo thả và tính năng làm việc nhóm.",
    //   technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    //   image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/taskapp"
    // },
    // {
    //   title: "Bảng Điều Khiển Thời Tiết",
    //   description: "Một bảng điều khiển thời tiết đẹp mắt hiển thị thời tiết hiện tại, dự báo và bản đồ tương tác sử dụng API thời tiết và thiết kế UI hiện đại.",
    //   technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop",
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/example/weather"
    // },
    {
      title: "Website Portfolio",
      description: "Đúng chính là cái website bạn đang xem, còn những dự án khác tôi tạm thời chưa nghĩ ra.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      image: WebsitePortfolioImg,
      liveUrl: "/",
      githubUrl: "https://github.com/lexuanhuy/portfolio"
    }
  ], []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Dự Án Của Tôi</h2>
          <p className="section-subtitle">
            Những dự án tôi đã làm... hoặc ít nhất là đã cố gắng làm 😅 
            Mỗi dự án là một câu chuyện về việc debug từ 2 giờ sáng và uống cà phê không ngừng ☕
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection; 