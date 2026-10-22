import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RefreshCw,
  Star,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { addToCart } from "../../utils/cartStorage";
import { toggleWishlist, isInWishlist } from "../../utils/wishlistStorage";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("41");
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    title: "Nike Mercurial Vapor 16 Pro TF - Blueprint Pack",
    category: "Giày Đá Bóng Sân Cỏ Nhân Tạo",
    brand: "Nike",
    price: "2.890.000đ",
    originalPrice: "3.200.000đ",
    discount: "-10%",
    rating: 4.9,
    reviewsCount: 28,
    status: "Còn hàng",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    specs: [
      { label: "Mặt sân", value: "Cỏ nhân tạo (Đinh TF)" },
      { label: "Chất liệu Upper", value: "Vaporposite+ cao cấp" },
      { label: "Công nghệ đệm", value: "Air Zoom gót chân" },
      { label: "Phom chân", value: "Thon gọn / Ôm chân (Chân bè vừa)" },
      { label: "Trọng lượng", value: "215g / chiếc (Size 41)" },
    ],
  };

  const [isFav, setIsFav] = useState(() => isInWishlist(product.id));

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleToggleFav = () => {
    const added = toggleWishlist({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      inStock: true,
      image: product.images[0],
    });
    setIsFav(added);
  };

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans text-[#1D3B29]">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
        <Link to="/" className="hover:text-[#1D3B29] transition">
          Trang chủ
        </Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-[#1D3B29] transition">
          Shop
        </Link>
        <ChevronRight size={14} />
        <span className="text-[#1D3B29] font-bold truncate">
          {product.title}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm mb-12">
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="w-full h-[380px] sm:h-[450px] bg-gray-50 rounded-2xl overflow-hidden p-4 relative flex items-center justify-center border border-gray-100">
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              {product.discount}
            </span>
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover rounded-xl transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-20 bg-gray-50 rounded-xl overflow-hidden p-1 border-2 transition cursor-pointer ${
                  selectedImage === idx
                    ? "border-[#1D3B29]"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-extrabold text-[#1D3B29] bg-[#C5FF31] px-2.5 py-1 rounded-md">
                {product.brand}
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-md">
                {product.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1D3B29] mb-3 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#1D3B29]">
                {product.rating}
              </span>
              <span className="text-xs text-gray-400">
                ({product.reviewsCount} đánh giá từ khách hàng)
              </span>
            </div>

            <div className="flex items-center gap-4 bg-[#F4F6F5] p-4 rounded-2xl mb-6">
              <span className="text-2xl sm:text-3xl font-extrabold text-red-600">
                {product.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1D3B29] mb-2">
                Chọn Size Giày (EUR):
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-11 rounded-xl text-xs font-bold transition cursor-pointer border ${
                      selectedSize === size
                        ? "bg-[#1D3B29] text-[#C5FF31] border-[#1D3B29] shadow-md"
                        : "bg-white text-[#1D3B29] border-gray-200 hover:border-[#1D3B29]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-[#1D3B29] mb-2">
                Số Lượng:
              </label>
              <div className="inline-flex items-center bg-[#F4F6F5] border border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-white rounded-lg transition text-[#1D3B29]"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-xs font-extrabold text-[#1D3B29]">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="p-2 hover:bg-white rounded-lg transition text-[#1D3B29]"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex gap-3">
              <button
                onClick={() =>
                  addToCart(
                    {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.images[0],
                    },
                    selectedSize,
                    quantity,
                  )
                }
                className="flex-1 py-3.5 bg-[#1D3B29] text-[#C5FF31] hover:bg-black font-extrabold text-xs rounded-2xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart size={18} />
                <span>Thêm Vào Giỏ Hàng</span>
              </button>

              <button
                onClick={handleToggleFav}
                className={`p-3.5 rounded-2xl transition border cursor-pointer ${
                  isFav
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-[#F4F6F5] hover:bg-red-50 hover:text-red-500 text-[#1D3B29] border-gray-200"
                }`}
                title={isFav ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
              >
                <Heart size={20} className={isFav ? "fill-white" : ""} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-gray-100 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck size={20} className="text-[#1D3B29] mb-1" />
              <span className="text-[10px] text-gray-500 font-medium">
                Chính Hãng 100%
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Truck size={20} className="text-[#1D3B29] mb-1" />
              <span className="text-[10px] text-gray-500 font-medium">
                Giao Hàng Toàn Quốc
              </span>
            </div>
            <div className="flex flex-col items-center">
              <RefreshCw size={20} className="text-[#1D3B29] mb-1" />
              <span className="text-[10px] text-gray-500 font-medium">
                Đổi Size 7 Ngày
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
