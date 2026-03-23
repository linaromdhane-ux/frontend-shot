import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = ({ 
  activeIcon, 
  setActiveIcon, 
  activeLink, 
  setActiveLink, 
  cartItemsCount = 0,
  onHeartClick,
  onCartClick 
}) => {
  const { t, i18n } = useTranslation();

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
  
  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.products'), path: '/products' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="desktop-nav fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
      <nav className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
        <Link to="/">
          <div className="flex-shrink-0">
            <img src="/images/shot2.png" alt="S.HOT" className="h-7 md:h-9 w-auto cursor-pointer" />
          </div>
        </Link>
        
        <div className="flex items-center gap-10" onMouseLeave={() => setActiveLink && setActiveLink(null)}>
          {navLinks.map((item) => (
            <Link key={item.path} to={item.path}>
              <button 
                onMouseEnter={() => setActiveLink && setActiveLink(item.label)} 
                className={`nav-link-item ${activeLink === item.label ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1">
            {icons.map((item) => (
              <div 
                key={item.id} 
                onClick={() => { 
                  setActiveIcon && setActiveIcon(item.id); 
                  if(item.action) item.action(); 
                }} 
                className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}
                title={item.id === 'globe' ? (i18n.language === 'fr' ? 'Switch to English' : 'Passer en Français') : undefined}
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
          <Link to="/register">
            <button className="btn-signup-vid ml-1 md:ml-2 text-xs md:text-sm">{t('nav.signUp')}</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;