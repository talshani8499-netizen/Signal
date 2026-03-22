import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  BarChart2, PlusCircle, TrendingUp, User, 
  Activity, Sparkles, Trophy, Video, CheckCircle2, 
  ArrowRight, Play, Copy, ChevronRight, Lock, 
  Settings, LogOut, CreditCard, Menu, X, TrendingDown,
  Flame, LayoutTemplate, Search, ArrowUpRight, Heart,
  Gift, Zap, Crown, MessageSquare
} from "lucide-react";

type Tab = "home" | "analyses" | "ideas" | "trends" | "account";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<Tab>("home");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab") as Tab;
    if (tab && ["home", "analyses", "trends", "account"].includes(tab)) {
      setActiveTab(tab);
    } else {
      setActiveTab("home");
    }
  }, [location]);
  
  const isFreePlan = true; // Hardcoded for now based on UI state

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning, Alex. Ready to analyze today's reel?";
    if (hour < 18) return "Hey Alex — what are you working on?";
    return "Evening, Alex. Check how your last reel is trending.";
  };

  const renderHome = () => (
    <div className="flex flex-col gap-8 pb-24 md:pb-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{getGreeting()}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-ink/10 text-sm font-medium shadow-sm">
            🛍️ E-commerce Creator
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
            🎬 2 free analyses remaining
          </span>
          <a href="#upgrade" className="text-sm font-bold text-ink hover:underline">Go Pro →</a>
        </div>
      </div>

      {/* Performance Snapshot */}
      <div className="bg-ink text-warm-bg rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group cursor-pointer">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110" />
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-warm-bg/80">Your Creator Score</h2>
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-sm font-bold">
              <TrendingUp className="w-4 h-4" /> +8 pts this month
            </div>
          </div>
          
          <div className="flex items-end gap-4 mb-8">
            <div className="text-6xl md:text-7xl font-bold tracking-tight">72<span className="text-3xl text-warm-bg/50">/100</span></div>
            <div className="w-full max-w-xs h-4 bg-white/10 rounded-full overflow-hidden mb-2 hidden sm:block">
              <div className="h-full bg-white rounded-full w-[72%]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-warm-bg/60 text-xs uppercase tracking-wider mb-1">Analyses Done</div>
              <div className="font-bold text-lg">7</div>
            </div>
            <div>
              <div className="text-warm-bg/60 text-xs uppercase tracking-wider mb-1">Avg Percentile</div>
              <div className="font-bold text-lg">Top 31%</div>
            </div>
            <div>
              <div className="text-warm-bg/60 text-xs uppercase tracking-wider mb-1">Best Reel</div>
              <div className="font-bold text-lg text-emerald-400">Top 12%</div>
            </div>
            <div>
              <div className="text-warm-bg/60 text-xs uppercase tracking-wider mb-1">Trend</div>
              <div className="font-bold text-lg flex items-center gap-1"><ArrowUpRight className="w-4 h-4 text-emerald-400" /> Improving</div>
            </div>
          </div>
        </div>
      </div>

      {/* Streak / Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-6 border border-ink/5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-ink">4-week streak</h3>
          </div>
          <p className="text-sm text-ink-light mb-4">You've analyzed at least 1 reel per week</p>
          <div className="flex gap-1 mb-3">
            {[1,2,3,4].map(i => <div key={i} className="w-3 h-3 rounded-full bg-amber-500" />)}
            <div className="w-3 h-3 rounded-full bg-ink/10" />
          </div>
          <p className="text-xs text-ink-light font-medium">Keep it up — creators who analyze weekly improve 2x faster</p>
        </div>

        <Link to="/analyze?step=results" className="bg-white rounded-3xl p-6 border border-ink/5 shadow-sm cursor-pointer hover:shadow-md transition-shadow group block">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-emerald-500" />
            <h3 className="font-bold text-ink">Your Best Result</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-16 bg-ink/5 rounded-lg overflow-hidden relative">
              <img src="https://picsum.photos/seed/best/100/150" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 mb-1">
                Top 12%
              </div>
              <p className="text-xs text-ink-light line-clamp-1">E-commerce</p>
              <div className="text-xs font-bold text-ink mt-1 group-hover:text-emerald-600 flex items-center gap-1">
                View <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-warm-bg rounded-3xl p-6 border border-ink/10 shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4"><Lock className="w-4 h-4 text-ink/40" /></div>
          <div className="flex items-center gap-2 mb-2">
            <LayoutTemplate className="w-5 h-5 text-ink/40" />
            <h3 className="font-bold text-ink/60">Reel Blueprints</h3>
          </div>
          <p className="text-sm text-ink-light mb-6">Generate winning scripts based on your niche data.</p>
          <button className="w-full py-2.5 rounded-xl bg-white border border-ink/10 text-sm font-bold text-ink hover:bg-ink/5 transition-colors">
            Unlock with Pro
          </button>
        </div>
      </div>

      {/* Recent Analyses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Recent Analyses</h2>
          <button onClick={() => setActiveTab("analyses")} className="text-sm font-bold text-ink-light hover:text-ink">See All →</button>
        </div>
        <div className="flex overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 snap-x">
          {[1,2,3,4,5].map((i) => (
            <Link to="/analyze?step=results" key={i} className="min-w-[200px] md:min-w-0 bg-white rounded-2xl p-3 border border-ink/5 shadow-sm snap-start cursor-pointer hover:-translate-y-1 transition-transform group block">
              <div className="aspect-[9/16] bg-ink/5 rounded-xl overflow-hidden relative mb-3">
                <img src={`https://picsum.photos/seed/rec${i}/150/250`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-emerald-700 shadow-sm">
                  Top 23%
                </div>
              </div>
              <h4 className="text-sm font-bold line-clamp-1 mb-1 group-hover:text-ink-light">E-commerce</h4>
              <p className="text-xs text-ink-light mb-2">{i} days ago</p>
              <div className="text-xs font-bold text-ink flex items-center gap-1">
                View Results <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Niche Pulse */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2"><Activity className="w-5 h-5 text-blue-500" /> What's working in E-commerce this week</h2>
          <p className="text-sm text-ink-light">Based on our analysis of new top-performing reels indexed this week</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm">
            <div className="text-xs font-bold text-ink-light uppercase tracking-wider mb-2">Format Trend</div>
            <h4 className="font-bold text-ink mb-2">Sweet spot length: 18-22 seconds</h4>
            <p className="text-sm text-ink-light">Top performers this week average 20s. Up from 25s last month.</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm">
            <div className="text-xs font-bold text-ink-light uppercase tracking-wider mb-2">Hook Trend</div>
            <h4 className="font-bold text-ink mb-2">Product reveal in first 2 seconds</h4>
            <p className="text-sm text-ink-light">Used in 4 of the top 5 new winners this week.</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 backdrop-blur-md bg-white/60 z-10 flex flex-col items-center justify-center p-4 text-center">
              <Lock className="w-5 h-5 text-ink mb-2" />
              <p className="text-sm font-bold text-ink mb-2">Unlock all niche insights</p>
              <button className="px-4 py-1.5 bg-ink text-white text-xs font-bold rounded-full">Go Pro</button>
            </div>
            <div className="opacity-40">
              <div className="text-xs font-bold text-ink-light uppercase tracking-wider mb-2">Audio Trend</div>
              <h4 className="font-bold text-ink mb-2">Trending audio: [Hidden]</h4>
              <p className="text-sm text-ink-light">Performing 2.4x above average. Used by 12 new top performers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Action CTA */}
      <div className="bg-blue-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100">
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">🎬 Ready to analyze your next reel?</h3>
          <p className="text-blue-800/80">Upload now to see how it compares to the latest winners.</p>
        </div>
        <Link to="/analyze" className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-center whitespace-nowrap shadow-lg shadow-blue-600/20">
          Analyze a Reel →
        </Link>
      </div>

    </div>
  );

  const renderAnalyses = () => (
    <div className="flex flex-col gap-6 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">My Analyses</h1>
        <Link to="/analyze" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-ink text-warm-bg font-bold rounded-xl hover:bg-ink/90 transition-colors">
          <PlusCircle className="w-4 h-4" /> Analyze New Reel
        </Link>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar">
        <button className="px-4 py-2 bg-ink text-white text-sm font-bold rounded-full whitespace-nowrap">All</button>
        <button className="px-4 py-2 bg-white border border-ink/10 text-ink-light text-sm font-bold rounded-full whitespace-nowrap hover:bg-ink/5">Winning (Top 20%)</button>
        <button className="px-4 py-2 bg-white border border-ink/10 text-ink-light text-sm font-bold rounded-full whitespace-nowrap hover:bg-ink/5">Average</button>
        <button className="px-4 py-2 bg-white border border-ink/10 text-ink-light text-sm font-bold rounded-full whitespace-nowrap hover:bg-ink/5">Needs Work</button>
      </div>

      <div className="flex flex-col gap-4">
        {[1,2,3,4,5].map((i) => (
          <Link to="/analyze?step=results" key={i} className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col sm:flex-row gap-4 sm:items-center hover:shadow-md transition-shadow cursor-pointer group block">
            <div className="w-16 h-24 sm:w-20 sm:h-28 bg-ink/5 rounded-xl overflow-hidden shrink-0 relative">
              <img src={`https://picsum.photos/seed/hist${i}/100/150`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg mb-1 truncate group-hover:text-ink-light transition-colors">
                {i === 1 ? "5 products I regret buying on Amazon" : `E-commerce Reel #${i}`}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-3">
                <span className="px-2 py-1 bg-ink/5 rounded-md">🛍️ E-commerce</span>
                <span className={`px-2 py-1 rounded-md ${i <= 2 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  Top {i * 12}%
                </span>
                <span className="text-ink-light">March {20 - i}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink-light">
                <span className="flex items-center gap-1"><Trophy className="w-4 h-4" /> Winner sim: {80 - i*5}%</span>
                <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> Pred. likes: {4.5 - i*0.5}%</span>
              </div>
            </div>
            <div className="hidden sm:flex shrink-0">
              <div className="w-10 h-10 rounded-full bg-warm-bg flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const renderTrends = () => (
    <div className="flex flex-col gap-8 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-emerald-500" /> Niche Trends
          </h1>
          <p className="text-ink-light">What's working right now in your space.</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 bg-white border border-ink/10 rounded-xl text-sm font-bold focus:outline-none">
            <option>🛍️ E-commerce</option>
            <option>💪 Fitness</option>
          </select>
          <select className="px-4 py-2 bg-white border border-ink/10 rounded-xl text-sm font-bold focus:outline-none">
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* Locked Overlay for Free Users */}
      <div className="relative">
        <div className="absolute inset-0 z-20 backdrop-blur-sm bg-warm-bg/60 flex flex-col items-center justify-center p-6 text-center rounded-3xl border border-ink/10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
            <Lock className="w-8 h-8 text-ink" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Unlock Niche Intelligence</h2>
          <p className="text-ink-light max-w-md mb-8">
            Pro members get weekly breakdowns of rising hooks, trending formats, and top-performing reels in their exact niche.
          </p>
          <button className="px-8 py-4 bg-ink text-white font-bold rounded-xl hover:bg-ink/90 transition-colors shadow-xl">
            Go Pro — $9.99/month
          </button>
        </div>

        {/* Blurred Content */}
        <div className="opacity-40 pointer-events-none space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">Rising Hooks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-ink/5">
                <div className="text-emerald-500 font-bold mb-2 flex items-center gap-1"><TrendingUp className="w-4 h-4"/> +40% this week</div>
                <h4 className="text-lg font-bold mb-2">"Before & After" Openers</h4>
                <p className="text-ink-light text-sm">Example: "What my skin looked like before finding this..."</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-ink/5">
                <div className="text-emerald-500 font-bold mb-2 flex items-center gap-1"><TrendingUp className="w-4 h-4"/> +25% this week</div>
                <h4 className="text-lg font-bold mb-2">Negative Hooks</h4>
                <p className="text-ink-light text-sm">Example: "Stop buying X until you watch this."</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Top Performers This Week</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-[9/16] bg-ink/10 rounded-2xl" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const renderAccount = () => (
    <div className="flex flex-col gap-8 pb-24 md:pb-8 max-w-2xl">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Account & Settings</h1>

      {/* Free User Status Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-ink/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-bold text-ink-light uppercase tracking-wider mb-1">Plan Status</div>
          <h2 className="text-2xl font-bold mb-2">Free <span className="text-lg font-normal text-ink-light">(2 analyses used)</span></h2>
          <p className="text-sm text-ink-light">Unlimited analyses. Reel Blueprints. Full niche trends.</p>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-ink text-white font-bold rounded-xl hover:bg-ink/90 transition-colors whitespace-nowrap">
          Upgrade to Pro
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-ink/5 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-ink/5 flex items-center gap-4">
          <div className="w-16 h-16 bg-lilac/30 text-lilac-dark rounded-full flex items-center justify-center text-xl font-bold">
            AL
          </div>
          <div>
            <h3 className="text-xl font-bold">Alex Creator</h3>
            <p className="text-ink-light">alex@example.com</p>
          </div>
        </div>
        
        <div className="p-2">
          <button className="w-full flex items-center justify-between p-4 hover:bg-warm-bg rounded-xl transition-colors text-left">
            <div className="flex items-center gap-3 font-medium"><CreditCard className="w-5 h-5 text-ink-light" /> Manage Subscription</div>
            <ChevronRight className="w-5 h-5 text-ink-light" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-warm-bg rounded-xl transition-colors text-left">
            <div className="flex items-center gap-3 font-medium"><Search className="w-5 h-5 text-ink-light" /> Change Niche Preference</div>
            <ChevronRight className="w-5 h-5 text-ink-light" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-warm-bg rounded-xl transition-colors text-left">
            <div className="flex items-center gap-3 font-medium"><Settings className="w-5 h-5 text-ink-light" /> Notification Settings</div>
            <ChevronRight className="w-5 h-5 text-ink-light" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 text-red-600 rounded-xl transition-colors text-left mt-4">
            <div className="flex items-center gap-3 font-medium"><LogOut className="w-5 h-5" /> Sign Out</div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderIdeas = () => (
    <div className="flex flex-col gap-8 pb-24 md:pb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
          <LayoutTemplate className="w-6 h-6 text-ink" /> Video Ideas Board
        </h1>
        <p className="text-ink-light">Your AI-generated scripts and concepts.</p>
      </div>
      
      <div className="bg-white rounded-3xl p-12 border border-ink/5 shadow-sm text-center">
        <div className="w-16 h-16 bg-ink/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <LayoutTemplate className="w-8 h-8 text-ink/40" />
        </div>
        <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
        <p className="text-ink-light max-w-md mx-auto mb-8">
          The Video Ideas Board is currently in development. Soon you'll be able to generate full scripts based on your winning patterns.
        </p>
        <button onClick={() => navigate("/analyze")} className="px-6 py-3 bg-ink text-white font-bold rounded-xl hover:bg-ink/90 transition-colors">
          Analyze a Reel Instead
        </button>
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "home" && renderHome()}
        {activeTab === "analyses" && renderAnalyses()}
        {activeTab === "ideas" && renderIdeas()}
        {activeTab === "trends" && renderTrends()}
        {activeTab === "account" && renderAccount()}
      </motion.div>
    </AnimatePresence>
  );
}

