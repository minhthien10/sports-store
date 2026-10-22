import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { addToCart } from "../../utils/cartStorage";
import { toggleWishlist, isInWishlist } from "../../utils/wishlistStorage";

const Sale = () => {
  const navigate = useNavigate();

  const saleProducts = [
    {
      id: 1,
      title: "Nike Mercurial Vapor 16 Pro TF - Blueprint",
      category: "Giày Đá Bóng",
      price: "2.890.000đ",
      originalPrice: "3.200.000đ",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Adidas Predator 24 League TF",
      category: "Giày Đá Bóng",
      price: "1.790.000đ",
      originalPrice: "2.500.000đ",
      discount: "-28%",
      image:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans text-[#1D3B29]">
      <SectionTitle title="Sản Phẩm Đang Giảm Giá" mb="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleProducts.map((product) => {
          const isFav = isInWishlist(product.id);

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
            >
              <div className="relative w-full h-[220px] bg-gray-50 p-3 overflow-hidden flex items-center justify-center">
                <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md">
                  {product.discount}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                    navigate(".", { replace: true });
                  }}
                  className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow transition cursor-pointer ${
                    isFav
                      ? "bg-red-500 text-white"
                      : "bg-white/80 hover:bg-white text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart size={16} className={isFav ? "fill-white" : ""} />
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

                  <button
                    onClick={() => addToCart(product, "41", 1)}
                    className="p-3 bg-[#1D3B29] text-[#C5FF31] rounded-xl hover:bg-black transition shadow cursor-pointer"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

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
                    <span className="text-base font-extrabold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product, "41", 1)}
                    className="p-2.5 bg-[#1D3B29] text-[#C5FF31] hover:bg-black rounded-xl transition shadow cursor-pointer"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
