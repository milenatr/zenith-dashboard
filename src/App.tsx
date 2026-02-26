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
        {/* CASO 1: Si el usuario NO está logueado, ve la Landing */}
        <Route 
          path="/" 
          element={
            <>
              <SignedOut>
                <LandingPage />
              </SignedOut>
              <SignedIn>
                {/* Si entra a la raíz y está logueado, lo mandamos al Dashboard */}
                <Navigate to="/dashboard" replace />
              </SignedIn>
            </>
          } 
        />

        {/* CASO 2: Rutas protegidas (Solo accesibles si está SignedIn) */}
        <Route 
          path="/dashboard/*" 
          element={
            <SignedIn>
              <Routes>
                <Route element={<DashboardLayout />}>
                  <Route index element={<Home />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="transactions" element={<Transactions />} />
                </Route>
              </Routes>
            </SignedIn>
          } 
        />

        {/* Redirección por si intentan entrar a una ruta que no existe */}
        <Route path="*" element={<SignedOut><Navigate to="/" /></SignedOut>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
