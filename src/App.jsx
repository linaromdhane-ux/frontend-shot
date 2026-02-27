import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


function App() {
  return (
    <Router>
      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        
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