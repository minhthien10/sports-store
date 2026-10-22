import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Eye,
} from "lucide-react";
import { addToCart } from "../../utils/cartStorage";
import { toggleWishlist, isInWishlist } from "../../utils/wishlistStorage";

// Tùy chỉnh Nút Mũi Tên Trái
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#1D3B29] text-[#C5FF31] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C5FF31] hover:text-[#1D3B29] transition-all duration-300 cursor-pointer"
  >
    <ChevronLeft size={22} />
  </button>
);

// Tùy chỉnh Nút Mũi Tên Phải
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#1D3B29] text-[#C5FF31] rounded-full flex items-center justify-center shadow-lg hover:bg-[#C5FF31] hover:text-[#1D3B29] transition-all duration-300 cursor-pointer"
  >
    <ChevronRight size={22} />
  </button>
);

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "Nike Mercurial Vapor 16",
      category: "Giày Đá Bóng",
      status: "Mới",
      price: "3.200.000đ",
      currentPrice: "2.890.000đ",
      // Chuyển sang dùng link ảnh online hoặc asset chuẩn để không bị lỗi 404
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Adidas Predator 24 League",
      category: "Giày Đá Bóng",
      status: "Sale",
      price: "2.500.000đ",
      currentPrice: "2.100.000đ",
      image:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Puma Future 7 Match TT",
      category: "Giày Đá Bóng",
      status: "Hot",
      price: "2.200.000đ",
      currentPrice: "1.950.000đ",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Mizuno Morelia Neo IV Pro",
      category: "Giày Đá Bóng",
      status: "Mới",
      price: "3.400.000đ",
      currentPrice: "3.150.000đ",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Asics DS Light Club TF",
      category: "Giày Đá Bóng",
      status: "Sale",
      price: "2.000.000đ",
      currentPrice: "1.750.000đ",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-[#F4F6F5] py-12 font-sans text-[#1D3B29]">
      <div className="w-full max-w-[1320px] mx-auto px-4 relative">
        <SectionTitle title="Sản Phẩm Nổi Bật" mb="mb-8" />

        <Slider {...settings}>
          {features.map((product) => {
            const isFav = isInWishlist(product.id);

            // Chuẩn bị định dạng giá để đẩy vào giỏ hàng
            const numericPrice =
              parseInt(product.currentPrice.replace(/\D/g, "")) || 0;

            return (
              <div key={product.id} className="px-3 py-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group h-full">
                  {/* Khung chứa ảnh, badge trạng thái và nút Wishlist */}
                  <div className="relative w-full h-[220px] bg-gray-50 p-3 overflow-hidden flex items-center justify-center">
                    {/* Badge Trạng Thái (Mới / Sale / Hot) */}
                    {product.status && (
                      <span className="absolute top-3 left-3 z-10 bg-[#1D3B29] text-[#C5FF31] text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-sm uppercase">
                        {product.status}
                      </span>
                    )}

                    {/* Nút Thả Tim (Wishlist) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist({
                          id: product.id,
                          title: product.title,
                          category: product.category,
                          price: product.currentPrice,
                          image: product.image,
                        });
                        navigate(".", { replace: true });
                      }}
                      className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow transition cursor-pointer ${
                        isFav
                          ? "bg-red-500 text-white"
                          : "bg-white/80 hover:bg-white text-gray-400 hover:text-red-500"
                      }`}
                      title={isFav ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                    >
                      <Heart size={16} className={isFav ? "fill-white" : ""} />
                    </button>

                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay chứa nút Xem Chi Tiết & Thêm Nhanh */}
                    <div className="absolute inset-0 bg-[#1D3B29]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="p-3 bg-white text-[#1D3B29] rounded-xl hover:bg-[#C5FF31] transition shadow cursor-pointer"
                        title="Xem chi tiết"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() =>
                          addToCart(
                            {
                              id: product.id,
                              title: product.title,
                              price: numericPrice,
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

                  {/* Phần Nội Dung & Giá Cả */}
                  <div className="p-4 bg-white flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] uppercase font-semibold text-gray-400 block mb-1">
                        {product.category}
                      </span>
                      <h3
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="text-sm font-bold text-[#1D3B29] line-clamp-1 mb-2 hover:text-[#7ab300] transition cursor-pointer"
                      >
                        {product.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-[#1D3B29]">
                          {product.currentPrice}
                        </span>
                        {product.price && (
                          <span className="text-xs text-gray-400 line-through">
                            {product.price}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() =>
                          addToCart(
                            {
                              id: product.id,
                              title: product.title,
                              price: numericPrice,
                              image: product.image,
                            },
                            "41",
                            1,
                          )
                        }
                        className="p-2.5 bg-[#1D3B29] text-[#C5FF31] hover:bg-black rounded-xl transition shadow cursor-pointer"
                        title="Thêm vào giỏ hàng"
                      >
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Features;
