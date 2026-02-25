import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importations depuis le dossier "pages"
import Home from './pages/home';                
import Register from './pages/Register';        
import Login from './pages/login';              
import VerifyOTP from './pages/VerifyOTP';      
import ForgotPassword from './pages/ForgotPassword'; 
import ResetPassword from './pages/ResetPassword';   
import PasswordChanged from './pages/PasswordChanged'; 
import ProductsPage from './pages/products';

function App() {
  return (
    <Router>
      <Routes>
        {/* Page par défaut */}
        <Route path="/" element={<Home />} />
        
        {/* Les autres routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
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