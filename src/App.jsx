import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import ScrollToTop from './ScrollToTop';

// PAGES EXISTANTES
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
import Checkout from './pages/Checkout';

// PAGES PROFIL
import Profile from './pages/Profile'; 
import EditProfile from './pages/editProfile'; 

// PAGE ADMIN
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider> 
          <ScrollToTop />
          <Routes>
            {/* ACCUEIL */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/* BOUTIQUE */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* INFORMATION */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            {/* AUTHENTIFICATION */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/password-changed" element={<PasswordChanged />} />
            <Route path="/auth-gateway" element={<AuthGateway />} />

            {/* PROFIL */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />

            {/* ADMIN DASHBOARD */}
            <Route path="/admin" element={<AdminDashboard />} />

          </Routes>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;