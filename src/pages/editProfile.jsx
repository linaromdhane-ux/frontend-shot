import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CreditCard, Bell, ShieldCheck, HelpCircle, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

const EditProfile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openWishlist, openShop } = useCart();

  // États pour les champs du profil
  const [formData, setFormData] = useState({
    name: 'Mark',
    surname: 'Nova',
    address: 'Tunisia',
    city: 'Tunisia',
    country: 'Tunisia',
    zipCode: '01000',
    phone: '+1 (555) 012-3456',
    email: 'mark1980@gmail.com'
  });

  const [hoverUpdate, setHoverUpdate] = useState(false);
  const [hoverCancel, setHoverCancel] = useState(false);
  const [errors, setErrors] = useState([]);

  const userAvatar = localStorage.getItem('userAvatar') || null;
  const userName = `${formData.name} ${formData.surname}`;

  // Animation CSS pour la vibration
  const shakeAnimation = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    .animate-shake { animation: shake 0.3s ease-in-out; }
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newErrors = [];
    
    // Validation simple
    Object.keys(formData).forEach(key => {
      if (!formData[key].trim()) newErrors.push(key);
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setTimeout(() => setErrors([]), 2000);
      return;
    }
    
    // Logique de sauvegarde ici
    navigate('/profile');
  };

  return (
    <div 
  className="min-h-screen font-sans text-[#1A1A1A] bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: "url('/images/Sign Up.png')" }}
>
      <style>{shakeAnimation}</style>
      <Navbar onHeartClick={openWishlist} onCartClick={openShop} />
      
      <main className="container mx-auto px-4 md:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          {/* --- SIDEBAR (Identique à AddCard) --- */}
          <div className="w-full lg:w-1/4 self-start">
            <div className="bg-white rounded-[2rem] px-8 py-10 shadow-sm border border-gray-100">
              <div className="text-center mb-10">
                {userAvatar ? (
  <img src={userAvatar} alt="User" className="w-28 h-28 rounded-full object-cover mx-auto mb-5" />
) : (
  <div className="w-28 h-28 rounded-full bg-[#C4C4C4] mx-auto mb-5 flex items-center justify-center text-2xl text-white font-bold">
    {/* Correction ici : si le nom est vide, on affiche l'icône User au lieu de faire planter l'app */}
    {formData.name ? formData.name.charAt(0).toUpperCase() : <User size={40} />}
  </div>
)}
                <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-1">{userName}</h2>
                <p className="text-[#757575] text-[14px]">{formData.email}</p>
              </div>
              <div className="border-t border-[#E0E0E0] mb-8" />
              <h3 className="font-bold text-[#1A1A1A] mb-6 text-[15px]">{t('account_settings')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 py-2 px-3 rounded-xl cursor-pointer group" onClick={() => navigate('/add-card')}>
                  <CreditCard size={20} className="text-[#555555] group-hover:text-[#129384]" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384] transition-colors">{t('payment_card')}</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-3 rounded-xl cursor-default group">
                  <Bell size={20} className="text-[#555555]" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-[#555555]">{t('notifications')}</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-3 rounded-xl cursor-default group">
                  <ShieldCheck size={20} className="text-[#555555]" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-[#555555]">{t('security_privacy')}</span>
                </div>
                <div className="flex items-center gap-4 py-2 px-3 rounded-xl cursor-default group">
                  <HelpCircle size={20} className="text-[#555555]" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-[#555555]">{t('help_support')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- FORMULAIRE EDIT PROFILE --- */}
          <div className="w-full lg:w-3/4 pt-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">{t('edit_profile')}</h1>
              <p className="text-[#757575] text-base">{t('edit_profile_subtitle')}</p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6 max-w-3xl">
              
              {/* Ligne 1: Name & Surname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('name') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('surname')}</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('surname') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
              </div>

              {/* Ligne 2: Shipping Address & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('shipping_address')}</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('address') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('city')}</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('city') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
              </div>

              {/* Ligne 3: Country & Zip Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('country')}</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('country') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('zip_code')}</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('zipCode') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
              </div>

              {/* Ligne 4: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('phone_number')}</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('phone') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] text-[#1A1A1A] font-bold uppercase tracking-widest">{t('email_address')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3.5 bg-white border rounded-2xl outline-none transition-all text-[14px] font-medium 
                      ${errors.includes('email') ? 'border-red-500 animate-shake ring-2 ring-red-500/10' : 'border-[#E2E8E6] focus:ring-2 focus:ring-[#129384]/20 focus:border-[#129384]'}`}
                  />
                </div>
              </div>

              {/* BOUTONS (Identiques à AddCard) */}
              <div className="flex gap-4 pt-8 max-w-xl">
                <button
                  type="button"
                  onMouseEnter={() => setHoverCancel(true)}
                  onMouseLeave={() => setHoverCancel(false)}
                  onClick={() => navigate('/profile')}
                  className="flex-1 py-3.5 border-2 border-[#129384] text-[#129384] rounded-full font-bold text-[15px] transition-all flex items-center justify-center gap-1 overflow-hidden"
                >
                  <div className={`w-6 flex items-center transition-all duration-300 ${hoverCancel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <span className="h-5 w-[2px] bg-[#129384] rounded-full mr-0.5 inline-block"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 rotate-180">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <span className={`transition-all duration-300 ${hoverCancel ? 'translate-x-1' : 'translate-x-0'}`}>{t('btn_cancel')}</span>
                  <div className="w-6 shrink-0" />
                </button>

                <button
                  type="submit"
                  onMouseEnter={() => setHoverUpdate(true)}
                  onMouseLeave={() => setHoverUpdate(false)}
                  className="flex-1 py-3.5 bg-[#129384] hover:bg-[#0e7a6d] text-white rounded-full font-bold text-[15px] transition-all flex items-center justify-center gap-1 overflow-hidden shadow-lg shadow-[#129384]/25"
                >
                  <div className="w-6 shrink-0" />
                  <span className={`transition-all duration-300 ${hoverUpdate ? '-translate-x-1' : 'translate-x-0'}`}>{t('btn_update')}</span>
                  <div className={`w-6 flex items-center transition-all duration-300 ${hoverUpdate ? 'opacity-100 translate-x-0.5' : 'opacity-0 -translate-x-1'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="h-5 w-[2px] bg-white rounded-full ml-0.5 inline-block"></span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfile;