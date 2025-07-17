import { useState, useEffect } from "react";
import "./FunFacts.css";

export default function FunFacts() {
  const [currentFact, setCurrentFact] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const funFacts = [
    {
      text: "Debugging: Quá trình loại bỏ bug và tạo ra bug mới",
      emoji: "🐛",
      category: "Debug"
    },
    {
      text: "Code không chạy? Uống cà phê và thử lại!",
      emoji: "☕",
      category: "Life Hack"
    },
    {
      text: "99% lỗi là do lỗi người dùng. 1% còn lại là do tôi",
      emoji: "😅",
      category: "Truth"
    },
    {
      text: "Git commit message: 'Fix stuff' - Có ai hiểu không?",
      emoji: "📝",
      category: "Git"
    },
    {
      text: "Stack Overflow: Nơi copy-paste trở thành nghệ thuật",
      emoji: "📋",
      category: "Development"
    },
    {
      text: "Code review: 'Tại sao bạn làm thế này?' - 'Vì nó chạy được'",
      emoji: "🤷‍♂️",
      category: "Code Review"
    },
    {
      text: "Documentation: Viết cho người khác đọc, không phải cho mình",
      emoji: "📚",
      category: "Best Practice"
    },
    {
      text: "Testing: Tìm bug trước khi khách hàng tìm thấy",
      emoji: "🧪",
      category: "Testing"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % funFacts.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [funFacts.length]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev - 1 + funFacts.length) % funFacts.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="fun-facts-container">
      <div className="fun-facts-header">
        <h3 className="fun-facts-title">Vài thứ thú vị tôi copy lại</h3>
        {/* <p className="fun-facts-subtitle">Những điều thú vị về cuộc sống lập trình viên</p> */}
      </div>
      
      <div className="fact-display">
        <div className={`fact-card ${isAnimating ? 'animating' : ''}`}>
          <div className="fact-emoji">{funFacts[currentFact].emoji}</div>
          <div className="fact-content">
            <p className="fact-text">{funFacts[currentFact].text}</p>
            <span className="fact-category">{funFacts[currentFact].category}</span>
          </div>
        </div>
        
        <div className="fact-navigation">
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            ←
          </button>
          <div className="fact-indicators">
            {funFacts.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentFact ? 'active' : ''}`}
                onClick={() => setCurrentFact(index)}
              />
            ))}
          </div>
          <button className="nav-btn next-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
      
      <div className="fun-facts-footer">
        <p className="footer-text">
          "Lập trình viên giỏi nhất là người biết copy-paste từ mọi nơi" 
          <span className="footer-emoji">😄</span>
        </p>
      </div>
    </div>
  );
} 