import { Link } from 'react-router-dom';
import { BackToHomeButton, ActionButton } from '../components/Button';

const ResetPassword = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* --- Bouton Back to Home --- */}
      <BackToHomeButton />

      <div className="w-full max-w-[500px] bg-white rounded-[40px] p-10 shadow-sm flex flex-col items-center border border-gray-100 text-center">
        {/* Logo */}
        <div className="mb-10 h-7">
          <img src="/images/logo_SHOT.png" alt="S.HOT Logo" className="h-full w-auto" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t('reset_password_title')}
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          {t('reset_password_subtitle')}
        </p>

        <div className="w-full space-y-6 text-left">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              {t('new_password_label')}
            </label>
            <input 
              type="password" 
              placeholder="**************" 
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:border-[#0a9382] transition-all" 
            />
          </div>

          <p className="text-sm font-medium text-gray-700 ml-1">
            {t('password_strength')}
          </p>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 ml-1">
              {t('re_enter_password_label')}
            </label>
            <input 
              type="password" 
              placeholder="**************" 
              className="w-full p-4 rounded-2xl border border-gray-200 outline-none focus:border-[#0a9382] transition-all" 
            />
          </div>

          {/* Bouton Save */}
          <Link to="/password-changed" className="block w-full pt-4">
            <ActionButton>Save</ActionButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;