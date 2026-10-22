import React from "react";
import ContactComponent from "../../Components/Contact/Contact";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] text-[#1D3B29] pb-12 font-sans">
      {/* Banner Header trang Contact */}
      <div className="w-full bg-[#1D3B29] py-10 px-4 text-center text-white mb-6">
        <h1 className="text-3xl font-extrabold mb-2">
          Trung Tâm Hỗ Trợ & Liên Hệ
        </h1>
        <p className="text-xs text-gray-300">
          ThienNeymar luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn
        </p>
      </div>

      {/* Gọi Component Contact */}
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
