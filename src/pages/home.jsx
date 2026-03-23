import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Heart, ShoppingCart, User, Moon, Globe, X, Trash2,
  ShieldCheck, Zap, Headset, Leaf, Facebook, Instagram, Youtube, Twitter, Menu
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Navbar from '../components/Navbar';
import MobileHeader from '../components/MobileHeader';
import MobileMenu from '../components/MobileMenu';
import WishlistSidebar from '../components/WishlistSidebar';
import ShopSidebar from '../components/ShopSidebar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // ── Wishlist from context (shared across all pages) ──────────────────────
  const { wishlistItems, isClearing, toggleWishlist, removeItem, clearAll, isInWishlist } = useWishlist();

  // ── Cart from context (shared across all pages) ───────────────────────────
  const {
    cartItems,
    isWishlistOpen,
    isShopOpen,
    addToCart,
    addToShop,
    openWishlist,
    openShop,
    closeSidebars,
  } = useCart();

  const words = [t('home.words')];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const bannerData = [
    { text: t('home.banner0'), color: "bg-[#f39c12]", icon: <Zap size={32} strokeWidth={3} /> },
    { text: t('home.banner1'), color: "bg-[#a855f7]", icon: <ShieldCheck size={32} strokeWidth={3} /> },
    { text: t('home.banner2'), color: "bg-[#2980b9]", icon: <Headset size={32} strokeWidth={3} /> },
    { text: t('home.banner3'), color: "bg-[#16a085]", icon: <Leaf size={32} strokeWidth={3} /> }
  ];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  const products = [
    {
      id: 101,
      name: 'Spirulina Powder',
      description: 'Premium organic spirulina Powder 100g',
      price: '59,000 DT',
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (50 available)',
      rating: 4,
      img: '/images/p1.png',
    },
    {
      id: 102,
      name: 'Spirulina Diamonds',
      description: 'Premium organic spirulina in easy-to-take tablets. 100g (+200)',
      price: '59,000 DT',
      badge: 'Best Seller',
      badgeColor: '#2563eb',
      stock: 'In Stock (20 available)',
      rating: 4,
      img: '/images/p2.png',
    },
    {
      id: 103,
      name: 'Baby S.HOTs',
      description: 'Premium organic spirulina in easy baby Shots format.',
      price: '59,000 DT',
      badge: 'New',
      badgeColor: '#22c55e',
      stock: 'In Stock (25 available)',
      rating: 4,
      img: '/images/p3.jpg',
    },
  ];

  const openProductDetails = (product) => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  const handleSubscribe = () => {
    if (subscribeEmail.trim()) { setShowSubscribeModal(true); setSubscribeEmail(''); }
  };

  const handleTyping = useCallback(() => {
    const fullText = words[index];
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setSpeed(150);
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setSpeed(100);
    }
    if (!isDeleting && displayText === fullText) setTimeout(() => setIsDeleting(true), 1500);
    else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % (words.length || 1));
    }
  }, [displayText, isDeleting, index, words]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [handleTyping, speed]);

  const handleCloseSidebars = () => {
    closeSidebars();
    setActiveIcon(null);
    setIsMobileMenuOpen(false);
  };

  const whyCards = [
    {
      id: 0, title: t('home.card0Title'),
      description: t('home.card0Desc'),
      activeColor: "#16a085", iconBg: "#16a085",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>),
    },
    {
      id: 1, title: t('home.card1Title'),
      description: t('home.card1Desc'),
      activeColor: "#a855f7", iconBg: "#a855f7",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
    },
    {
      id: 2, title: t('home.card2Title'),
      description: t('home.card2Desc'),
      activeColor: "#f39c12", iconBg: "#f39c12",
      icon: (<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="20" y2="4"/><path d="M8.5 8.5L4 4"/><path d="M15.5 15.5L20 20"/><path d="M4 20l4-4"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/></svg>),
    },
  ];

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg key={i} width="17" height="17" viewBox="0 0 24 24"
        fill={i < rating ? "#f39c12" : "none"}
        stroke={i < rating ? "#f39c12" : "#d1d5db"}
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));

  const influencers = [
    { name: 'Lina B',  role: 'Pro Athlete',      initials: 'LB' },
    { name: 'Adam L',  role: 'Music Teacher',     initials: 'AL' },
    { name: 'Emma D',  role: 'Fashion Designer',  initials: 'ED' },
    { name: 'Sarah K', role: 'Influencer',        initials: 'SK' },
    { name: 'Alex M',  role: 'Padel Coach',       initials: 'AM' },
  ];

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] bg-[#0c1312] overflow-x-hidden">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* ── WISHLIST SIDEBAR (context) ── */}
      <WishlistSidebar
        isOpen={isWishlistOpen}
        onClose={handleCloseSidebars}
        wishlistItems={wishlistItems}
        isClearing={isClearing}
        onAddToShop={addToShop}
        onRemoveItem={removeItem}
        onClearAll={clearAll}
      />

      <ShopSidebar isOpen={isShopOpen} onClose={handleCloseSidebars} cartItems={cartItems} />

      {(isWishlistOpen || isShopOpen || isMobileMenuOpen) && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={handleCloseSidebars} />
      )}

      <MobileHeader
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        cartItemsCount={cartItems.length}
        onHeartClick={openWishlist}
        onCartClick={openShop}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
      <Navbar
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        cartItemsCount={cartItems.length}
        onHeartClick={openWishlist}
        onCartClick={openShop}
      />

      {/* HERO */}
      <header className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 39.png')" }}>
        <div className="relative z-20 container mx-auto md:px-15 pt-48 md:pt-56 text-white">
          <div className="flex items-center gap-3 mb-6 bg-gray-950/70 w-fit px-4 py-2.5 md:py-3 rounded-full backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 bg-[#238d7b] rounded-full relative flex items-center justify-center"><div className="absolute w-full h-full bg-[#238d7b] rounded-full animate-ping opacity-75"></div></div>
            <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] opacity-90">{t('home.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-[1.1]">
            {t('home.heroTitle1')} <br /> 
            {t('home.heroTitle2')} <span className="text-[#238d7b] font-kemangi text-6xl md:text-9xl ml-2 md:ml-4 inline-block">
              {displayText}<span className="animate-pulse text-white/50 font-sans text-3xl md:text-5xl ml-1">|</span>
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 mt-12 md:mt-16">
            <Link to="/products">
              <button className="bg-[#238d7b] text-white px-9 py-4 rounded-full font-extrabold flex items-center gap-4 transition-all shadow-[0_0_25px_rgba(35,141,123,0.5)] pointer-events-auto group hover:bg-[#1f7a6a] active:!bg-[#47cab4] active:scale-95">
                {t('home.shopNow')}
                <span className="bg-white text-[#238d7b] rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </button>
            </Link>
            <button className="group bg-white text-black border border-black/10 px-9 py-4 rounded-full font-bold flex items-center gap-3 transition-all pointer-events-auto hover:bg-gray-100 active:!bg-[#238d7b] active:!text-white active:scale-95">
              {t('home.joinCommunity')}
              <svg className="text-[#0e8471] group-active:!text-white transition-colors" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.032 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.314l.542 1.312c.058.14.096.303.003.488l-.204.412c-.09.13-.184.216-.08.396.104.18.459.758.986 1.225.679.602 1.252.788 1.432.874.18.086.285.071.39-.051.105-.122.446-.519.563-.695.117-.175.234-.145.391-.087l1.314.618c.157.073.262.111.3.173.038.063.038.36-.106.765zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.957-1.302C8.36 21.528 10.103 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.166-.431-4.492-1.182l-.322-.182-2.413.634.646-2.355-.2-.318A7.953 7.953 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute right-[-5%] md:right-[-2%] bottom-0 w-[60%] md:w-[50%] h-[70%] md:h-[90%] flex justify-center items-end z-10 pointer-events-none">
          <div className="relative animate-float pointer-events-auto">
            <img src="/images/Group_76.png" alt="SHOT Product Group" className="max-h-[400px] md:max-h-[700px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </header>

      {/* BANNER */}
      <div className={`w-full transition-colors duration-700 ease-in-out py-12 flex items-center justify-center overflow-hidden border-y border-white/5 ${bannerData[currentBanner].color}`}>
        <div className="flex items-center gap-8 px-10">
          <span className="text-white transform scale-125">{bannerData[currentBanner].icon}</span>
          <span className="text-white text-3xl md:text-[32px] font-bold tracking-normal whitespace-nowrap leading-none">
            {bannerData[currentBanner].text}
          </span>
        </div>
      </div>

      <div className="signup-bg">
        {/* WHY CHOOSE */}
        <div className="py-24 md:py-28 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[46px] gradient-title mb-5 leading-tight">{t('home.whyTitle')}</h2>
            <p className="text-gray-500 text-base md:text-[17px] max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              {t('home.whySubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {whyCards.map((card) => {
                const isActive = activeCard === card.id;
                return (
                  <div key={card.id}
                    className={`why-card${isActive ? ' active' : ''}`}
                    style={isActive ? { backgroundColor: card.activeColor, borderColor: card.activeColor } : {}}
                    onMouseEnter={() => setActiveCard(card.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="why-icon-box" style={{ backgroundColor: isActive ? 'white' : card.iconBg }}>
                      <span style={{ color: isActive ? card.activeColor : 'white' }}>{card.icon}</span>
                    </div>
                    <h3 className="font-bold text-[15px] md:text-[16px] leading-snug transition-colors duration-300"
                      style={{ color: isActive ? 'white' : '#1a2e2a' }}>
                      {card.title}
                    </h3>
                    {isActive && <p className="text-white/90 text-sm mt-4 leading-relaxed font-medium">{card.description}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="pt-4 pb-10 px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[46px] gradient-title mb-5 leading-tight">{t('home.productsTitle')}</h2>
            <p className="text-gray-500 text-base md:text-[17px] mb-10 leading-relaxed font-medium">
              {t('home.productsSubtitle')}
            </p>
            <Link to="/products">
              <button
                className={`btn-all-products${btnClicked ? ' clicked' : ''}`}
                onClick={() => { setBtnClicked(true); setTimeout(() => setBtnClicked(false), 600); }}
              >
                {t('home.allProducts')}
                <span className="arrow-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* PRODUITS */}
        <div className="pb-28 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="prod-card"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="prod-img-wrap">
                  <img src={product.img} alt={product.name} />
                  <span className="prod-badge" style={{ backgroundColor: product.badgeColor }}>{product.badge}</span>
                  <button className="prod-heart" onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}>
                    <Heart size={17} strokeWidth={2}
                      fill={isInWishlist(product.id) ? '#ef4444' : 'none'}
                      stroke={isInWishlist(product.id) ? '#ef4444' : '#9ca3af'} />
                  </button>
                  {hoveredProduct === product.id && (
                    <div className="prod-cart-overlay">
                      <button className="prod-cart-btn" onClick={(e) => { e.stopPropagation(); openProductDetails(product); }}>
                        <ShoppingCart size={22} color="#238d7b" strokeWidth={2} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="prod-body">
                  <div className="prod-stars">{renderStars(product.rating)}</div>
                  <div className="prod-name">{product.name}</div>
                  <div className="prod-desc">{product.description}</div>
                  <div className="prod-price">{product.price}</div>
                  <div className="flex items-center justify-between mt-auto pt-3">
                    <span className="prod-stock">{product.stock}</span>
                    <button className="btn-shop-orange" onClick={(e) => { e.stopPropagation(); openProductDetails(product); }}>
                      {t('home.shop')}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="pb-16 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[30px] md:text-[46px] gradient-title text-center mb-4 leading-tight">{t('home.testimonialTitle')}</h2>
            <p className="text-gray-700 text-base md:text-[16px] text-center max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              {t('home.testimonialSubtitle')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-5">
              {influencers.map((person, i) => (
                <div key={i} className="vid-placeholder">
                  <div className="vid-inner">
                    <button className="vid-play-btn">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </button>
                  </div>
                  <div className="vid-info">
                    <div className="vid-avatar">{person.initials}</div>
                    <div>
                      <div style={{ color: 'white', fontWeight: 700, fontSize: 14, lineHeight: 1.2 }}>{person.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 500 }}>{person.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="stay-ahead-container">
          <div className="stay-ahead-overlay"></div>
          <div className="stay-ahead-content max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="stay-ahead-title">{t('home.communityTitle')}</h2>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />

      {/* Modal newsletter */}
      {showSubscribeModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setShowSubscribeModal(false)}>
          <div style={{ background: 'white', borderRadius: 24, padding: '52px 40px 44px', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.25)', animation: 'popIn .3s ease' }}
            onClick={e => e.stopPropagation()}>
            <img src="/images/logo_SHOT.png" alt="S.HOT" style={{ height: 36, objectFit: 'contain', marginBottom: 36 }} />
            <div style={{ width: 90, height: 90, borderRadius: '50%', border: '3px solid #238d7b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#238d7b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h3 style={{ fontWeight: 800, fontSize: 22, color: '#111827', marginBottom: 12 }}>{t('home.thankYou')}</h3>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6, marginBottom: 36 }}>{t('home.checkInbox')}</p>
            <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '16px', borderRadius: 50, background: '#238d7b', color: 'white', fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background .2s ease' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a6e60'}
              onMouseLeave={e => e.currentTarget.style.background = '#238d7b'}>
              {t('home.done')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;