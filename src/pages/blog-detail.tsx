import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { BlogItem } from "@/types";
import { marked } from "marked";
import BackToHome from "@ui/BackToHome";
import "./blog-detail.css";
import "./blog.css"; // Reuse general tag styles

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [blogMeta, setBlogMeta] = useState<BlogItem | null>(null);
  const [contentHtml, setContentHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    const base = import.meta.env.BASE_URL || "/portfolio/";
    const fetchMeta = fetch(`${base}blogs.json`).then((res) => {
      if (!res.ok) throw new Error("Không thể tải danh sách bài viết.");
      return res.json();
    });

    const fetchContent = fetch(`${base}blogs/${id}.json`).then((res) => {
      if (!res.ok) throw new Error("Không tìm thấy nội dung chi tiết bài viết.");
      return res.json();
    });

    Promise.all([fetchMeta, fetchContent])
      .then(([metaList, detailData]) => {
        // Find meta info matching the current ID
        const meta = (metaList as BlogItem[]).find((b) => b.id === id);
        if (meta) {
          setBlogMeta(meta);
        } else {
          throw new Error("Không tìm thấy thông tin bài viết trong cơ sở dữ liệu.");
        }

        // Get markdown content
        let markdownText = "";
        if (detailData.content) {
          if (typeof detailData.content === "string") {
            markdownText = detailData.content;
          } else if (typeof detailData.content === "object" && detailData.content.markdown) {
            markdownText = detailData.content.markdown;
          }
        }

        if (!markdownText) {
          throw new Error("Tệp nội dung bài viết bị rỗng.");
        }

        // Parse markdown to HTML using marked
        const html = marked.parse(markdownText) as string;
        setContentHtml(html);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Đã xảy ra lỗi khi tải dữ liệu bài viết.");
        setLoading(false);
      });
  }, [id]);

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
      <div className="blog-detail-container">
        <div className="blog-detail-nav">
          <BackToHome />
          <Link to="/blog" className="back-to-blog">
            <div className="back-arrow">←</div>
            <span className="back-text">Quay lại</span>
            <div className="back-glow"></div>
          </Link>
        </div>

        {loading ? (
          <div className="blog-loading">
            {/* <div className="scanner-line"></div> */}
            <p>ĐANG GIẢI MÃ DỮ LIỆU...</p>
          </div>
        ) : error ? (
          <div className="blog-error">
            <p>LỖI TRUY XUẤT: {error}</p>
            <Link
              to="/blog"
              style={{
                color: "#00ffff",
                textDecoration: "underline",
                display: "inline-block",
                marginTop: "15px",
              }}
            >
              Quay lại danh sách Nhật ký
            </Link>
          </div>
        ) : (
          <>
            <div className="blog-detail-header">
              <h1 className="blog-detail-title">{blogMeta?.title}</h1>
              <div className="blog-detail-meta">
                {/* <span className="blog-detail-id">DOC_ID: {blogMeta?.id.substring(0, 18)}...</span> */}
                <div className="blog-detail-categories">
                  {blogMeta?.categories.map((cat) => (
                    <span className={`blog-tag ${getTagClass(cat.color)}`} key={cat.id}>
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="blog-detail-content-wrapper">
              <article
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>

            {/* <div className="blog-footer blog-detail-footer">
              <p className="terminal-line success">✓ Đọc thành công tài liệu: {blogMeta?.title}</p>
              <p className="terminal-line">✓ Trạng thái tệp tin: DECRYPTED [100% OK]</p>
              <p className="terminal-line warning">
                ⚡ Cảnh báo: Tắt kết nối hoặc thoát trang để đóng cổng kết nối an toàn
              </p>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}
