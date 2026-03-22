import { Link, Outlet, useLocation } from "react-router-dom";
import { Activity } from "lucide-react";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-warm-bg text-ink font-sans selection:bg-lilac/50">
      {/* Ambient background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-lilac/30 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-lilac/20 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      {location.pathname !== '/dashboard' && (
        <div className="sticky top-0 z-50 pt-4 pb-4 px-4 sm:px-6 w-full max-w-7xl mx-auto">
          <header className="h-16 px-6 flex items-center justify-between bg-warm-bg/90 backdrop-blur-xl border border-ink/10 rounded-2xl shadow-sm">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-warm-bg shadow-sm group-hover:shadow-md transition-shadow">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight">Signal</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard' ? 'text-ink' : 'text-ink-light hover:text-ink'}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/analyze" 
                className={`text-sm font-medium transition-colors ${location.pathname === '/analyze' ? 'text-ink' : 'text-ink-light hover:text-ink'}`}
              >
                Analyze
              </Link>
              <a 
                href="/#pricing" 
                className={`text-sm font-medium transition-colors ${location.hash === '#pricing' ? 'text-ink' : 'text-ink-light hover:text-ink'}`}
              >
                Pricing
              </a>
              <Link 
                to="/auth" 
                className="text-sm font-medium bg-ink text-warm-bg px-4 py-2 rounded-full hover:bg-ink/90 transition-colors"
              >
                Start Free
              </Link>
            </nav>
          </header>
        </div>
      )}

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
