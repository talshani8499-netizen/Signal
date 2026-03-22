import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Plus, Play, TrendingUp, TrendingDown, Video, CheckCircle2, ArrowUpRight, ArrowDownRight, MoreHorizontal, Copy } from "lucide-react";

export default function Dashboard() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://elevate.digital/ref/user123');
    // In a real app, you'd show a toast notification here
  };

  return (
    <div className="min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
      {/* Header & CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-serif font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-ink-light">Welcome back. Here's an overview of your content performance.</p>
        </div>
        <Link 
          to="/analyze" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-warm-bg font-semibold rounded-full hover:bg-ink/90 transition-transform hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Analyze New Post
        </Link>
      </div>

      {/* Referral Section */}
      {/* Note: In a real app, the 20-credit reward logic would be handled by a backend webhook (e.g., Stripe) that listens for successful payments and credits the referring user's account. */}
      <div className="bg-lilac/20 border border-lilac/30 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-serif font-bold mb-2 text-ink">Your Referral Link</h3>
          <p className="text-ink/80 text-sm md:text-base">
            Earn <strong className="text-ink">20 credits</strong> for every successful purchase made via your unique referral link.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto bg-warm-bg p-2 rounded-2xl border border-ink/10 shadow-sm">
          <code className="px-4 py-2 text-sm text-ink-light font-mono truncate w-full md:w-64 select-all">
            elevate.digital/ref/user123
          </code>
          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-5 py-2.5 bg-ink text-warm-bg rounded-xl text-sm font-medium hover:bg-ink/90 whitespace-nowrap transition-colors shrink-0"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-ink/10 rounded-[2rem] p-6 flex flex-col relative overflow-hidden group hover:bg-card/80 transition-colors">
          <div className="w-12 h-12 rounded-full bg-lilac/30 flex items-center justify-center mb-6 text-lilac-dark">
            <Video className="w-6 h-6" />
          </div>
          <span className="text-ink-light text-sm font-medium mb-1 uppercase tracking-wider">Analyzed Posts</span>
          <span className="text-4xl font-bold tracking-tight">42</span>
        </div>
        
        <div className="bg-card border border-ink/10 rounded-[2rem] p-6 flex flex-col relative overflow-hidden group hover:bg-card/80 transition-colors">
          <div className="w-12 h-12 rounded-full bg-lilac/30 flex items-center justify-center mb-6 text-lilac-dark">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <span className="text-ink-light text-sm font-medium mb-1 uppercase tracking-wider">Published</span>
          <span className="text-4xl font-bold tracking-tight">18</span>
        </div>

        <div className="bg-card border border-ink/10 rounded-[2rem] p-6 flex flex-col relative overflow-hidden group hover:bg-card/80 transition-colors">
          <div className="w-12 h-12 rounded-full bg-lilac/30 flex items-center justify-center mb-6 text-lilac-dark">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className="text-ink-light text-sm font-medium mb-1 uppercase tracking-wider">Best Performer</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight text-emerald-600">8.4%</span>
            <span className="text-sm text-ink-light/60 font-medium">like/view</span>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-500/10 w-fit px-3 py-1.5 rounded-full">
            <ArrowUpRight className="w-3.5 h-3.5" /> Top 5% in niche
          </div>
        </div>

        <div className="bg-card border border-ink/10 rounded-[2rem] p-6 flex flex-col relative overflow-hidden group hover:bg-card/80 transition-colors">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-red-600">
            <TrendingDown className="w-6 h-6" />
          </div>
          <span className="text-ink-light text-sm font-medium mb-1 uppercase tracking-wider">Worst Performer</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight text-red-600">1.2%</span>
            <span className="text-sm text-ink-light/60 font-medium">like/view</span>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-red-700 bg-red-500/10 w-fit px-3 py-1.5 rounded-full">
            <ArrowDownRight className="w-3.5 h-3.5" /> Bottom 20% in niche
          </div>
        </div>
      </div>

      {/* Past Uploads */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold tracking-tight">Recent Analyses</h2>
          <button className="text-sm font-medium text-ink-light hover:text-ink transition-colors">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: "Top 5 dropshipping products for Q4", niche: "E-commerce", date: "2 hours ago", score: 82, insight: "Strong hook, matches top 10% of winners.", type: "good" },
            { id: 2, title: "Morning routine 2026", niche: "Fitness", date: "Yesterday", score: 45, insight: "Pacing slows at 0:15, similar to underperformers.", type: "bad" },
            { id: 3, title: "Skincare mistakes you're making", niche: "Beauty", date: "3 days ago", score: 91, insight: "Excellent lighting and text overlay placement.", type: "good" },
            { id: 4, title: "NYC Apartment Tour under $3k", niche: "Real Estate", date: "1 week ago", score: 68, insight: "Good retention, but CTA is missing at the end.", type: "neutral" },
            { id: 5, title: "High protein breakfast meal prep", niche: "Food", date: "1 week ago", score: 22, insight: "Audio quality is lower than niche average.", type: "bad" },
            { id: 6, title: "TikTok Shop strategies", niche: "E-commerce", date: "2 weeks ago", score: 78, insight: "Good use of trending audio, solid completion rate.", type: "good" },
          ].map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item.id} 
              className="bg-card border border-ink/10 rounded-[2rem] overflow-hidden flex flex-col group hover:bg-card/80 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/5"
            >
              <div className="h-52 bg-ink relative overflow-hidden">
                <img src={`https://picsum.photos/seed/dash${item.id}/400/300`} alt="Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-ink/40 backdrop-blur-md flex items-center justify-center text-warm-bg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 border border-warm-bg/20">
                    <Play className="w-6 h-6 fill-warm-bg ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-ink/50 backdrop-blur-md border border-warm-bg/10 text-xs font-medium text-warm-bg shadow-lg">
                    {item.niche}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm backdrop-blur-md shadow-lg ${
                    item.score >= 80 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    item.score >= 50 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {item.score}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-ink transition-colors">{item.title}</h3>
                  <button className="text-ink-light hover:text-ink transition-colors flex-shrink-0 mt-1">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-ink-light/60 text-sm mb-6">{item.date}</span>
                
                <div className="mt-auto pt-5 border-t border-ink/10">
                  <p className="text-sm text-ink/70 line-clamp-2 leading-relaxed">
                    <span className="font-semibold text-ink mr-2">Insight:</span> 
                    {item.insight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
