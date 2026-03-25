import { Link } from 'react-router-dom';
import { BackToHomeButton, ActionButton } from '../components/Button';

const Register = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* Bouton Back to Home */}
      <BackToHomeButton />

      <div className="w-full max-w-[500px] flex flex-col items-center">
        <div className="mb-8 h-7 flex items-center justify-center">
          <img src="/images/logo_SHOT.png" alt="Logo" className="h-full w-auto object-contain" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Create Account</h1>
          <p className="text-[#333333] text-sm font-medium leading-relaxed max-w-[500px] mx-auto opacity-90">
            Join SHOT today and start your personalized wellness journey.
          </p>
        </div>
        
        <div className="w-full space-y-5">
          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
            <input type="text" placeholder="Enter your full name..." className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm" />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
            <input type="email" placeholder="Enter your email..." className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm" />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
            <input type="password" placeholder="*******************" className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm" />
          </div>

          <ActionButton className="mt-4">Create Account</ActionButton>

          <div className="mt-8 text-center text-sm font-medium">
            <span className="text-black-500">Already have an account? </span>
            <Link to="/login" className="text-[#108a78] font-bold hover:underline ml-1">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;