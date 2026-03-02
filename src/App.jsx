import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import du composant ScrollToTop (Assure-toi que le chemin est correct)
import ScrollToTop from './ScrollToTop';

// Importations depuis le dossier "pages"
import Home from './pages/home';                
import Register from './pages/Register';        
import Login from './pages/Login';              
import VerifyOTP from './pages/VerifyOTP';      
import ForgotPassword from './pages/ForgotPassword'; 
import ResetPassword from './pages/ResetPassword';   
import PasswordChanged from './pages/PasswordChanged'; 
import Products from './pages/products';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      {/* 
         C'est ici que la magie opère ! 
         Cela force la page à remonter en haut à chaque changement de route.
      */}
      <ScrollToTop />

      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* Authentication routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
      </Routes>
    </Router>
  );
}

export default App;