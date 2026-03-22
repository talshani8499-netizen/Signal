import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Activity,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Gauge,
  Zap,
  Eye,
  Volume2,
  Type,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music,
  HelpCircle,
  Brain,
  Fingerprint,
  MousePointer2,
  Clock,
  Star,
  Crown,
  Sparkles,
  Link as LinkIcon
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const MiniSocialPost = ({ imageUrl, views, highlight, grayscale }: { imageUrl: string, views: string, highlight?: boolean, grayscale?: boolean }) => (
  <div className={`aspect-[9/16] w-24 rounded-xl relative overflow-hidden shadow-xl transition-transform hover:-translate-y-2 ${highlight ? 'scale-110 border-2 border-emerald-500 z-20' : 'z-10'} ${grayscale ? 'grayscale opacity-70' : ''}`}>
    <img src={imageUrl} className="w-full h-full object-cover" alt="Post" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute right-1 bottom-6 flex flex-col gap-1">
      <div className="w-3 h-3 bg-white/50 rounded-full" />
      <div className="w-3 h-3 bg-white/50 rounded-full" />
      <div className="w-3 h-3 bg-white/50 rounded-full" />
    </div>
    <div className="absolute bottom-2 left-1 right-1">
       <div className="w-3/4 h-1 bg-white/70 rounded-full mb-1" />
       <div className="w-1/2 h-1 bg-white/50 rounded-full" />
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm drop-shadow-md whitespace-nowrap">
      {views}
    </div>
    {highlight && (
      <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-3 h-3 text-white" />
      </div>
    )}
  </div>
);

