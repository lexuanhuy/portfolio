import { useMemo, memo } from "react";
import FunFacts from '@/components/ui/specifics/FunFacts';
import "./ContactSection.css";

const ContactSection = memo(() => {
  const contactInfo = useMemo(() => [
    {
      icon: "📧",
      title: "Email",
      value: "lexuanhuy1994@gmail.com",
      link: "mailto:lexuanhuy1994@gmail.com"
    },
    {
      icon: "📱",
      title: "Điện Thoại",
      value: "+84 977 221 643",
      link: "tel:+84977221643"
    },
    {
      icon: "📍",
      title: "Địa Chỉ",
      value: "139/1 Đường Dạ Nam, Phường 3, Quận 8, Thành phố Hồ Chí Minh, Việt Nam",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/bamvaoday",
      link: "https://www.linkedin.com/in/l%C3%AA-huy-8941b611a/"
    }
  ], []);

  const renderContactItem = (info, index) => (
    <div key={`${info.title}-${index}`} className="contact-info-item">
      <div className="contact-icon">{info.icon}</div>
      <div className="contact-details">
        <h4 className="contact-label">{info.title}</h4>
        {info.link ? (
          <a 
            href={info.link} 
            className="contact-value"
            target={info.link.startsWith('http') ? "_blank" : undefined}
            rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {info.value}
          </a>
        ) : (
          <span className="contact-value">{info.value}</span>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Liên Hệ</h2>
          <p className="section-subtitle">
            Tôi luôn quan tâm đến những cơ hội mới và các dự án thú vị. 
            Hãy liên hệ nếu bạn muốn kết nối!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Thông Tin Liên Hệ</h3>
            <div className="contact-info-grid">
              {contactInfo.map(renderContactItem)}
            </div>
          </div>
          
          <div className="contact-form-container">
            <FunFacts />
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection; 