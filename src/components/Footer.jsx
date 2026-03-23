import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/images/shot2.png" alt="S.HOT" />
          </div>
          <p className="footer-description">
            {t('footer.description')}
          </p>
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
          <h3>{t('footer.shop')}</h3>
          <ul>
            <li><Link to="/products"><span>{t('footer.allProducts')}</span></Link></li>
            <li><a href="#">{t('footer.spirulinaPowd')}</a></li>
            <li><a href="#">{t('footer.spirulinaTabs')}</a></li>
            <li><a href="#">{t('footer.spirulinaDiam')}</a></li>
            <li><a href="#">{t('footer.babyShots')}</a></li>
            <li><a href="#">{t('footer.bundles')}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>{t('footer.support')}</h3>
          <ul>
            <li><a href="#">{t('footer.faq')}</a></li>
            <li><a href="#">{t('footer.shippingInfo')}</a></li>
            <li><a href="#">{t('footer.returns')}</a></li>
            <li><a href="#">{t('footer.sizeGuide')}</a></li>
            <li><Link to="/contact"><span>{t('footer.contactUs')}</span></Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>{t('footer.legal')}</h3>
          <ul>
            <li><a href="#">{t('footer.privacy')}</a></li>
            <li><a href="#">{t('footer.terms')}</a></li>
            <li><a href="#">{t('footer.cookies')}</a></li>
            <li><a href="#">{t('footer.accessibility')}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p className="footer-copyright">{t('footer.copyright')}</p>
        <div className="footer-socials">
          <a href="#" title="Facebook"><Facebook size={22} /></a>
          <a href="#" title="Instagram"><Instagram size={22} /></a>
          <a href="#" title="YouTube"><Youtube size={22} /></a>
          <a href="#" title="Twitter" className="font-bold text-xl">X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;