import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link as LinkIcon, ArrowRight, CheckCircle2, Loader2, Play, Trophy, AlertTriangle, Heart, ArrowUp, ArrowDown, Sparkles, TrendingUp, TrendingDown, ChevronRight, Video, Share, Activity, Lock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Highlighter } from "@/registry/magicui/highlighter";

type FunnelStep = "hook" | "processing" | "results";

const PROCESSING_MESSAGES = [
  "Scanning 14,000+ reels in your niche...",
  "Finding your video's closest twins...",
  "Separating winners from the flops...",
  "Writing insights backed by real data..."
];

export default function Analyze() {
  const [step, setStep] = useState<FunnelStep>("hook");
  const [link, setLink] = useState("");
  const [processingMsgIdx, setProcessingMsgIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"winners" | "flops">("winners");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlParam = params.get("url");
    const stepParam = params.get("step") as FunnelStep | null;
    
    if (urlParam) {
      setLink(urlParam);
    }
    
    if (stepParam && ["hook", "processing", "results"].includes(stepParam)) {
      setStep(stepParam);
    } else if (urlParam) {
      setStep("processing");
    }
  }, [location]);

  useEffect(() => {
    if (step === "processing") {
      const msgInterval = setInterval(() => {
        setProcessingMsgIdx((prev) => (prev + 1) % PROCESSING_MESSAGES.length);
      }, 5000);

      const timer = setTimeout(() => {
        setStep("results");
      }, 15000); // 15 seconds processing

      return () => {
        clearInterval(msgInterval);
        clearTimeout(timer);
      };
    }
  }, [step]);

  const handleNext = (nextStep: FunnelStep) => {
    setStep(nextStep);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] w-full bg-warm-bg text-ink font-sans flex flex-col items-center">
      <AnimatePresence mode="wait">
        
        {/* Phase 1: The Hook (Upload) */}
        {step === "hook" && (
          <motion.div
            key="hook"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl text-center px-6 py-24"
          >
            <div className="flex justify-end mb-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                 <Sparkles className="w-3 h-3" />
                 2 free analyses remaining
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Analyze your reel
            </h1>
            
            <div className="relative flex flex-col sm:flex-row items-center gap-4 w-full">
              <div className="relative w-full">
                <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
                <input 
                  type="url"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Paste your Instagram, TikTok, or YouTube link"
                  className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-ink/10 bg-white text-lg focus:outline-none focus:border-ink/30 transition-shadow shadow-sm"
                />
              </div>
              <button 
                onClick={() => handleNext("processing")}
                disabled={!link.trim()}
                className="w-full sm:w-auto h-16 px-8 bg-ink text-warm-bg rounded-2xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap shadow-xl shadow-ink/10"
              >
                Analyze <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Phase 3: Processing */}
        {step === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center min-h-[60vh] px-6"
          >
            <div className="relative w-24 h-24 mb-8">
              <motion.div 
                className="absolute inset-0 bg-amber-200/50 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-ink rounded-full flex items-center justify-center shadow-2xl">
                <Sparkles className="w-10 h-10 text-warm-bg animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-3">Analyzing your reel...</h2>
            <p className="text-ink-light mb-12">Usually takes 15–30 seconds</p>
            
            <div className="w-full max-w-xs space-y-4 text-left">
              <div className="flex items-center gap-3 text-ink">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium">Reel fetched</span>
              </div>
              <div className="flex items-center gap-3 text-ink">
                <Loader2 className="w-5 h-5 text-amber-500 animate-spin" />
                <span className="font-medium">Generating embedding</span>
              </div>
              <div className="flex items-center gap-3 text-ink/40">
                <div className="w-5 h-5 rounded-full border-2 border-ink/20" />
                <span>Finding similar content</span>
              </div>
              <div className="flex items-center gap-3 text-ink/40">
                <div className="w-5 h-5 rounded-full border-2 border-ink/20" />
                <span>Generating insights</span>
              </div>
            </div>

            <div className="mt-16 h-8 overflow-hidden relative w-full max-w-md">
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={processingMsgIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-ink-light font-medium absolute w-full text-center"
                >
                  {PROCESSING_MESSAGES[processingMsgIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}        {/* Phase 4: Results (WOW Moment) */}
        {step === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full bg-warm-bg pb-32"
          >
            {/* 1. Sticky Header & User Reel Preview */}
            <div className="sticky top-0 z-50 bg-warm-bg/90 backdrop-blur-xl border-b border-ink/5">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-ink rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-warm-bg" />
                  </div>
                  <span className="font-bold hidden sm:block">Signal</span>
                </div>
                <div className="px-3 py-1 bg-white rounded-full border border-ink/10 text-sm font-medium shadow-sm flex items-center gap-1">
                  🛍️ <span className="hidden sm:inline">Niche:</span> E-commerce
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-ink-light hover:text-ink transition-colors">
                    <Share className="w-5 h-5" />
                  </button>
                  <button onClick={() => setStep("hook")} className="px-4 py-2 text-sm font-medium border border-ink/20 rounded-full hover:bg-ink/5 transition-colors hidden sm:block">
                    New Analysis
                  </button>
                </div>
              </div>
              
              {/* User's Reel Preview (Pinned) */}
              <div className="px-4 py-3 bg-white/50 flex items-center gap-3 border-t border-ink/5">
                <div className="w-10 h-10 bg-ink/10 rounded overflow-hidden relative shrink-0">
                  <img src="https://picsum.photos/seed/userreel/100/100" alt="Your Reel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold truncate">5 ways to style this summer dress</h3>
                  <p className="text-xs text-ink-light truncate">@fashioncreator</p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
              
              {/* 2. Verdict Sub-header */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold mb-2">
                  Top 20% Potential
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
                  Strong hook, but retention drops significantly at the 12-second mark.
                </h1>
              </div>

              {/* 3. Component A: Score Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Percentile Rank */}
                <div className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-sm text-ink-light font-medium mb-1">Percentile Rank</div>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">82nd</div>
                  <div className="text-xs text-ink-light">Top 18% of niche</div>
                </div>
                {/* Winner Similarity */}
                <div className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-sm text-ink-light font-medium mb-1">Winner Similarity</div>
                  <div className="text-3xl font-bold text-ink mb-1">High</div>
                  <div className="w-full h-1.5 bg-ink/10 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-emerald-500" 
                    />
                  </div>
                </div>
                {/* Underperformer Similarity */}
                <div className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-sm text-ink-light font-medium mb-1">Flop Similarity</div>
                  <div className="text-3xl font-bold text-ink mb-1">Low</div>
                  <div className="w-full h-1.5 bg-ink/10 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-red-500" 
                    />
                  </div>
                </div>
                {/* Predicted Like Rate */}
                <div className="bg-white rounded-2xl p-4 border border-ink/5 shadow-sm flex flex-col items-center justify-center text-center">
                  <div className="text-sm text-ink-light font-medium mb-1">Est. Like Rate</div>
                  <div className="text-3xl font-bold text-ink mb-1">4.2%</div>
                  <div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +1.2% vs avg
                  </div>
                </div>
              </div>

              {/* 4. Component B: Distribution Bar */}
              <div className="bg-white rounded-3xl p-6 border border-ink/5 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Where you stand</h3>
                <div className="relative h-12 flex rounded-xl overflow-hidden mb-4">
                  <div className="w-[20%] bg-red-100 flex items-center justify-center text-xs font-bold text-red-700">Bottom 20%</div>
                  <div className="w-[60%] bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700 border-x border-white">Middle 60%</div>
                  <div className="w-[20%] bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">Top 20%</div>
                  
                  {/* Animated Marker */}
                  <motion.div 
                    initial={{ left: "0%" }}
                    animate={{ left: "82%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 bottom-0 w-1 bg-ink z-10 -ml-[2px]"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-ink rotate-45" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-ink text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                      Your Reel
                    </div>
                  </motion.div>
                </div>
                <div className="mt-8 text-sm text-ink-light text-center">
                  Based on 14,203 E-commerce reels analyzed in the last 7 days.
                </div>
              </div>

              {/* 5. Component C: Neighbor Grids */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Closest Matches</h3>
                  <div className="flex bg-ink/5 rounded-lg p-1">
                    <button 
                      onClick={() => setActiveTab("winners")}
                      className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${activeTab === "winners" ? "bg-white text-ink shadow-sm" : "text-ink-light hover:text-ink"}`}
                    >
                      Similar Winners
                    </button>
                    <button 
                      onClick={() => setActiveTab("flops")}
                      className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors ${activeTab === "flops" ? "bg-white text-ink shadow-sm" : "text-ink-light hover:text-ink"}`}
                    >
                      Similar Flops
                    </button>
                  </div>
                </div>

                {activeTab === "winners" ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-900">Winning Pattern Detected</h4>
                        <p className="text-sm text-emerald-800/80">Your reel shares the "Fast Product Reveal" pattern with these top performers.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-ink/5 rounded-xl overflow-hidden cursor-pointer">
                          <img src={`https://picsum.photos/seed/winner${i}/400/700`} alt="Winner" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
                            <div className="text-white text-xs font-bold mb-1">1.2M Views</div>
                            <div className="text-white/80 text-[10px] truncate">@creator{i}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50/50 rounded-3xl p-6 border border-red-100"
                  >
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-900">Underperformer Pattern Detected</h4>
                        <p className="text-sm text-red-800/80">Your reel shares the "Slow Outro" pattern with these underperformers.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-ink/5 rounded-xl overflow-hidden cursor-pointer">
                          <img src={`https://picsum.photos/seed/flop${i}/400/700`} alt="Flop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
                            <div className="text-white text-xs font-bold mb-1">2.1K Views</div>
                            <div className="text-white/80 text-[10px] truncate">@creator{i}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* 6. Component D: AI Insights */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6">AI Insights</h3>
                
                {/* Strength */}
                <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Strength</span>
                      <span className="text-xs text-ink-light bg-ink/5 px-2 py-0.5 rounded">0:00 - 0:03</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">High-Energy Hook</h4>
                    <p className="text-ink/80 text-sm">Visual change within the first 1.5s matches the top 10% of reels in your niche.</p>
                  </div>
                </div>

                {/* Risk */}
                <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600">Risk</span>
                      <span className="text-xs text-ink-light bg-ink/5 px-2 py-0.5 rounded">0:12 - 0:18</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">Static Visuals</h4>
                    <p className="text-ink/80 text-sm">6-second gap with no visual changes. Top reels change visuals every 2.4s on average.</p>
                  </div>
                </div>

                {/* Improve */}
                <div className="bg-white rounded-2xl p-5 border border-ink/5 shadow-sm flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <ArrowUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Improve</span>
                      <span className="text-xs text-ink-light bg-ink/5 px-2 py-0.5 rounded">0:25 - 0:30</span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">Late CTA</h4>
                    <p className="text-ink/80 text-sm">Your CTA was clear, but placed too late. Winners place the CTA while the final payoff is still happening.</p>
                  </div>
                </div>

              </div>

              {/* 7. Component E: CTA Section */}
              <div className="bg-ink rounded-3xl p-8 text-center text-white mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to build your next winner?</h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  Take these insights and generate a script for your next reel using our Video Ideas Board.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => navigate("/dashboard?tab=ideas")} className="px-8 py-4 bg-white text-ink font-bold rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                    Go to Video Ideas Board <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setStep("hook")} className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                    Analyze Another Reel
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
