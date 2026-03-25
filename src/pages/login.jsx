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
        <div className="mb-8 h-7 flex items-center justify-center">
          <img src="/images/logo_SHOT.png" alt="Logo" className="h-full w-auto object-contain" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('login_welcome')}</h1>
          <p className="text-[#333333] text-sm font-medium leading-relaxed max-w-[500px] mx-auto opacity-90">
            {t('login_subtitle')}
          </p>
        </div>
        
        <div className="w-full space-y-5">
          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-gray-700 ml-1">{t('email_label')}</label>
            <input type="email" placeholder={t('email_placeholder')} className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm" />
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-sm font-medium text-gray-700 ml-1">{t('password_label')}</label>
            <input type="password" placeholder="*******************" className="w-full p-4 rounded-2xl border border-gray-100 bg-white/70 outline-none focus:ring-2 focus:ring-[#108a78]/20 focus:border-[#108a78] transition-all shadow-sm" />
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm font-medium text-[#72b5a4] hover:text-[#108a78] mt-2 inline-block">
                {t('forgot_password_link')}
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <ActionButton className="mt-4 font-montserrat">Login</ActionButton>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="mx-4 text-black-400 text-sm uppercase tracking-widest">{t('or_divider')}</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <div className="flex justify-center">
            <a href="http://localhost:5000/api/auth/google" className="w-full text-center">
              <Button variant="secondary" className="w-full border border-gray-100 bg-white/80 hover:bg-white flex items-center justify-center p-4">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
              </Button>
            </a>
          </div>

          <div className="mt-8 text-center text-sm font-medium">
            <span className="text-black-500">{t('no_account')} </span>
            <Link to="/register" className="text-[#108a78] font-bold hover:underline ml-1">{t('signup_link')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;