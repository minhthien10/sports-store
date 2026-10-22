// src/utils/wishlistStorage.js

export const toggleWishlist = (product) => {
  // Lấy danh sách wishlist từ localStorage
  const currentWishlist =
    JSON.parse(localStorage.getItem("thienneymar_wishlist")) || [];

  // Kiểm tra xem sản phẩm đã có trong Wishlist chưa
  const existingIndex = currentWishlist.findIndex(
    (item) => item.id === product.id,
  );

  if (existingIndex > -1) {
    // Nếu có rồi -> Xóa khỏi Wishlist
    currentWishlist.splice(existingIndex, 1);
    localStorage.setItem(
      "thienneymar_wishlist",
      JSON.stringify(currentWishlist),
    );
    alert(`Đã xóa "${product.title}" khỏi Danh sách yêu thích!`);
    return false; // Trả về false nghĩa là đã un-favorite
  } else {
    // Nếu chưa có -> Thêm vào Wishlist
    currentWishlist.push({
      id: product.id,
      title: product.title,
      category: product.category || "Giày Đá Bóng",
      price: product.price,
      originalPrice: product.originalPrice || "",
      inStock: product.inStock !== undefined ? product.inStock : true,
      image: product.image || (product.images && product.images[0]),
    });
    localStorage.setItem(
      "thienneymar_wishlist",
      JSON.stringify(currentWishlist),
    );
    alert(`Đã thêm "${product.title}" vào Danh sách yêu thích!`);
    return true; // Trả về true nghĩa là đã favorite
  }
};

// Hàm kiểm tra xem 1 sản phẩm có nằm trong Wishlist hay không
export const isInWishlist = (productId) => {
  const currentWishlist =
    JSON.parse(localStorage.getItem("thienneymar_wishlist")) || [];
  return currentWishlist.some((item) => item.id === productId);
};
