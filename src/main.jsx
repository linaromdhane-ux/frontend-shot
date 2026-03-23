import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importe le Provider ici
import { WishlistProvider } from './context/WishlistContext'
import './i18n/config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* On enveloppe toute l'application */}
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>,
)