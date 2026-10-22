import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Sale from "../Pages/Sale/Sale";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import Auth from "../Pages/Auth/Auth";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";
import BlogPage from "../Pages/Blog/Blog";
import BlogDetail from "../Components/Blog/BlogDetail";
import AboutPage from "../Pages/About/About";
import ContactPage from "../Pages/Contact/Contact";
import ProductDetailPage from "../Pages/ProductDetail/ProductDetail";
import CartPage from "../Pages/Cart/Cart";
import CheckoutPage from "../Pages/Checkout/Checkout";
import WishlistPage from "../Pages/Wishlist/Wishlist";

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        {/* Route cho Shop */}
        <Route path="/shop" element={<Shop />} />

        {/* Route cho Sale */}
        <Route path="/sale" element={<Sale />} />
        {/* Route cho Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        {/* Route cho About */}
        <Route path="/about" element={<AboutPage />} />
        {/* Route cho Contact */}
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/wishlist" element={<WishlistPage />} />

        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* not found routes */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* footer component */}
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
