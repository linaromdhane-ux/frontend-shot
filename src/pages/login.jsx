import { Link } from 'react-router-dom';
import { BackToHomeButton, ActionButton } from '../components/Button';

const Login = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* --- Bouton Back to Home --- */}
      <BackToHomeButton />

      <div className="w-full max-w-[500px] flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 h-7 flex items-center justify-center">
          <img src="/images/logo_SHOT.png" alt="Logo" className="h-full w-auto object-contain" />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight font-montserrat">Welcome Back !</h1>
          <p className="text-[#333333] text-sm font-medium leading-relaxed max-w-[500px] mx-auto opacity-90 font-montserrat">
            Start your wellness journey with SHOT and enjoy a personalized experience made for your lifestyle.
          </p>
        </div>
        
        <div className="w-full space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5 text-left font-montserrat">
            <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm font-montserrat" 
            />
          </div>

          {/* Password Input + Forgot Password */}
          <div className="space-y-1.5 text-left font-montserrat">
            <div className="flex justify-between">
               <label className="text-sm font-medium text-gray-700 ml-1 font-montserrat">Password</label>
            </div>
            <input 
              type="password" 
              placeholder="*******************" 
              className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm font-montserrat" 
            />
            <div className="text-right">
              <Link 
                to="/forgot-password" 
                className="text-sm font-medium text-[#72b5a4] hover:text-[#108a78] mt-2 font-montserrat inline-block"
              >
                Forgot Password ?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <ActionButton className="mt-4 font-montserrat">Login</ActionButton>

          {/* Divider */}
          <div className="relative flex items-center py-4 font-montserrat">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="mx-4 text-black-400 text-sm font-montserrat uppercase tracking-widest">Or</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          {/* Social Icons - Google Only with Backend Link */}
          <div className="flex justify-center">
            <a href="http://localhost:5000/api/auth/google" className="w-full">
              <button className="w-full flex items-center justify-center p-4 border border-gray-100 rounded-2xl bg-white/80 hover:bg-white shadow-sm transition-all">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
              </button>
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm font-medium font-montserrat">
            <span className="text-black-500 font-montserrat">Don't have an account? </span>
            <Link to="/register" className="text-[#108a78] font-bold hover:underline ml-1 font-montserrat">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;