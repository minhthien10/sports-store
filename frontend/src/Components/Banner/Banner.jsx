import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import ảnh chuẩn Vite
import puma from "/src/assets/puma.png";

const Banner = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      badge: "BỘ SƯU TẬP MỚI 2026",
      subTitle: "Giày Đá Bóng Chính Hãng",
      title: "Bứt Phá Tốc Độ Trên Mọi Mặt Sân",
      desc: "Trải nghiệm cảm giác bóng chân thực với các dòng sản phẩm đinh TF, FG mới nhất từ Nike, Adidas, Puma.",
      image: puma,
      link: "/category/giay-bong-da",
      btnText: "Khám Phá Ngay",
    },
    {
      id: 2,
      badge: "BST CÂU LẠC BỘ 2025/26",
      subTitle: "Trang Phục Thi Đấu",
      title: "Khoác Lên Màu Áo Đội Bóng Yêu Thích",
      desc: "Chất liệu vải thun lạnh cao cấp, co giãn 4 chiều, thấm hút mồ hôi tối đa cho những trận cầu đỉnh cao.",
      image: puma,
      link: "/category/quan-ao-bong-da",
      btnText: "Xem Bộ Sưu Tập",
    },
    {
      id: 3,
      badge: "ƯU ĐÃI ĐẶC BIỆT",
      subTitle: "Hot Sale Mùa Hè",
      title: "Săn Deal Ngon Giảm Đến 40%",
      desc: "Số lượng có hạn! Nhận ngay ưu đãi voucher giảm giá và quà tặng phụ kiện kèm theo.",
      image: puma,
      link: "/sale",
      btnText: "Săn Sale Ngay",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full bg-[#1D3B29] font-sans relative overflow-hidden">
      {/* Hero Slider Full Width */}
      <div className="banner_slider_wrapper w-full">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="outline-none">
              <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 !flex flex-col-reverse md:flex-row items-center justify-between min-h-[420px] md:min-h-[480px] py-10 md:py-14">
                {/* Left Content */}
                <div className="banner_text w-full md:max-w-[55%] text-left z-10 mt-6 md:mt-0">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#C5FF31] text-[#1D3B29] mb-3 shadow">
                    {product.badge}
                  </span>

                  <p className="text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-widest mb-1">
                    {product.subTitle}
                  </p>

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-tight mb-4">
                    {product.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-200 font-light mb-6 line-clamp-2 max-w-[520px]">
                    {product.desc}
                  </p>

                  <button
                    onClick={() => navigate(product.link)}
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C5FF31] text-[#1D3B29] font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <span>{product.btnText}</span>
                    <MoveRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>

                {/* Right Image */}
                <div className="banner_image w-full md:max-w-[45%] flex justify-center items-center relative">
                  <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-[#C5FF31]/15 rounded-full blur-3xl pointer-events-none"></div>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-[260px] md:max-h-[360px] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] transform -rotate-12 hover:rotate-0 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
