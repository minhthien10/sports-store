import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle"; // Lùi 1 cấp ra Components
import { Trash2, ShoppingCart, Heart, Eye, ArrowRight } from "lucide-react";
import { addToCart } from "../../utils/cartStorage";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("thienneymar_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("thienneymar_wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="w-full max-w-[1320px] mx-auto px-4 py-16 font-sans text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1D3B29]">
          <Heart size={40} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-extrabold text-[#1D3B29] mb-2">
          Danh sách yêu thích đang trống
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Hãy bấm vào biểu tượng trái tim ở sản phẩm bạn thích để lưu lại xem
          sau nhé!
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D3B29] text-[#C5FF31] font-bold text-xs rounded-xl hover:bg-black transition shadow-md"
        >
          <span>Khám Phá Sản Phẩm</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans text-[#1D3B29]">
      <SectionTitle title="Danh Sách Yêu Thích" mb="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
          >
            <div className="relative w-full h-[220px] bg-gray-50 p-3 overflow-hidden flex items-center justify-center">
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-red-500 text-gray-400 hover:text-white rounded-full shadow transition cursor-pointer"
                title="Xóa khỏi danh sách"
              >
                <Trash2 size={16} />
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-[#1D3B29]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="p-3 bg-white text-[#1D3B29] rounded-xl hover:bg-[#C5FF31] transition shadow cursor-pointer"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-white flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] uppercase font-semibold text-gray-400 block mb-1">
                  {product.category}
                </span>
                <h3 className="text-sm font-bold text-[#1D3B29] line-clamp-1 mb-2 hover:text-[#7ab300] transition cursor-pointer">
                  {product.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-base font-extrabold text-[#1D3B29]">
                  {product.price}
                </span>
                <button
                  onClick={() => addToCart(product, "41", 1)}
                  className="p-2.5 bg-[#1D3B29] text-[#C5FF31] hover:bg-black rounded-xl transition shadow cursor-pointer"
                  title="Thêm vào giỏ"
                >
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
