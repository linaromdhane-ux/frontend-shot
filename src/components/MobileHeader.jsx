import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MobileHeader = ({ 
  activeIcon, 
  setActiveIcon, 
  cartItemsCount = 0,
  onHeartClick,
  onCartClick,
  onMenuClick 
}) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: null, action: toggleLanguage },
    { id: 'heart', icon: Heart, action: onHeartClick },
    { id: 'cart', icon: ShoppingCart, action: onCartClick },
    { id: 'user', icon: User }
  ];

  return (
    <div className="mobile-header fixed top-0 left-0 z-[100] w-full">
      <Link to="/">
        <img src="/images/shot2.png" alt="S.HOT" style={{ height: '32px' }} />
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {icons.map((item) => (
            <div 
              key={item.id} 
              onClick={() => { 
                setActiveIcon && setActiveIcon(item.id); 
                if(item.action) item.action(); 
              }} 
              className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}
            >
              {item.id === 'globe' ? (
                <span className="text-[11px] font-bold uppercase">{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
              ) : (
                <item.icon size={18} strokeWidth={2.5} />
              )}
              {item.id === 'cart' && cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </div>
          ))}
        </div>
        <button className="icon-box-vid" onClick={onMenuClick}>
          <Menu size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;