import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Ajout de l'import

const Navbar = ({ 
  activeIcon, 
  setActiveIcon, 
  activeLink, 
  setActiveLink, 
  cartItemsCount = 0,
  onHeartClick,
  onCartClick 
}) => {
  const { darkMode, toggleDarkMode } = useTheme(); // Ajout de la logique

  const icons = [
    { id: 'moon', icon: Moon, action: toggleDarkMode }, // Action liée ici
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: onHeartClick },
    { id: 'cart', icon: ShoppingCart, action: onCartClick },
    { id: 'user', icon: User }
  ];
  
  const navLinks = ['Home', 'Products', 'About us', 'Contact'];

  const getLinkPath = (item) => {
    switch(item) {
      case 'Products': return '/products';
      case 'Home': return '/';
      case 'About us': return '/about';
      case 'Contact': return '/contact';
      default: return '#';
    }
  };

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
            <Link key={item} to={getLinkPath(item)}>
              <button 
                onMouseEnter={() => setActiveLink && setActiveLink(item)} 
                className={`nav-link-item ${activeLink === item ? 'nav-link-active' : ''}`}
              >
                {item}
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
                // Changement ici : l'icône reste active si le mode sombre est allumé
                className={`icon-box-vid ${ (item.id === 'moon' && darkMode) || activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}
              >
                <item.icon size={18} strokeWidth={2.5} />
                {item.id === 'cart' && cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            ))}
          </div>
          <Link to="/register">
            <button className="btn-signup-vid ml-1 md:ml-2 text-xs md:text-sm">Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;