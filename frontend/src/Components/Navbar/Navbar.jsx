import { useState } from "react";
import {
  Check,
  Volleyball,
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Flame,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [lang, setLang] = useState("vie");

  // State quản lý mở menu trên mobile & accordion danh mục
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const toggleLang = () => {
    setLang((prev) => (prev === "vie" ? "eng" : "vie"));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsMobileMenuOpen(false);
    } else {
      navigate("/shop");
    }
  };

  // Cấu trúc danh mục đa cấp trỏ trực tiếp đến trang Shop kèm filter
  const categories = [
    {
      title: "Giày bóng đá",
      slug: "giay",
      items: [
        { name: "Giày Nike", link: "/shop?category=giay&brand=nike" },
        { name: "Giày Adidas", link: "/shop?category=giay&brand=adidas" },
        { name: "Giày Puma", link: "/shop?category=giay&brand=puma" },
        { name: "Giày Mizuno", link: "/shop?category=giay&brand=mizuno" },
        { name: "Giày sân nhân tạo (TF)", link: "/shop?category=giay&type=tf" },
        {
          name: "Giày sân tự nhiên (FG/AG)",
          link: "/shop?category=giay&type=fg",
        },
      ],
    },
    {
      title: "Quần áo bóng đá",
      slug: "quan-ao",
      items: [
        { name: "Áo đấu Câu lạc bộ", link: "/shop?category=quan-ao&type=clb" },
        {
          name: "Áo đấu Đội tuyển Quốc gia",
          link: "/shop?category=quan-ao&type=dtqg",
        },
        {
          name: "Quần áo không logo",
          link: "/shop?category=quan-ao&type=no-logo",
        },
        {
          name: "Áo khoác / Áo Move",
          link: "/shop?category=quan-ao&type=jacket",
        },
      ],
    },
    {
      title: "Quả bóng đá",
      slug: "qua-bong",
      items: [
        {
          name: "Bóng đá sân 5 / Futsal",
          link: "/shop?category=qua-bong&type=futsal",
        },
        {
          name: "Bóng đá sân 7 & 11",
          link: "/shop?category=qua-bong&type=san-lon",
        },
        {
          name: "Bóng chính hãng Đạt chuẩn FIFA",
          link: "/shop?category=qua-bong&type=fifa",
        },
      ],
    },
    {
      title: "Phụ kiện thể thao",
      slug: "phu-kien",
      items: [
        { name: "Vớ / Tất đá bóng", link: "/shop?category=phu-kien&type=tat" },
        {
          name: "Băng keo thể thao",
          link: "/shop?category=phu-kien&type=bang-keo",
        },
        {
          name: "Bọc ống quyển (Ốp bảo vệ)",
          link: "/shop?category=phu-kien&type=bao-ve",
        },
        {
          name: "Găng tay thủ môn",
          link: "/shop?category=phu-kien&type=gang-tay",
        },
        {
          name: "Túi đựng giày / Balo",
          link: "/shop?category=phu-kien&type=balo",
        },
      ],
    },
  ];

  // Danh sách các Menu chính đã tối ưu
  const mainNavItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Cửa hàng", path: "/shop" },
    { name: "Khuyến mãi", path: "/sale", isHighlight: true },
    { name: "Tin tức & Tư vấn", path: "/blog" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <div className="w-full font-sans relative z-50">
      {/* Navbar Top */}
      <div className="flex items-center justify-center bg-[#1D3B29] h-[45px] w-full">
        <div className="w-full max-w-[1320px] mx-auto px-4 flex justify-between items-center">
          <p className="flex items-center gap-2 text-xs text-white">
            <Check size={14} className="text-[#C5FF31]" /> Miễn phí vận chuyển
            toàn quốc cho đơn hàng từ 500k
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute top-0 right-0 hidden md:flex">
        <div className="bg-[#C5FF31] flex items-center gap-3 px-6 py-2 rounded-tl-[100px]">
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
              className="bg-[#1D3B29] p-2 rounded-full text-[#C5FF31] hover:bg-white hover:text-[#1D3B29] transition"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Navbar Middle */}
      <div className="flex items-center justify-center bg-[#F4F6F5] w-full h-[84px]">
        <div className="w-full max-w-[1320px] mx-auto px-4 flex items-center justify-between gap-4">
          {/* Nút Hamburger menu toggle trên Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1D3B29] bg-white rounded-xl shadow-sm border border-gray-200 cursor-pointer"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl text-[#1D3B29] font-bold flex items-center gap-2 hover:text-[#C5FF31] transition"
          >
            <Volleyball
              size="38"
              color="#1D3B29"
              className="bg-[#C5FF31] p-1 rounded-lg"
            />{" "}
            THIENNEYMAR
          </Link>

          {/* Search (Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex relative max-w-[443px] w-full h-[44px]"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm giày, áo, phụ kiện đá bóng..."
              className="w-full h-full bg-white rounded-lg pl-4 pr-10 text-sm text-[#1D3B29] focus:outline-none focus:ring-2 focus:ring-[#C5FF31]"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80 transition"
            >
              <Search size="20" color="#1D3B29" />
            </button>
          </form>

          {/* Cart / Wishlist / User / Language */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 text-[#1D3B29]">
            <Link
              to="/cart"
              className="hover:text-[#C5FF31] transition relative"
            >
              <ShoppingCart size={20} />
            </Link>
            <Link to="/wishlist" className="hover:text-[#C5FF31] transition">
              <Heart size={20} />
            </Link>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="hover:text-[#c5ff31] transition cursor-pointer"
              >
                <User size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-white rounded-lg shadow-lg mt-2 w-36 text-sm text-[#1D3B29] z-[50]"
              >
                <li>
                  <Link
                    to="/auth/login"
                    className="hover:bg-[#c5ff31] hover:text-[#1d3b29] transition"
                  >
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="hover:bg-[#c5ff31] hover:text-[#1d3b29] transition"
                  >
                    Đăng ký
                  </Link>
                </li>
              </ul>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="bg-[#1D3B29] text-[#C5FF31] border-none w-[45px] h-[30px] rounded-xl uppercase text-xs flex items-center justify-center hover:bg-[#C5FF31] hover:text-[#1D3B29] transition font-bold cursor-pointer"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar phụ hiển thị riêng trên Mobile */}
      <div className="md:hidden bg-[#F4F6F5] px-4 pb-3">
        <form
          onSubmit={handleSearchSubmit}
          className="relative w-full h-[40px]"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full h-full bg-white rounded-lg pl-3 pr-10 text-xs border border-gray-200 outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Search size="16" color="#1D3B29" />
          </button>
        </form>
      </div>

      {/* Navbar Bottom (DESKTOP) */}
      <div className="hidden lg:flex items-center justify-center w-full h-[70px] bg-[#1D3B29]">
        <div className="w-full max-w-[1320px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8 text-sm">
            {/* Categories Multi-Level Dropdown (Desktop Hover) */}
            <div className="dropdown dropdown-start">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-3 text-[#C5FF31] hover:text-white px-3 py-2 rounded-md transition cursor-pointer font-semibold"
              >
                <Menu size={18} /> Danh mục sản phẩm
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content bg-white rounded-lg shadow-xl mt-2 w-56 text-sm text-[#1D3B29] p-2 z-[50]"
              >
                {categories.map((cat, index) => (
                  <li key={index} className="relative group/sub">
                    <Link
                      to={`/shop?category=${cat.slug}`}
                      className="flex items-center justify-between hover:bg-[#c5ff31] hover:text-[#1d3b29] transition py-2.5 px-3 rounded-md"
                    >
                      <span className="font-medium">{cat.title}</span>
                      {cat.items && cat.items.length > 0 && (
                        <ChevronRight
                          size={16}
                          className="text-gray-400 group-hover/sub:text-[#1d3b29]"
                        />
                      )}
                    </Link>

                    {/* Sub-menu Desktop */}
                    {cat.items && cat.items.length > 0 && (
                      <ul className="hidden group-hover/sub:block absolute left-full top-0 w-56 bg-white rounded-lg shadow-xl p-2 ml-1 z-[60]">
                        {cat.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link}
                              className="hover:bg-[#c5ff31] hover:text-[#1d3b29] transition py-2 px-3 rounded-md text-xs font-medium block"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Navigation Links Desktop */}
            <nav className="flex items-center gap-8">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition font-medium ${
                      isActive
                        ? "text-[#C5FF31]"
                        : item.isHighlight
                          ? "text-red-400 hover:text-red-300 font-semibold"
                          : "text-white hover:text-[#C5FF31]"
                    }`
                  }
                >
                  {item.isHighlight && (
                    <Flame size={16} className="text-red-400 animate-pulse" />
                  )}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN / ACCORDION (Responsive cho Điện Thoại & Tablet) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top duration-300">
          {/* Main Links Mobile */}
          <div className="flex flex-col space-y-3 pb-4 border-b border-gray-100">
            <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
              Điều hướng chính
            </span>
            {mainNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xs font-bold flex items-center justify-between py-1 ${
                    isActive
                      ? "text-[#1D3B29] font-extrabold underline"
                      : "text-gray-700"
                  } ${item.isHighlight ? "text-red-500 font-extrabold" : ""}`
                }
              >
                <span>{item.name}</span>
                {item.isHighlight && (
                  <Flame size={14} className="text-red-500" />
                )}
              </NavLink>
            ))}
          </div>

          {/* Categories Accordion Mobile */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider block">
              Danh mục sản phẩm
            </span>

            {categories.map((cat, idx) => {
              const isOpen = openCategoryIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-gray-100 rounded-xl overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenCategoryIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 text-xs font-bold text-[#1D3B29] cursor-pointer"
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1D3B29]" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-2 bg-white space-y-1 border-t border-gray-100">
                      <Link
                        to={`/shop?category=${cat.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-bold text-[#1D3B29] bg-[#C5FF31]/30 rounded-lg"
                      >
                        Tất cả {cat.title}
                      </Link>

                      {cat.items.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs text-gray-600 hover:text-[#1D3B29] font-medium hover:bg-gray-50 rounded-lg transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
