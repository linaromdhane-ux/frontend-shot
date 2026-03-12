import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import ScrollToTop from './ScrollToTop';
import Home from './pages/home';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import VerifyOTP from './pages/VerifyOTP';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PasswordChanged from './pages/PasswordChanged';
import AuthGateway from './pages/AuthGateway'; 
import Checkout from './pages/Checkout'; // <--- VERIFIE BIEN CETTE LIGNE

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider> 
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/password-changed" element={<PasswordChanged />} />
            
            {/* Les deux routes pour le tunnel d'achat */}
            <Route path="/auth-gateway" element={<AuthGateway />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;