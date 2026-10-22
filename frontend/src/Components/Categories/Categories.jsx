import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ArrowRight, ChevronRight } from "lucide-react";

const Categories = () => {
  // Đồng bộ slug khớp với bộ lọc category trên trang Shop.jsx
  const categories = [
    {
      id: 1,
      title: "Giày Đá Bóng",
      products: "1,240 sản phẩm",
      slug: "giay", // Khớp với categoryKey bên Shop
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Quần Áo Thi Đấu",
      products: "850 sản phẩm",
      slug: "quan-ao", // Khớp với categoryKey bên Shop
      image:
        "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Quả Bóng Đá",
      products: "320 sản phẩm",
      slug: "qua-bong", // Khớp với categoryKey bên Shop
      image:
        "https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Găng Tay Thủ Môn",
      products: "180 sản phẩm",
      slug: "phu-kien", // Gom chung hoặc tách tùy ý vào phụ kiện
      image:
        "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Phụ Kiện Thể Thao",
      products: "450 sản phẩm",
      slug: "phu-kien", // Khớp với categoryKey bên Shop
      image:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-[#F4F6F5] py-10 font-sans">
      <div className="w-full max-w-[1320px] mx-auto px-4">
        {/* Phần tiêu đề và nút "Xem tất cả" */}
        <div className="flex justify-between items-end mb-8">
          <SectionTitle title="Danh Mục Sản Phẩm" mb="mb-0" />

          <Link
            to="/shop"
            className="group flex items-center gap-1 text-sm font-bold text-[#1D3B29] hover:text-[#7ab300] transition-colors"
          >
            <span>Xem tất cả</span>
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Hiển thị dạng lưới (Card UI) đã responsive sẵn */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Ảnh danh mục có hiệu ứng Hover Zoom */}
              <div className="w-full h-44 overflow-hidden bg-gray-50 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Lớp phủ mờ khi di chuột */}
                <div className="absolute inset-0 bg-[#1D3B29]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Thông tin chữ */}
              <div className="p-4 text-center bg-white flex flex-col items-center">
                <h4 className="text-base font-bold text-[#1D3B29] mb-1 group-hover:text-[#7ab300] transition-colors line-clamp-1">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-400 mb-3 font-medium">
                  {item.products}
                </p>

                {/* Nút khám phá chuyển trực tiếp sang /shop?category=slug */}
                <Link
                  to={`/shop?category=${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3B29] bg-[#F4F6F5] px-3.5 py-1.5 rounded-xl hover:bg-[#1D3B29] hover:text-[#C5FF31] transition-all duration-300"
                >
                  <span>Khám phá</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
