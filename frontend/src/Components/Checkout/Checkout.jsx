import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  ShieldCheck,
  Truck,
  QrCode,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSuccess, setIsSuccess] = useState(false);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("thienneymar_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [discount] = useState(() => {
    const savedDiscount = localStorage.getItem("thienneymar_discount");
    return savedDiscount ? JSON.parse(savedDiscount) : 0;
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    note: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    localStorage.removeItem("thienneymar_cart");
    localStorage.removeItem("thienneymar_discount");
    localStorage.removeItem("thienneymar_coupon");

    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-[800px] mx-auto px-4 py-16 text-center font-sans">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 size={48} />
          </div>
          <span className="text-xs font-bold text-green-600 uppercase bg-green-50 px-3 py-1 rounded-md mb-2">
            Đặt hàng thành công
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D3B29] mb-3">
            Cảm Ơn Bạn Đã Mua Hàng Tại ThienNeymar!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-[500px] mb-6 leading-relaxed">
            Mã đơn hàng của bạn là{" "}
            <strong className="text-[#1D3B29]">
              #TN-{Math.floor(100000 + Math.random() * 900000)}
            </strong>
            . Chúng tôi đã ghi nhận thông tin và sẽ liên hệ xác nhận giao hàng
            trong thời gian sớm nhất.
          </p>

          <Link
            to="/shop"
            className="px-6 py-3 bg-[#1D3B29] text-[#C5FF31] font-bold text-xs rounded-xl hover:bg-black transition shadow-md"
          >
            Tiếp Tục Mua Sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans text-[#1D3B29]">
      <SectionTitle title="Thanh Toán Đơn Hàng" mb="mb-8" />

      <form
        onSubmit={handleSubmitOrder}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-base font-extrabold text-[#1D3B29] mb-4 pb-3 border-b border-gray-100 uppercase">
              1. Thông Tin Nhận Hàng
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Họ & Tên Người Nhận *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="0909123456"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                    Tỉnh / Thành Phố *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="TP. Hồ Chí Minh"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                    Địa Chỉ Chi Tiết *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="123 Đường Thể Thao, Phường 1"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Ghi Chú Đơn Hàng
                </label>
                <textarea
                  name="note"
                  rows="2"
                  placeholder="Giao giờ hành chính, gọi trước khi giao..."
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl p-3 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-base font-extrabold text-[#1D3B29] mb-4 pb-3 border-b border-gray-100 uppercase">
              2. Phương Thức Thanh Toán
            </h3>

            <div className="space-y-3">
              <label
                onClick={() => setPaymentMethod("cod")}
                className={`flex items-center justify-between p-4 rounded-2xl border transition cursor-pointer ${
                  paymentMethod === "cod"
                    ? "border-[#1D3B29] bg-[#F4F6F5]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    readOnly
                  />
                  <Truck size={20} className="text-[#1D3B29]" />
                  <div>
                    <p className="text-xs font-bold text-[#1D3B29]">
                      Thanh toán khi nhận hàng (COD)
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Kiểm tra hàng trước khi thanh toán
                    </p>
                  </div>
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod("qr")}
                className={`flex items-center justify-between p-4 rounded-2xl border transition cursor-pointer ${
                  paymentMethod === "qr"
                    ? "border-[#1D3B29] bg-[#F4F6F5]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "qr"}
                    readOnly
                  />
                  <QrCode size={20} className="text-[#1D3B29]" />
                  <div>
                    <p className="text-xs font-bold text-[#1D3B29]">
                      Chuyển khoản Ngân Hàng (Mã QR VietQR)
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Quét mã QR tự động xác nhận đơn hàng
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-6">
            <h3 className="text-base font-extrabold text-[#1D3B29] mb-4 pb-3 border-b border-gray-100 uppercase">
              Đơn Hàng Của Bạn ({cartItems.length})
            </h3>

            {cartItems.length === 0 ? (
              <p className="text-xs text-gray-400 py-4 text-center">
                Chưa có sản phẩm nào trong giỏ hàng
              </p>
            ) : (
              <div className="divide-y divide-gray-100 mb-4 max-h-[260px] overflow-y-auto pr-1">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${index}`}
                    className="py-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gray-50 rounded-xl overflow-hidden p-1 shrink-0 border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#1D3B29] line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-gray-400">
                          Size: {item.size} | SL: x{item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-[#1D3B29] shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2.5 py-4 border-t border-b border-gray-100 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Tạm tính:</span>
                <span className="font-bold text-[#1D3B29]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Giảm giá Voucher:</span>
                  <span className="font-bold text-red-600">
                    -{formatPrice(discount)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Phí vận chuyển:</span>
                <span className="font-extrabold text-green-600">
                  {shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee)}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 text-base font-extrabold text-[#1D3B29] mb-2">
              <span>Tổng thanh toán:</span>
              <span className="text-xl text-red-600">{formatPrice(total)}</span>
            </div>

            <button
              type="submit"
              disabled={cartItems.length === 0}
              className={`w-full py-4 text-[#1D3B29] font-extrabold text-xs rounded-2xl transition shadow-md uppercase mb-3 ${
                cartItems.length > 0
                  ? "bg-[#C5FF31] hover:bg-[#b0e823] cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Xác Nhận Đặt Hàng
            </button>

            <Link
              to="/cart"
              className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#1D3B29] transition"
            >
              <ArrowLeft size={14} /> Quay lại giỏ hàng
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
