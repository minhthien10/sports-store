import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { addToCart } from "../../utils/cartStorage";
import {
  Filter,
  ChevronRight,
  ShoppingCart,
  Heart,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Đọc tham số category từ URL (VD: ?category=giay hoặc ?category=quan-ao)
  const currentCategory = searchParams.get("category") || "all";

  // Dữ liệu mẫu sản phẩm cửa hàng có gắn categoryKey để khớp với Navbar
  const products = [
    {
      id: 1,
      title: "Nike Mercurial Vapor 16 Pro TF",
      categoryKey: "giay",
      category: "Giày Đá Bóng",
      brand: "Nike",
      price: "2.890.000đ",
      originalPrice: "3.200.000đ",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      status: "Mới",
    },
    {
      id: 2,
      title: "Adidas Predator 24 League TF",
      categoryKey: "giay",
      category: "Giày Đá Bóng",
      brand: "Adidas",
      price: "2.100.000đ",
      originalPrice: "2.500.000đ",
      image:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
      status: "Sale",
    },
    {
      id: 3,
      title: "Puma Future 7 Match TT",
      categoryKey: "giay",
      category: "Giày Đá Bóng",
      brand: "Puma",
      price: "1.950.000đ",
      originalPrice: "",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      status: "Hot",
    },
    {
      id: 4,
      title: "Mizuno Morelia Neo IV Pro TF",
      categoryKey: "giay",
      category: "Giày Đá Bóng",
      brand: "Mizuno",
      price: "3.150.000đ",
      originalPrice: "3.400.000đ",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
      status: "Mới",
    },
    {
      id: 5,
      title: "Áo Đấu CLB Real Madrid 2025/26",
      categoryKey: "quan-ao",
      category: "Quần Áo",
      brand: "Adidas",
      price: "350.000đ",
      originalPrice: "450.000đ",
      image:
        "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop",
      status: "Sale",
    },
    {
      id: 6,
      title: "Găng Tay Thủ Môn Adidas Predator",
      categoryKey: "phu-kien",
      category: "Phụ Kiện",
      brand: "Adidas",
      price: "850.000đ",
      originalPrice: "",
      image:
        "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=800&auto=format&fit=crop",
      status: "Hot",
    },
  ];

  // Lọc sản phẩm theo URL category
  const filteredProducts =
    currentCategory === "all"
      ? products
      : products.filter((p) => p.categoryKey === currentCategory);

  const handleCategoryFilter = (key) => {
    if (key === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: key });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] font-sans text-[#1D3B29] pb-16">
      {/* 1. Header Banner trang Shop */}
      <div className="w-full bg-[#1D3B29] py-12 px-4 mb-8">
        <div className="max-w-[1320px] mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Cửa Hàng Thể Thao ThienNeymar
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300 font-medium">
            <Link to="/" className="hover:text-[#C5FF31] transition">
              Trang chủ
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#C5FF31]">Cửa hàng</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 2. Cột Bộ Lọc (Sidebar Filter) bên trái */}
          <aside
            className={`lg:w-1/4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit ${
              mobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
              <h3 className="font-bold text-base text-[#1D3B29] flex items-center gap-2">
                <Filter size={18} /> Bộ Lọc Tìm Kiếm
              </h3>
              <button
                onClick={() => setSearchParams({})}
                className="text-xs text-gray-400 hover:text-[#1D3B29] underline cursor-pointer"
              >
                Đặt lại
              </button>
            </div>

            {/* Lọc nhanh theo danh mục */}
            <div className="mb-6">
              <h4 className="font-bold text-sm text-[#1D3B29] mb-3">
                Danh Mục
              </h4>
              <div className="space-y-2">
                {[
                  { label: "Tất cả sản phẩm", key: "all" },
                  { label: "Giày Đá Bóng", key: "giay" },
                  { label: "Quần Áo Thể Thao", key: "quan-ao" },
                  { label: "Phụ Kiện Thể Thao", key: "phu-kien" },
                ].map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategoryFilter(cat.key)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                      currentCategory === cat.key
                        ? "bg-[#1D3B29] text-[#C5FF31]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Lọc theo Thương hiệu */}
            <div className="mb-6">
              <h4 className="font-bold text-sm text-[#1D3B29] mb-3">
                Thương Hiệu
              </h4>
              <div className="space-y-2.5">
                {["Nike", "Adidas", "Puma", "Mizuno", "Asics"].map(
                  (brand, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-[#1D3B29]"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-[#1D3B29] focus:ring-[#C5FF31]"
                      />
                      <span>{brand}</span>
                    </label>
                  ),
                )}
              </div>
            </div>
          </aside>

          {/* 3. Khu vực Danh sách sản phẩm bên phải */}
          <main className="flex-1">
            {/* Thanh công cụ sắp xếp & nút mở bộ lọc mobile */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1D3B29] text-[#C5FF31] rounded-xl font-bold text-xs"
              >
                <SlidersHorizontal size={16} /> Lọc sản phẩm
              </button>

              <p className="text-xs text-gray-500 font-medium">
                Hiển thị{" "}
                <span className="font-bold text-[#1D3B29]">
                  {filteredProducts.length}
                </span>{" "}
                sản phẩm
              </p>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  Sắp xếp:
                </span>
                <select className="bg-[#F4F6F5] border border-gray-200 text-[#1D3B29] text-xs rounded-xl px-3 py-2 outline-none font-bold">
                  <option>Mới nhất</option>
                  <option>Giá: Thấp đến cao</option>
                  <option>Giá: Cao xuống thấp</option>
                  <option>Bán chạy nhất</option>
                </select>
              </div>
            </div>

            {/* Lưới sản phẩm */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl text-center border border-gray-100">
                <p className="text-sm font-bold text-gray-500">
                  Không tìm thấy sản phẩm nào trong danh mục này!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
                  >
                    {/* Khối chứa ảnh và overlay nút thao tác */}
                    <div className="relative w-full h-[220px] bg-gray-50 p-3 overflow-hidden flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Overlay chứa 2 nút khi hover */}
                      <div className="absolute inset-0 bg-[#1D3B29]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        {/* 1. NÚT XEM CHI TIẾT */}
                        <button
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="p-3 bg-white text-[#1D3B29] rounded-xl hover:bg-[#C5FF31] transition shadow cursor-pointer"
                          title="Xem chi tiết sản phẩm"
                        >
                          <Eye size={18} />
                        </button>

                        {/* 2. NÚT THÊM NHANH VÀO GIỎ HÀNG */}
                        <button
                          onClick={() =>
                            addToCart(
                              {
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                image: product.image,
                              },
                              "41",
                              1,
                            )
                          }
                          className="p-3 bg-[#1D3B29] text-[#C5FF31] rounded-xl hover:bg-black transition shadow cursor-pointer"
                          title="Thêm nhanh vào giỏ"
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="p-4 bg-white flex flex-col justify-between flex-1">
                      <div>
                        <p className="text-[11px] uppercase font-semibold text-gray-400 mb-1">
                          {product.category} • {product.brand}
                        </p>
                        <h3 className="text-sm font-bold text-[#1D3B29] line-clamp-1 mb-2 hover:text-[#7ab300] transition cursor-pointer">
                          {product.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-[#1D3B29]">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>

                        <Link
                          to={`/product/${product.id}`}
                          className="text-xs font-bold text-[#1D3B29] hover:underline"
                        >
                          Chi tiết &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Phân trang (Pagination) */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <button className="w-10 h-10 rounded-xl bg-[#1D3B29] text-[#C5FF31] font-bold text-sm shadow flex items-center justify-center cursor-pointer">
                1
              </button>
              <button className="w-10 h-10 rounded-xl bg-white text-[#1D3B29] border border-gray-200 hover:bg-gray-50 font-bold text-sm shadow-sm flex items-center justify-center cursor-pointer">
                2
              </button>
              <button className="w-10 h-10 rounded-xl bg-white text-[#1D3B29] border border-gray-200 hover:bg-gray-50 font-bold text-sm shadow-sm flex items-center justify-center cursor-pointer">
                &gt;
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
