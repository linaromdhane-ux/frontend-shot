import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

// Import des components - CHEMINS CORRIGÉS
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import WishlistSidebar from '../components/WishlistSidebar';
import ShopSidebar from '../components/ShopSidebar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Contact = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const closeSidebars = () => {
    setIsMobileMenuOpen(false);
    setIsWishlistOpen(false);
    setIsShopOpen(false);
    setActiveIcon(null);
  };

  const handleIconClick = (type) => {
    setActiveIcon(type);
    if (type === 'wishlist') {
      setIsWishlistOpen(true);
      setIsShopOpen(false);
    } else if (type === 'cart') {
      setIsShopOpen(true);
      setIsWishlistOpen(false);
    }
  };

  const toggleHeart = (id) => setWishlistItems(prev => prev.filter(item => item.id !== id));
  
  const addToShop = (item) => {
    if (!cartItems.find(i => i.id === item.id)) setCartItems(prev => [...prev, item]);
    setIsShopOpen(true);
    setIsWishlistOpen(false);
  };

  const clearAllWishlist = () => {
    if (wishlistItems.length === 0) return;
    setIsClearing(true);
    setTimeout(() => { setWishlistItems([]); setIsClearing(false); }, 600);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleSubscribe = () => {
    if (subscribeEmail.trim()) {
      console.log('Subscribed:', subscribeEmail);
      setSubscribeEmail('');
      // Add your subscription logic here
    }
  };

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] bg-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        * { font-family:'Montserrat',sans-serif; }

        .nav-fixed-contact { background-color:rgba(45,75,68,.85); height:75px; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); }
        .nav-link-item { color:white; opacity:.8; font-weight:600; font-size:15px; transition:all .3s ease; cursor:pointer; }
        .nav-link-item:hover,.nav-link-active { opacity:1; text-shadow:0 0 8px rgba(255,255,255,.5); }
        .icon-box-contact { width:44px; height:44px; display:flex; align-items:center; justify-content:center; border-radius:14px; transition:all .2s ease; color:white; cursor:pointer; position:relative; }
        .icon-box-contact:hover,.icon-box-active { background-color:white !important; color:#238d7b !important; transform:translateY(-2px); }
        .btn-signup-contact { background-color:white; color:#238d7b; font-weight:700; font-size:14px; height:42px; padding:0 25px; border-radius:50px; border:2px solid white; transition:all .3s ease; cursor:pointer; }
        .btn-signup-contact:hover { background-color:#238d7b; color:white !important; border-color:#238d7b; transform:scale(1.05); }

        .mobile-header { display: none; }
        @media (max-width: 1023px) {
          .mobile-header { display: flex; align-items: center; justify-content: space-between; background-color: rgba(45,75,68,.85); height: 70px; backdrop-filter: blur(12px); padding: 0 20px; border-bottom: 1px solid rgba(255,255,255,.1); }
          .desktop-nav { display: none !important; }
        }

        .mobile-menu-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); z-index: 250; opacity: 0; transition: opacity 0.3s ease; pointer-events: none; }
        .mobile-menu-overlay.open { opacity: 1; pointer-events: auto; }
        .mobile-menu { position: fixed; top: 0; right: 0; width: 280px; height: 100vh; background: linear-gradient(135deg, #238d7b 0%, #1a6e60 100%); z-index: 300; padding: 30px 20px; transform: translateX(100%); transition: transform 0.3s ease; display: flex; flex-direction: column; box-shadow: -5px 0 25px rgba(0,0,0,0.3); }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.2); }
        .mobile-menu-close { width: 36px; height: 36px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
        .mobile-menu-close:hover { background: white; transform: rotate(90deg); }
        .mobile-menu-close:hover svg { color: #238d7b; }
        .mobile-menu-links { display: flex; flex-direction: column; gap: 5px; flex: 1; }
        .mobile-menu-link { color: white; font-size: 17px; font-weight: 600; padding: 14px 18px; border-radius: 12px; background: rgba(255,255,255,0.1); transition: all 0.3s ease; text-decoration: none; display: block; }
        .mobile-menu-link:hover { background: white; color: #238d7b; transform: translateX(5px); }
        .mobile-menu-footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2); }
        .mobile-signup-btn { width: 100%; background: white; color: #238d7b; padding: 14px; border-radius: 12px; font-weight: 700; font-size: 16px; border: none; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: block; text-align: center; }
        .mobile-signup-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }

        .contact-hero { 
          background-image: url('/images/7.png'); 
          background-size: cover; 
          background-position: center; 
          background-repeat: no-repeat;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding-top: 120px;
        }

        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(13, 74, 62, 0.3);
          z-index: 1;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .contact-card {
          background: white;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          padding: 40px;
          margin-bottom: 40px;
        }

        .contact-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #16a085;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 16px;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 500;
          transition: all .3s ease;
          outline: none;
          font-family: 'Montserrat', sans-serif;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: #16a085;
          box-shadow: 0 0 0 4px rgba(22,160,133,0.1);
        }

        .form-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .btn-send {
          width: 100%;
          padding: 18px;
          background: #16a085;
          color: white;
          border: none;
          border-radius: 16px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all .3s ease;
        }

        .btn-send:hover {
          background: #138f76;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,160,133,0.3);
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease;
          cursor: pointer;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .newsletter-section {
          background: linear-gradient(135deg, #0d3d33 0%, #0f5a47 40%, #0d4a3a 70%, #0a3328 100%);
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/images/NL_bg.png');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          z-index: 0;
        }

        .newsletter-content {
          position: relative;
          z-index: 10;
        }

        .newsletter-input {
          flex: 1;
          min-width: 280px;
          padding: 16px 24px;
          border-radius: 50px;
          border: 2px solid rgba(77,217,184,0.4);
          background: rgba(255,255,255,0.08);
          color: white;
          font-size: 15px;
          outline: none;
          backdrop-filter: blur(8px);
          transition: all .3s ease;
        }

        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .newsletter-input:focus {
          border-color: #4dd9b8;
          background: rgba(255,255,255,0.12);
        }

        .btn-subscribe {
          padding: 16px 40px;
          border-radius: 50px;
          background: #238d7b;
          color: white;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: all .3s ease;
          box-shadow: 0 6px 20px rgba(35,141,123,0.4);
        }

        .btn-subscribe:hover {
          background: #1a6e60;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(35,141,123,0.5);
        }

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

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-top { grid-template-columns: 1fr; gap: 40px; padding: 0 30px; }
          .footer-bottom { padding: 0 30px; justify-content: center; text-align: center; flex-direction: column; }
        }
      `}</style>

      {/* NAVBAR */}
      <Navbar 
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        onIconClick={handleIconClick}
        onMenuToggle={() => setIsMobileMenuOpen(true)}
        activeIcon={activeIcon}
        activeLink={activeLink}
        onLinkHover={setActiveLink}
      />

      {/* MOBILE MENU */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* WISHLIST SIDEBAR */}
      <WishlistSidebar 
        isOpen={isWishlistOpen}
        items={wishlistItems}
        onClose={closeSidebars}
        onToggleHeart={toggleHeart}
        onAddToShop={addToShop}
        isClearing={isClearing}
        onClearAll={clearAllWishlist}
      />

      {/* SHOP SIDEBAR */}
      <ShopSidebar 
        isOpen={isShopOpen}
        items={cartItems}
        onClose={closeSidebars}
      />

      {(isMobileMenuOpen || isWishlistOpen || isShopOpen) && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={closeSidebars} />}

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 500, maxWidth: 700, margin: '0 auto', opacity: 0.95 }}>
            Contact our specialists for personalized guidance on your S.HOT journey.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact-grid">
          
          {/* GET IN TOUCH */}
          <div className="contact-card">
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#16a085', marginBottom: 12 }}>
              Get in Touch
            </h2>
            <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 40, lineHeight: 1.6 }}>
              Contact us for any questions about our products or your order.
            </p>

            <div style={{ marginBottom: 32 }}>
              <div className="contact-icon-box">
                <MapPin size={28} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>Office</h3>
              <p style={{ fontSize: 15, color: '#6b7280' }}>Tunis, Tunisia</p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div className="contact-icon-box">
                <Phone size={28} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>Phone</h3>
              <p style={{ fontSize: 15, color: '#6b7280' }}>+216 46 307 550</p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <div className="contact-icon-box">
                <Mail size={28} strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>Email</h3>
              <p style={{ fontSize: 15, color: '#6b7280' }}>shotpremiumspirulina@gmail.com</p>
            </div>

            <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 20 }}>
                Follow Us on Social Media
              </h3>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="#" className="social-btn" style={{ background: '#1877f2' }}>
                  <Facebook size={24} color="white" />
                </a>
                <a href="#" className="social-btn" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                  <Instagram size={24} color="white" />
                </a>
                <a href="#" className="social-btn" style={{ background: '#ff0000' }}>
                  <Youtube size={24} color="white" />
                </a>
                <a href="#" className="social-btn" style={{ background: '#000000' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* SEND MESSAGE FORM */}
          <div className="contact-card">
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#16a085', marginBottom: 32 }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Mark"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                    Surname
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    placeholder="Nova"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="mark1980@gmail.com"
                  className="form-input"
                  required
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write here..."
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* JOIN NEWSLETTER */}
      <div style={{ background: '#f9fafb', padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#16a085', marginBottom: 16 }}>
          Join our Newsletter
        </h2>
      </div>

      {/* NEWSLETTER */}
      <Newsletter 
        subscribeEmail={subscribeEmail}
        onEmailChange={(e) => setSubscribeEmail(e.target.value)}
        onSubscribe={handleSubscribe}
      />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Contact;