import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackToHomeButton, ActionButton } from '../components/Button';

const ForgotPassword = () => {
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* Bouton Back to Home */}
      <BackToHomeButton />

      <div className="w-full max-w-[500px] bg-white rounded-[40px] p-10 shadow-sm flex flex-col items-center border border-gray-100 text-center">
        {/* Logo */}
        <div className="mb-10 h-7">
          <img src="/images/logo_SHOT.png" alt="S.HOT Logo" className="h-full w-auto" />
        </div>
        
        <div className="mb-8">
          <div className="w-28 h-28 flex items-center justify-center">
            <img 
              src="/images/Group.png" 
              alt="Security Illustration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('forgot_title')}</h1>
        <p className="text-gray-500 text-sm mb-10 px-4">{t('forgot_subtitle')}</p>

        <div className="w-full space-y-6 text-left">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">{t('email_label')}</label>
            <input 
              type="email" 
              placeholder={t('email_placeholder')}
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:border-[#0a9382] transition-all" 
            />
          </div>
          
          <Link to="/verify-otp" className="block w-full">
            <ActionButton>Send Mail</ActionButton>
          </Link>

          <div className="text-center pt-2">
            <Link 
              to="/login" 
              onMouseEnter={() => setIsHoveredBack(true)}
              onMouseLeave={() => setIsHoveredBack(false)}
              className="text-gray-600 text-sm font-semibold hover:text-[#45b5a8] flex items-center justify-center gap-0.5 transition-all"
            >
              <div className={`flex items-center transition-all duration-300 ${isHoveredBack ? 'opacity-100 -translate-x-0.5' : 'opacity-0 translate-x-1'}`}>
                <span className="h-4 w-[2px] bg-[#45b5a8] rounded-full mr-0.5 inline-block"></span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </div>
              <span className={`transition-all duration-300 ${isHoveredBack ? 'translate-x-0.5' : 'translate-x-0'}`}>
                {t('back_login')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;