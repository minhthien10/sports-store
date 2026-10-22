import React from "react";
import BlogComponent from "../../Components/Blog/Blog";

const BlogPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] text-[#1D3B29] pb-12 font-sans">
      {/* Header trang Blog */}
      <div className="w-full bg-[#1D3B29] py-10 px-4 text-center text-white mb-6">
        <h1 className="text-3xl font-extrabold mb-2">
          Blog Thể Thao & Kiến Thức
        </h1>
        <p className="text-xs text-gray-300">
          Góc chia sẻ kiến thức bóng đá, review sản phẩm và mẹo hay cho anh em
          phủi
        </p>
      </div>

      {/* Gọi Component Blog */}
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
