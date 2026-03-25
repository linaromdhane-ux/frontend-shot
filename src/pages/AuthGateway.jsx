import { useNavigate } from 'react-router-dom';
import { CircleUser } from 'lucide-react';
import { BackToHomeButton } from '../components/Button';

const AuthGateway = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-montserrat bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* --- Bouton Back to Home --- */}
      <BackToHomeButton />

      {/* --- CARD DE SELECTION --- */}
      <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-lg w-full text-center flex flex-col items-center">
        
        {/* Logo Image */}
        <div className="mb-8 w-36">
          <img 
            src="/images/logo_SHOT.png" 
            alt="S.HOT Logo" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Icône CircleUser demandée */}
        <div className="mb-8 text-[#238d7b]">
          <CircleUser size={100} strokeWidth={1.2} />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4 px-4 leading-tight">
          One step closer to your glow !
        </h2>
        
        <p className="text-gray-500 text-sm mb-10 leading-relaxed px-6 font-medium">
          Create your S.HOT account in seconds to secure your order and track your vitality journey.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full px-2">
          <button 
            onClick={() => navigate('/login')}
            className="flex-1 bg-[#238d7b] text-white font-bold py-4 rounded-full hover:bg-[#1a6e60] transition-all shadow-lg shadow-[#238d7b]/20 active:scale-95"
          >
            Login
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="flex-1 border-2 border-[#238d7b] text-[#238d7b] font-bold py-4 rounded-full hover:bg-[#238d7b]/5 transition-all active:scale-95"
          >
            Sign Up
          </button>
        </div>

        {/* Bouton Cancel */}
        <button 
          onClick={() => navigate(-1)}
          className="mt-8 text-gray-400 font-bold hover:text-gray-700 transition-colors text-sm uppercase tracking-wider"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AuthGateway;