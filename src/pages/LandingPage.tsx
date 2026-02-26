import { SignInButton, useAuth } from "@clerk/clerk-react";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {

  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleStart = () => {
    if (isSignedIn) {
      // Si ya está logueado, lo mandamos al panel
      navigate("/dashboard");
    }
    // Si no está logueado, el SignInButton hará su magia solo
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors">
      {/* Navbar simple */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600">Zenith</div>
        <ThemeToggle/>
        <SignInButton mode="modal">
          <button className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600">
            Iniciar Sesión
          </button>
        </SignInButton>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Tus finanzas, <br/><span className="text-indigo-600">bajo control.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
          La plataforma definitiva para trackear tus activos, analizar tus gastos y potenciar tus ahorros en un solo lugar.
        </p>
        {isSignedIn ? (
          <button 
            onClick={handleStart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 flex items-center gap-2 mx-auto transition-all hover:scale-105"
          >
            Ir al Dashboard <ArrowRight size={20} />
          </button>
        ) : (
          <SignInButton mode="modal">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/20 flex items-center gap-2 mx-auto transition-all hover:scale-105">
              Empieza Gratis <ArrowRight size={20} />
            </button>
          </SignInButton>
        )}
      </header>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-20">
        <FeatureCard 
          icon={<BarChart3 className="text-indigo-500" />}
          title="Análisis en Tiempo Real"
          desc="Gráficos interactivos para entender hacia dónde va tu dinero."
        />
        <FeatureCard 
          icon={<ShieldCheck className="text-indigo-500" />}
          title="Seguridad de Grado Bancario"
          desc="Tus datos están protegidos con la mejor tecnología de encriptación."
        />
        <FeatureCard 
          icon={<Zap className="text-indigo-500" />}
          title="Rápido y Fluido"
          desc="Una interfaz pensada para la velocidad y la facilidad de uso."
        />
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400">{desc}</p>
  </div>
);