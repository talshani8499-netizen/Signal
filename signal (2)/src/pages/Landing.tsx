import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  TrendingDown, 
  Target, 
  Repeat, 
  UploadCloud, 
  Search, 
  BarChart3, 
  CheckCircle2,
  Play,
  Star,
  ChevronDown,
  Sparkles,
  Zap,
  Video,
  TrendingUp,
  Link as LinkIcon
} from "lucide-react";
import React, { useState } from "react";
import { Highlighter } from "@/registry/magicui/highlighter";

const faqs = [
  {
    question: "What niches are supported?",
    answer: "E-commerce, Fitness, Beauty, Food, Real Estate (more coming)."
  },
  {
    question: "What video formats work?",
    answer: "MP4, MOV, and links to IG Reels, TikTok, YouTube Shorts."
  },
  {
    question: "Is my content private?",
    answer: "Yes. Uploads are analyzed and deleted. We never post or store your content."
  }
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      navigate(`/analyze?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full selection:bg-lilac/30 bg-warm-bg text-ink font-sans">
      
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Blurred Background Loop Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-warm-bg/80 backdrop-blur-3xl z-10" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-lilac/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }} />
          
          {/* Abstract video grid background */}
          <div className="absolute inset-0 opacity-10 grid grid-cols-4 md:grid-cols-8 gap-4 p-4 transform -skew-y-12 scale-150">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="aspect-[9/16] bg-ink/20 rounded-xl overflow-hidden">
                <img src={`https://picsum.photos/seed/bg${i}/200/350`} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-ink leading-[1.1]"
          >
            You already know your reel flopped. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Now find out why.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-ink-light max-w-2xl mb-10 leading-relaxed"
          >
            Signal compares your video against thousands of real reels in your niche — showing you what winning content looks like and where yours falls short. No scores. Just proof.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6 w-full max-w-xl"
          >
            <form onSubmit={handleAnalyze} className="w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-ink-light" />
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste Instagram Reel or TikTok URL"
                  className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-ink/10 bg-white text-ink placeholder:text-ink-light focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/20 transition-all shadow-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={!url.trim()}
                className="group relative inline-flex items-center justify-center h-14 px-8 rounded-full bg-ink text-warm-bg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-ink/20 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                Analyze
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            <div className="flex items-center gap-2 text-sm text-ink-light font-medium">
              <span>🎬</span> 
              <p className="leading-relaxed">
                Your first{" "}
                <Highlighter action="underline" color="#FF9800">
                  2 analyses
                </Highlighter>{" "}
                are{" "}
                <Highlighter action="highlight" color="#FFD166">
                  free
                </Highlighter>
                . No credit card.
              </p>
            </div>
          </motion.div>

          {/* Social Proof Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-col md:flex-row items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/avatar${i}/40/40`} 
                  alt="Creator" 
                  className="w-10 h-10 rounded-full border-2 border-warm-bg object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-ink-light">
              Join <span className="text-ink font-bold">1,200+ creators</span> who finally understand their content
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE PROBLEM (Pain Amplifier)
          ========================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">Sound familiar?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium text-ink mb-6 leading-relaxed">
              "My best reel got 200 views. My throwaway got 50K. I have no idea what I did differently."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/seed/ecom/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <div className="text-sm font-bold text-ink">E-commerce creator</div>
                <div className="text-xs text-ink-light">12K followers</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium text-ink mb-6 leading-relaxed">
              "I paid for a virality scorer. It gave 90 to a reel that got 400 views and 30 to one that hit 80K."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/seed/fit/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <div className="text-sm font-bold text-ink">Fitness coach</div>
                <div className="text-xs text-ink-light">28K followers</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-lilac/20 text-lilac-dark flex items-center justify-center mb-6">
              <Repeat className="w-6 h-6" />
            </div>
            <p className="text-lg font-medium text-ink mb-6 leading-relaxed">
              "I've watched every creator tutorial. I'm still just guessing every time I hit post."
            </p>
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/seed/beauty/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <div className="text-sm font-bold text-ink">Beauty creator</div>
                <div className="text-xs text-ink-light">19K followers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">Stop guessing. Start seeing.</h3>
        </div>
      </section>

      {/* =========================================
          SECTION 3: HOW IT WORKS
          ========================================= */}
      <section className="w-full bg-white py-24 border-y border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-4">Three steps. Thirty seconds. Real answers.</h2>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 order-2 md:order-1">
                <div className="w-full aspect-video bg-warm-bg rounded-3xl border border-ink/10 flex items-center justify-center relative overflow-hidden shadow-sm">
                  <div className="absolute inset-0 border-2 border-dashed border-ink/20 m-6 rounded-2xl flex flex-col items-center justify-center bg-white/50">
                    <UploadCloud className="w-12 h-12 text-lilac-dark mb-4" />
                    <div className="w-48 h-2 bg-ink/10 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-lilac-dark rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="text-lilac-dark font-bold text-xl mb-2">Step 1</div>
                <h3 className="text-3xl font-bold mb-4 text-ink">Upload Your Reel</h3>
                <p className="text-lg text-ink-light mb-6">Drop your reel, paste a link, or pull from Instagram. Pick your niche and you're done.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-ink/5 text-ink text-sm font-medium">
                  MP4, MOV, or any short-form URL
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-emerald-600 font-bold text-xl mb-2">Step 2</div>
                <h3 className="text-3xl font-bold mb-4 text-ink">We Find Your Twins</h3>
                <p className="text-lg text-ink-light mb-6">Our AI watches your video and searches 14,000+ indexed reels to find the ones most similar to yours — winners and losers alike.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Powered by Google Gemini Embedding 2
                </span>
              </div>
              <div className="flex-1">
                <div className="w-full aspect-video bg-warm-bg rounded-3xl border border-ink/10 flex items-center justify-center relative overflow-hidden shadow-sm p-6">
                  <div className="grid grid-cols-3 gap-3 w-full h-full">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className={`rounded-xl overflow-hidden relative ${i === 2 || i === 5 ? 'ring-2 ring-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : i === 4 ? 'ring-2 ring-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'opacity-50'}`}>
                        <img src={`https://picsum.photos/seed/grid${i}/150/250`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 order-2 md:order-1">
                <div className="w-full aspect-video bg-warm-bg rounded-3xl border border-ink/10 flex items-center justify-center relative overflow-hidden shadow-sm p-6">
                  <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-ink/5 p-4 flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-1/3 h-16 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-center">
                        <div className="text-2xl font-bold text-emerald-600">Top 23%</div>
                      </div>
                      <div className="w-2/3 h-16 bg-ink/5 rounded-xl flex items-center px-4">
                        <div className="w-full h-2 bg-ink/10 rounded-full overflow-hidden"><div className="w-[77%] h-full bg-emerald-500 rounded-full"/></div>
                      </div>
                    </div>
                    <div className="flex-1 flex gap-4">
                      <div className="flex-1 bg-ink/5 rounded-xl p-2"><div className="w-full h-full bg-white rounded-lg border border-ink/5" /></div>
                      <div className="flex-1 bg-ink/5 rounded-xl p-2"><div className="w-full h-full bg-white rounded-lg border border-ink/5" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="text-amber-500 font-bold text-xl mb-2">Step 3</div>
                <h3 className="text-3xl font-bold mb-4 text-ink">See the Evidence</h3>
                <p className="text-lg text-ink-light mb-6">See exactly which successful reels yours resembles. Understand what separates them from the flops. Get specific, data-backed recommendations.</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-200 mb-8">
                  No black boxes. Just real comparisons.
                </span>
                <div>
                  <Link to="/analyze" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-ink text-warm-bg font-semibold hover:bg-ink/90 transition-colors">
                    Try It Free — No Account Needed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: THE WOW VISUAL
          ========================================= */}
      <section className="w-full bg-ink text-warm-bg py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">This is what Signal shows you.</h2>
          
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Mockup Container */}
            <div className="w-full aspect-[16/10] md:aspect-[21/9] bg-warm-bg rounded-[2rem] p-2 md:p-4 shadow-2xl relative">
              <div className="w-full h-full bg-white rounded-2xl md:rounded-[1.5rem] overflow-hidden border border-ink/10 flex flex-col">
                {/* Header */}
                <div className="h-14 border-b border-ink/10 flex items-center px-6 justify-between bg-warm-bg/50">
                  <div className="font-bold text-ink">Analysis Results</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                </div>
                {/* Body */}
                <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
                  {/* Left Col */}
                  <div className="col-span-1 space-y-4">
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 relative">
                      <div className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-2">Your Percentile</div>
                      <div className="text-5xl font-bold text-emerald-600">Top 23%</div>
                      {/* Callout Bubble */}
                      <div className="absolute -left-4 -top-4 bg-ink text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transform -rotate-6">
                        Top quartile!
                      </div>
                    </div>
                    <div className="bg-warm-bg border border-ink/5 rounded-xl p-6">
                      <div className="text-sm font-bold text-ink uppercase tracking-wider mb-4">Insight</div>
                      <p className="text-ink-light text-sm">Winners in your niche use text overlay in first 1.5 seconds. You don't.</p>
                    </div>
                  </div>
                  {/* Right Col */}
                  <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-warm-bg rounded-xl p-4 border border-ink/5 relative">
                      <div className="text-sm font-bold text-ink mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-500"/> Winning Twins</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-[9/16] bg-ink/10 rounded-lg overflow-hidden relative"><img src="https://picsum.photos/seed/win1/100/180" className="w-full h-full object-cover" referrerPolicy="no-referrer"/><div className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 rounded">1.2M</div></div>
                        <div className="aspect-[9/16] bg-ink/10 rounded-lg overflow-hidden relative"><img src="https://picsum.photos/seed/win2/100/180" className="w-full h-full object-cover" referrerPolicy="no-referrer"/><div className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 rounded">850K</div></div>
                      </div>
                      <div className="absolute -right-4 -top-4 bg-ink text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transform rotate-3 z-10">
                        5 winning reels most similar to yours
                      </div>
                    </div>
                    <div className="bg-warm-bg rounded-xl p-4 border border-ink/5 relative">
                      <div className="text-sm font-bold text-ink mb-3 flex items-center gap-2"><TrendingDown className="w-4 h-4 text-rose-500"/> Flopped Twins</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-[9/16] bg-ink/10 rounded-lg overflow-hidden relative"><img src="https://picsum.photos/seed/flop1/100/180" className="w-full h-full object-cover" referrerPolicy="no-referrer"/><div className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 rounded">2.1K</div></div>
                        <div className="aspect-[9/16] bg-ink/10 rounded-lg overflow-hidden relative"><img src="https://picsum.photos/seed/flop2/100/180" className="w-full h-full object-cover" referrerPolicy="no-referrer"/><div className="absolute bottom-1 left-1 text-[10px] bg-black/50 text-white px-1.5 rounded">800</div></div>
                      </div>
                      <div className="absolute -right-4 bottom-4 bg-ink text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transform -rotate-3 z-10">
                        5 reels that flopped — yours looks like these
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-12 text-xl text-warm-bg/80 font-medium">
              Real data. Real comparisons. Specific insights you can act on today.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: SOCIAL PROOF
          ========================================= */}
      <section className="w-full bg-amber-50/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">What creators are saying</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Testimonial (Spans 2 cols on desktop) */}
            <div className="md:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-amber-100 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-warm-bg shadow-lg">
                <img src="https://picsum.photos/seed/feat/150/150" alt="Creator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xl md:text-2xl font-medium text-ink mb-6 leading-relaxed">
                  "I finally understood why my skincare routine reels were dying. Signal showed me that winners in beauty always have a product reveal before the 3-second mark. I added that — my next reel got 4x the views."
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-ink text-lg">@beautycreator</div>
                    <div className="text-ink-light">31K followers</div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold text-sm border border-emerald-200">
                    Before: 2.1% like rate → After: 8.9%
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-ink font-medium mb-6">"Stopped me from posting a dud. Tweaked the hook based on the 'winners' grid and it hit 100k."</p>
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/t1/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm text-ink">@fitwithmark</div>
                  <div className="text-xs text-ink-light">Fitness • 85K</div>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-ink font-medium mb-6">"The only tool that actually explains WHY a video works instead of just giving a random score."</p>
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/t2/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm text-ink">@ecomhustle</div>
                  <div className="text-xs text-ink-light">E-commerce • 22K</div>
                </div>
              </div>
            </div>

            {/* Small Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/5">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-ink font-medium mb-6">"I use it for every client video now. It's like having a cheat code for the algorithm."</p>
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/t3/40/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm text-ink">@sarahcreates</div>
                  <div className="text-xs text-ink-light">Agency • 12K</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="text-lilac-dark font-bold hover:underline">View more on Twitter/X →</a>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: PRICING
          ========================================= */}
      <section className="w-full bg-white py-24 border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mb-16 mx-auto">
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-ink-light">
              Choose the plan that fits your content creation needs. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mb-24">
            {/* Free Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-ink/10 rounded-[2rem] p-8 flex flex-col relative shadow-sm"
            >
              <h3 className="text-2xl font-serif font-semibold mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-ink-light font-medium">/month</span>
              </div>
              <p className="text-ink-light mb-8 h-12">Perfect for trying out Signal and seeing the value.</p>
              
              <Link to="/analyze" className="w-full py-3 px-6 rounded-full border border-ink/20 font-semibold hover:bg-ink/5 transition-colors mb-8 text-center block">
                Get Started
              </Link>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">3 free post analyses</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">Comparison to successful content creators</span>
                </div>
              </div>
            </motion.div>

            {/* Creator Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-ink text-warm-bg rounded-[2rem] p-8 flex flex-col relative shadow-xl transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lilac text-lilac-dark px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase border border-lilac-dark/20">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-2">Creator</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$12.99</span>
                <span className="text-warm-bg/60 font-medium">/month</span>
              </div>
              <p className="text-warm-bg/80 mb-8 h-12">For consistent creators looking to optimize their growth.</p>
              
              <button className="w-full py-3 px-6 rounded-full bg-warm-bg text-ink font-semibold hover:bg-warm-bg/90 transition-colors mb-8">
                Subscribe Now
              </button>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac shrink-0 mt-0.5" />
                  <span className="text-warm-bg/90">200 credits (50 posts analysis)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac shrink-0 mt-0.5" />
                  <span className="text-warm-bg/90">Up to 3 social media accounts connected</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac shrink-0 mt-0.5" />
                  <span className="text-warm-bg/90">Run multiple posts simultaneously</span>
                </div>
              </div>
            </motion.div>

            {/* Influencer Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-ink/10 rounded-[2rem] p-8 flex flex-col relative shadow-sm"
            >
              <h3 className="text-2xl font-serif font-semibold mb-2">Influencer</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$19.99</span>
                <span className="text-ink-light font-medium">/month</span>
              </div>
              <p className="text-ink-light mb-8 h-12">For power users and agencies managing high volume.</p>
              
              <button className="w-full py-3 px-6 rounded-full border border-ink/20 font-semibold hover:bg-ink/5 transition-colors mb-8">
                Subscribe Now
              </button>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">1000 credits (250 posts analysis)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">Up to 10 social media accounts connected</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">Run multiple posts simultaneously</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-lilac-dark shrink-0 mt-0.5" />
                  <span className="text-ink/80">Analysis priority</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-ink/80 font-medium">Our proprietary ULTRA signal modal access</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-warm-bg border border-ink/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-ink">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-ink-light transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-ink-light font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: FINAL CTA
          ========================================= */}
      <section className="w-full bg-ink text-warm-bg py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-lilac-dark/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/noise/100/100')] opacity-5 mix-blend-overlay" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>🛍️</div>
          <div className="absolute top-20 right-20 text-4xl animate-bounce" style={{ animationDuration: '4s' }}>💪</div>
          <div className="absolute bottom-20 left-1/4 text-4xl animate-bounce" style={{ animationDuration: '2.5s' }}>💄</div>
          <div className="absolute bottom-10 right-1/3 text-4xl animate-bounce" style={{ animationDuration: '3.5s' }}>🍕</div>
          <div className="absolute top-1/2 right-10 text-4xl animate-bounce" style={{ animationDuration: '5s' }}>🏠</div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Your next reel is already filmed. <br/> Find out if it's going to win.</h2>
          <p className="text-xl text-warm-bg/80 mb-12 font-medium">Upload it free. No credit card. No account. Just answers.</p>
          
          <Link 
            to="/analyze" 
            className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-ink font-bold text-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Analyze Your Reel Now <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-ink/10 z-50">
        <Link 
          to="/analyze" 
          className="flex items-center justify-center w-full h-12 rounded-full bg-ink text-warm-bg font-bold shadow-lg"
        >
          Analyze Free <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

    </div>
  );
}
