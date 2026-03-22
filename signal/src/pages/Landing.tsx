import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Eye, 
  Volume2, 
  Type, 
  Network, 
  Fingerprint, 
  TrendingUp, 
  TrendingDown, 
  Gauge, 
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Zap,
  Sparkles,
  GraduationCap,
  X,
  Plus,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Send,
  MoreHorizontal,
  Music,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Repeat,
  Brain,
  Activity,
  Link as LinkIcon
} from "lucide-react";
import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const faqs = [
  {
    question: "How accurate is the prediction?",
    answer: "Our models are trained on millions of data points across various niches. While no system can guarantee virality, our similarity clustering provides a highly accurate probability distribution based on historical performance of visually and acoustically similar content."
  },
  {
    question: "Do you store my video data?",
    answer: "No. Videos are processed ephemerally to extract their mathematical embeddings (the 'Digital Fingerprint'). The raw video file is immediately discarded from our servers after analysis."
  },
  {
    question: "Does it work for YouTube Shorts and TikTok?",
    answer: "Yes. Signal's embedding model is platform-agnostic, though we allow you to filter your comparative cluster by specific platforms to get the most relevant insights."
  },
  {
    question: "Do I need to install anything?",
    answer: "Signal is entirely web-based. Simply paste your video link or upload your draft file directly into our browser dashboard."
  }
];

const SOURCE_CARDS = [
  { id: 1, platform: 'tiktok', image: 'https://picsum.photos/seed/man1/200/350', startY: -180, startRotate: -25, delay: 0, duration: 4 },
  { id: 2, platform: 'instagram', image: 'https://picsum.photos/seed/woman1/200/350', startY: 120, startRotate: 15, delay: 0.4, duration: 4.5 },
  { id: 3, platform: 'youtube', image: 'https://picsum.photos/seed/man2/200/350', startY: -60, startRotate: -10, delay: 0.8, duration: 3.8 },
  { id: 4, platform: 'tiktok', image: 'https://picsum.photos/seed/woman2/200/350', startY: 160, startRotate: 30, delay: 1.2, duration: 4.2 },
  { id: 5, platform: 'instagram', image: 'https://picsum.photos/seed/man3/200/350', startY: -220, startRotate: -15, delay: 1.6, duration: 4.7 },
  { id: 6, platform: 'youtube', image: 'https://picsum.photos/seed/woman3/200/350', startY: 60, startRotate: 20, delay: 2.0, duration: 3.9 },
  { id: 7, platform: 'tiktok', image: 'https://picsum.photos/seed/man4/200/350', startY: -100, startRotate: -5, delay: 2.4, duration: 4.3 },
  { id: 8, platform: 'instagram', image: 'https://picsum.photos/seed/woman4/200/350', startY: 180, startRotate: 25, delay: 2.8, duration: 4.6 },
  { id: 9, platform: 'youtube', image: 'https://picsum.photos/seed/man5/200/350', startY: -150, startRotate: -20, delay: 3.2, duration: 4.1 },
  { id: 10, platform: 'tiktok', image: 'https://picsum.photos/seed/woman5/200/350', startY: 90, startRotate: 10, delay: 3.6, duration: 4.4 },
  { id: 11, platform: 'instagram', image: 'https://picsum.photos/seed/man6/200/350', startY: -200, startRotate: -30, delay: 4.0, duration: 4.8 },
  { id: 12, platform: 'youtube', image: 'https://picsum.photos/seed/woman6/200/350', startY: 140, startRotate: 15, delay: 4.4, duration: 3.7 },
];

