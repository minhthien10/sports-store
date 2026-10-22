import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShoppingBag,
  Ticket,
  ShieldCheck,
  Truck,
} from "lucide-react";

const Cart = () => {
  // Lấy dữ liệu thực từ localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("thienneymar_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Lưu lại mỗi khi thay đổi số lượng hoặc xóa bớt
  useEffect(() => {
    localStorage.setItem("thienneymar_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, size, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.size === size) {
          const newQty =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      }),
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shippingFee = subtotal > 1500000 || cartItems.length === 0 ? 0 : 30000;
  const total = Math.max(0, subtotal + shippingFee - discount);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-[1320px] mx-auto px-4 py-16 font-sans text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1D3B29]">
          <ShoppingBag size={40} />
        </div>
        <h3 className="text-xl font-extrabold text-[#1D3B29] mb-2">
          Giỏ hàng của bạn đang trống
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Hãy chọn cho mình những đôi giày đá bóng ưng ý nhất tại ThienNeymar
          nhé!
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D3B29] text-[#C5FF31] font-bold text-xs rounded-xl hover:bg-black transition shadow-md"
        >
          <span>Khám Phá Cửa Hàng</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans text-[#1D3B29]">
      <SectionTitle title="Giỏ Hàng Của Bạn" mb="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="divide-y divide-gray-100">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${index}`}
                className="py-4 grid grid-cols-1 sm:grid-cols-12 items-center gap-4"
              >
                <div className="sm:col-span-6 flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden p-1 shrink-0 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1D3B29] line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <span className="inline-block text-[11px] font-bold text-[#1D3B29] bg-[#F4F6F5] px-2 py-0.5 rounded-md">
                      Size: {item.size}
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-2 text-left sm:text-center">
                  <span className="text-xs font-extrabold text-[#1D3B29]">
                    {formatPrice(item.price)}
                  </span>
                </div>

                <div className="sm:col-span-2 flex items-center justify-start sm:justify-center">
                  <div className="inline-flex items-center bg-[#F4F6F5] border border-gray-200 rounded-xl p-0.5">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.size, "decrease")
                      }
                      className="p-1.5 hover:bg-white rounded-lg transition text-[#1D3B29] cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center text-xs font-extrabold text-[#1D3B29]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.size, "increase")
                      }
                      className="p-1.5 hover:bg-white rounded-lg transition text-[#1D3B29] cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-xs sm:text-sm font-extrabold text-red-600">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.size)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="text-sm font-extrabold text-[#1D3B29] pb-4 border-b border-gray-100 uppercase">
              Tóm Tắt Đơn Hàng
            </h4>
            <div className="space-y-3 py-4 border-b border-gray-100 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Tạm tính:</span>
                <span className="font-bold text-[#1D3B29]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Phí vận chuyển:</span>
                <span className="font-bold text-[#1D3B29]">
                  {shippingFee === 0 ? (
                    <span className="text-green-600 font-extrabold">
                      Miễn phí
                    </span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 text-base font-extrabold text-[#1D3B29]">
              <span>Tổng tiền:</span>
              <span className="text-xl text-red-600">{formatPrice(total)}</span>
            </div>

            <Link
              to="/checkout"
              className="w-full py-3.5 bg-[#C5FF31] text-[#1D3B29] hover:bg-[#b0e823] font-extrabold text-xs rounded-2xl transition shadow-md uppercase text-center block"
            >
              Tiến Hành Thanh Toán
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
