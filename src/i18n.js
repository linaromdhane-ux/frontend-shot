import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // --- NAVBAR ---
        "home": "Home",
        "products": "Products",
        "about": "About us",
        "contact": "Contact",
        "signup": "Sign Up",

        // --- HOME PAGE ---
        "hero_badge": "Experience the Power of Spirulina",
        "hero_title": "Spirulina Excellence For Elevated",
        "btn_shop": "Shop now",
        "btn_community": "Join our community",
        "why_title": "Why choose SHOT ?",
        "why_desc": "Our premium spirulina is carefully cultivated, processed, and tested to ensure the highest nutritional value.",
        "why_card1_t": "Sustainably Crafted",
        "why_card1_d": "Eco-responsible production with zero compromise on purity or potency.",
        "why_card2_t": "Clean Energy & Immunity Boost",
        "why_card2_d": "Rich in protein, iron, and antioxidants to support endurance.",
        "why_card3_t": "Pure. Potent. Transparent.",
        "why_card3_d": "No additives. No fillers. Just premium spirulina in its most powerful form.",
        "prod_title": "Our Premium Products",
        "prod_desc": "Choose your format. Experience the same uncompromising quality.",
        "btn_all": "All Products",
        "comm_desc": "Real energy. Real focus. Real results. From founders to fitness coaches, S.HOT powers ambitious lifestyles.",
        "comm_cta": "Join the S.HOT Community",

        // --- FOOTER & NEWSLETTER ---
        "news_title": "Stay ahead of the curve",
        "news_placeholder": "Your email address",
        "news_btn": "Subscribe",
        "footer_rights": "All rights reserved.",

        // --- MODAL ---
        "thanks": "Thank you !",
        "confirm": "Please check your inbox to confirm your subscription.",
        "done": "Done"
      }
    },
    fr: {
      translation: {
        // --- NAVBAR ---
        "home": "Accueil",
        "products": "Produits",
        "about": "À propos",
        "contact": "Contact",
        "signup": "S'inscrire",

        // --- HOME PAGE ---
        "hero_badge": "Découvrez la Puissance de la Spiruline",
        "hero_title": "L'Excellence de la Spiruline Pour Votre",
        "btn_shop": "Acheter",
        "btn_community": "Rejoindre la communauté",
        "why_title": "Pourquoi choisir SHOT ?",
        "why_desc": "Notre spiruline premium est soigneusement cultivée et testée pour garantir la meilleure valeur nutritionnelle.",
        "why_card1_t": "Éco-responsable",
        "why_card1_d": "Une production respectueuse de l'environnement sans aucun compromis.",
        "why_card2_t": "Énergie & Immunité",
        "why_card2_d": "Riche en protéines et fer pour soutenir votre endurance et votre force immunitaire.",
        "why_card3_t": "Pur. Puissant. Transparent.",
        "why_card3_d": "Sans additifs. Sans conservateurs. Juste de la spiruline pure.",
        "prod_title": "Nos Produits Premium",
        "prod_desc": "Choisissez votre format. Découvrez la même qualité sans compromis.",
        "btn_all": "Tous les produits",
        "comm_desc": "Énergie réelle. Concentration réelle. Résultats réels. S.HOT booste les styles de vie ambitieux.",
        "comm_cta": "Rejoignez la Communauté S.HOT",

        // --- FOOTER & NEWSLETTER ---
        "news_title": "Restez informé",
        "news_placeholder": "Votre adresse e-mail",
        "news_btn": "S'abonner",
        "footer_rights": "Tous droits réservés.",

        // --- MODAL ---
        "thanks": "Merci !",
        "confirm": "Veuillez vérifier votre boîte de réception pour confirmer votre inscription.",
        "done": "Terminer"
      }
    }
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;