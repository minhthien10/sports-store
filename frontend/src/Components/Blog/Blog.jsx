import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "Cách chọn size giày đá bóng chuẩn xác 100% cho chân bè",
    slug: "cach-chon-size-giay-da-bong-cho-chan-be",
    excerpt:
      "Chân bè thường gặp khó khăn khi chọn giày đá bóng. Dưới đây là hướng dẫn chi tiết cách đo chân và chọn dòng giày TF phù hợp nhất...",
    category: "Tư Vấn Chọn Giày",
    author: "ThienNeymar",
    date: "20/10/2026",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Việc sở hữu một đôi giày đá bóng vừa vặn không chỉ giúp bạn thi đấu thăng hoa mà còn hạn chế tối đa các chấn thương nguy hiểm như lật sơ mi hay phồng rộp chân.</p>
      <h3>1. Đặc điểm của bàn chân bè Việt Nam</h3>
      <p>Người Việt Nam đa số có phom chân bè (chiều ngang rộng). Hầu hết các mẫu giày đá bóng Châu Âu như Nike hay Adidas ban đầu đều thiết kế theo phom chân thon dài. Do đó, việc chọn đúng phom giày là yếu tố quyết định.</p>
      <h3>2. Các dòng giày phù hợp cho chân bè</h3>
      <ul>
        <li><b>Mizuno Morelia Neo:</b> Dòng giày da thật cực kỳ êm ái, co dãn tốt theo phom chân.</li>
        <li><b>Puma Future 7:</b> Thân giày co dãn linh hoạt, ôm chân nhưng không gây bó tức.</li>
        <li><b>Nike Tiempo Legend:</b> Lựa chọn hàng đầu cho các hậu vệ thích sự êm ái.</li>
      </ul>
      <p>Hãy liên hệ hotline ThienNeymar để được tư vấn chính xác nhất theo kích thước chân của bạn!</p>
    `,
  },
  {
    id: 2,
    title: "Top 5 mẫu giày đá bóng sân cỏ nhân tạo bán chạy nhất 2026",
    slug: "top-5-mau-giay-da-bong-san-co-nhan-tao",
    excerpt:
      "Điểm qua những siêu phẩm giày đá bóng đinh TF hot nhất năm nay đến từ các thương hiệu Nike, Adidas, Puma...",
    category: "Đánh Giá Sản Phẩm",
    author: "ThienNeymar",
    date: "15/10/2026",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Sân cỏ nhân tạo tại Việt Nam đòi hỏi dòng đinh TF có độ bám sân tốt và đệm đinh êm ái. Dưới đây là 5 mẫu giày được cộng đồng phủi đánh giá cao nhất năm 2026.</p>
      <h3>1. Nike Mercurial Vapor 16 Pro TF</h3>
      <p>Trọng lượng siêu nhẹ, bộ đệm Zoom Air độc quyền mang lại cảm giác bứt tốc cực tốt.</p>
      <h3>2. Adidas Predator 24 League TF</h3>
      <p>Thiết kế gai kiểm soát bóng đỉnh cao, cực hợp cho các tiền vệ kiến tạo.</p>
    `,
  },
  {
    id: 3,
    title: "Hướng dẫn bảo quản và vệ sinh giày đá bóng da thật đúng cách",
    slug: "huong-dan-bao-quan-ve-sinh-giay-da-that",
    excerpt:
      "Giày da thật (K-Leather, Calfskin) rất bền nhưng cần chăm sóc cẩn thận. Bí quyết giúp đôi giày của bạn luôn như mới...",
    category: "Mẹo Hay",
    author: "ThienNeymar",
    date: "10/10/2026",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    content: `
      <p>Giày đá bóng bằng da thật nếu bị dính nước mưa mà không xử lý kịp thời rất dễ bị cứng da, ẩm mốc hoặc bóc keo.</p>
      <p>Hãy dùng khăn ẩm lau sạch bùn đất ngay sau trận đấu, phơi nơi khô ráo thoáng gió (tránh ánh nắng trực tiếp) và nhét giấy báo vào bên trong để hút ẩm hiệu quả.</p>
    `,
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] font-sans text-[#1D3B29] pb-16">
      {/* Banner */}
      <div className="w-full bg-[#1D3B29] py-12 px-4 mb-8">
        <div className="max-w-[1320px] mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Tin Tức & Tư Vấn Thể Thao
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300 font-medium">
            <Link to="/" className="hover:text-[#C5FF31] transition">
              Trang chủ
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#C5FF31]">Tin tức</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div
                className="relative h-[220px] overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#1D3B29] text-[#C5FF31] text-[11px] font-bold px-3 py-1 rounded-lg">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>

                  <h2
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-base font-bold text-[#1D3B29] mb-2 line-clamp-2 hover:text-[#7ab300] transition cursor-pointer"
                  >
                    {post.title}
                  </h2>

                  <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3B29] hover:text-[#7ab300] transition group/btn pt-3 border-t border-gray-100"
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
