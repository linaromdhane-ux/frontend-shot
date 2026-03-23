import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Couleurs exactes extraites des captures Figma
  const colors = {
    primaryGreen: '#14a394', // Le vert émeraude du bouton
    inputBg: 'rgba(5, 70, 60, 0.8)', // Fond sombre pour les champs
    inputBorder: '#26bba4', // Bordure turquoise lumineuse
    textWhite: '#ffffff'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && name.trim()) {
      setIsSubscribed(true);
    }
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '480px',
    padding: '16px 24px',
    borderRadius: '50px',
    border: `2px solid ${colors.inputBorder}`,
    background: colors.inputBg,
    color: colors.textWhite,
    fontSize: '16px',
    outline: 'none',
    textAlign: 'center',
    marginBottom: '12px',
    fontFamily: 'inherit'
  };

  const subscribeButtonStyle = {
    padding: '12px 60px',
    borderRadius: '50px',
    background: colors.primaryGreen,
    color: 'white',
    fontWeight: '600',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    minWidth: '220px'
  };

  return (
    <div style={{ 
      background: '#022c26', 
      backgroundImage: "url('/images/NL_bg.png')", 
      backgroundSize: 'cover', 
      padding: '80px 20px',
      fontFamily: 'sans-serif',
      minHeight: '450px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <h3 style={{ color: colors.inputBorder, fontWeight: '700', fontSize: '32px', marginBottom: '10px' }}>{t('newsletter.title')}</h3>
        <p style={{ color: 'white', fontSize: '16px', marginBottom: '35px', opacity: 0.9 }}>
          {t('newsletter.subtitle')}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder={t('newsletter.namePlaceholder')}
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="email"
            placeholder={t('newsletter.emailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <button 
            type="submit" 
            style={subscribeButtonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {t('newsletter.subscribe')}
            {/* Flèche →| s'affiche dynamiquement au survol/clic */}
            {isHovered && (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="13 6 19 12 13 18"></polyline>
                  <line x1="22" y1="6" x2="22" y2="18"></line>
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>

      {/* MODAL DE SUCCÈS - Centrage parfait */}
      {isSubscribed && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: 'white', padding: '40px', borderRadius: '40px',
            width: '90%', maxWidth: '400px', textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' // Centrage horizontal du logo et du contenu
          }}>
            {/* Logo S.HOT centré */}
            <img src="/images/logo_SHOT.png" alt="S.HOT" style={{ width: '100px', marginBottom: '25px' }} />
            
            {/* Cercle Check Vert */}
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              border: `4px solid ${colors.primaryGreen}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
            }}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke={colors.primaryGreen} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px', color: '#000' }}>{t('newsletter.thankYou')}</h3>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '15px' }}>
              {t('newsletter.checkInbox')}
            </p>

            <button
              onClick={() => setIsSubscribed(false)}
              style={{
                ...subscribeButtonStyle,
                width: '100%',
                background: colors.primaryGreen
              }}
            >
              {t('newsletter.done')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;