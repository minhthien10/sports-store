import React, { useState } from "react";
import { Volleyball } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(
        `Cảm ơn bạn (${email}) đã đăng ký nhận tin từ ThienNeymar thành công!`,
      );
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F4F6F5] font-inter border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Cột 1: Thông tin thương hiệu & Mạng xã hội */}
          <div>
            <Link
              to="/"
              className="text-3xl text-[#1D3B29] font-bold flex items-center gap-2 mb-6 transition"
            >
              <Volleyball
                size="28"
                color="#1D3B29"
                className="bg-[#C5FF31] p-1 rounded-lg"
              />{" "}
              THIENNEYMAR
            </Link>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Cửa hàng giày đá bóng chính hãng với những mẫu mới nhất, hỗ trợ
              khách hàng tận tình.
            </p>

            <div className="flex items-center gap-3">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/phan.minh.thien.311683",
                },
                { icon: FaXTwitter, link: "https://x.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaYoutube, link: "https://youtube.com" },
              ].map(({ icon: Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1D3B29] p-3 rounded-full text-[#C5FF31] hover:bg-[#C5FF31] hover:text-[#1D3B29] transition-all duration-300 shadow-sm"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Cột 2: Navigation (Nối Link thực tế) */}
          <div>
            <h3 className="text-lg text-[#1D3B29] font-bold uppercase mb-4 tracking-wide">
              Khám Phá
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Cửa hàng sản phẩm", path: "/shop" },
                { name: "Sơ lược về chúng tôi", path: "/about" },
                { name: "Khuyến mãi hot", path: "/sale" },
                { name: "Tin tức & Tư vấn", path: "/blog" },
                { name: "Liên hệ hỗ trợ", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 hover:text-[#1D3B29] hover:font-bold transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Contact (Bấm để gọi/gửi mail trực tiếp) */}
          <div>
            <h3 className="text-lg text-[#1D3B29] font-bold uppercase mb-4 tracking-wide">
              Liên Hệ
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="tel:0909123456"
                  className="hover:text-[#1D3B29] transition"
                >
                  Hotline:{" "}
                  <strong className="text-[#1D3B29]">(+84) 909 123 456</strong>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@thienneymar.vn"
                  className="hover:text-[#1D3B29] transition"
                >
                  Email:{" "}
                  <strong className="text-[#1D3B29]">
                    support@thienneymar.vn
                  </strong>
                </a>
              </li>
              <li className="leading-relaxed">
                Địa chỉ:{" "}
                <strong className="text-[#1D3B29]">
                  123 Đường Thể Thao, Quận 1, TP.HCM
                </strong>
              </li>
            </ul>
          </div>

          {/* Cột 4: Newsletter (Đã gắn handleSubscribe và state email) */}
          <div>
            <h3 className="text-xl text-[#1D3B29] font-medium uppercase mb-4">
              Nhận thông tin
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full items-center bg-white rounded-full shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-[#C5FF31] transition"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="flex-1 h-[44px] px-3 bg-transparent text-[#1D3B29] placeholder:text-gray-400 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="h-[44px] px-4 bg-[#C5FF31] text-[#1D3B29] rounded-full font-semibold hover:bg-[#A5E82F] transition-all duration-300 ml-2 whitespace-nowrap cursor-pointer"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bản quyền Footer Bottom */}
      <div className="mt-6 py-4 text-center text-xs text-gray-500 bg-[#1b3d29] text-white">
        © {new Date().getFullYear()} ThienNeymar Sports Store. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
