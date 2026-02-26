import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from "@clerk/themes";
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      signInForceRedirectUrl="/dashboard"
      signUpForceRedirectUrl="/dashboard"
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#4f46e5',
          colorBackground: '#020617',
          colorText: 'white',
          borderRadius: '12px',
        },
        elements: {
          formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700 transition-all',
          card: 'border border-slate-800 shadow-none',
        }
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
)