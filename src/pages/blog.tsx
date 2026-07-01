import { useEffect, useState } from "react";
import { Link } from "react-router";
import BackToHome from "@ui/BackToHome";
import { BlogItem } from "@/types";
import "./blog.css";

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/portfolio/blogs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không thể tải danh sách bài viết từ hệ thống.");
        }
        return res.json();
      })
      .then((data: BlogItem[]) => {
        // Giả lập độ trễ nhỏ để trải nghiệm hiệu ứng loading cyberpunk đẹp mắt
        setTimeout(() => {
          setBlogs(data);
          setLoading(false);
        }, 600);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Đã xảy ra lỗi không xác định.");
        setLoading(false);
      });
  }, []);

  const getTagClass = (color?: string) => {
    switch (color?.toLowerCase()) {
      case "blue":
        return "tag-blue";
      case "yellow":
        return "tag-yellow";
      case "orange":
        return "tag-orange";
      default:
        return "tag-default";
    }
  };

  return (
    <div className="blog-page">
      <BackToHome />
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-title-wrapper">
            <h1 className="blog-title">Viết linh tinh</h1>
          </div>
          <p className="blog-subtitle">Hệ thống lưu trữ tài liệu kỹ thuật & ghi chép cá nhân</p>
        </div>

        {loading ? (
          <div className="blog-loading">
            {/* <div className="scanner-line"></div> */}
            <p>ĐANG TRUY XUẤT CƠ SỞ DỮ LIỆU...</p>
          </div>
        ) : error ? (
          <div className="blog-error">
            <p>LỖI HỆ THỐNG: {error}</p>
            <p>Vui lòng thử tải lại trang hoặc báo cáo quản trị viên.</p>
          </div>
        ) : (
          <>
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                  <div className="blog-card-top">
                    <h2 className="blog-card-title">{blog.title}</h2>
                    <p className="blog-card-desc">{blog.description}</p>
                  </div>
                  <div className="blog-card-bottom">
                    {/* <span className="blog-card-id">ID: {blog.id.substring(0, 8)}...</span> */}
                    <div className="blog-card-categories">
                      {blog.categories.map((cat) => (
                        <span className={`blog-tag ${getTagClass(cat.color)}`} key={cat.id}>
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <Link to={`/blogs/${blog.id}`} className="blog-read-btn">
                      Truy Cập
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="blog-footer">
              <p className="terminal-line success">✓ Kết nối máy chủ thành công [STATUS: ONLINE]</p>
              <p className="terminal-line">
                ✓ Đã tìm thấy {blogs.length} tài liệu trong cơ sở dữ liệu
              </p>
              <p className="terminal-line warning">
                ⚡ Chú ý: Trình phân tích cú pháp bài viết đang chạy ở chế độ thử nghiệm
              </p>
              <p className="terminal-line italic">
                * P.S: Blog sẽ ra mắt đầy đủ khi tôi hoàn thành việc... procrastinate 😂
              </p>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}