const ARCHIVE_CARDS = [
  { id: 1, gridX: 20, gridY: -120, delay: 0.4, score: "98%", image: 'https://picsum.photos/seed/man1/200/350' },
  { id: 2, gridX: 180, gridY: -120, delay: 1.0, score: "92%", image: 'https://picsum.photos/seed/woman1/200/350' },
  { id: 3, gridX: 20, gridY: 0, delay: 1.6, score: "88%", image: 'https://picsum.photos/seed/man2/200/350' },
  { id: 4, gridX: 180, gridY: 0, delay: 2.2, score: "95%", image: 'https://picsum.photos/seed/woman2/200/350' },
  { id: 5, gridX: 20, gridY: 120, delay: 2.8, score: "89%", image: 'https://picsum.photos/seed/man3/200/350' },
  { id: 6, gridX: 180, gridY: 120, delay: 3.4, score: "94%", image: 'https://picsum.photos/seed/woman3/200/350' },
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Pricing Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState<'form' | 'success'>('form');
  const [accounts, setAccounts] = useState([{ platform: 'Instagram', handle: '' }]);
  const [pitch, setPitch] = useState('');

  return (
    <div className="flex flex-col items-center w-full selection:bg-lilac/30">
      
      {/* =========================================
          LIGHT MODE: HERO & HOW IT THINKS
          ========================================= */}
      <div className="w-full bg-warm-bg text-ink relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-lilac/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply opacity-70" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply opacity-50" />

        {/* Hero Section */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-6 leading-[1.05] text-ink"
          >
            Know before <br /> you post.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-ink-light max-w-2xl mb-10 font-sans leading-relaxed"
          >
            Stop guessing. See exactly how your reel compares to thousands of viral and flopped videos in your niche before you hit publish.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg mx-auto relative flex items-center"
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

          {/* Signal Processing Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 w-full max-w-6xl mx-auto h-[500px] relative overflow-hidden flex items-center justify-between px-4 md:px-10"
          >
            {/* Left: The Source (Chaotic Stream) */}
            <div className="w-1/3 h-full relative">
              {SOURCE_CARDS.map(card => (
                <motion.div
                  key={card.id}
                  className="absolute right-0 top-1/2 w-24 h-40 rounded-xl shadow-xl overflow-hidden bg-black border border-white/10"
                  style={{ willChange: "transform, opacity" }}
                  initial={{ x: -400, y: card.startY, opacity: 0, rotate: card.startRotate, scale: 0.6 }}
                  animate={{ x: 150, y: 0, opacity: [0, 1, 1, 0], rotate: 0, scale: 0.1 }}
                  transition={{ duration: card.duration, repeat: Infinity, delay: card.delay, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
                >
                  <img src={card.image} alt="UGC" className="absolute inset-0 w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                  
                  {card.platform === 'tiktok' && (
                    <div className="absolute right-1 bottom-4 flex flex-col items-center gap-1.5">
                      <div className="w-4 h-4 bg-white rounded-full border border-white flex items-center justify-center overflow-hidden mb-1"><img src={`https://picsum.photos/seed/avatar${card.id}/20/20`} className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                      <Heart className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <MessageCircle className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <Bookmark className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <Share2 className="w-3 h-3 text-white fill-white drop-shadow-md" />
                    </div>
                  )}
                  {card.platform === 'instagram' && (
                    <div className="absolute right-1 bottom-4 flex flex-col items-center gap-1.5">
                      <Heart className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <MessageCircle className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <Send className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <MoreHorizontal className="w-3 h-3 text-white drop-shadow-md" />
                    </div>
                  )}
                  {card.platform === 'youtube' && (
                    <div className="absolute right-1 bottom-4 flex flex-col items-center gap-1.5">
                      <ThumbsUp className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <ThumbsDown className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <MessageSquare className="w-3 h-3 text-white fill-white drop-shadow-md" />
                      <Share2 className="w-3 h-3 text-white fill-white drop-shadow-md" />
                    </div>
                  )}
                  <div className="absolute left-2 bottom-2 right-6">
                    <div className="w-2/3 h-1.5 bg-white/80 rounded-full mb-1 drop-shadow-md"></div>
                    <div className="w-1/2 h-1.5 bg-white/60 rounded-full drop-shadow-md"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center: The Processor (Signal Logo) */}
            <div className="w-1/3 h-full flex items-center justify-center relative z-30">
              <div className="relative flex items-center justify-center">
                {/* Processor Node */}
                <div className="w-40 h-40 rounded-full bg-ink/5 border border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.25)] flex items-center justify-center relative backdrop-blur-md">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-emerald-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Signal Logo */}
                  <div className="w-16 h-16 rounded-xl bg-ink flex items-center justify-center text-warm-bg shadow-xl relative z-10 animate-pulse">
                    <Activity className="w-8 h-8" />
                  </div>
                  
                  <div className="absolute -bottom-10 whitespace-nowrap font-mono text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" />
                    Processing Signals
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Archive (Structured Grid) */}
            <div className="w-1/3 h-full relative">
              {ARCHIVE_CARDS.map(card => (
                <motion.div
                  key={card.id}
                  className="absolute left-0 top-1/2 w-40 h-16 bg-white rounded-xl shadow-md border border-ink/5 p-2 flex items-center gap-3"
                  style={{ willChange: "transform, opacity" }}
                  initial={{ x: -150, y: 0, opacity: 0, scale: 0.2 }}
                  animate={{ x: card.gridX, y: card.gridY, opacity: [0, 1, 1, 0], scale: 1 }}
                  transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: "easeOut", times: [0, 0.2, 0.8, 1] }}
                >
                  <div className="w-10 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                    <img src={card.image} alt="Analyzed" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-ink-light uppercase tracking-wider">Signal Score</span>
                    <span className="text-sm font-mono font-bold text-emerald-600">{card.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How Signal Thinks Section */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 border-t border-ink/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-medium mb-4">How Signal Thinks</h2>
            <p className="text-ink-light max-w-2xl mx-auto">Our embedding model processes your content exactly how the algorithm does—multimodally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-lilac/20 text-lilac-dark flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Visuals</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Analyzing framing, color palette, subject movement, and scene transitions to match visual retention patterns.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-lilac/20 text-lilac-dark flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Audio</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Processing frequency, pacing, hook-timing, and speech-to-noise ratios to evaluate auditory engagement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-lilac/20 text-lilac-dark flex items-center justify-center mb-6">
                <Type className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Text & Context</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Evaluating on-screen captions, OCR text density, and metadata context to understand semantic relevance.
              </p>
            </div>
          </div>
        </section>

        {/* The Creative Intelligence Engine */}
        <section className="relative z-10 w-full bg-[#F8F9FA] py-32 border-y border-ink/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative">
            
            <div className="text-center mb-24 relative z-10">
              <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 tracking-tight text-ink">Creative Intelligence Engine</h2>
              <p className="text-ink-light max-w-2xl mx-auto text-lg tracking-wide font-sans">
                We extract thousands of micro-features from your content and fuse them into a single, high-dimensional signature.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
              
              {/* Connecting Paths Overlay (Desktop Only) */}
              <div className="absolute left-0 w-full pointer-events-none hidden md:block z-0" style={{ top: '350px', height: '48px' }}>
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                  <path d="M 166 0 C 166 50, 500 50, 500 100" fill="none" stroke={hoveredNode === 'visual' ? 'url(#grad-visual)' : '#E5E7EB'} strokeWidth={hoveredNode === 'visual' ? '4' : '2'} className="transition-all duration-700" />
                  <path d="M 500 0 L 500 100" fill="none" stroke={hoveredNode === 'audio' ? 'url(#grad-audio)' : '#E5E7EB'} strokeWidth={hoveredNode === 'audio' ? '4' : '2'} className="transition-all duration-700" />
                  <path d="M 833 0 C 833 50, 500 50, 500 100" fill="none" stroke={hoveredNode === 'text' ? 'url(#grad-text)' : '#E5E7EB'} strokeWidth={hoveredNode === 'text' ? '4' : '2'} className="transition-all duration-700" />
                  <defs>
                    <linearGradient id="grad-visual" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7"><animate attributeName="stop-color" values="#A855F7;#F43F5E;#A855F7" dur="2s" repeatCount="indefinite" /></stop>
                      <stop offset="100%" stopColor="#F43F5E"><animate attributeName="stop-color" values="#F43F5E;#A855F7;#F43F5E" dur="2s" repeatCount="indefinite" /></stop>
                    </linearGradient>
                    <linearGradient id="grad-audio" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FB923C"><animate attributeName="stop-color" values="#FB923C;#F43F5E;#FB923C" dur="2s" repeatCount="indefinite" /></stop>
                      <stop offset="100%" stopColor="#F43F5E"><animate attributeName="stop-color" values="#F43F5E;#FB923C;#F43F5E" dur="2s" repeatCount="indefinite" /></stop>
                    </linearGradient>
                    <linearGradient id="grad-text" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6"><animate attributeName="stop-color" values="#3B82F6;#A855F7;#3B82F6" dur="2s" repeatCount="indefinite" /></stop>
                      <stop offset="100%" stopColor="#A855F7"><animate attributeName="stop-color" values="#A855F7;#3B82F6;#A855F7" dur="2s" repeatCount="indefinite" /></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Visual Card */}
              <div 
                className="md:col-span-4 bg-white/80 backdrop-blur-md border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-[350px] z-10"
                onMouseEnter={() => setHoveredNode('visual')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <h3 className="text-lg font-sans font-medium tracking-wide text-ink mb-2">Visual Analysis</h3>
                <p className="text-sm text-ink-light font-sans mb-8">Framing, motion, and scene transitions.</p>
                
                {/* Mobile UI Mockup: Visual */}
                <div className="flex-1 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-48 bg-white rounded-xl shadow-sm border border-[#E5E7EB] relative overflow-hidden flex items-center justify-center">
                    {/* Tracking Box */}
                    <div className="w-16 h-20 border-2 border-dashed border-violet-400/60 rounded-lg relative group-hover:scale-110 transition-transform duration-700">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-violet-500 rounded-full" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-violet-500 rounded-full" />
                    </div>
                    {/* Playhead line */}
                    <div className="absolute bottom-4 left-4 right-4 h-1 bg-ink/5 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-violet-400 rounded-full group-hover:w-full transition-all duration-1000" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Audio Card */}
              <div 
                className="md:col-span-4 bg-white/80 backdrop-blur-md border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-[350px] z-10"
                onMouseEnter={() => setHoveredNode('audio')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100" />
                <h3 className="text-lg font-sans font-medium tracking-wide text-ink mb-2">Audio Processing</h3>
                <p className="text-sm text-ink-light font-sans mb-8">Pacing, tone, and frequency mapping.</p>
                
                {/* Mobile UI Mockup: Audio */}
                <div className="flex-1 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 70, 45, 90, 60, 30, 80, 50, 100, 65, 35, 75].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-2 bg-rose-400/40 rounded-full group-hover:bg-rose-400 transition-colors duration-500" 
                        style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Card */}
              <div 
                className="md:col-span-4 bg-white/80 backdrop-blur-md border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-[350px] z-10"
                onMouseEnter={() => setHoveredNode('text')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-200" />
                <h3 className="text-lg font-sans font-medium tracking-wide text-ink mb-2">Semantic Context</h3>
                <p className="text-sm text-ink-light font-sans mb-8">Captions, OCR, and linguistic hooks.</p>
                
                {/* Mobile UI Mockup: Text */}
                <div className="flex-1 bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-3 relative overflow-hidden justify-center">
                  <div className="w-3/4 h-3 bg-ink/10 rounded-full" />
                  <div className="w-full h-3 bg-ink/5 rounded-full" />
                  <div className="w-5/6 h-3 bg-ink/5 rounded-full" />
                  <div className="w-1/2 h-3 bg-blue-400/20 rounded-full relative overflow-hidden mt-2">
                    <div className="absolute inset-0 bg-blue-400/40 w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                  </div>
                </div>
              </div>

              {/* The Signature Block: Digital Fingerprint */}
              <div 
                className="md:col-span-12 bg-white/80 backdrop-blur-md border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-12 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 mt-12 z-10"
                onMouseEnter={() => setHoveredNode('fingerprint')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Soft Violet/Rose Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-500/10 to-rose-500/10 blur-[100px] rounded-full pointer-events-none group-hover:from-violet-500/20 group-hover:to-rose-500/20 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16">
                  <div className="flex-1 text-center md:text-left max-w-xl">
                    <h3 className="text-3xl font-sans font-medium tracking-tight text-ink mb-4">The Digital Fingerprint</h3>
                    <p className="text-lg text-ink-light font-sans leading-relaxed">
                      All extracted features converge into a unified, high-dimensional embedding. This signature allows us to instantly match your content against millions of viral benchmarks.
                    </p>
                  </div>
                  
                  <div className="w-56 h-56 relative flex items-center justify-center shrink-0">
                    {/* 3D-like Fingerprint Container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F8F9FA] rounded-full shadow-[inset_0_4px_20px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <Fingerprint className="w-24 h-24 text-violet-500 drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Animated scanning line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* =========================================
          LIGHT MODE: EVIDENCE & RESULTS
          ========================================= */}
      <div className="w-full bg-warm-bg text-ink relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-lilac/20 blur-[150px] rounded-full pointer-events-none mix-blend-multiply" />

        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-6">Evidence, Not Scores.</h2>
            <p className="text-ink-light max-w-2xl mx-auto text-lg">
              We don't give you a black-box "virality score". We show you the actual videos in our database that are most similar to yours, along with their real performance data.
            </p>
          </div>

          {/* High-Fidelity Results UI Mockup */}
          <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-ink/10 overflow-hidden shadow-xl shadow-ink/5 mb-32">
            <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8">
              
              {/* Left Column: Stats */}
              <div className="col-span-1 space-y-8">
                <div>
                  <div className="text-ink-light text-sm font-medium uppercase tracking-wider mb-2">Percentile Rank</div>
                  <div className="text-6xl font-serif font-medium text-ink">74<span className="text-3xl text-ink-light/50">th</span></div>
                  <div className="mt-2 text-sm text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> Top quartile in your niche
                  </div>
                </div>

                <div className="h-px w-full bg-ink/10" />

                <div>
                  <div className="text-ink-light text-sm font-medium uppercase tracking-wider mb-2">Winner Similarity</div>
                  <div className="text-4xl font-serif font-medium text-ink">82%</div>
                  <div className="mt-4 w-full h-2 bg-ink/10 rounded-full overflow-hidden">
                    <div className="h-full bg-lilac-dark w-[82%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Right Column: AI Insights */}
              <div className="col-span-2 bg-ink/5 rounded-2xl border border-ink/5 p-8">
                <h3 className="text-xl font-serif font-medium mb-6 flex items-center gap-2 text-ink">
                  <Network className="w-5 h-5 text-lilac-dark" />
                  AI-Generated Insights
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-emerald-700 font-medium text-sm mb-1">Strength: Hook Pacing</div>
                      <p className="text-ink-light text-sm leading-relaxed">Your first 3 seconds have a scene-change frequency that perfectly matches the top 10% of performers in this cluster.</p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-4">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-amber-700 font-medium text-sm mb-1">Improve: Audio Frequency</div>
                      <p className="text-ink-light text-sm leading-relaxed">The background track competes with your voiceover in the 2kHz-4kHz range. Lower the music volume by 15% to improve clarity.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* The Evidence Bento Grid */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-medium mb-4 text-ink">Real-World Evidence</h2>
              <p className="text-ink-light text-lg max-w-2xl mx-auto">We don't guess. We compare your video against millions of data points to predict performance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
              {/* Large Card: Predicted Performance */}
              <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-[32px] p-8 border border-ink/10 shadow-sm hover:shadow-md transition-all duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lilac/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-110"></div>
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-lilac/20 flex items-center justify-center text-lilac-dark">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500/20">High Confidence</span>
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-medium mb-2 text-ink">Predicted Like Rate</h3>
                  <p className="text-ink-light text-sm mb-8 max-w-sm">Based on the performance distribution of your cluster, your video is positioned in the top quartile.</p>
                  
                  <div className="flex items-end gap-3">
                    <span className="text-7xl font-serif font-medium text-ink tracking-tight group-hover:text-lilac-dark transition-colors duration-500">4.8</span>
                    <span className="text-2xl text-ink-light mb-2 font-medium">%</span>
                  </div>
                </div>

                {/* Decorative graph lines */}
                <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,100 L0,50 C50,50 50,20 100,20 C150,20 150,80 200,80 C250,80 250,30 300,30 C350,30 350,60 400,60 L400,100 Z" fill="currentColor" className="text-lilac-dark" />
                  </svg>
                </div>
              </div>

              {/* Card: The Winning Neighbor */}
              <div className="md:col-span-1 lg:col-span-2 bg-ink text-warm-bg rounded-[32px] p-8 border border-ink/10 shadow-sm hover:shadow-lg transition-all duration-500 group flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-ink to-ink-light opacity-50"></div>
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-warm-bg/30 group-hover:text-warm-bg transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium mb-2">The Winning Neighbor</h3>
                  <p className="text-warm-bg/60 text-sm mb-6">The closest viral match to your video in our database.</p>
                  <div className="flex gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm flex-1 border border-white/5">
                      <div className="text-xs text-warm-bg/60 mb-1">Similarity</div>
                      <div className="text-xl font-medium text-emerald-400">94%</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm flex-1 border border-white/5">
                      <div className="text-xs text-warm-bg/60 mb-1">Views</div>
                      <div className="text-xl font-medium">1.2M</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card: The Underperformer */}
              <div className="md:col-span-1 lg:col-span-1 bg-white rounded-[32px] p-8 border border-ink/10 shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-600">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-ink">The Underperformer</h3>
                  <p className="text-ink-light text-sm mb-6">A highly similar video that failed to gain traction.</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-ink/5">
                      <span className="text-xs text-ink-light">Similarity</span>
                      <span className="text-sm font-medium text-red-600">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-ink-light">Views</span>
                      <span className="text-sm font-medium text-ink">4.3k</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card: Key Drivers */}
              <div className="md:col-span-1 lg:col-span-1 bg-lilac/20 rounded-[32px] p-8 border border-lilac/30 shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col justify-between">
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center mb-4 text-lilac-dark">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-ink">Key Drivers</h3>
                  <p className="text-ink-light text-sm mb-4">Top factors influencing your score.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/60 text-ink text-xs font-medium rounded-lg border border-white/40">Pacing</span>
                    <span className="px-3 py-1.5 bg-white/60 text-ink text-xs font-medium rounded-lg border border-white/40">Audio Clarity</span>
                    <span className="px-3 py-1.5 bg-white/60 text-ink text-xs font-medium rounded-lg border border-white/40">Hook</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* =========================================
          LIGHT MODE: PRICING
          ========================================= */}
      <div id="pricing" className="w-full bg-warm-bg text-ink relative overflow-hidden border-t border-ink/5">
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-ink-light">
              Choose the plan that fits your content creation needs. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-24">
            {/* Free Tier */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-ink/10 rounded-[2rem] p-8 flex flex-col relative"
            >
              <h3 className="text-2xl font-serif font-semibold mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-ink-light font-medium">/month</span>
              </div>
              <p className="text-ink-light mb-8 h-12">Perfect for trying out Signal and seeing the value.</p>
              
              <button className="w-full py-3 px-6 rounded-full border border-ink/20 font-semibold hover:bg-ink/5 transition-colors mb-8">
                Get Started
              </button>

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
              className="bg-card border border-ink/10 rounded-[2rem] p-8 flex flex-col relative"
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
        </section>
      </div>

      {/* =========================================
          LIGHT MODE: FAQ & CLOSING
          ========================================= */}
      <div className="w-full bg-warm-bg text-ink border-t border-ink/10">
        <section className="w-full max-w-3xl mx-auto px-6 pt-32 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-4">Have Questions? <br/> We Have Answers.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-ink/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-ink-light transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-ink-light text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link 
              to="/analyze" 
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-ink text-warm-bg font-medium text-base hover:scale-105 transition-transform duration-300 shadow-lg shadow-ink/10"
            >
              Start Analyzing Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Affiliate Section */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-transparent border-2 border-ink/10 rounded-[2rem] p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-sans font-semibold mb-2 text-ink">Creator Affiliate Program</h3>
              <p className="text-ink/80">
                Creator / Influencer? We Want You. Post about us to your audience and get 1 free month of Creator tier and 50% off for the first 3 months.
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-xl border border-ink text-ink font-medium hover:bg-ink/5 transition-colors shrink-0 whitespace-nowrap"
            >
              Get started
            </button>
          </motion.div>
        </section>

        {/* Creator Application Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-warm-bg w-full max-w-lg rounded-[2rem] p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="absolute top-6 right-6 text-ink-light hover:text-ink transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {modalState === 'form' ? (
                  <>
                    <h2 className="text-2xl font-serif font-bold mb-6 pr-8 text-ink">Join the Elevate Creator Program</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-3">Social Connectivity</label>
                        <div className="space-y-3">
                          {accounts.map((acc, idx) => (
                            <div key={idx} className="flex gap-3">
                              <select 
                                className="w-1/3 h-12 px-4 rounded-xl border border-ink/20 bg-white text-sm focus:outline-none focus:border-ink/40 text-ink"
                                value={acc.platform}
                                onChange={(e) => {
                                  const newAccs = [...accounts];
                                  newAccs[idx].platform = e.target.value;
                                  setAccounts(newAccs);
                                }}
                              >
                                <option>Instagram</option>
                                <option>TikTok</option>
                                <option>YouTube</option>
                                <option>X (Twitter)</option>
                              </select>
                              <input 
                                type="text"
                                placeholder="@handle"
                                className="flex-1 h-12 px-4 rounded-xl border border-ink/20 bg-white text-sm focus:outline-none focus:border-ink/40 text-ink"
                                value={acc.handle}
                                onChange={(e) => {
                                  const newAccs = [...accounts];
                                  newAccs[idx].handle = e.target.value;
                                  setAccounts(newAccs);
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => setAccounts([...accounts, { platform: 'Instagram', handle: '' }])}
                          className="mt-3 flex items-center gap-2 text-sm font-medium text-ink-light hover:text-ink transition-colors"
                        >
                          <Plus className="w-4 h-4" /> Add Another Account
                        </button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-ink mb-2">Tell us why you're a great fit for the program.</label>
                        <textarea 
                          rows={4}
                          placeholder="Share a bit about your audience and content style..."
                          className="w-full p-4 rounded-xl border border-ink/20 bg-white text-sm focus:outline-none focus:border-ink/40 resize-none text-ink"
                          value={pitch}
                          onChange={(e) => setPitch(e.target.value)}
                        />
                      </div>

                      <button 
                        onClick={() => setModalState('success')}
                        className="w-full py-4 bg-ink text-warm-bg rounded-xl font-semibold hover:bg-ink/90 transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-2 text-ink">Thank You!</h2>
                    <p className="text-ink-light mb-8">We are reviewing your application and will be in touch shortly.</p>
                    <button 
                      onClick={() => {
                        setIsModalOpen(false);
                        setTimeout(() => setModalState('form'), 300);
                      }}
                      className="px-8 py-3 bg-ink/5 text-ink rounded-xl font-medium hover:bg-ink/10 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        
        {/* Footer */}
        <footer className="w-full border-t border-ink/10 py-8 text-center text-ink-light text-sm">
          <p>© 2026 Signal. All rights reserved.</p>
        </footer>
      </div>

    </div>
  );
}
