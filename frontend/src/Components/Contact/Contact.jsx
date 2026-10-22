import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Cảm ơn bạn đã liên hệ! ThienNeymar sẽ phản hồi trong thời gian sớm nhất.",
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone size={22} className="text-[#C5FF31]" />,
      title: "Hotline Tư Vấn",
      detail: "0909.123.456 - 0988.789.999",
      subDetail: "Hỗ trợ Zalo / Call 24/7",
    },
    {
      icon: <Mail size={22} className="text-[#C5FF31]" />,
      title: "Email Liên Hệ",
      detail: "support@thienneymar.vn",
      subDetail: "Phản hồi trong vòng 24h",
    },
    {
      icon: <MapPin size={22} className="text-[#C5FF31]" />,
      title: "Địa Chỉ Cửa Hàng",
      detail: "123 Đường Thể Thao, Quận 1, TP. Hồ Chí Minh",
      subDetail: "Ghé thăm trải nghiệm thử giày trực tiếp",
    },
    {
      icon: <Clock size={22} className="text-[#C5FF31]" />,
      title: "Giờ Mở Cửa",
      detail: "08:00 - 21:30 (Thứ 2 - Chủ Nhật)",
      subDetail: "Phục vụ cả ngày lễ & Tết",
    },
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans">
      <SectionTitle title="Liên Hệ Với Chúng Tôi" mb="mb-8" />

      {/* 1. Thẻ thông tin liên hệ nhanh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-[#1D3B29] rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-[#1D3B29] mb-1">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                {item.detail}
              </p>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">{item.subDetail}</p>
          </div>
        ))}
      </div>

      {/* 2. Form gửi tin nhắn & Bản đồ nhúng */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Form gửi yêu cầu bên trái */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare size={20} className="text-[#1D3B29]" />
            <h3 className="text-xl font-extrabold text-[#1D3B29]">
              Gửi Tin Nhắn Cho ThienNeymar
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Bạn cần tư vấn chọn size giày hay giải đáp thắc mắc? Vui lòng điền
            thông tin bên dưới:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Họ & Tên *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Số Điện Thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0909123456"
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                  Chủ Đề
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Tư vấn size giày / Đổi trả..."
                  className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1D3B29] mb-1.5">
                Nội Dung Tin Nhắn *
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Nhập chi tiết yêu cầu của bạn ở đây..."
                className="w-full bg-[#F4F6F5] border border-gray-200 rounded-xl p-4 text-xs text-[#1D3B29] outline-none focus:border-[#1D3B29] transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-[#1D3B29] text-[#C5FF31] font-bold text-xs rounded-xl hover:bg-black transition shadow-md cursor-pointer"
            >
              <Send size={15} />
              <span>Gửi Tin Nhắn</span>
            </button>
          </form>
        </div>

        {/* Bản đồ Google Maps nhúng bên phải */}
        <div className="lg:col-span-5 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-full h-full min-h-[350px] rounded-2xl overflow-hidden bg-gray-100 relative">
            <iframe
              title="ThienNeymar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424167419727!2d106.69834711533421!3d10.778784762098675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a5b6d13dd%3A0x28876c5b5f63d6b0!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
