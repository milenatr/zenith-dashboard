import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout'
import { Home } from './pages/Home';

// Creá estas rápido para probar
const Portfolio = () => <div className="p-8 text-white text-3xl font-bold">Página de Portfolio</div>;
const Transactions = () => <div className="p-8 text-white text-3xl font-bold">Página de Transacciones</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
