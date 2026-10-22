import React from "react";
import Sale from "../../Components/Sale/Sale"; // <--- Chỏ đúng tới Components/Promotion
import ShopComponent from "../../Components/Shop/Shop"; // <--- Chỏ đúng tới Components/Shop

const Shop = () => {
  return (
    <div className="w-full min-h-screen bg-[#F4F6F5] text-[#1D3B29]">
      {/* Banner Khuyến Mãi */}
      <Sale />

      {/* Danh sách Sản Phẩm Cửa Hàng */}
      <ShopComponent />
    </div>
  );
};

export default Shop;