const SocialPostMockup = ({ imageUrl, username, caption, likes, comments, shares, overlayText, isFlop }: { imageUrl: string, username: string, caption: string, likes: string, comments: string, shares: string, overlayText?: string, isFlop?: boolean }) => (
  <div className="w-full h-full relative bg-black text-white font-sans overflow-hidden">
    <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-90" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
    
    {overlayText && (
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] backdrop-blur-sm text-white text-center py-2 px-4 rounded-lg font-bold text-sm sm:text-base border shadow-xl transform ${isFlop ? 'bg-red-500/80 border-red-400 rotate-2' : 'bg-black/70 border-white/20 -rotate-2'}`}>
        {overlayText}
      </div>
    )}

    <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5">
      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-zinc-800">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} className="w-full h-full" alt={username} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <Heart className="w-7 h-7 text-white fill-white" />
        <span className="text-xs font-semibold drop-shadow-md">{likes}</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        <span className="text-xs font-semibold drop-shadow-md">{comments}</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Bookmark className="w-7 h-7 text-white fill-white" />
        <span className="text-xs font-semibold drop-shadow-md">{shares}</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Share2 className="w-7 h-7 text-white fill-white" />
        <span className="text-xs font-semibold drop-shadow-md">Share</span>
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-16">
      <h4 className="font-bold text-sm sm:text-base drop-shadow-md mb-1">@{username}</h4>
      <p className="text-xs sm:text-sm drop-shadow-md line-clamp-2 mb-3 text-white/90">{caption}</p>
      <div className="flex items-center gap-2 bg-black/40 w-max px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
        <Music className="w-3 h-3" />
        <span className="text-xs font-medium truncate max-w-[120px]">Original Audio - {username}</span>
      </div>
    </div>
  </div>
);

export default function LandingV2() {
  return (
    <div className="flex flex-col items-center w-full selection:bg-lilac/30">
      
      {/* =========================================
          HERO: CONTRAST AND CLARITY
          ========================================= */}
      <div className="w-full bg-warm-bg text-ink relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-lilac/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply opacity-70" />
        
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.05] text-ink uppercase max-w-5xl"
          >
            Stop the "Post & Pray" Cycle. <br/>
            <span className="text-lilac-dark">Know Your Win Before You Post.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 w-full max-w-lg mx-auto relative flex items-center"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <LinkIcon className="w-5 h-5 text-ink-light/50" />
            </div>
            <input 
              type="text" 
              placeholder="Paste your TikTok or Reels link..." 
              className="w-full h-14 pl-12 pr-36 rounded-full border border-ink/20 bg-white shadow-lg shadow-ink/5 focus:outline-none focus:border-lilac-dark focus:ring-2 focus:ring-lilac-dark/20 transition-all text-ink placeholder:text-ink-light/50"
            />
            <Link to="/auth" className="absolute right-1.5 top-1.5 bottom-1.5">
              <InteractiveHoverButton text="Analyze" className="h-full px-6 bg-ink text-warm-bg border-none hover:bg-ink/90">
                Analyze
              </InteractiveHoverButton>
            </Link>
          </motion.div>

          {/* Contrast Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 relative"
          >
            {/* The Problem (Left) */}
            <div className="flex-1 bg-white rounded-3xl p-6 border border-ink/10 shadow-xl relative overflow-hidden w-full">
              <div className="absolute inset-0 bg-ink/5 pointer-events-none" />
              <div className="absolute top-4 left-4 flex gap-2">
                <HelpCircle className="w-6 h-6 text-ink/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                <HelpCircle className="w-8 h-8 text-ink/30 animate-bounce" style={{ animationDelay: '200ms' }} />
                <HelpCircle className="w-5 h-5 text-ink/50 animate-bounce" style={{ animationDelay: '400ms' }} />
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md grayscale opacity-80">
                  <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=400&h=400&fit=crop" alt="Frustrated Creator" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-ink/70 mb-4">The Guesswork</h3>
                <div className="flex gap-3 justify-center flex-wrap">
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1516280440502-61f53f3a0100?w=150&h=250&fit=crop" views="200 views" grayscale />
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=150&h=250&fit=crop" views="154 views" grayscale />
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=250&fit=crop" views="312 views" grayscale />
                </div>
              </div>
            </div>

            {/* The Arc (Center) */}
            <div className="hidden md:flex flex-col items-center justify-center z-20 px-4">
              <div className="w-24 h-24 rounded-full bg-ink text-warm-bg flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)] relative">
                <Activity className="w-10 h-10" />
                {/* Arc lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[150%] h-[150%] pointer-events-none" viewBox="0 0 100 100">
                  <path d="M 0 50 Q 50 0 100 50" fill="none" stroke="url(#arc-grad)" strokeWidth="4" className="animate-[dash_3s_linear_infinite]" strokeDasharray="10 10" />
                  <defs>
                    <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* The Solution (Right) */}
            <div className="flex-1 bg-white rounded-3xl p-6 border-2 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col items-center relative z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-400 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" alt="Confident Creator" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> The Blueprint
                </h3>
                <div className="flex gap-3 justify-center flex-wrap">
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1516280440502-61f53f3a0100?w=150&h=250&fit=crop" views="1.2M views" highlight />
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=150&h=250&fit=crop" views="45K likes" />
                  <MiniSocialPost imageUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=250&fit=crop" views="890K views" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* =========================================
          SECTION 2: THE HOOK LAB
          ========================================= */}
      <section className="w-full bg-ink text-warm-bg py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Hook Lab</h2>
            <p className="text-warm-bg/70 max-w-2xl mx-auto text-lg">
              We visually break down your critical first 3 seconds. See exactly why they swipe away, and how to make them stay.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            
            {/* Left Phone: The Flop */}
            <div className="flex flex-col items-center w-full max-w-[280px]">
              <div className="w-full aspect-[9/16] bg-black rounded-[2.5rem] border-4 border-zinc-800 overflow-hidden relative shadow-2xl mb-6">
                <SocialPostMockup 
                  imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=700&fit=crop"
                  username="tech_talks"
                  caption="So today I wanted to talk about..."
                  likes="12"
                  comments="0"
                  shares="0"
                  overlayText="ALERT: DROP-OFF RISK: 81%"
                  isFlop
                />
              </div>
              <div className="w-full bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                <h4 className="text-red-400 font-bold text-sm mb-2 uppercase tracking-wider">Hook Analysis</h4>
                <div className="w-full h-12 flex items-end gap-1">
                  {[80, 70, 50, 30, 20, 15, 10, 5, 5, 5].map((h, i) => (
                    <div key={i} className="flex-1 bg-red-500/50 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="text-xs text-red-300 mt-2">Pacing Too Slow</p>
              </div>
            </div>

            {/* Central Area: Analysis & Gauge */}
            <div className="flex flex-col items-center justify-center w-full max-w-md my-8 lg:my-0">
              <div className="w-32 h-32 rounded-full bg-zinc-800/50 border-2 border-dashed border-zinc-600 flex flex-col items-center justify-center mb-12 relative group">
                <div className="absolute inset-0 bg-lilac/10 rounded-full blur-xl group-hover:bg-lilac/20 transition-colors" />
                <Activity className="w-8 h-8 text-lilac mb-2" />
                <span className="text-xs text-zinc-400 font-medium">Drag Draft Here</span>
              </div>

              {/* The Big Number Gauge */}
              <div className="w-full max-w-[300px] relative">
                <div className="aspect-[2/1] overflow-hidden relative">
                  <div className="w-full h-[200%] rounded-full border-[16px] border-zinc-800 absolute top-0 left-0" />
                  <div className="w-full h-[200%] rounded-full border-[16px] border-emerald-500 absolute top-0 left-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', transform: 'rotate(45deg)' }} />
                  <motion.div 
                    className="absolute bottom-0 left-1/2 w-2 h-[90%] bg-white origin-bottom rounded-full shadow-lg"
                    initial={{ rotate: -90 }}
                    whileInView={{ rotate: 75 }}
                    transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.5 }}
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl z-10" />
                </div>
                <div className="text-center mt-6">
                  <div className="text-5xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] tracking-tighter">95%</div>
                  <div className="text-sm font-bold text-emerald-500/80 uppercase tracking-widest mt-1">Max Viral Potential</div>
                </div>
              </div>
            </div>

            {/* Right Phone: The Winner */}
            <div className="flex flex-col items-center w-full max-w-[280px]">
              <div className="w-full aspect-[9/16] bg-black rounded-[2.5rem] border-4 border-emerald-500/50 overflow-hidden relative shadow-[0_0_40px_rgba(16,185,129,0.2)] mb-6">
                <SocialPostMockup 
                  imageUrl="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=700&fit=crop"
                  username="tech_talks"
                  caption="3 SECRETS Apple doesn't want you to know 🤫📱 #tech #apple"
                  likes="450K"
                  comments="12K"
                  shares="89K"
                  overlayText="3 SECRETS TO..."
                />
              </div>
              <div className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-wider">Retention Rate</h4>
                <div className="w-full h-12 flex items-end gap-1">
                  {[95, 92, 90, 88, 85, 85, 82, 80, 78, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/80 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="text-xs text-emerald-300 mt-2">Pattern Interrupt Detected</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: THE MULTIMODAL BLUEPRINT
          ========================================= */}
      <section className="w-full bg-[#F8F9FA] py-32 border-y border-ink/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-ink">The Multimodal Blueprint</h2>
            <p className="text-ink-light max-w-2xl mx-auto text-lg">
              We don't just look at tags. We analyze every pixel, soundwave, and word to build your content's unique digital fingerprint.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
            
            {/* Impact Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {/* Visuals Card */}
              <div className="bg-white rounded-2xl p-6 border border-ink/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2"><Eye className="w-5 h-5 text-violet-500" /> Visuals</h3>
                <div className="aspect-video bg-zinc-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-ink/5">
                  <img src="https://images.unsplash.com/photo-1516280440502-61f53f3a0100?w=400&h=225&fit=crop" className="w-full h-full object-cover opacity-50" />
                  {/* Framing lines */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    <div className="border-r border-b border-white/30" /><div className="border-r border-b border-white/30" /><div className="border-b border-white/30" />
                    <div className="border-r border-b border-white/30" /><div className="border-r border-b border-white/30" /><div className="border-b border-white/30" />
                    <div className="border-r border-white/30" /><div className="border-r border-white/30" /><div />
                  </div>
                  {/* Color Palette */}
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-[#E2C2B3] border border-white/50 shadow-sm" />
                    <div className="w-4 h-4 rounded-full bg-[#8A9A5B] border border-white/50 shadow-sm" />
                    <div className="w-4 h-4 rounded-full bg-[#2C3E50] border border-white/50 shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Audio Card */}
              <div className="bg-white rounded-2xl p-6 border border-ink/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2"><Volume2 className="w-5 h-5 text-rose-500" /> Audio</h3>
                <div className="h-24 bg-zinc-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-ink/5 px-2">
                  <div className="flex items-center gap-1 w-full h-12">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="flex-1 bg-rose-400/60 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Context Card */}
              <div className="bg-white rounded-2xl p-6 border border-ink/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2"><Type className="w-5 h-5 text-blue-500" /> Context</h3>
                <div className="h-24 bg-zinc-100 rounded-lg relative overflow-hidden flex flex-col justify-center border border-ink/5 p-4">
                  <div className="w-full h-2 bg-blue-200 rounded-full mb-3 relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full bg-blue-500 w-full animate-[scan_2s_ease-in-out_infinite]" />
                  </div>
                  <p className="text-xs font-mono text-zinc-500">OCR: "3 SECRETS APPLE DOESN'T..."</p>
                  <p className="text-xs font-mono text-zinc-500 mt-1">META: #tech #apple #hacks</p>
                </div>
              </div>
            </div>

            {/* Wires (Desktop) */}
            <div className="hidden lg:flex flex-col justify-center h-[500px] w-32 relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M 0 100 C 50 100, 50 250, 100 250" fill="none" stroke="#A855F7" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_2s_linear_infinite]" />
                <path d="M 0 250 L 100 250" fill="none" stroke="#F43F5E" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_2s_linear_infinite]" />
                <path d="M 0 400 C 50 400, 50 250, 100 250" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_2s_linear_infinite]" />
              </svg>
            </div>

            {/* The Brain / Fingerprint */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="w-48 h-48 bg-white rounded-full shadow-[0_0_50px_rgba(0,0,0,0.1)] border-4 border-white flex items-center justify-center relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                  <Brain className="w-24 h-24 text-ink absolute opacity-10" />
                  <Fingerprint className="w-20 h-20 text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20" strokeWidth={1.5} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: PREDICTIVE POWER (SIMULATOR)
          ========================================= */}
      <section className="w-full bg-warm-bg py-32 border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-ink">Predictive Power</h2>
            <p className="text-ink-light max-w-2xl mx-auto text-lg">
              Don't just analyze. Simulate. Test different edits and posting times to find the optimal combination for explosive growth.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-ink/10 shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              
              {/* A/B Tester */}
              <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-200">
                <h3 className="text-lg font-bold text-ink mb-6 text-center">A/B Edit Tester</h3>
                <div className="flex gap-4 justify-center relative">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-32 aspect-[9/16] bg-zinc-200 rounded-xl overflow-hidden relative opacity-60">
                      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&h=350&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-zinc-500">Video A (Slow)</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3 relative">
                    <div className="w-32 aspect-[9/16] bg-zinc-200 rounded-xl overflow-hidden relative border-4 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                      <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=200&h=350&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-bold text-emerald-600">Video B (Fast)</span>
                    
                    {/* Cursor */}
                    <motion.div 
                      className="absolute -bottom-4 -right-4 z-20"
                      initial={{ x: -50, y: 50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <MousePointer2 className="w-8 h-8 text-ink fill-white drop-shadow-md" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Time Tester */}
              <div className="bg-zinc-50 rounded-3xl p-6 border border-zinc-200">
                <h3 className="text-lg font-bold text-ink mb-6 text-center">Simulate Post Time</h3>
                <div className="flex flex-col gap-4">
                  <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 flex items-center justify-between shadow-md relative">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="font-bold text-ink">5:00 PM EST</span>
                    </div>
                    <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md">Optimal</span>
                    
                    {/* Cursor */}
                    <motion.div 
                      className="absolute top-1/2 right-4 z-20"
                      initial={{ x: 50, y: 50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <MousePointer2 className="w-8 h-8 text-ink fill-white drop-shadow-md" />
                    </motion.div>
                  </div>
                  
                  <div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-between opacity-60">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-zinc-400" />
                      <span className="font-medium text-zinc-500">10:00 PM EST</span>
                    </div>
                    <span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md">Low Traffic</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Prediction Result */}
            <div className="w-full bg-ink rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
              <h4 className="text-warm-bg/70 font-medium mb-4 uppercase tracking-widest text-sm relative z-10">Real-Time Prediction</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
                <div className="text-5xl md:text-6xl font-black text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  +110%
                  <span className="block text-lg font-medium text-emerald-400/80 mt-2">Predicted Views</span>
                </div>
                <div className="w-px h-16 bg-white/10 hidden md:block" />
                <div className="text-5xl md:text-6xl font-black text-lilac drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  +35%
                  <span className="block text-lg font-medium text-lilac/80 mt-2">Predicted Followers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: THE 6-MONTH TRANSFORMATION
          ========================================= */}
      <section className="w-full bg-ink text-warm-bg py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The 6-Month Transformation</h2>
            <p className="text-warm-bg/70 max-w-2xl mx-auto text-lg">
              From hobbyist to full-time viral star. See the compounding effect of knowing your win before you post.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-[120px] left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-lilac-dark to-emerald-500 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              
              {/* Month 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-zinc-500 font-bold tracking-widest uppercase mb-6">Month 1</div>
                <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-zinc-700 overflow-hidden mb-6 opacity-80 blur-[1px]">
                  <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">150 Followers</div>
                <div className="w-full h-16 flex items-end justify-center gap-1 mb-6 opacity-50">
                  <div className="w-4 bg-zinc-600 h-[20%]" /><div className="w-4 bg-zinc-600 h-[15%]" /><div className="w-4 bg-zinc-600 h-[25%]" />
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
                  <h4 className="font-bold text-zinc-300 mb-1">Level 1: The 'Post & Pray' phase</h4>
                  <p className="text-xs text-zinc-500">10 posts, ~5k views total</p>
                </div>
              </div>

              {/* Month 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-lilac-dark font-bold tracking-widest uppercase mb-6">Month 3</div>
                <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-lilac-dark overflow-hidden mb-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">15,000 Followers</div>
                <div className="w-full h-16 flex items-end justify-center gap-1 mb-6">
                  <div className="w-4 bg-lilac-dark h-[40%]" /><div className="w-4 bg-lilac-dark h-[60%]" /><div className="w-4 bg-lilac-dark h-[50%]" />
                </div>
                <div className="bg-lilac-dark/10 rounded-xl p-4 border border-lilac-dark/30">
                  <h4 className="font-bold text-lilac-300 mb-1">Level 3: The 'Growth Engine' phase</h4>
                  <p className="text-xs text-lilac-500/70">35 posts, ~250k views total</p>
                </div>
              </div>

              {/* Month 6 */}
              <div className="flex flex-col items-center text-center relative">
                {/* Confetti/Glow */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none animate-pulse" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="text-emerald-400 font-bold tracking-widest uppercase mb-6 relative z-10">Month 6</div>
                <div className="relative mb-6 z-10">
                  <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-yellow-400 overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.4)]">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-yellow-400 text-black p-1.5 rounded-full shadow-lg">
                    <Star className="w-5 h-5 fill-black" />
                  </div>
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-2 relative z-10">180,000 Followers</div>
                
                <div className="w-full h-24 flex items-end justify-center gap-1.5 mb-6 relative z-10">
                  <div className="w-5 bg-emerald-500 h-[60%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="w-5 bg-emerald-500 h-[80%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="w-5 bg-emerald-400 h-[100%] shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                </div>
                
                <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 relative z-10 w-full">
                  <h4 className="font-bold text-emerald-400 mb-1">Level 6: The 'Viral Mastery' phase</h4>
                  <p className="text-xs text-emerald-500/70 mb-3">65 posts, ~12M views total, multiple #1 trends</p>
                  <div className="flex items-center justify-center gap-2 pt-3 border-t border-emerald-500/20">
                    <Fingerprint className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded">SIGNAL SCORE: 99%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: REVAMPED PRICING
          ========================================= */}
      <div id="pricing" className="w-full bg-warm-bg text-ink relative overflow-hidden border-t border-ink/5">
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Invest in your growth.
            </h2>
            <p className="text-xl text-ink-light">
              Stop wasting hours editing videos that flop. Get the blueprint to virality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-24 items-center">
            {/* Free Tier */}
            <div className="bg-white border border-ink/10 rounded-[2rem] p-8 flex flex-col relative h-[500px]">
              <h3 className="text-2xl font-serif font-semibold mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-ink-light font-medium">/month</span>
              </div>
              <p className="text-ink-light mb-8">Perfect for trying out Signal and seeing the value.</p>
              
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ink/40 shrink-0 mt-0.5" />
                  <span className="text-ink/80 text-sm">3 free post analyses</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ink/40 shrink-0 mt-0.5" />
                  <span className="text-ink/80 text-sm">Basic similarity matching</span>
                </div>
              </div>
              
              <button className="w-full py-3 px-6 rounded-xl border border-ink/20 font-semibold hover:bg-ink/5 transition-colors mt-auto">
                Get Started
              </button>
            </div>

            {/* Creator Tier (MAIN FOCUS) */}
            <div className="bg-white rounded-[2rem] flex flex-col relative shadow-2xl transform md:-translate-y-4 border-2 border-lilac-dark overflow-hidden h-[560px] z-10">
              {/* Highlight Header */}
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-3 px-8 text-center flex items-center justify-center gap-2">
                <Crown className="w-5 h-5 text-yellow-900" />
                <span className="text-yellow-900 font-bold text-sm uppercase tracking-wider">Most Popular for Creators</span>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-serif font-bold mb-2 text-ink">Creator</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black tracking-tight text-ink">$12.99</span>
                  <span className="text-ink-light font-medium">/month</span>
                </div>
                <p className="text-ink font-medium mb-8">Everything in Free + <span className="text-lilac-dark font-bold">RAPID GROWTH TOOLS.</span> Priority processing and real-time alerts. Gain followers, master the feed.</p>
                
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                    <span className="text-ink font-medium text-sm">200 credits (50 deep analyses)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                    <span className="text-ink font-medium text-sm">A/B Hook Testing Simulator</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                    <span className="text-ink font-medium text-sm">Connect up to 3 accounts</span>
                  </div>
                </div>

                <button className="w-full py-4 px-6 rounded-xl bg-lilac-dark text-white font-bold text-lg hover:bg-lilac-dark/90 transition-colors mt-auto shadow-lg shadow-lilac-dark/30">
                  Start 7-Day Free Trial
                </button>
              </div>
            </div>

            {/* Influencer Tier */}
            <div className="bg-white border border-ink/10 rounded-[2rem] p-8 flex flex-col relative h-[500px]">
              <h3 className="text-2xl font-serif font-semibold mb-2">Influencer</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$19.99</span>
                <span className="text-ink-light font-medium">/month</span>
              </div>
              <p className="text-ink-light mb-8">For power users and agencies managing high volume.</p>
              
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ink/40 shrink-0 mt-0.5" />
                  <span className="text-ink/80 text-sm">1000 credits (250 analyses)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ink/40 shrink-0 mt-0.5" />
                  <span className="text-ink/80 text-sm">ULTRA signal model access</span>
                </div>
              </div>

              <button className="w-full py-3 px-6 rounded-xl border border-ink/20 font-semibold hover:bg-ink/5 transition-colors mt-auto">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
