import React from "react";
import WishlistComponent from "../../Components/Wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] text-[#1D3B29] pb-12 font-sans">
      {/* Banner Header trang Wishlist */}
      <div className="w-full bg-[#1D3B29] py-10 px-4 text-center text-white mb-6">
        <h1 className="text-3xl font-extrabold mb-2">Sản Phẩm Đã Lưu</h1>
        <p className="text-xs text-gray-300">
          Danh sách các mẫu giày & phụ kiện bạn đã đánh dấu yêu thích
        </p>
      </div>

      {/* Gọi Component Wishlist */}
      <WishlistComponent />
    </div>
  );
};

export default WishlistPage;
