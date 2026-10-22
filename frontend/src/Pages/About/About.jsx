import React from "react";
import AboutComponent from "../../Components/About/About";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] text-[#1D3B29] pb-12 font-sans">
      {/* Banner Header trang About */}
      <div className="w-full bg-[#1D3B29] py-10 px-4 text-center text-white mb-6">
        <h1 className="text-3xl font-extrabold mb-2">
          Giới Thiệu Về Chúng Tôi
        </h1>
        <p className="text-xs text-gray-300">
          Tìm hiểu câu chuyện, sứ mệnh và cam kết uy tín đến từ ThienNeymar
        </p>
      </div>

      {/* Gọi Component About */}
      <AboutComponent />
    </div>
  );
};

export default AboutPage;
