import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  ShieldCheck,
  Award,
  Truck,
  Users,
  HeartHandshake,
  Target,
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "5+", label: "Năm Kinh Nghiệm" },
    { number: "10.000+", label: "Khách Hàng Hài Lòng" },
    { number: "100%", label: "Sản Phẩm Chính Hãng" },
    { number: "24/7", label: "Hỗ Trợ Tận Tâm" },
  ];

  const coreValues = [
    {
      icon: <ShieldCheck size={28} className="text-[#C5FF31]" />,
      title: "Chính Hãng 100%",
      desc: "Cam kết cung cấp các sản phẩm giày bóng đá, quần áo thi đấu chuẩn chính hãng từ Nike, Adidas, Puma, Mizuno.",
    },
    {
      icon: <Award size={28} className="text-[#C5FF31]" />,
      title: "Chất Lượng Đỉnh Cao",
      desc: "Tất cả sản phẩm đều được kiểm tra kỹ lưỡng về độ bền, đinh giày và chất liệu trước khi giao tới tay khách hàng.",
    },
    {
      icon: <Truck size={28} className="text-[#C5FF31]" />,
      title: "Giao Hàng Tốc Độ",
      desc: "Hỗ trợ ship COD toàn quốc, cho phép kiểm tra hàng trước khi thanh toán và đổi trả linh hoạt trong 7 ngày.",
    },
    {
      icon: <HeartHandshake size={28} className="text-[#C5FF31]" />,
      title: "Đồng Hành Cùng Sân Cỏ",
      desc: "Luôn lắng nghe và tư vấn giải pháp chọn giày phù hợp nhất với từng phom chân (chân bè, chân thon) và mặt sân.",
    },
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans">
      <SectionTitle title="Về ThienNeymar" mb="mb-8" />

      {/* 1. Phần giới thiệu chung / Câu chuyện thương hiệu */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        <div className="lg:col-span-7">
          <span className="inline-block bg-[#1D3B29] text-[#C5FF31] text-xs font-bold px-3 py-1 rounded-md uppercase mb-3">
            Thương Hiệu Thể Thao Uy Tín
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D3B29] mb-4 leading-tight">
            Nơi Đam Mê Trái Bóng Tròn Được Thăng Hoa
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <strong>ThienNeymar</strong> được thành lập từ tình yêu mãnh liệt
            với bộ môn thể thao vua. Chúng tôi chuyên cung cấp các dòng giày đá
            bóng sân cỏ nhân tạo (TF), sân cỏ tự nhiên (FG) cùng trang phục và
            phụ kiện thể thao chính hãng.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Với tiêu chí{" "}
            <span className="text-[#1D3B29] font-bold">
              "Chất lượng tạo niềm tin"
            </span>
            , ThienNeymar không chỉ bán sản phẩm mà còn mang đến trải nghiệm
            tuyệt vời giúp bạn tự tin tỏa sáng trong từng trận đấu.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="w-full h-[300px] sm:h-[350px] bg-gray-100 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
              alt="Giới thiệu ThienNeymar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Badge nổi bật */}
          <div className="absolute -bottom-5 -left-5 bg-[#1D3B29] text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
            <Target size={32} className="text-[#C5FF31]" />
            <div>
              <p className="text-xs text-gray-300">Mục tiêu của chúng tôi</p>
              <p className="text-sm font-bold text-[#C5FF31]">
                Chắp cánh đam mê phủi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Các con số ấn tượng */}
      <div className="bg-[#1D3B29] rounded-3xl p-8 mb-12 shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#C5FF31] mb-1">
                {item.number}
              </span>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Giá trị cốt lõi */}
      <div>
        <h3 className="text-xl font-extrabold text-[#1D3B29] mb-6 text-center">
          Tại Sao Chọn ThienNeymar?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-[#1D3B29] rounded-xl mb-4">
                {value.icon}
              </div>
              <h4 className="text-base font-bold text-[#1D3B29] mb-2">
                {value.title}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
