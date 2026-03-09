import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Check } from 'lucide-react';

// Hooks des Contexts
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// Import des components
import Navbar from '../components/Navbar';
import MobileHeader from '../components/MobileHeader'; // Ajouté pour la cohérence mobile
import MobileMenu from '../components/MobileMenu';
import WishlistSidebar from '../components/WishlistSidebar';
import ShopSidebar from '../components/ShopSidebar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Contact = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // 1. Récupération de la Wishlist via le Context global
  const { 
    wishlistItems, 
    isClearing, 
    toggleWishlist, 
    removeItem, 
    clearAll, 
    isInWishlist 
  } = useWishlist();

  // 2. Récupération du Panier et des contrôles de sidebars
  const {
    cartItems,
    isWishlistOpen,
    isShopOpen,
    addToCart,
    openWishlist,
    openShop,
    closeSidebars,
  } = useCart();

  const handleCloseSidebars = () => {
    closeSidebars();
    setActiveIcon(null);
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  return (
    <div className="relative min-h-screen w-full font-['Montserrat'] signup-bg overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        * { font-family:'Montserrat',sans-serif; }

        .signup-bg {
          background-image: url('/images/Sign Up.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .contact-hero { 
          background-image: url('/images/7.png'); 
          background-size: cover; 
          background-position: center; 
          height: 450px;
          position: relative;
        }

        .contact-card-wrapper {
          padding: 0 0 40px 0;
          margin-top: -250px;
          position: relative;
          z-index: 10;
        }

        .contact-card-main {
          background: white;
          border-radius: 40px;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.15);
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info-side { 
          background: #edf0f2;
          padding: 60px 50px; 
        }

        .contact-form-side { 
          background: white; 
          padding: 60px 55px; 
        }

        .title-large { font-size: 32px; font-weight: 800; color: #16a085; margin-bottom: 12px; }
        .text-desc { font-size: 15px; color: #6b7280; line-height: 1.6; }
        
        .contact-icon-box {
          width: 48px; height: 48px;
          background: #16a085;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: white; margin-right: 18px;
        }

        .info-title { font-size: 15px; font-weight: 800; color: #1f2937; }
        .info-sub { font-size: 14px; color: #6b7280; }

        .form-input, .form-textarea {
          width: 100%; padding: 18px 22px;
          border: 1px solid #d1d5db; border-radius: 15px;
          background: #fff; font-size: 15px; outline: none; transition: 0.3s;
        }

        .btn-send {
          width: 100%; padding: 20px;
          background: #16a085; color: white;
          border: none; border-radius: 50px;
          font-size: 16px; font-weight: 800; cursor: pointer;
          transition: 0.3s; margin-top: 20px;
          box-shadow: 0 10px 20px rgba(22,160,133,0.2);
        }

        .btn-send:hover { transform: translateY(-3px); background: #138f76; }

        @media (max-width: 900px) {
          .contact-card-main { grid-template-columns: 1fr; margin: 0 20px; }
          .contact-card-wrapper { margin-top: -180px; }
        }
      `}</style>

      {/* Sidebars Globales */}
      <WishlistSidebar 
        isOpen={isWishlistOpen} 
        onClose={handleCloseSidebars} 
        wishlistItems={wishlistItems}
        isClearing={isClearing}
        onAddToShop={addToCart} 
        onRemoveItem={removeItem}
        onClearAll={clearAll}
      />
      <ShopSidebar isOpen={isShopOpen} onClose={handleCloseSidebars} cartItems={cartItems} />
      
      {/* Overlay global */}
      {(isWishlistOpen || isShopOpen || isMobileMenuOpen) && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] transition-opacity" onClick={handleCloseSidebars} />
      )}

      {/* Navigation avec les fonctions globales */}
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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* HERO SECTION */}
      <div className="contact-hero" />

      {/* SECTION DU FORMULAIRE */}
      <div className="contact-card-wrapper">
        <div className="contact-card-main">
          
          {/* GAUCHE: INFO (GRIS) */}
          <div className="contact-info-side">
            <h2 className="title-large">Get in Touch</h2>
            <p className="text-desc mb-12">Contact us for any questions about our products or your order.</p>
            
            <div className="space-y-10">
              <div className="flex items-center">
                <div className="contact-icon-box"><MapPin size={22} /></div>
                <div><p className="info-title">Office</p><p className="info-sub">Tunis, Tunisia</p></div>
              </div>
              <div className="flex items-center">
                <div className="contact-icon-box"><Phone size={22} /></div>
                <div><p className="info-title">Phone</p><p className="info-sub">+216 46 307 550</p></div>
              </div>
              <div className="flex items-center">
                <div className="contact-icon-box"><Mail size={22} /></div>
                <div><p className="info-title">Email</p><p className="info-sub">shotpremiumspirulina@gmail.com</p></div>
              </div>
            </div>

            <div className="mt-20">
              <p className="info-title mb-6">Follow Us on Social Media</p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
                  <Facebook size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
                  <Youtube size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* DROITE: FORMULAIRE (BLANC) */}
          <div className="contact-form-side">
            <h2 className="title-large mb-10">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="form-input" required />
                <input type="text" placeholder="Surname" className="form-input" required />
              </div>
              <input type="email" placeholder="Email" className="form-input" required />
              <textarea placeholder="Write here..." className="form-textarea h-44 resize-none" required></textarea>
              <button type="submit" className="btn-send flex items-center justify-center gap-3">
                Send Message <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-16 text-center">
        <h2 className="text-5xl font-black text-[#16a085]">Join our Newsletter</h2>
      </div>

      <Newsletter />
      <Footer />

      {/* MODAL DE SUCCÈS */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[1000] p-4">
          <div className="bg-white w-full max-w-md p-10 rounded-[40px] text-center shadow-2xl animate-in zoom-in duration-300">
            <img src="/images/logo_SHOT.png" alt="Logo" className="h-12 mx-auto mb-8" />
            <div className="w-20 h-20 border-4 border-[#16a085] rounded-full flex items-center justify-center mx-auto mb-6 text-[#16a085]">
              <Check size={40} strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-extrabold text-[#2d4b44] mb-2">Message Sent !</h3>
            <p className="text-gray-500 text-sm mb-8">Your request has been submitted successfully.</p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-4 bg-[#16a085] text-white font-bold rounded-2xl hover:bg-[#138f76] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;