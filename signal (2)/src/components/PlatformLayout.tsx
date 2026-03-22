import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { 
  Home, BarChart2, PlusCircle, TrendingUp, User, 
  Activity, Sparkles, Trophy, Video, CheckCircle2, 
  ArrowRight, Play, Copy, ChevronRight, Lock, 
  Settings, LogOut, CreditCard, Menu, X, TrendingDown,
  Flame, LayoutTemplate, Search, ArrowUpRight, Heart,
  Gift, Zap, Crown, MessageSquare
} from "lucide-react";

export default function PlatformLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isFreePlan = true; // Hardcoded for now based on UI state

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://signal.app/invite/ALEX123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "dashboard", path: "/dashboard", label: "Home", icon: Home },
    { id: "analyses", path: "/dashboard?tab=analyses", label: "Analyses", icon: BarChart2 },
    { id: "new", path: "/analyze", label: "New Analysis", icon: PlusCircle, isAction: true },
    { id: "ideas", path: "/dashboard?tab=ideas", label: "Video Ideas", icon: LayoutTemplate },
    { id: "trends", path: "/dashboard?tab=trends", label: "Trends", icon: TrendingUp },
    { id: "account", path: "/dashboard?tab=account", label: "Account", icon: User },
  ];

  const handleTabClick = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const isActiveTab = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard" && !location.search;
    }
    if (path.startsWith("/dashboard?tab=")) {
      return location.pathname === "/dashboard" && location.search === path.split("?")[1];
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-warm-bg text-ink font-sans flex">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-warm-bg/90 backdrop-blur-md border-b border-ink/10 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-warm-bg">
            <Activity className="w-5 h-5" />
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight">Signal</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Sidebar / Mobile Menu */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed md:sticky top-0 left-0 z-50 h-[100dvh] w-64 bg-white border-r border-ink/10 flex flex-col shadow-2xl md:shadow-none"
          >
            <div className="p-6 hidden md:flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-warm-bg">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight">Signal</span>
            </div>

            <div className="md:hidden flex justify-end p-4">
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-warm-bg rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
              <button
                onClick={() => handleTabClick('/analyze')}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 mb-6 bg-ink text-white hover:bg-ink/90 rounded-lg font-bold text-sm transition-all shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                New Analysis
              </button>

              {tabs.filter(tab => !tab.isAction).map((tab) => {
                const Icon = tab.icon;
                const isActive = isActiveTab(tab.path);
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                      isActive 
                        ? 'bg-warm-bg text-ink' 
                        : 'text-ink-light hover:bg-warm-bg/50 hover:text-ink'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-ink/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-ink-light hover:bg-warm-bg/50 hover:text-ink transition-all">
                  <LayoutTemplate className="w-5 h-5" />
                  Reel Blueprints <Lock className="w-3 h-3 ml-auto opacity-50" />
                </button>
              </div>
            </nav>

            <div className="px-4 pb-4 space-y-2">
              <button 
                onClick={() => setIsShareModalOpen(true)} 
                className="w-full flex items-center justify-between p-3 rounded-xl bg-warm-bg border border-ink/5 hover:border-ink/10 transition-colors group"
              >
                <div className="text-left">
                  <div className="font-bold text-sm text-ink group-hover:text-ink/80 transition-colors">Share Signal</div>
                  <div className="text-xs text-ink-light mt-0.5">100 credits per paid referral</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white border border-ink/5 flex items-center justify-center shadow-sm">
                  <Gift className="w-4 h-4 text-ink" />
                </div>
              </button>

              {isFreePlan && (
                <button 
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-warm-bg border border-ink/5 hover:border-ink/10 transition-colors group"
                >
                  <div className="text-left">
                    <div className="font-bold text-sm text-ink group-hover:text-ink/80 transition-colors">Upgrade to Creator</div>
                    <div className="text-xs text-ink-light mt-0.5">Unlock more features</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-ink fill-ink" />
                  </div>
                </button>
              )}
            </div>

            <div className="p-4 border-t border-ink/10">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-8 h-8 bg-lilac/30 text-lilac-dark rounded-full flex items-center justify-center font-bold text-xs">
                  AL
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">Alex Creator</p>
                  <p className="text-xs text-ink-light truncate">Free Plan</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8 overflow-x-hidden pt-20 md:pt-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-ink/10 pb-safe z-40 px-2 py-2 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = isActiveTab(tab.path);
          
          if (tab.isAction) {
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.path)}
                className="flex-1 max-w-[80px] flex flex-col items-center justify-center -mt-6"
              >
                <div className="w-14 h-14 rounded-full bg-ink text-white flex items-center justify-center shadow-xl border-4 border-white">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold mt-1 text-ink">New</span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.path)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-1 transition-colors ${
                isActive ? 'text-ink' : 'text-ink-light'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-ink/10' : ''}`} />
              <span className={`text-[10px] font-bold ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {isShareModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareModalOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Modal Header/Banner */}
              <div className="relative bg-warm-bg p-8 pb-12">
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-ink-light hover:text-ink transition-colors bg-white/50 rounded-full backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-bold shadow-sm mb-6">
                  Earn 100+ credits
                </div>
                
                <h2 className="text-3xl font-bold tracking-tight mb-2">Spread the love</h2>
                <p className="text-ink-light text-lg">and earn free credits</p>

                {/* Decorative Graphic */}
                <div className="absolute right-0 bottom-0 w-48 h-48 translate-x-8 translate-y-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-lilac via-rose-400 to-amber-400 rounded-full blur-2xl opacity-60" />
                  <div className="absolute inset-4 bg-gradient-to-br from-lilac via-rose-400 to-amber-400 rounded-full shadow-lg flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 pt-6">
                <h3 className="text-sm font-medium text-ink-light mb-6">How it works:</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <Zap className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">Share your invite link</p>
                  </div>
                  <div className="flex gap-4">
                    <Crown className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <p className="text-sm">They sign up and get <span className="font-bold">extra 10 credits</span></p>
                  </div>
                  <div className="flex gap-4">
                    <MessageSquare className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">You get <span className="font-bold">100 credits</span> once they subscribe to Creator / influencer.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-ink-light mb-4">
                  <span className="font-bold text-ink">0</span> signed up, <span className="font-bold text-ink">0</span> converted
                </div>

                <div className="flex items-center gap-2 p-2 bg-warm-bg rounded-xl border border-ink/5 mb-6">
                  <div className="pl-3 text-ink-light">
                    <Copy className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    readOnly 
                    value="https://signal.app/invite/ALEX123" 
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium text-ink truncate"
                  />
                  <button 
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-ink text-white text-sm font-bold rounded-lg hover:bg-ink/90 transition-colors shrink-0"
                  >
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                </div>

                <div className="text-center">
                  <button className="text-xs text-ink-light hover:text-ink transition-colors">
                    View Terms and Conditions
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
