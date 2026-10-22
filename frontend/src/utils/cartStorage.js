// src/utils/cartStorage.js

export const addToCart = (product, selectedSize = "41", quantity = 1) => {
  // Lấy giỏ hàng từ localStorage (nếu chưa có thì tạo mảng rỗng [])
  const currentCart =
    JSON.parse(localStorage.getItem("thienneymar_cart")) || [];

  // Ép giá về dạng số (ví dụ "2.890.000đ" -> 2890000)
  const numericPrice =
    typeof product.price === "number"
      ? product.price
      : parseInt(product.price.toString().replace(/[^0-9]/g, ""), 10);

  // Kiểm tra sản phẩm đã có trong giỏ chưa (trùng ID và trùng Size)
  const existingIndex = currentCart.findIndex(
    (item) => item.id === product.id && item.size === selectedSize,
  );

  if (existingIndex > -1) {
    // Nếu có rồi -> Tăng số lượng
    currentCart[existingIndex].quantity += quantity;
  } else {
    // Nếu chưa có -> Thêm sản phẩm mới vào
    currentCart.push({
      id: product.id,
      title: product.title,
      size: selectedSize,
      price: numericPrice,
      quantity: quantity,
      image: product.image,
    });
  }

  // Lưu vào localStorage
  localStorage.setItem("thienneymar_cart", JSON.stringify(currentCart));

  // Thông báo phản hồi cho người dùng
  alert(`Đã thêm "${product.title}" (Size: ${selectedSize}) vào giỏ hàng!`);
};
