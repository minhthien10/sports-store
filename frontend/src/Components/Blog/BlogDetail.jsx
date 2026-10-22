import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "./Blog";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tìm bài viết theo ID
  const post = blogPosts.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center font-sans text-[#1D3B29]">
        <h2 className="text-xl font-bold mb-4">Không tìm thấy bài viết!</h2>
        <button
          onClick={() => navigate("/blog")}
          className="px-5 py-2.5 bg-[#1D3B29] text-[#C5FF31] rounded-xl font-bold text-xs"
        >
          &larr; Quay lại danh sách tin tức
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] font-sans text-[#1D3B29] py-10">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Nút quay lại */}
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1D3B29] hover:text-[#7ab300] bg-white px-4 py-2 rounded-xl border border-gray-200 mb-6 shadow-sm cursor-pointer"
        >
          <ArrowLeft size={16} /> Quay lại danh sách tin tức
        </button>

        {/* Nội dung bài viết */}
        <article className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
          <span className="inline-block bg-[#1D3B29] text-[#C5FF31] text-xs font-bold px-3 py-1.5 rounded-lg mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#1D3B29] mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-gray-400 pb-6 mb-6 border-b border-gray-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar size={15} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <User size={15} /> Đăng bởi {post.author}
            </span>
          </div>

          {/* Ảnh minh họa bài viết */}
          <div className="w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden mb-8 bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Đoạn trích dẫn nổi bật */}
          <div className="p-4 bg-[#F4F6F5] rounded-2xl border-l-4 border-[#1D3B29] text-sm text-gray-700 italic mb-8 font-medium">
            "{post.excerpt}"
          </div>

          {/* HTML Nội dung chi tiết */}
          <div
            className="prose prose-emerald max-w-none text-sm md:text-base text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer bài viết */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-gray-500">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-[#1D3B29]" />
              <span>ThienNeymar, Giày Đá Bóng, Tư Vấn</span>
            </div>
            <button
              onClick={() => alert("Đã sao chép liên kết bài viết!")}
              className="flex items-center gap-1.5 text-[#1D3B29] hover:underline cursor-pointer"
            >
              <Share2 size={16} /> Chia sẻ bài viết
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
