import BackToHome from '@ui/BackToHome';

export default function Blog() {
  return (
    <div className="blog-page">
      <BackToHome />
      <div className="container">
        <h1>Blog</h1>
        <p>🚧 Đang xây dựng... hoặc ít nhất là đang nghĩ về việc xây dựng 😅</p>
        <p>Trong khi chờ đợi, bạn có thể:</p>
        <ul>
          <li>☕ Uống một tách cà phê</li>
          <li>🐛 Debug một bug khác</li>
          <li>🎮 Chơi game để lấy cảm hứng</li>
          <li>😴 Ngủ một giấc và hy vọng sáng mai có ý tưởng</li>
        </ul>
        <p><em>P.S: Blog sẽ ra mắt khi tôi hoàn thành việc... procrastinate 😂</em></p>
      </div>
    </div>
  );
} 