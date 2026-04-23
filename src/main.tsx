import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import { ClubProvider } from './context/ClubContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <ClubProvider>
          <App />
        </ClubProvider>
      </LanguageProvider>
    </AuthProvider>
  </StrictMode>,
)
