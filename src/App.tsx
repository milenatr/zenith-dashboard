import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Transactions } from './pages/Transactions';
import { LandingPage } from './pages/LandingPage'; // Tu nueva página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PÁGINA DE BIENVENIDA (Pública) */}
        <Route path="/" element={<LandingPage />} />

        {/* APP PRIVADA (Solo si está logueado) */}
        <Route 
          path="/dashboard" 
          element={
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          }
        >
          {/* Al entrar a /dashboard, muestra la Home del panel */}
          <Route index element={<Home />} /> 
          
          {/* Estas serán /dashboard/portfolio y /dashboard/transactions */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

        {/* Redirección si intentan entrar a algo privado sin sesión */}
        <Route path="*" element={<SignedOut><Navigate to="/" /></SignedOut>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
