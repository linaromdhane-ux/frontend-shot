import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import pour la traduction

const AuthGateway = () => {
  const { t } = useTranslation();
  const [isBackHovered, setIsBackHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // On récupère la page d'origine pour y retourner après connexion
  const from = location.state?.from?.pathname || "/home";

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* --- Bouton Back to Home --- */}
      <div className="absolute top-8 left-8">
        <Link 
          to="/home"
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          className={`
            flex items-center bg-[#29ac96] text-white shadow-lg 
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
            ${isBackHovered ? 'w-[200px] h-12 rounded-full px-4' : 'w-12 h-12 rounded-2xl justify-center'}
          `}
        >
          <div className="relative w-8 h-6 shrink-0 flex items-center justify-center">
            {/* Barre + Flèche */}
            <div className={`absolute flex items-center transition-all duration-500 ease-out ${isBackHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="w-[2px] h-4 bg-white rounded-full mr-[2px]"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>

            {/* Icône Maison */}
            <div className={`absolute transition-all duration-500 ease-in ${isBackHovered ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 19.875v-6.198c.03-.028.06-.056.091-.086L12 5.432z" />
              </svg>
            </div>
          </div>
          <div className={`transition-all duration-500 overflow-hidden ${isBackHovered ? 'max-w-[140px] ml-4 opacity-100' : 'max-w-0 opacity-0 ml-0'}`}>
            <span className="font-bold whitespace-nowrap text-base font-montserrat">
              {t('back_home', 'Back to Home')}
            </span>
          </div>
        </Link>
      </div>

      {/* --- CARD DE SELECTION --- */}
      <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-lg w-full text-center flex flex-col items-center">
        
        {/* Logo Image */}
        <div className="mb-8 w-36 cursor-pointer" onClick={() => navigate('/home')}>
          <img 
            src="/images/logo_SHOT.png" 
            alt="S.HOT Logo" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Icône CircleUser */}
        <div className="mb-8 text-[#238d7b]">
          <CircleUser size={100} strokeWidth={1.2} />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4 px-4 leading-tight">
          {t('auth_gateway_title', 'One step closer to your glow !')}
        </h2>
        
        <p className="text-gray-500 text-sm mb-10 leading-relaxed px-6 font-medium">
          {t('auth_gateway_subtitle', 'Create your S.HOT account in seconds to secure your order and track your vitality journey.')}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full px-2">
          <button 
            onClick={() => navigate('/login', { state: { from } })}
            className="flex-1 bg-[#238d7b] text-white font-bold py-4 rounded-full hover:bg-[#1a6e60] transition-all shadow-lg shadow-[#238d7b]/20 active:scale-95"
          >
            {t('login', 'Login')}
          </button>
          <button 
            onClick={() => navigate('/register', { state: { from } })}
            className="flex-1 border-2 border-[#238d7b] text-[#238d7b] font-bold py-4 rounded-full hover:bg-[#238d7b]/5 transition-all active:scale-95"
          >
            {t('signup', 'Sign Up')}
          </button>
        </div>

        {/* Bouton Cancel */}
        <button 
          onClick={() => navigate(-1)}
          className="mt-8 text-gray-400 font-bold hover:text-gray-700 transition-colors text-sm uppercase tracking-wider"
        >
          {t('cancel', 'Cancel')}
        </button>
      </div>
    </div>
  );
};

export default AuthGateway;