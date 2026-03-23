import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    primaryGreen: '#14a394',
    inputBg: 'rgba(5, 70, 60, 0.8)',
    inputBorder: '#26bba4',
    textWhite: '#ffffff'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && name.trim()) {
      setIsSubscribed(true);
    }
  };

  const singleInputStyle = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: colors.textWhite,
    fontSize: '15px',
    outline: 'none',
    padding: '12px 20px',
    fontFamily: 'inherit',
    textAlign: 'left'
  };

  return (
    <div style={{ 
      background: '#022c26', 
      backgroundImage: "url('/images/NL_bg.png')", 
      backgroundSize: 'cover', 
      padding: '100px 20px',
      fontFamily: 'sans-serif',
      minHeight: '450px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        <h3 style={{ 
          color: colors.inputBorder, 
          fontWeight: '700', 
          fontSize: '36px', 
          marginBottom: '10px' 
        }}>
          Newsletter
        </h3>
        
        <p style={{ 
          color: 'white', 
          fontSize: '18px', 
          marginBottom: '45px', 
          opacity: 0.9,
          maxWidth: '650px',
          margin: '0 auto 45px',
          lineHeight: '1.5'
        }}>
          Get wellness insights, exclusive offers, and science-backed nutrition tips delivered to your inbox.
        </p>

        {/* Formulaire avec layout flex pour séparer la barre et le bouton */}
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '20px', 
          flexWrap: 'wrap' 
        }}>
          
          {/* BARRE UNIQUE (Inputs seulement) */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            flex: '1',
            maxWidth: '650px', 
            background: colors.inputBg,
            border: `2px solid ${colors.inputBorder}`,
            borderRadius: '60px', 
            padding: '6px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={singleInputStyle}
              required
            />

            <div style={{ width: '1px', height: '24px', background: colors.inputBorder, opacity: 0.4 }} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{...singleInputStyle, flex: 1.5}}
              required
            />
          </div>

          {/* BOUTON À L'EXTÉRIEUR */}
          <button 
            type="submit" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              background: colors.primaryGreen,
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '16px 45px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            Subscribe
            {isHovered && (
              <svg width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            )}
          </button>
        </form>
      </div>

      {/* MODAL DE SUCCÈS */}
      {isSubscribed && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: 'white', padding: '40px', borderRadius: '40px',
            width: '90%', maxWidth: '400px', textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <img src="/images/logo_SHOT.png" alt="S.HOT" style={{ width: '100px', marginBottom: '25px' }} />
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              border: `4px solid ${colors.primaryGreen}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={colors.primaryGreen} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#000' }}>Thank you !</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>Subscription confirmed.</p>
            <button
              onClick={() => setIsSubscribed(false)}
              style={{
                background: colors.primaryGreen, color: 'white', border: 'none',
                borderRadius: '50px', padding: '12px 40px', cursor: 'pointer', width: '100%'
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;