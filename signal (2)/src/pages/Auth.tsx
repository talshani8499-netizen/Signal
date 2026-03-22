import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, animate } from "motion/react";
import { ArrowRight, Activity, CheckCircle2, Play, PlusSquare, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Alex",
    username: "@alexcreators",
    body: "I hit 3 viral Reels this week alone just by fixing my hooks in Signal. I've stopped guessing.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Sarah V.",
    username: "@sarah.vibe",
    body: "Signal showed me my lighting was why people swiped. My views tripled in 48 hours.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Jordan",
    username: "@jordan.tech",
    body: "The 'Winning Neighbor' feature is a literal cheat code. Follower count is up 40% this month.",
    img: "https://avatar.vercel.sh/jordan",
  },
  {
    name: "Mila",
    username: "@milas_edit",
    body: "I used to wait months for a viral hit. Now it's a weekly occurrence. Non-negotiable tool.",
    img: "https://avatar.vercel.sh/mila",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard: React.FC<{
  img: string;
  name: string;
  username: string;
  body: string;
}> = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-purple-500/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors shadow-sm"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden">
          <img className="w-full h-full" alt="" src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-zinc-900">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-zinc-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-zinc-700">{body}</blockquote>
    </figure>
  );
};

const InstagramProfile = ({ isAfter }: { isAfter: boolean }) => {
  return (
    <div className="w-full h-full bg-white text-black flex flex-col font-sans select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 pt-10">
        <div className="flex items-center gap-1 font-bold text-sm">
          @creator_name
          {isAfter && <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500" />}
        </div>
        <div className="flex gap-4">
          <PlusSquare className="w-5 h-5" />
          <Menu className="w-5 h-5" />
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
          <div className="w-full h-full bg-white rounded-full border-2 border-white overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <div className="font-bold text-sm">142</div>
            <div className="text-xs text-gray-500">Posts</div>
          </div>
          <div>
            <div className="font-bold text-sm">{isAfter ? '124K' : '840'}</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div>
            <div className="font-bold text-sm">312</div>
            <div className="text-xs text-gray-500">Following</div>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <div className="px-4 pb-4">
        <div className="font-bold text-sm">Creator Name</div>
        <div className="text-sm text-gray-600">{isAfter ? 'Helping you grow 🚀' : 'Posting daily'}</div>
      </div>
      
      {/* Grid */}
      <div className="flex-1 grid grid-cols-3 gap-0.5 bg-gray-100">
        {[
          { views: isAfter ? '1.2M' : '214', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=300&fit=crop' },
          { views: isAfter ? '850K' : '180', img: 'https://images.unsplash.com/photo-1516280440502-61f53f3a0100?w=200&h=300&fit=crop' },
          { views: isAfter ? '2.4M' : '310', img: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=200&h=300&fit=crop' },
          { views: isAfter ? '500K' : '150', img: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=200&h=300&fit=crop' },
          { views: isAfter ? '1.1M' : '205', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=300&fit=crop' },
          { views: isAfter ? '920K' : '190', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=300&fit=crop' },
        ].map((post, i) => (
          <div key={i} className="relative aspect-[3/4] bg-gray-200">
            <img src={post.img} className="w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white text-[10px] font-medium drop-shadow-md">
              <Play className="w-3 h-3 fill-white" />
              {post.views}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IphoneSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const controls = animate(50, 100, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      onUpdate: (latest) => setSliderPos(latest)
    });
    return () => controls.stop();
  }, [isHovered]);

  return (
    <div 
      className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-zinc-800 shadow-2xl overflow-hidden shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50"></div>
      
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <InstagramProfile isAfter={false} />
      </div>

      {/* After Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 w-full h-full border-r-2 border-purple-500 shadow-[10px_0_20px_rgba(168,85,247,0.3)]"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <InstagramProfile isAfter={true} />
      </div>

      {/* Slider Control */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos} 
        onChange={(e) => setSliderPos(Number(e.target.value))} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
      />
      
      {/* Slider Visuals */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-purple-500 cursor-ew-resize pointer-events-none z-10 shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-500">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-purple-500/50 rounded-full" />
            <div className="w-0.5 h-3 bg-purple-500/50 rounded-full" />
            <div className="w-0.5 h-3 bg-purple-500/50 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-6 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white tracking-wider z-10 pointer-events-none">
        GUESSING
      </div>
      <div className="absolute bottom-6 right-4 bg-purple-500/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-white tracking-wider z-10 pointer-events-none shadow-[0_0_10px_rgba(168,85,247,0.5)]">
        SIGNAL
      </div>
    </div>
  );
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans">
      
      {/* Left Side: Visuals & Social Proof */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 relative overflow-hidden bg-gradient-to-br from-purple-50 to-white border-r border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex justify-between items-start">
          <Link to="/" className="flex items-center gap-2 group w-max">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900">SIGNAL</span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 my-12">
          <IphoneSlider />
        </div>

        <div className="relative z-10 w-full">
          <div className="relative flex flex-col items-center justify-center overflow-hidden w-full">
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-purple-50/80 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white relative">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">
              {isLogin ? "WELCOME BACK" : "CREATE ACCOUNT"}
            </h2>
            <p className="text-zinc-500">
              {isLogin ? "Continue your growth transition." : "Begin your growth transition."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Alex Creator"
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-zinc-400"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700">Email Address</label>
              <input 
                type="email" 
                placeholder="alex@example.com"
                className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-zinc-400"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">
                    Forgot password?
                  </a>
                )}
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-zinc-400"
              />
            </div>

            <button className="w-full h-12 mt-6 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-500/20">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Or continue with</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full h-12 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-xl font-medium flex items-center justify-center gap-3 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full h-12 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 rounded-xl font-medium flex items-center justify-center gap-3 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.73 3.83-.66 2.16.1 3.47 1.07 4.28 2.22-1.83 1.06-2.26 3.12-1.02 4.62.9 1.08 2.38 1.46 3.3 1.42-.59 1.76-1.53 3.39-2.98 4.86l-2.49-.29zm-5.01-13.66c-.1-2.11 1.61-3.96 3.66-4.12.21 2.25-1.74 4.12-3.66 4.12z"/>
              </svg>
              Continue with Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              {isLogin ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
