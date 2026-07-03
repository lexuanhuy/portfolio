import { useState, useEffect, useMemo, useCallback, memo } from "react";
import BackToHome from "@ui/BackToHome";
import AvatarImg from "@/assets/images/avatar.jpg";
import "./about-me.css";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
};

const AboutMe = memo(() => {
  const [currentStatus, setCurrentStatus] = useState(0);

  const statusList = useMemo(
    () => [
      { text: "Đang chiến đấu với bug", icon: "⚔️", animation: "fighting" },
      { text: "Đang nghỉ ngơi", icon: "😴", animation: "sleeping" },
      { text: "Đang tìm bug", icon: "🔍", animation: "searching" },
      { text: "Đang code", icon: "💻", animation: "coding" },
      { text: "Đang bị bug tấn công", icon: "😱", animation: "attacked" },
      { text: "Đang chạy trốn", icon: "🏃‍♂️", animation: "running" },
      { text: "Đang uống cà phê", icon: "☕", animation: "drinking" },
      { text: "Đang debug", icon: "🐛", animation: "debugging" },
      { text: "Đang deploy", icon: "🚀", animation: "deploying" },
      { text: "Đang commit code", icon: "📝", animation: "committing" },
      { text: "Đang review code", icon: "👀", animation: "reviewing" },
      { text: "Đang họp", icon: "🤝", animation: "meeting" },
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(() => Math.floor(Math.random() * statusList.length));
    }, 9000); // Chuyển đổi mỗi 9 giây

    return () => clearInterval(interval);
  }, [statusList.length]);

  const personalInfo = useMemo(
    () => ({
      name: "Lê Xuân Huy",
      alias: "Developer",
      location: "Debug Dungeon 🏰",
      status: statusList[currentStatus].text,
      statusIcon: statusList[currentStatus].icon,
      statusAnimation: statusList[currentStatus].animation,
      level: "31",
      experience: "3+ years",
      specializations: ["Javascript", "Typescript", "ReactJS", "NextJS", "NodeJS", "ExpressJS"],
    }),
    [currentStatus, statusList],
  );

  // const timeline = useMemo(
  //   () => [
  //     {
  //       year: "2015",
  //       title: "Vừa ra khỏi tân thủ thôn - Bắt đầu luyện cấp",
  //       description:
  //         "Bắt đầu hành trình lập trình với HTML, CSS, JavaScript, PHP. Đập vào mặt là custom lại 1 hệ thống WHMCS to bự, làm mới website công ty và nhiều website khách hàng",
  //       tech: ["HTML", "CSS", "JavaScript", "PHP"],
  //       status: "completed",
  //     },
  //     {
  //       year: "2017",
  //       title: "Phiêu bạc giang hồ không môn không phái (Freelancer)",
  //       description:
  //         "Làm freelancer kiểu 'có gì làm nấy', từ website bán hàng đến hệ thống quản lý gì đó. Khách hàng hỏi gì cũng 'OK, em làm được' 😅",
  //       tech: ["HTML", "CSS", "JavaScript", "PHP"],
  //       status: "completed",
  //     },

  //     {
  //       year: "2018",
  //       title:
  //         "Gian hồ hiểm ác, tài không bằng người nên gia nhập thế lực lớn (Full-Stack Developer tại AI Pacific)",
  //       description:
  //         "Xây dựng hệ thống quản lý nhân sự, quản lý hồ sơ bệnh án, quản lý người nuôi bệnh, xử lý dữ liệu từ excel cho hệ thống mới, xậy dựng hệ thống report realtime, xậy dựng hệ thống lịch làm việc và chấm công. Trong thời gian này cái gì cũng biết nhưng thật ra không biết gì cả 😅",
  //       tech: [
  //         "DevOps",
  //         "Git",
  //         "React Native",
  //         "PHP",
  //         "React",
  //         "MySQL",
  //         "AngularJS",
  //         "C#",
  //         "Excel",
  //         "Socket.io",
  //         "Sails.js",
  //         "Node.js",
  //       ],
  //       status: "completed",
  //     },

  //     {
  //       year: "2020",
  //       title:
  //         "Thế lực tranh đấu, lòng người hoang mang nên gia nhập thế lực khác (Full-Stack Developer tại BOO)",
  //       description:
  //         "Xây dựng hệ thống thương mại điện tử và ứng dụng quản lý tích hợp ERP, thanh toán từ bên thứ 3",
  //       tech: ["Vue.js", "PHP", "MySQL"],
  //       status: "completed",
  //     },

  //     {
  //       year: "2021",
  //       title:
  //         "Bệnh dịch khắp nơi, dân chúng lầm than, tôi đóng cửa bế quan không ra ngoài (Crypto)",
  //       description:
  //         "Tình hình Covid khó khăn, nằm trong vùng đỏ cách ly, nên tôi quyết định dấn thân vào thị trường crypto. Từ đó tôi đã từng làm 1 dự án về crypto, nhưng vì tôi không biết làm gì với nó nên tôi đã bỏ dự án đó",
  //       tech: ["Crypto", "Blockchain", "Smart Contract", "Web3"],
  //       status: "completed",
  //     },

  //     {
  //       year: "2022",
  //       title: "Thiên hạ thay đổi, tái xuất giang hồ (Senior Frontend Developer tại NeoX)",
  //       description: "Xây dựng FE cho hệ thống thanh toán và quản lý thanh toán",
  //       tech: ["React", "Node.js", "Ant Design", "UmiJS"],
  //       status: "completed",
  //     },

  //     {
  //       year: "2023",
  //       title:
  //         "Thời loạn thế, tài nguyên khan hiếm, nguyện cùng bằng hữu đồng hành, vượt qua kiếp nạn (Senior Frontend Developer tại Wafeflex)",
  //       description:
  //         "Xây dựng hệ thống quản lý như TMS, WMS, OMS và ứng dụng khác như Marketplace, Marketing website, ...",
  //       tech: ["React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "Ant Design"],
  //       status: "completed",
  //     },
  //     {
  //       year: "2025",
  //       title:
  //         "Lòng người khó đoán, cất bước một mình, chẳng cầu kẻ đồng tâm nữa (Prompt Engineering tại Gatlas)",
  //       description: "Thay vì viết code thì tôi viết prompt còn code thì để AI viết",
  //       tech: ["Python", "React", "Node.js", "Prompt Engineering", "AI"],
  //       status: "active",
  //     },
  //   ],
  //   [],
  // );

  const timeline = useMemo(
    () => [
      {
        year: "2015",
        title: "Junior Web Developer",
        description:
          "Custom lại 1 hệ thống WHMCS, làm mới website công ty và oursouce website khách hàng",
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
        status: "completed",
      },
      {
        year: "2017",
        title: "Freelancer",
        description: "Làm website giới thiệu công cty, doanh nghiệp, bán hàng, ...",
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
        status: "completed",
      },

      {
        year: "2018",
        title: "Fullstack Developer",
        description:
          "Xây dựng hệ thống quản lý nhân sự, quản lý hồ sơ bệnh án, quản lý người nuôi bệnh, xử lý dữ liệu từ excel cho hệ thống mới, xậy dựng hệ thống report realtime, xậy dựng hệ thống lịch làm việc và chấm công.",
        tech: [
          "DevOps",
          "Git",
          "React Native",
          "PHP",
          "React",
          "MySQL",
          "AngularJS",
          "C#",
          "Excel",
          "Socket.io",
          "Sails.js",
          "Node.js",
        ],
        status: "completed",
      },

      {
        year: "2020",
        title: "Fullstack Developer",
        description:
          "Xây dựng hệ thống thương mại điện tử và ứng dụng quản lý tích hợp ERP, thanh toán từ bên thứ 3",
        tech: ["Vue.js", "PHP", "MySQL"],
        status: "completed",
      },

      {
        year: "2022",
        title: "Senior Frontend Developer",
        description: "Xây dựng FE cho hệ thống thanh toán và quản lý thanh toán",
        tech: ["React", "Node.js", "Ant Design", "UmiJS"],
        status: "completed",
      },

      {
        year: "2023",
        title: "Senior Frontend Developer / Technical Lead Frontend",
        description:
          "Xây dựng hệ thống quản lý như TMS, WMS, OMS và ứng dụng khác như Marketplace, Marketing website, ...",
        tech: ["React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion", "Ant Design"],
        status: "completed",
      },
      {
        year: "2025",
        title: "Senior Frontend Developer",
        description: "Thay vì viết code thì tôi viết prompt còn code thì để AI viết",
        tech: ["Python", "React", "Node.js", "Prompt Engineering", "AI"],
        status: "active",
      },
    ],
    [],
  );
  const stats = useMemo(
    () => [
      { label: "Dự Án Hoàn Thành", value: "18+", icon: "🚀" },
      { label: "Dòng Code", value: "1+", icon: "💻" },
      { label: "Cà Phê Uống", value: "999+", icon: "☕" },
      { label: "Bug Đã Fix", value: "∞", icon: "🐛" },
    ],
    [],
  );

  // const interests = useMemo(
  //   () => [
  //     { name: "AI & Machine Learning", icon: "🤖", level: 85 },
  //     // { name: "Blockchain Development", icon: "⛓️", level: 75 },
  //     { name: "Cybersecurity", icon: "🔒", level: 80 },
  //     { name: "Game Development", icon: "🎮", level: 70 },
  //     // { name: "UI/UX Design", icon: "🎨", level: 85 },
  //     // { name: "DevOps", icon: "⚙️", level: 75 },
  //   ],
  //   []
  // );

  const renderSpecialization = useCallback(
    (spec: string, index: number) => (
      <span key={`${spec}-${index}`} className="specialization-tag">
        {spec}
      </span>
    ),
    [],
  );

  const renderStat = useCallback(
    (stat: { label: string; value: string; icon: string }, index: number) => (
      <div key={`${stat.label}-${index}`} className="stat-card">
        <div className="stat-icon">{stat.icon}</div>
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ),
    [],
  );

  const renderTimelineItem = useCallback(
    (item: TimelineItem, index: number) => (
      <div key={`${item.year}-${index}`} className={`timeline-item ${item.status}`}>
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <div className="timeline-year">{item.year}</div>
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-description">{item.description}</p>
          <div className="timeline-tech">
            {item.tech.map((tech: string, techIndex: number) => (
              <span key={`${tech}-${techIndex}`} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    [],
  );

  // const renderInterest = useCallback(
  //   (interest, index) => (
  //     <div key={`${interest.name}-${index}`} className="interest-card">
  //       <div className="interest-icon">{interest.icon}</div>
  //       <div className="interest-content">
  //         <h4 className="interest-name">{interest.name}</h4>
  //       </div>
  //     </div>
  //   ),
  //   []
  // );

  return (
    <div className="about-page">
      <BackToHome />

      <div className="container">
        {/* Header Section */}
        <div className="about-header">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-frame">
                <div className="avatar-placeholder overflow-hidden">
                  <img alt="avatar" src={AvatarImg} />
                </div>
                <div className="avatar-status"></div>
              </div>
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{personalInfo.name}</h1>
              <p className="profile-alias">{personalInfo.alias}</p>
              <div className="profile-details">
                <span className="detail-item">
                  <span className="detail-label">LOCATION:</span>
                  <span className="detail-value">{personalInfo.location}</span>
                </span>
                <span className="detail-item">
                  <span className="detail-label">STATUS:</span>
                  <span className={`detail-value status-${personalInfo.statusAnimation}`}>
                    {personalInfo.statusIcon} {personalInfo.status}
                  </span>
                </span>
                <span className="detail-item">
                  <span className="detail-label">LEVEL:</span>
                  <span className="detail-value">{personalInfo.level}</span>
                </span>
              </div>
              <div className="specializations-section">
                <span className="detail-label">SPECIALIZATIONS:</span>
                <div className="specializations-list">
                  {personalInfo.specializations.map(renderSpecialization)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <h2 className="section-title">Thống Kê</h2>
          <div className="stats-grid">{stats.map(renderStat)}</div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h2 className="section-title">Hành Trình</h2>
          <div className="timeline">{timeline.reverse().map(renderTimelineItem)}</div>
        </div>

        {/* Interests Section */}
        {/* <div className="interests-section">
          <h2 className="section-title">Lĩnh Vực Quan Tâm</h2>
          <p className="section-subtitle text-center pb-4">
            Tôi quan tâm thôi chứ có hỏi nhiều tôi cũng không biết 😄
          </p>
          <div className="interests-grid">
            {interests.map(renderInterest)}
          </div>
        </div> */}

        {/* Philosophy Section */}
        <div className="philosophy-section">
          {/* <h2 className="section-title">Triết Lý</h2> */}
          <div className="philosophy-content">
            <div className="philosophy-quote">
              "Nếu code chạy được thì đừng sửa! Nếu không chạy được thì... uống cà phê và thử lại!
              ☕"
            </div>
            <div className="philosophy-principles">
              <div className="principle">
                <span className="principle-icon">🥖</span>
                <span className="principle-text">Bánh mì + cà phê = năng lượng code cả ngày</span>
              </div>
              <div className="principle">
                <span className="principle-icon">😴</span>
                <span className="principle-text">8 tiếng mơ về bug, 16 tiếng fix bug thật</span>
              </div>
              <div className="principle">
                <span className="principle-icon">💻</span>
                <span className="principle-text">
                  Copy từ Stack Overflow, paste vào project, pray 🙏
                </span>
              </div>
              <div className="principle">
                <span className="principle-icon">🐛</span>
                <span className="principle-text">
                  Tìm bug 2 giờ, fix bug 2 phút, test bug 2 ngày
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
