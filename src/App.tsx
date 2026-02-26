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
        {/* Lógica para usuarios NO logueados */}
        <Route 
          path="/login" 
          element={<SignedOut><LandingPage /></SignedOut>} 
        />

        {/* Rutas con Sidebar y Navbar (URLs limpias) */}
        <Route 
          element={
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>

        {/* Redirección automática si no está logueado */}
        <Route path="*" element={<SignedOut><Navigate to="/login" /></SignedOut>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
