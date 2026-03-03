import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, User, Moon, Globe, X, Play, Leaf, Recycle, HeartHandshake, Facebook, Instagram, Youtube, Menu } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [activeValueCard, setActiveValueCard] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const closeSidebars = () => { 
    setIsWishlistOpen(false); 
    setIsShopOpen(false); 
    setActiveIcon(null); 
    setIsMobileMenuOpen(false);
  };
  const handleSubscribe = () => { if (subscribeEmail.trim()) { setShowSubscribeModal(true); setSubscribeEmail(''); } };

  const navLinks = ['Home', 'Products', 'About us', 'Contact'];
  const icons = [
    { id: 'moon', icon: Moon },
    { id: 'globe', icon: Globe },
    { id: 'heart', icon: Heart, action: () => { setIsWishlistOpen(true); setIsShopOpen(false); } },
    { id: 'cart', icon: ShoppingCart, action: () => { setIsShopOpen(true); setIsWishlistOpen(false); } },
    { id: 'user', icon: User }
  ];

  const values = [
    {
      id: 1,
      icon: <Leaf size={32} strokeWidth={2} />,
      title: "Uncompromising Purity",
      text: "100% natural, organic, and pesticide-free spirulina.",
      color: "#0f766e"
    },
    {
      id: 2,
      icon: <Recycle size={32} strokeWidth={2} />,
      title: "Planet-First Vision",
      text: "Sustainably sourced to protect your health and the planet.",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: <HeartHandshake size={32} strokeWidth={2} />,
      title: "Nutritional Excellence",
      text: "Packed with natural protein and nutrients for your daily boost.",
      color: "#f59e0b"
    }
  ];

  const testimonials = [
    {
      name: "Michael T",
      role: "Health Coach",
      stars: 5,
      text: "The Daily Boost Bundle is perfect for my lifestyle. I take the capsules during the week and use the powder in my smoothies on weekends. Great value and results!"
    },
    {
      name: "Sarah J",
      role: "Fitness Enthusiast",
      stars: 5,
      text: "I've tried many spirulina products before, but SHOT is by far the best quality. I've noticed a significant boost in my energy levels since I started taking it."
    },
    {
      name: "Alex R",
      role: "Professional Athlete",
      stars: 5,
      text: "As an athlete, I'm very careful about what supplements I use. SHOT's transparency about their sourcing and testing gave me confidence, and the results speak for themselves."
    }
  ];

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] overflow-x-hidden">
      {/* BACKGROUND IMAGE SIGN UP POUR TOUTE LA PAGE */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/Sign Up.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* OVERLAY LÉGER */}
      <div className="fixed inset-0 z-0 bg-white/40" />

      {/* CONTENU */}
      <div className="relative z-10">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
          * { font-family:'Montserrat',sans-serif; }

          .nav-fixed-video { background-color:rgba(45,75,68,.85); height:75px; backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); }
          .nav-link-item { color:white; opacity:.8; font-weight:600; font-size:15px; transition:all .3s ease; cursor:pointer; }
          .nav-link-item:hover { opacity:1; text-shadow:0 0 8px rgba(255,255,255,.5); }
          .icon-box-vid { width:44px; height:44px; display:flex; align-items:center; justify-content:center; border-radius:14px; transition:all .2s ease; color:white; cursor:pointer; position:relative; }
          .icon-box-vid:hover,.icon-box-active { background-color:white !important; color:#238d7b !important; transform:translateY(-2px); }
          .btn-signup-vid { background-color:white; color:#238d7b; font-weight:700; font-size:14px; height:42px; padding:0 25px; border-radius:50px; border:2px solid white; transition:all .3s ease; cursor:pointer; }
          .btn-signup-vid:hover { background-color:#238d7b; color:white !important; }

          /* MOBILE HEADER */
          .mobile-header {
            display: none;
          }
          @media (max-width: 1023px) {
            .mobile-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: rgba(45,75,68,.85);
              height: 70px;
              backdrop-filter: blur(12px);
              padding: 0 20px;
              border-bottom: 1px solid rgba(255,255,255,.1);
            }
            .desktop-nav {
              display: none !important;
            }
          }

          /* MOBILE MENU */
          .mobile-menu-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(4px);
            z-index: 250;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .mobile-menu-overlay.open {
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 280px;
            height: 100vh;
            background: linear-gradient(135deg, #238d7b 0%, #1a6e60 100%);
            z-index: 300;
            padding: 30px 20px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            box-shadow: -5px 0 25px rgba(0,0,0,0.3);
          }
          .mobile-menu.open {
            transform: translateX(0);
          }

          .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
          .mobile-menu-close {
            width: 36px;
            height: 36px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .mobile-menu-close:hover {
            background: white;
            transform: rotate(90deg);
          }
          .mobile-menu-close:hover svg {
            color: #238d7b;
          }

          .mobile-menu-links {
            display: flex;
            flex-direction: column;
            gap: 5px;
            flex: 1;
          }
          .mobile-menu-link {
            color: white;
            font-size: 17px;
            font-weight: 600;
            padding: 14px 18px;
            border-radius: 12px;
            background: rgba(255,255,255,0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            display: block;
          }
          .mobile-menu-link:hover {
            background: white;
            color: #238d7b;
            transform: translateX(5px);
          }

          .mobile-menu-footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.2);
          }
          .mobile-signup-btn {
            width: 100%;
            background: white;
            color: #238d7b;
            padding: 14px;
            border-radius: 12px;
            font-weight: 700;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: block;
            text-align: center;
          }
          .mobile-signup-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* HERO CARD STYLES - VERSION PROFESSIONNELLE */
          .hero-card-container {
            width: 100%;
            max-width: 1440px;
            height: 340px;
            background-image: url('/images/p6.png');
            background-size: cover;
            background-position: center;
            position: relative;
            margin: 40px auto;
            border-radius: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(15, 118, 110, 0.15);
          }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(15, 118, 110, 0.35) 0%, rgba(15, 118, 110, 0.28) 100%);
          }

          .hero-content {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 92%;
            height: 100%;
            gap: 50px;
          }

          .hero-logo-wrapper {
            flex: 0 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: -5mm;
          }
          
          .hero-logo-img {
            height: 60px;
            width: auto;
            display: block;
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
          }

          .hero-divider {
            width: 2px;
            height: 130px;
            background: linear-gradient(to bottom, 
              rgba(255, 255, 255, 0.2) 0%,
              rgba(255, 255, 255, 0.9) 50%,
              rgba(255, 255, 255, 0.2) 100%
            );
            border-radius: 2px;
          }

          .hero-text-wrapper {
            flex: 1;
            max-width: 620px;
          }

          .hero-text-p {
            color: white;
            font-size: 19px;
            line-height: 1.65;
            font-weight: 500;
            letter-spacing: 0.3px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            text-align: left;
          }

          .value-card {
            background: white;
            border-radius: 24px;
            padding: 40px 20px;
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: all 0.3s ease;
            cursor: pointer;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .value-card:hover, .value-card.active {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border-color: transparent;
          }
          .value-icon-box {
            width: 70px;
            height: 70px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: white;
            transition: all 0.3s ease;
          }
          
          .testimonial-card {
            background-color: #0f766e;
            color: white;
            border-radius: 24px;
            padding: 35px;
            text-align: left;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .testimonial-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
          }
          .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.2);
            display:flex; align-items:center; justify-content:center;
            font-weight:700;
          }
          
          .video-section {
            position: relative;
            height: 400px;
            border-radius: 30px;
            overflow: hidden;
            margin-top: 40px;
          }
          .video-bg { width: 100%; height: 100%; object-fit: cover; }
          .play-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; }
          .play-btn { width: 80px; height: 80px; border-radius: 50%; background: #f59e0b; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: transform 0.2s; }
          .play-btn:hover { transform: scale(1.1); }

          .stay-ahead-container { 
            position: relative; 
            padding: 50px 40px; 
            margin-top: 0px; 
          }
          .stay-ahead-overlay { position: absolute; inset: 0; background: transparent; }
          .stay-ahead-content { position: relative; z-index: 10; text-align: center; }
          .stay-ahead-title { font-size: clamp(24px, 5vw, 48px); font-weight: 800; letter-spacing: -0.5px; line-height: 1.2; color: #0d4a3e; }

          .footer-container { background: radial-gradient(circle at top right, #1f7a6a 0%, #0d4a3e 100%); color: white; padding: 65px 0 35px; }
          .footer-top { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 35px; max-width: 1200px; margin: 0 auto; padding: 0 35px; margin-bottom: 45px; }
          .footer-col h3 { font-size: 15px; font-weight: 700; color: white; margin-bottom: 18px; }
          .footer-col ul { list-style: none; padding: 0; margin: 0; }
          .footer-col ul li { margin-bottom: 9px; }
          .footer-col ul li a { color: rgba(255,255,255,0.72); text-decoration: none; font-size: 13px; transition: color .3s ease; cursor:pointer; font-weight:500; }
          .footer-col ul li a:hover { color: white; }
          .footer-logo { margin-bottom: 20px; }
          .footer-logo img { height: 45px; width: auto; }
          .footer-description { font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.6; margin-bottom: 24px; }
          .footer-contact { display: flex; align-items: center; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.75); margin-bottom: 12px; }
          .footer-contact svg { width: 18px; height: 18px; flex-shrink: 0; }
          .footer-divider { border-top: 1px solid rgba(255,255,255,0.1); max-width: 1200px; margin: 0 auto; padding: 0 35px; margin-bottom: 30px; }
          .footer-bottom { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 35px; flex-wrap: wrap; gap: 20px; }
          .footer-copyright { color: rgba(255,255,255,0.60); font-size: 13px; }
          .footer-socials { display: flex; gap: 25px; }
          .footer-socials a { color: rgba(255,255,255,0.80); cursor: pointer; transition: color .3s ease; }
          .footer-socials a:hover { color: white; }

          @media (max-width: 1024px) {
            .hero-content { gap: 35px; width: 90%; }
            .hero-text-p { font-size: 17px; }
            .hero-logo-img { height: 52px; }
            .hero-divider { height: 110px; }
          }

          @media (max-width: 768px) {
            .hero-card-container { height: auto; padding: 50px 0; }
            .hero-content { flex-direction: column; text-align: center; gap: 25px; }
            .hero-divider { width: 70px; height: 2px; } 
            .hero-logo-wrapper { margin-left: 0; }
            .hero-logo-img { height: 48px; }
            .hero-text-wrapper { text-align: center; }
            .hero-text-p { font-size: 16px; text-align: center; }
          }
        `}</style>

        {/* MOBILE MENU OVERLAY */}
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <img src="/images/shot2.png" alt="S.HOT" style={{ height: '35px' }} />
            <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={18} color="white" />
            </button>
          </div>

          <div className="mobile-menu-links">
            {navLinks.map((item) => {
              const linkPath = item === 'Products' ? '/products' : item === 'Home' ? '/' : item === 'About us' ? '/about' : item === 'Contact' ? '/contact' : '#';
              return (
                <Link 
                  key={item} 
                  to={linkPath} 
                  className="mobile-menu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="mobile-menu-footer">
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="mobile-signup-btn">Sign Up</div>
            </Link>
          </div>
        </div>

        {/* MOBILE HEADER - UNIQUEMENT SUR MOBILE */}
        <div className="mobile-header fixed top-0 left-0 z-[100] w-full">
          <Link to="/">
            <img src="/images/shot2.png" alt="S.HOT" style={{ height: '32px' }} />
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {icons.map((item) => (
                <div key={item.id} onClick={() => { setActiveIcon(item.id); if(item.action) item.action(); }} className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}>
                  <item.icon size={18} strokeWidth={2.5} />
                </div>
              ))}
            </div>
            <button className="icon-box-vid" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* NAVBAR DESKTOP - UNIQUEMENT SUR DESKTOP */}
        <nav className="desktop-nav fixed top-0 left-0 z-[100] w-full pt-6 px-4 md:px-10 pointer-events-auto">
          <div className="mx-auto max-w-7xl nav-fixed-video rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl">
            <Link to="/"><div className="flex-shrink-0 cursor-pointer"><img src="/images/shot2.png" alt="S.HOT" className="h-7 md:h-9 w-auto" /></div></Link>
            <div className="flex items-center gap-10">
              {navLinks.map((item) => {
                const linkPath = item === 'Products' ? '/products' : item === 'Home' ? '/' : item === 'About us' ? '/about' : item === 'Contact' ? '/contact' : '#';
                return (
                  <Link key={item} to={linkPath}>
                    <button className="nav-link-item">{item}</button>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex items-center gap-1">
                {icons.map((item) => (
                  <div key={item.id} onClick={() => { setActiveIcon(item.id); if(item.action) item.action(); }} className={`icon-box-vid ${activeIcon === item.id ? 'icon-box-active' : 'opacity-80'}`}>
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                ))}
              </div>
              <Link to="/register"><button className="btn-signup-vid ml-1 md:ml-2 text-xs md:text-sm">Sign Up</button></Link>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <div className="pt-32 pb-16 px-4 md:px-6 w-[98%] max-w-[1600px] mx-auto">
          
          {/* SECTION 1: WHO WE ARE */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f766e] mb-4">Who We Are ?</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Discover the power of premium, sustainably sourced spirulina dedicated to your energy and well-being.
            </p>
          </div>

          {/* SECTION 2: HERO BANNER CARD */}
          <div className="hero-card-container">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-logo-wrapper">
                <img src="/images/1.png" alt="S.HOT" className="hero-logo-img" />
              </div>
              <div className="hero-divider"></div>
              <div className="hero-text-wrapper">
                <p className="hero-text-p">
                  Born from the vision of Spiraw, S.HOT was created to bridge the gap between ancient superfoods and modern lifestyle. We specialize in cultivating and delivering premium, organic spirulina of the highest purity.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: OUR VALUES */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-4">Our Values</h2>
            <p className="text-gray-600 mb-12 font-medium">Experience the excellence of biotech innovation merged with nature's most powerful superfood.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {values.map((val) => {
                const isActive = activeValueCard === val.id;
                return (
                  <div 
                    key={val.id} 
                    className={`value-card ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveValueCard(val.id)}
                    onMouseLeave={() => setActiveValueCard(null)}
                    style={isActive ? { backgroundColor: val.color, color: 'white' } : {}}
                  >
                    <div className="value-icon-box" style={{ backgroundColor: isActive ? 'white' : val.color, color: isActive ? val.color : 'white' }}>
                      {val.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                    {isActive && <p className="font-medium text-sm md:text-base leading-relaxed">{val.text}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 4: WHAT'S SPIRULINA */}
          <div className="text-center mb-24 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-4">What's Spirulina ?</h2>
            <p className="text-gray-600 mb-10 font-medium">Deep dive into the nutrient-dense algae that fuels your vitality.</p>
            
            <div className="video-section">
              <img src="/images/Rectangle 39.png" alt="Spirulina Algae" className="video-bg" />
              <div className="play-overlay">
                <div className="play-btn">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-center gap-4 text-white font-mono text-sm">
                <span>02 : 36</span>
                <div className="flex-1 h-1 bg-gray-500 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#f59e0b]"></div>
                </div>
                <span>05 : 02</span>
              </div>
            </div>
          </div>

          {/* SECTION 5: WHAT PEOPLE SAY */}
          <div className="text-center mb-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f766e] mb-4">What People Say</h2>
            <p className="text-gray-600 mb-12 font-medium">Discover the life-changing vitality and health benefits shared by our loyal customers.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                      <p className="text-xs opacity-80">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4 text-[#f59e0b]">
                    {[...Array(t.stars)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-sm italic font-medium leading-relaxed opacity-95">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* JOIN OUR NEWSLETTER */}
        <div className="stay-ahead-container">
          <div className="stay-ahead-overlay"></div>
          <div className="stay-ahead-content max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="stay-ahead-title">Join our Newsletter</h2>
          </div>
        </div>

        {/* NEWSLETTER FORM */}
        <div style={{ background: 'linear-gradient(135deg, #0d3d33 0%, #0f5a47 40%, #0d4a3a 70%, #0a3328 100%)', backgroundImage: "url('/images/NL_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', backgroundImage: "url('/images/NL_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0 }} />
          <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 style={{ color: '#4dd9b8', fontWeight: 700, fontSize: 30, marginBottom: 24 }}>Stay Informed</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 20, lineHeight: 1.7, marginBottom: 15 }}>
                Subscribe to our newsletter to receive health tips, special offers, and new product announcements.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  value={subscribeEmail}
                  onChange={e => setSubscribeEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  style={{
                    flex: '1 1 260px', padding: '15px 22px', borderRadius: 50, border: '2px solid rgba(77,217,184,0.55)',
                    background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 14, outline: 'none', backdropFilter: 'blur(6px)', maxWidth: '400px'
                  }}
                  onFocus={e => e.target.style.borderColor = '#4dd9b8'}
                  onBlur={e => e.target.style.borderColor = 'rgba(77,217,184,0.55)'}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    padding: '15px 34px', borderRadius: 50, background: '#238d7b', color: 'white', fontWeight: 700, fontSize: 15,
                    border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .2s ease, transform .15s ease',
                    boxShadow: '0 6px 20px rgba(35,141,123,0.45)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1a6e60'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#238d7b'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer-container">
          <div className="footer-top">
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/images/shot2.png" alt="S.HOT" />
              </div>
              <p className="footer-description">Premium spirulina products for your health and wellbeing. We're committed to providing the highest quality, sustainably sourced spirulina to support your wellness journey.</p>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>shotpremiumspirulina@gmail.com</span>
              </div>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+216 46 307 550</span>
              </div>
              <div className="footer-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Tunis, Tunisia</span>
              </div>
            </div>
            <div className="footer-col">
              <h3>Shop</h3>
              <ul>
                <li><Link to="/products"><a>All Products</a></Link></li>
                <li><a href="#">Spirulina Powder</a></li>
                <li><a href="#">Spirulina Tablets</a></li>
                <li><a href="#">Spirulina Diamonds</a></li>
                <li><a href="#">Baby S.HOTs</a></li>
                <li><a href="#">Bundles</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><Link to="/contact"><a>Contact Us</a></Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 SHOT. All rights reserved.</p>
            <div className="footer-socials">
              <a href="#" title="Facebook"><Facebook size={22} /></a>
              <a href="#" title="Instagram"><Instagram size={22} /></a>
              <a href="#" title="YouTube"><Youtube size={22} /></a>
              <a href="#" title="Twitter" className="font-bold text-xl">X</a>
            </div>
          </div>
        </footer>

        {/* SUBSCRIBE MODAL */}
        {showSubscribeModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => setShowSubscribeModal(false)}>
            <div style={{ background: 'white', borderRadius: 24, padding: '52px 40px 44px', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}
              onClick={e => e.stopPropagation()}>
              <div style={{ width: 90, height: 90, borderRadius: '50%', border: '3px solid #238d7b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#238d7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 22, color: '#111827', marginBottom: 12 }}>Thank You!</h3>
              <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>Please check your inbox to confirm your subscription.</p>
              <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '16px', borderRadius: 50, background: '#238d7b', color: 'white', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background .2s ease' }}
                onMouseEnter={e => e.currentTarget.style.background = '#1a6e60'}
                onMouseLeave={e => e.currentTarget.style.background = '#238d7b'}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;