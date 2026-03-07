import { useState } from 'react';

const Newsletter = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim()) {
      if (onSubscribe) onSubscribe();
      setEmail('');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0d3d33 0%, #0f5a47 40%, #0d4a3a 70%, #0a3328 100%)', backgroundImage: "url('/images/NL_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100%', backgroundImage: "url('/images/NL_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0 }} />
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 style={{ color: '#4dd9b8', fontWeight: 700, fontSize: 30, marginBottom: 24, textAlign: 'center' }}>Stay Informed</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 20, lineHeight: 1.7, marginBottom: 15, textAlign: 'center' }}>
            Subscribe to our newsletter to receive health tips, special offers, and new product announcements.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email to subscribe"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                flex: '1 1 260px', padding: '15px 22px', borderRadius: 50, border: '2px solid rgba(77,217,184,0.55)',
                background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 14, outline: 'none', backdropFilter: 'blur(6px)', maxWidth: '400px'
              }}
              onFocus={e => e.target.style.borderColor = '#4dd9b8'}
              onBlur={e => e.target.style.borderColor = 'rgba(77,217,184,0.55)'}
            />
            <button
              onClick={handleSubmit}
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
  );
};

export default Newsletter;