import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link as LinkIcon, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type FunnelStep = "hook" | "auth" | "goal" | "niche" | "frequency" | "processing";

export default function Analyze() {
  const [step, setStep] = useState<FunnelStep>("hook");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  // Onboarding state
  const [goal, setGoal] = useState("");
  const [niche, setNiche] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    if (step === "processing") {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const handleNext = (nextStep: FunnelStep) => {
    setStep(nextStep);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        
        {/* Phase 1: The Hook */}
        {step === "hook" && (
          <motion.div
            key="hook"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Analyze Your Video
            </h1>
            <p className="text-xl text-ink-light mb-12">
              Paste your link below to get instant AI-driven insights on how your content compares to top performers.
            </p>
            
            <div className="relative flex items-center shadow-xl shadow-ink/5 rounded-2xl w-full">
              <LinkIcon className="absolute left-6 w-6 h-6 text-ink/40" />
              <input 
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Paste Instagram, TikTok, or YouTube link..."
                className="w-full h-20 pl-16 pr-40 rounded-2xl border-2 border-ink/10 bg-white text-lg focus:outline-none focus:border-ink/30 transition-colors"
              />
              <button 
                onClick={() => handleNext("auth")}
                disabled={!link.trim()}
                className="absolute right-3 top-3 bottom-3 px-8 bg-ink text-warm-bg rounded-xl font-semibold hover:bg-ink/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Analyze <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Phase 2: Lead Capture (Auth) */}
        {step === "auth" && (
          <motion.div
            key="auth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-md bg-card border border-ink/10 rounded-[2rem] p-8 shadow-xl shadow-ink/5"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold mb-2">Save your progress</h2>
              <p className="text-ink-light">Create an account to view your analysis results.</p>
            </div>
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full h-14 px-4 rounded-xl border border-ink/20 bg-white focus:outline-none focus:border-ink/40 transition-colors"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full h-14 px-4 rounded-xl border border-ink/20 bg-white focus:outline-none focus:border-ink/40 transition-colors"
              />
              <button 
                onClick={() => handleNext("goal")}
                className="w-full h-14 bg-ink text-warm-bg rounded-xl font-semibold hover:bg-ink/90 transition-colors mt-4"
              >
                Continue
              </button>
            </div>
            <p className="text-center text-sm text-ink-light mt-6">
              Already have an account? <button className="text-ink font-medium hover:underline">Log in</button>
            </p>
          </motion.div>
        )}

        {/* Phase 3: Expanded Onboarding - Goal */}
        {step === "goal" && (
          <motion.div
            key="goal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xl text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">What is your primary goal?</h2>
            <p className="text-ink-light mb-10">Help us tailor your insights.</p>
            
            <div className="grid grid-cols-1 gap-4">
              {['Growth (More Views & Followers)', 'Monetization (Brand Deals & Sales)', 'Content Quality (Better Engagement)'].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setGoal(option);
                    handleNext("niche");
                  }}
                  className="w-full p-6 bg-card border border-ink/10 rounded-2xl text-lg font-medium hover:bg-ink/5 hover:border-ink/30 transition-all text-left flex items-center justify-between group"
                >
                  {option}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-ink-light" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 3: Expanded Onboarding - Niche */}
        {step === "niche" && (
          <motion.div
            key="niche"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-2xl text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">What is your content niche?</h2>
            <p className="text-ink-light mb-10">We'll compare your video against top performers in this category.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['E-commerce', 'Fitness', 'Beauty', 'Food', 'Real Estate', 'Tech', 'Finance', 'Lifestyle', 'Other'].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setNiche(option);
                    handleNext("frequency");
                  }}
                  className="p-6 bg-card border border-ink/10 rounded-2xl text-base font-medium hover:bg-ink/5 hover:border-ink/30 transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 3: Expanded Onboarding - Frequency */}
        {step === "frequency" && (
          <motion.div
            key="frequency"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xl text-center"
          >
            <h2 className="text-3xl font-serif font-bold mb-2">How often do you post?</h2>
            <p className="text-ink-light mb-10">This helps us calibrate your growth trajectory.</p>
            
            <div className="grid grid-cols-1 gap-4">
              {['Daily', 'A few times a week', 'Weekly', 'Rarely'].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFrequency(option);
                    handleNext("processing");
                  }}
                  className="w-full p-6 bg-card border border-ink/10 rounded-2xl text-lg font-medium hover:bg-ink/5 hover:border-ink/30 transition-all text-left flex items-center justify-between group"
                >
                  {option}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-ink-light" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Phase 4: Fulfillment (Processing) */}
        {step === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-ink/10 rounded-full" />
              <motion.div 
                className="absolute inset-0 border-4 border-ink rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Activity className="w-8 h-8 text-ink animate-pulse" />
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">Analyzing your video...</h2>
            <p className="text-ink-light max-w-sm">
              Extracting hooks, comparing retention curves, and matching with top performers in {niche || 'your niche'}.
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
