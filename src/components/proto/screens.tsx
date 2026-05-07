import { useEffect, useState } from "react";
import { usePrototype } from "@/lib/prototype";
import { Card, Button, Input, Badge, ProgressBar, Avatar, ScreenHeader } from "./ui";
import { BottomNav } from "./BottomNav";
import { GxLogo } from "./GxLogo";
import {
  Bell, Eye, EyeOff, Check, ChevronRight, Filter, Search, X, Zap, Wifi,
  Camera, Copy, ArrowUp, ArrowDownLeft, ArrowUpRight, AlertTriangle, ShoppingBag, Utensils, Briefcase,
  Film, Coffee, Car, PiggyBank, Plane, Shield, Sparkles, Plus, Lock,
  Smartphone, ScanFace, Mail, ArrowLeft, Trophy, Users, Send, MessageCircle, Instagram, Link2, Ghost, RefreshCw, Edit3, ChevronDown,
  QrCode, CreditCard, Wallet, TrendingUp, Gift,
} from "lucide-react";

/* SPLASH */
export function Splash() {
  const { go } = usePrototype();
  useEffect(() => { const t = setTimeout(() => go("onb1"), 2500); return () => clearTimeout(t); }, [go]);
  return (
    <div className="h-full flex flex-col items-center justify-center bg-app relative">
      <div className="text-center flex flex-col items-center">
        <GxLogo size={72} />
        <h1 className="font-display text-[36px] font-extrabold mt-5 text-brand-gradient">AutoPilot</h1>
        <p className="mt-2 text-sm font-semibold text-foreground/80">Don't Think. AutoPilot.</p>
        <p className="mt-1 text-xs text-muted-foreground">by GX Bank</p>
      </div>
      <div className="absolute bottom-24 w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "#EC4899", borderTopColor: "transparent" }} />
    </div>
  );
}

/* ONBOARDING */
function OnbDots({ active }: { active: number }) {
  return (
    <div className="flex gap-1.5 justify-end">
      {[0,1,2,3].map(i => (
        <div key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === active ? 20 : 6, background: i === active ? "#3B82F6" : "#1E2640" }} />
      ))}
    </div>
  );
}

function OnbShell({ idx, title, body, ctaLabel, onCta, illustration }: any) {
  const { go } = usePrototype();
  return (
    <div className="h-full flex flex-col px-5 pt-12 pb-8 bg-background">
      <OnbDots active={idx} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-64 mb-8 flex items-center justify-center">{illustration}</div>
        <h1 className="font-display text-[28px] text-center leading-tight">{title}</h1>
        <p className="mt-4 text-center text-[14px] text-muted-foreground max-w-xs">{body}</p>
      </div>
      <div className="space-y-3">
        <Button onClick={onCta}>{ctaLabel}</Button>
        {idx === 3 ? (
          <Button variant="outlined" onClick={() => go("login")}>Already have an account? Log In</Button>
        ) : (
          <button onClick={() => go("login")} className="w-full text-center text-sm text-muted-foreground py-2">Skip</button>
        )}
      </div>
    </div>
  );
}

const Illu1 = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-x-12 top-2 bottom-16 rounded-3xl border-2 border-primary/40 bg-card flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-primary font-bold">$</div>
    </div>
    <div className="absolute bottom-0 left-2 w-16 h-20 rounded-2xl flex items-end justify-center pb-2 text-xs font-bold text-white" style={{ background: "#3B82F6" }}>Needs</div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-20 rounded-2xl flex items-end justify-center pb-2 text-xs font-bold text-white" style={{ background: "#F59E0B" }}>Wants</div>
    <div className="absolute bottom-0 right-2 w-16 h-20 rounded-2xl flex items-end justify-center pb-2 text-xs font-bold text-white" style={{ background: "#10B981" }}>Save</div>
  </div>
);
const Illu2 = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ background: "radial-gradient(circle, rgba(129,140,248,0.3), transparent 70%)" }}>
      <Sparkles size={80} color="#818CF8" />
    </div>
    <Zap size={32} color="#F59E0B" className="absolute top-8 right-10" />
    <Zap size={24} color="#F59E0B" className="absolute bottom-12 left-12" />
  </div>
);
const Illu3 = () => (
  <div className="relative w-full h-full flex items-center justify-center gap-6">
    <Flame size={72} color="#F59E0B" />
    <Trophy size={88} color="#3B82F6" />
    <div className="absolute top-4 right-8 w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">★</div>
  </div>
);
const Illu4 = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-24 h-40 rounded-3xl border-2 border-border bg-card" />
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-24" style={{ background: "linear-gradient(180deg, #3B82F6, #818CF8)", clipPath: "polygon(50% 0, 100% 70%, 75% 70%, 75% 100%, 25% 100%, 25% 70%, 0 70%)" }} />
  </div>
);
import { Flame } from "lucide-react";
export const Onb1 = () => { const { go } = usePrototype(); return <OnbShell idx={0} title="Your Money, On AutoPilot" body="We automatically split, save and grow your money — no effort needed from you." ctaLabel="Next →" onCta={() => go("onb2")} illustration={<Illu1 />} />; };
export const Onb2 = () => { const { go } = usePrototype(); return <OnbShell idx={1} title="AI That Acts For You" body="Get personalised nudges before you overspend. AutoPilot steps in at the right moment." ctaLabel="Next →" onCta={() => go("onb3")} illustration={<Illu2 />} />; };
export const Onb3 = () => { const { go } = usePrototype(); return <OnbShell idx={2} title="Save More, Earn Rewards" body="Build streaks, beat your squad and unlock cashback rewards — every ringgit counts." ctaLabel="Next →" onCta={() => go("onb4")} illustration={<Illu3 />} />; };
export const Onb4 = () => { const { go } = usePrototype(); return <OnbShell idx={3} title="Your Future Starts Now" body="See exactly where your habits lead — projected 5 years into the future." ctaLabel="Get Started →" onCta={() => go("signup")} illustration={<Illu4 />} />; };

/* AUTH */
export function SignUp() {
  const { go, back } = usePrototype();
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-background px-5 pt-10 pb-8">
      <ScreenHeader title="" onBack={back} />
      <h2 className="font-display text-[22px]">Create Account</h2>
      <p className="text-sm text-muted-foreground mt-1">Join 50,000+ Malaysian youth saving smarter.</p>
      <div className="mt-5 space-y-3">
        <Input label="Full Name" placeholder="Amir Haziq" />
        <Input label="Email Address" placeholder="amir@email.com" />
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground font-medium">Phone Number</label>
          <div className="flex gap-2">
            <button className="h-12 px-3 bg-card border border-border rounded-xl flex items-center gap-1 text-sm">🇲🇾 +60 <ChevronDown size={14} /></button>
            <input className="flex-1 h-12 px-4 bg-card border border-border rounded-xl text-[15px] focus:border-primary focus:outline-none" placeholder="12-345 6789" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground font-medium">Password</label>
          <div className="relative">
            <input type={showPw ? "text" : "password"} className="w-full h-12 px-4 pr-11 bg-card border border-border rounded-xl text-[15px] focus:border-primary focus:outline-none" placeholder="••••••••" />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPw ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
        </div>
        <Input label="Confirm Password" type="password" placeholder="••••••••" />
        <label className="flex items-start gap-2 mt-2 text-xs text-muted-foreground">
          <input type="checkbox" defaultChecked className="mt-0.5 accent-primary" />
          <span>I agree to <span className="text-primary underline">Terms</span> & <span className="text-primary underline">Privacy Policy</span></span>
        </label>
        <Button onClick={() => go("otp")}>Create Account</Button>
        <div className="flex items-center gap-3 my-2"><div className="flex-1 h-px bg-border" /><span className="text-xs text-muted-foreground">or sign up with</span><div className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-2 gap-3">
          <button className="h-12 border border-border rounded-xl flex items-center justify-center gap-2 text-sm font-medium">G Google</button>
          <button className="h-12 border border-border rounded-xl flex items-center justify-center gap-2 text-sm font-medium"> Apple ID</button>
        </div>
        <p className="text-center text-xs text-muted-foreground pt-2">Already have an account? <button onClick={() => go("login")} className="text-primary font-semibold">Log In</button></p>
      </div>
    </div>
  );
}

export function Login() {
  const { go, back } = usePrototype();
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="h-full bg-background px-5 pt-10 pb-8 overflow-y-auto no-scrollbar">
      <ScreenHeader title="" onBack={back} />
      <h2 className="font-display text-[22px]">Welcome Back 👋</h2>
      <p className="text-sm text-muted-foreground mt-1">Log in to your AutoPilot account</p>
      <div className="mt-6 space-y-3">
        <Input label="Email Address" placeholder="amir@email.com" />
        <div className="space-y-1.5">
          <label className="text-xs text-muted-foreground font-medium">Password</label>
          <div className="relative">
            <input type={showPw ? "text" : "password"} className="w-full h-12 px-4 pr-11 bg-card border border-border rounded-xl text-[15px] focus:border-primary focus:outline-none" placeholder="••••••••" />
            <button onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPw ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          <button onClick={() => go("forgot")} className="text-xs text-warning text-right block w-full mt-1.5 font-medium">Forgot Password?</button>
        </div>
        <Button onClick={() => go("otp")}>Log In</Button>
        <div className="flex items-center gap-3 my-2"><div className="flex-1 h-px bg-border" /><span className="text-xs text-muted-foreground">or continue with</span><div className="flex-1 h-px bg-border" /></div>
        <div className="grid grid-cols-2 gap-3">
          <button className="h-12 border border-border rounded-xl flex items-center justify-center gap-2 text-sm font-medium">G Google</button>
          <button className="h-12 border border-border rounded-xl flex items-center justify-center gap-2 text-sm font-medium"> Apple ID</button>
        </div>
        <p className="text-center text-xs text-muted-foreground pt-3">New here? <button onClick={() => go("signup")} className="text-primary font-semibold">Create Account</button></p>
      </div>
    </div>
  );
}

export function OTP() {
  const { go, back } = usePrototype();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);
  useEffect(() => { if (timer <= 0) return; const t = setTimeout(() => setTimer(timer - 1), 1000); return () => clearTimeout(t); }, [timer]);
  return (
    <div className="h-full bg-background px-5 pt-10 pb-8">
      <ScreenHeader title="" onBack={back} />
      <h2 className="font-display text-[22px]">Verify Your Number</h2>
      <p className="text-sm text-muted-foreground mt-1">Enter the 6-digit code sent to +60 12-XXX XXXX</p>
      <div className="mt-8 flex gap-2 justify-between">
        {code.map((c, i) => (
          <input key={i} value={c} maxLength={1}
            onChange={(e) => { const n = [...code]; n[i] = e.target.value; setCode(n); const next = document.getElementById(`otp-${i+1}`); if (e.target.value && next) next.focus(); }}
            id={`otp-${i}`}
            className="w-12 h-14 bg-card border border-border rounded-xl text-center text-[20px] font-bold focus:border-primary focus:outline-none" />
        ))}
      </div>
      <p className="text-center mt-6 text-sm">
        {timer > 0 ? <span className="text-warning">Resend code in 0:{timer.toString().padStart(2,"0")}</span> : <button onClick={() => setTimer(45)} className="text-primary font-semibold">Resend Code</button>}
      </p>
      <div className="mt-8"><Button onClick={() => go("biometric")}>Verify</Button></div>
    </div>
  );
}

export function Biometric() {
  const { go } = usePrototype();
  return (
    <div className="h-full bg-background px-5 pt-16 pb-8 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{ background: "rgba(59,130,246,0.15)" }}>
        <ScanFace size={44} color="#3B82F6" />
      </div>
      <h2 className="font-display text-[22px]">Enable Face ID</h2>
      <p className="text-sm text-muted-foreground mt-3 max-w-xs">Log in faster and securely using your face — no passwords needed.</p>
      <div className="flex-1" />
      <div className="w-full space-y-3">
        <Button onClick={() => go("dashboard")}>Enable Face ID</Button>
        <button onClick={() => go("dashboard")} className="w-full text-center text-sm text-muted-foreground py-2">Skip for now</button>
      </div>
    </div>
  );
}

export function Forgot() {
  const { back } = usePrototype();
  const [sent, setSent] = useState(false);
  return (
    <div className="h-full bg-background px-5 pt-10 pb-8">
      <ScreenHeader title="" onBack={back} />
      <h2 className="font-display text-[22px]">Reset Password</h2>
      <p className="text-sm text-muted-foreground mt-1">Enter your registered email and we will send you a password reset link.</p>
      <div className="mt-6 space-y-4">
        <Input label="Email Address" placeholder="amir@email.com" />
        <Button onClick={() => setSent(true)}>Send Reset Link</Button>
        {sent && (
          <div className="flex items-center gap-2 p-3 rounded-xl" style={{ background: "rgba(16,185,129,0.1)" }}>
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center"><Check size={14} color="white" strokeWidth={3} /></div>
            <span className="text-success text-sm font-semibold">Reset link sent! Check your inbox.</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* DASHBOARD */
export function Dashboard() {
  const { go } = usePrototype();
  const [nudge, setNudge] = useState(true);
  const [hide, setHide] = useState(false);
  return (
    <div className="h-full bg-app overflow-y-auto no-scrollbar pb-28">
      <div className="px-4 pt-12">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <GxLogo size={36} />
            <div>
              <p className="text-[11px] text-muted-foreground leading-none">GX Bank</p>
              <p className="font-display text-[15px] leading-tight">Hi, Amir 👋</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => go("notifications")} className="relative w-10 h-10 rounded-full glass flex items-center justify-center">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center" style={{ background: "#EC4899" }}>3</span>
            </button>
            <button onClick={() => go("profile")}><Avatar initials="AH" color="#EC4899" size={40} /></button>
          </div>
        </div>

        <div className="relative rounded-3xl p-5 overflow-hidden text-white shadow-[0_18px_40px_-12px_rgba(139,92,246,0.55)]"
             style={{ background: "var(--gradient-card)" }}>
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.55), transparent 65%)" }} />
          <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.45), transparent 65%)" }} />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GxLogo size={26} />
                <span className="text-[11px] font-semibold tracking-widest opacity-80">GX BANK</span>
              </div>
              <span className="text-[10px] font-bold tracking-wider opacity-70">DEBIT • VISA</span>
            </div>
            <p className="text-[11px] mt-5 opacity-70">Available Balance</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-display text-[32px] tracking-tight">{hide ? "RM ••••••" : "RM 3,842.50"}</p>
              <button onClick={() => setHide(!hide)} className="opacity-70">{hide ? <Eye size={16} /> : <EyeOff size={16} />}</button>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <p className="text-[10px] opacity-60 tracking-widest">CARD NUMBER</p>
                <p className="text-[13px] font-mono mt-0.5">•••• •••• •••• 4823</p>
              </div>
              <p className="text-[11px] font-semibold flex items-center gap-1" style={{ color: "#34D399" }}>
                <ArrowUp size={11} /> +RM 250 this month
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { i: QrCode, l: "DuitNow QR", c: "#EC4899" },
            { i: Send, l: "Transfer", c: "#8B5CF6" },
            { i: Wallet, l: "Top-up", c: "#22D3EE" },
            { i: Users, l: "Split Bill", c: "#FBBF24" },
          ].map(({ i: Ic, l, c }) => (
            <button key={l} className="flex flex-col items-center gap-1.5 py-3 rounded-2xl card-elevated">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${c}22`, color: c }}><Ic size={18} /></div>
              <span className="text-[10px] font-semibold text-foreground/80">{l}</span>
            </button>
          ))}
        </div>

        {nudge && (
          <div className="mt-3 relative rounded-2xl p-4" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(236,72,153,0.18))", border: "1px solid rgba(236,72,153,0.25)" }}>
            <button onClick={() => setNudge(false)} className="absolute top-3 right-3 text-muted-foreground"><X size={16} /></button>
            <p className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-brand-gradient"><Sparkles size={12} color="#EC4899" /> AutoPilot AI</p>
            <p className="text-sm mt-1.5 leading-snug">You've spent 83% of your Wants budget. 6 days till payday — pause Shopee orders ya 👀</p>
          </div>
        )}

        <div className="card-elevated rounded-2xl p-4 mt-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-base">Smart Buckets</h3>
            <button onClick={() => go("buckets")} className="text-[11px] font-semibold text-brand-gradient">View All →</button>
          </div>
          <div className="flex h-2.5 rounded-full overflow-hidden mb-3">
            <div style={{ width: "60%", background: "#8B5CF6" }} />
            <div style={{ width: "20%", background: "#FBBF24" }} />
            <div style={{ width: "20%", background: "#34D399" }} />
          </div>
          <div className="space-y-2.5">
            {[
              { c: "#8B5CF6", n: "Needs", v: "RM 2,305" },
              { c: "#FBBF24", n: "Wants", v: "RM 654", warn: true },
              { c: "#34D399", n: "Savings", v: "RM 882" },
            ].map((b) => (
              <div key={b.n} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: b.c }} />
                  <span className="text-sm">{b.n}</span>
                  {b.warn && <Badge tone="amber">⚠ 83%</Badge>}
                </div>
                <span className="text-sm font-semibold">{b.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <button onClick={() => go("goals")} className="card-elevated rounded-2xl p-4 text-left">
            <div className="flex items-center gap-2"><TrendingUp size={14} color="#34D399" /><span className="text-[11px] font-bold uppercase text-muted-foreground tracking-wider">Goal</span></div>
            <p className="font-display text-base mt-2">Japan Trip ✈</p>
            <div className="mt-2"><ProgressBar value={70} color="#EC4899" /></div>
            <p className="text-[11px] text-muted-foreground mt-1.5">RM 4,200 / 6,000 · 70%</p>
          </button>
          <button onClick={() => go("streaks")} className="card-elevated rounded-2xl p-4 text-left">
            <div className="flex items-center gap-2"><Sparkles size={14} color="#FBBF24" /><span className="text-[11px] font-bold uppercase text-muted-foreground tracking-wider">Streak</span></div>
            <p className="font-display text-base mt-2">🔥 13 days</p>
            <p className="text-[11px] text-muted-foreground mt-3">Top 23% of savers</p>
            <p className="text-[11px] mt-1 font-semibold" style={{ color: "#34D399" }}>+RM 5 cashback ready</p>
          </button>
        </div>

        <div className="card-elevated rounded-2xl p-4 mt-3">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-display text-base">Recent Activity</h3>
            <button onClick={() => go("transactions")} className="text-[11px] font-semibold text-brand-gradient">See All →</button>
          </div>
          <TxRow icon={<Utensils size={16} />} color="#FBBF24" name="GrabFood" cat="Food & Drink · 7:43 PM" amt="-RM 24.50" neg onClick={() => go("txDetail")} />
          <TxRow icon={<Briefcase size={16} />} color="#34D399" name="Salary Received" cat="Today" amt="+RM 3,800.00" />
          <TxRow icon={<ShoppingBag size={16} />} color="#EC4899" name="Shopee" cat="Shopping · Yesterday" amt="-RM 89.00" neg last />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export function TxRow({ icon, color, name, cat, amt, neg, onClick, last }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 py-3 ${last ? "" : "border-b border-border"}`}>
      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: `${color}25`, color }}>{icon}</div>
      <div className="flex-1 text-left">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{cat}</p>
      </div>
      <span className="text-sm font-bold" style={{ color: neg ? "#EF4444" : "#10B981" }}>{amt}</span>
    </button>
  );
}

/* NOTIFICATIONS */
export function Notifications() {
  const { back } = usePrototype();
  const items = [
    { c: "#3B82F6", t: "AI Nudge", b: "Overspend risk in Wants bucket detected. Take action now.", ts: "2 min ago", unread: true },
    { c: "#10B981", t: "Streak Reward", b: "7-day streak achieved! RM 5 cashback added to your account.", ts: "1 hr ago", unread: true },
    { c: "#F59E0B", t: "Goal Update", b: "Japan Trip is 70% complete. Keep it up!", ts: "3 hrs ago" },
    { c: "#EF4444", t: "Budget Alert", b: "Wants bucket is 83% used with 6 days remaining.", ts: "5 hrs ago" },
    { c: "#818CF8", t: "Squad Race", b: "Farah just overtook you. Save RM 218 more to lead.", ts: "Yesterday" },
  ];
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <div className="flex items-center justify-between mb-4">
        <ScreenHeader title="Notifications" onBack={back} />
        <button className="text-primary text-xs font-semibold -mt-2">Mark all read</button>
      </div>
      <div className="space-y-2.5">
        {items.map((it, i) => (
          <Card key={i} accent={it.c} className={it.unread ? "" : "opacity-70"}>
            <div className="flex items-start justify-between">
              <p className="text-sm font-bold" style={{ color: it.c }}>{it.t}</p>
              <span className="text-[10px] text-muted-foreground">{it.ts}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{it.b}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* BUCKETS */
export function Buckets() {
  const { back, setOverlay } = usePrototype();
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-24">
      <ScreenHeader title="Smart Buckets 🧩" onBack={back} />
      <p className="text-sm text-muted-foreground -mt-2 mb-4">AI auto-splits your income every payday — no manual budgeting needed.</p>
      <Card>
        <div className="flex h-4 rounded-md overflow-hidden">
          <div style={{ width: "60%", background: "#3B82F6" }} />
          <div style={{ width: "20%", background: "#F59E0B" }} />
          <div style={{ width: "20%", background: "#10B981" }} />
        </div>
        <div className="flex justify-between text-xs mt-2 font-medium"><span className="text-primary">Needs 60%</span><span className="text-warning">Wants 20%</span><span className="text-success">Save 20%</span></div>
        <p className="text-[11px] text-muted-foreground mt-2">This month: RM 3,800 auto-split</p>
      </Card>

      <div className="space-y-3 mt-3">
        <Card accent="#3B82F6">
          <p className="font-semibold">🏠 Needs <span className="text-xs text-muted-foreground font-normal">— Rent, Food, Utilities</span></p>
          <p className="text-xs text-muted-foreground mt-1">Spent: <span className="text-foreground font-semibold">RM 2,280</span> of RM 2,280</p>
          <div className="mt-2"><ProgressBar value={100} color="#3B82F6" /></div>
          <div className="mt-2.5"><Badge tone="green">✓ On Track</Badge></div>
        </Card>
        <Card accent="#F59E0B">
          <p className="font-semibold">🎮 Wants <span className="text-xs text-muted-foreground font-normal">— Dining, Shopping, Entertainment</span></p>
          <p className="text-xs text-muted-foreground mt-1">Spent: <span className="text-foreground font-semibold">RM 646</span> of RM 760</p>
          <div className="mt-2"><ProgressBar value={85} color="#F59E0B" /></div>
          <div className="mt-2.5"><Badge tone="amber">⚠ Nearing Limit</Badge></div>
          <p className="text-xs text-danger mt-2">Only RM 114 left — 6 days until salary</p>
        </Card>
        <Card accent="#10B981">
          <p className="font-semibold">💰 Savings <span className="text-xs text-muted-foreground font-normal">— GX Bonus Pocket</span></p>
          <p className="text-xs text-muted-foreground mt-1">Auto-saved: <span className="text-foreground font-semibold">RM 760</span></p>
          <div className="mt-2"><ProgressBar value={100} color="#10B981" /></div>
          <div className="mt-2.5"><Badge tone="green">✓ Auto-transferred on salary day</Badge></div>
        </Card>
      </div>
      <div className="mt-4">
        <Button variant="outlined" onClick={() => setOverlay("splitEdit")}>⚙ Adjust My Split Percentage</Button>
      </div>
      <BottomNav />
    </div>
  );
}

/* TRANSACTIONS */
export function Transactions() {
  const { back, go } = usePrototype();
  const [tab, setTab] = useState("All");
  const txs = [
    { d: "Today", items: [
      { i: <Utensils size={16} />, c: "#F59E0B", n: "GrabFood", cat: "Food & Drink", a: "-RM 24.50", neg: true },
      { i: <Briefcase size={16} />, c: "#10B981", n: "Salary Received", cat: "Income", a: "+RM 3,800.00" },
    ]},
    { d: "Yesterday", items: [
      { i: <ShoppingBag size={16} />, c: "#EF4444", n: "Shopee", cat: "Shopping", a: "-RM 89.00", neg: true },
      { i: <Zap size={16} />, c: "#3B82F6", n: "TNB Electricity", cat: "Utilities", a: "-RM 55.00", neg: true },
      { i: <Film size={16} />, c: "#818CF8", n: "Netflix", cat: "Subscriptions", a: "-RM 17.00", neg: true },
    ]},
    { d: "Oct 12, 2024", items: [
      { i: <PiggyBank size={16} />, c: "#10B981", n: "AutoPilot Save", cat: "Savings", a: "+RM 760.00" },
      { i: <Car size={16} />, c: "#06B6D4", n: "Grab (ride)", cat: "Transport", a: "-RM 18.00", neg: true },
      { i: <Coffee size={16} />, c: "#F59E0B", n: "Starbucks", cat: "Food & Drink", a: "-RM 22.50", neg: true },
    ]},
  ];
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <div className="flex items-center justify-between">
        <ScreenHeader title="Transactions" onBack={back} />
        <button className="-mt-2 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center"><Filter size={16} /></button>
      </div>
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input className="w-full h-11 pl-10 pr-4 bg-card border border-border rounded-xl text-sm focus:border-primary focus:outline-none" placeholder="Search transactions..." />
      </div>
      <div className="flex gap-4 mt-4 border-b border-border">
        {["All","Income","Spending","Savings"].map(t => (
          <button key={t} onClick={() => setTab(t)} className={`pb-2.5 text-sm font-semibold ${tab === t ? "text-foreground border-b-2 border-primary -mb-px" : "text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-3">
        {txs.map(group => (
          <div key={group.d} className="mb-2">
            <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider mt-3 mb-1">{group.d}</p>
            <Card className="!p-0 !px-4">
              {group.items.map((it, i) => (
                <TxRow key={i} icon={it.i} color={it.c} name={it.n} cat={it.cat} amt={it.a} neg={it.neg} onClick={() => go("txDetail")} last={i === group.items.length - 1} />
              ))}
            </Card>
          </div>
        ))}
        <button className="block mx-auto mt-4 text-sm text-muted-foreground">Load more</button>
      </div>
    </div>
  );
}

/* TX DETAIL */
export function TxDetail() {
  const { back } = usePrototype();
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="Transaction Detail" onBack={back} />
      <div className="flex flex-col items-center text-center mt-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(245,158,11,0.2)", color: "#F59E0B" }}><Utensils size={28} /></div>
        <p className="font-display text-[20px] mt-3">GrabFood</p>
        <p className="font-display text-[32px] text-danger mt-1">-RM 24.50</p>
        <p className="text-xs text-muted-foreground mt-1">12 October 2024 — 7:43 PM</p>
      </div>
      <Card className="mt-5 space-y-3">
        {[
          ["Category", <Badge tone="amber">Food & Drink</Badge>],
          ["Bucket deducted", "Wants"],
          ["Payment method", "GX Debit Card"],
          ["Status", <Badge tone="green">Completed</Badge>],
          ["Reference no.", "GX20241012001"],
        ].map(([k, v]: any, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-semibold">{v}</span>
          </div>
        ))}
      </Card>
      <div className="mt-3"><Input placeholder="Add a note..." /></div>
      <div className="mt-4 h-px bg-border" />
      <div className="mt-4">
        <Button variant="outlined" className="!border-danger !text-danger">Report an Issue</Button>
      </div>
    </div>
  );
}

/* GOALS */
export function Goals() {
  const { back, go } = usePrototype();
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-24">
      <ScreenHeader title="Goal Lock 🔒" onBack={back} />
      <p className="text-sm text-muted-foreground -mt-2 mb-4">Lock savings goals and earn bonus interest on completion.</p>

      <div className="space-y-3">
        <button onClick={() => go("goalDetail")} className="block w-full text-left">
          <Card accent="#F59E0B">
            <p className="font-semibold">✈ Japan Trip</p>
            <p className="font-display text-lg mt-1">RM 4,200 <span className="text-sm text-muted-foreground font-normal">of RM 6,000</span></p>
            <div className="my-2"><ProgressBar value={70} color="#F59E0B" /></div>
            <div className="flex justify-between text-xs text-muted-foreground"><span>Unlocks in 68 days</span><span>Auto-save: RM 200/month</span></div>
            <div className="flex gap-2 mt-3 flex-wrap"><Badge tone="green">✓ +1.5% bonus interest</Badge><Badge tone="red">✗ RM 20 early exit fee</Badge></div>
          </Card>
        </button>
        <button onClick={() => go("goalDetail")} className="block w-full text-left">
          <Card accent="#3B82F6">
            <p className="font-semibold">🛡 Emergency Fund</p>
            <p className="font-display text-lg mt-1">RM 1,800 <span className="text-sm text-muted-foreground font-normal">of RM 5,000</span></p>
            <div className="my-2"><ProgressBar value={36} color="#3B82F6" /></div>
            <div className="flex justify-between text-xs text-muted-foreground"><span>Unlocks in 180 days</span><span>RM 150/month</span></div>
            <div className="flex gap-2 mt-3 flex-wrap"><Badge tone="green">✓ +1.5% bonus interest</Badge><Badge tone="red">✗ RM 20 early exit fee</Badge></div>
          </Card>
        </button>
        <Card accent="#818CF8">
          <p className="font-semibold">🔮 Future Vision AI</p>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="p-3 rounded-xl" style={{ background: "rgba(239,68,68,0.08)" }}>
              <p className="text-[10px] font-bold uppercase text-danger">Without AutoPilot</p>
              <p className="font-display text-xl text-danger mt-1">RM 8,400</p>
              <p className="text-[10px] text-muted-foreground">in 5 years</p>
            </div>
            <div className="p-3 rounded-xl" style={{ background: "rgba(16,185,129,0.08)" }}>
              <p className="text-[10px] font-bold uppercase text-success">With AutoPilot</p>
              <p className="font-display text-xl text-success mt-1">RM 54,000</p>
              <p className="text-[10px] text-muted-foreground">in 5 years</p>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: "#818CF8" }}>You are on the right path.</p>
        </Card>
      </div>

      <div className="mt-4"><Button variant="outlined" onClick={() => go("createGoal")}><Plus size={16} className="inline mr-1" />Create New Goal</Button></div>
      <BottomNav />
    </div>
  );
}

export function GoalDetail() {
  const { back, setOverlay } = usePrototype();
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="✈ Japan Trip" onBack={back} />
      <div className="flex justify-center my-4">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="44" stroke="#1E2640" strokeWidth="8" fill="none" />
            <circle cx="50" cy="50" r="44" stroke="#F59E0B" strokeWidth="8" fill="none" strokeDasharray={`${70 * 2.76} 999`} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display text-3xl">70%</p>
            <p className="text-xs text-muted-foreground">Saved</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["Saved","RM 4,200"],["Remaining","RM 1,800"],["Days Left","68"]].map(([k,v]) => (
          <Card key={k} className="!p-3 text-center">
            <p className="text-[10px] text-muted-foreground uppercase">{k}</p>
            <p className="font-display text-base mt-1">{v}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-3">
        <p className="text-xs text-muted-foreground">Auto-save</p>
        <p className="text-sm mt-1">RM 200 auto-saved monthly from Savings Bucket</p>
      </Card>
      <Card className="mt-3">
        <p className="text-xs text-muted-foreground">Projected completion</p>
        <p className="font-display text-lg mt-1 text-primary">15 January 2025</p>
      </Card>
      <Card accent="#F59E0B" className="mt-3">
        <p className="font-semibold">🔒 Goal Locked</p>
        <p className="text-xs text-muted-foreground mt-1.5">Complete this goal to earn +1.5% bonus interest on your total saved amount.</p>
        <p className="text-xs text-danger mt-2">Early withdrawal applies RM 20 penalty.</p>
      </Card>
      <div className="mt-4 space-y-3">
        <Button onClick={() => setOverlay("addExtra")}>Add Extra Savings</Button>
        <Button variant="outlined" className="!border-danger !text-danger" onClick={() => setOverlay("deleteConfirm")}>Cancel Goal</Button>
      </div>
    </div>
  );
}

export function CreateGoal() {
  const { back, setOverlay } = usePrototype();
  const [cat, setCat] = useState("Travel");
  const [lock, setLock] = useState(true);
  const cats = [["Travel","✈"],["Housing","🏠"],["Education","🎓"],["Vehicle","🚗"],["Emergency","🛡"],["Other","💍"]];
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="New Goal" onBack={back} />
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
        {cats.map(([n, e]) => (
          <button key={n} onClick={() => setCat(n)} className={`shrink-0 px-3 h-9 rounded-full text-sm font-medium border ${cat === n ? "bg-primary text-white border-primary" : "bg-card text-muted-foreground border-border"}`}>{e} {n}</button>
        ))}
      </div>
      <div className="space-y-3 mt-4">
        <Input label="Goal Name" placeholder="e.g. Japan Trip" />
        <Input label="Target Amount" placeholder="RM 6,000" />
        <Input label="Target Date" placeholder="Select date" />
        <Input label="Monthly Auto-Save Amount" placeholder="RM 200" />
        <Card>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Lock this goal</span>
            <button onClick={() => setLock(!lock)} className="w-12 h-7 rounded-full p-0.5 transition" style={{ background: lock ? "#3B82F6" : "#1E2640" }}>
              <div className="w-6 h-6 rounded-full bg-white transition-transform" style={{ transform: lock ? "translateX(20px)" : "translateX(0)" }} />
            </button>
          </div>
          {lock && (
            <div className="mt-3 p-3 rounded-xl text-xs" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
              Locking earns +1.5% bonus interest on completion but applies RM 20 early exit fee.
            </div>
          )}
        </Card>
        <Button onClick={() => setOverlay("success")}>Lock & Create Goal →</Button>
      </div>
    </div>
  );
}

/* AUTO BOOST */
export function AutoBoost() {
  const { back } = usePrototype();
  const [pause, setPause] = useState(false);
  const [notify, setNotify] = useState(true);
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="Auto Boost Savings 📈" onBack={back} />
      <p className="text-sm text-muted-foreground -mt-2 mb-4">Your savings rate grows automatically — you will never miss it.</p>
      <Card accent="#3B82F6">
        <p className="text-xs text-muted-foreground">Current savings rate</p>
        <p className="font-display text-3xl mt-1">20%</p>
        <p className="text-xs text-warning mt-1.5">Next boost: in 45 days → 25%</p>
      </Card>
      <Card className="mt-3">
        <p className="font-semibold mb-3">Escalation Timeline</p>
        <div className="space-y-3">
          {[
            { d: "Month 1–3", v: "10%", s: "done" },
            { d: "Month 4–6", v: "15%", s: "done" },
            { d: "Month 7–12", v: "20%", s: "active" },
            { d: "Salary increase detected", v: "+5% auto-boost", s: "upcoming" },
          ].map((it) => {
            const c = it.s === "done" ? "#10B981" : it.s === "active" ? "#3B82F6" : "#F59E0B";
            return (
              <div key={it.d} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${it.s === "active" ? "pulse-soft" : ""}`} style={{ background: it.s === "upcoming" ? "transparent" : c, border: `2px solid ${c}` }}>
                  {it.s === "done" && <Check size={8} color="white" strokeWidth={4} className="m-auto" />}
                </div>
                <div className="flex-1 flex justify-between text-sm">
                  <span>{it.d}</span>
                  <span className="font-semibold" style={{ color: c }}>{it.v}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      <Card className="mt-3 space-y-3">
        <ToggleRow label="Pause Auto Boost" v={pause} on={setPause} colorOn="#EF4444" />
        <ToggleRow label="Notify me before each boost" v={notify} on={setNotify} colorOn="#10B981" />
      </Card>
      <Card className="mt-3" accent="#3B82F6">
        <p className="text-xs text-primary">Based on the Save More Tomorrow (SMarT) behavioural savings programme.</p>
      </Card>
    </div>
  );
}

function ToggleRow({ label, v, on, colorOn }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <button onClick={() => on(!v)} className="w-12 h-7 rounded-full p-0.5 transition" style={{ background: v ? colorOn : "#1E2640" }}>
        <div className="w-6 h-6 rounded-full bg-white transition-transform" style={{ transform: v ? "translateX(20px)" : "translateX(0)" }} />
      </button>
    </div>
  );
}

/* STREAKS */
export function Streaks() {
  const { go } = usePrototype();
  const days = Array.from({ length: 35 }, (_, i) => i);
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-24">
      <h2 className="font-display text-[22px]">Streaks & Challenges 🔥</h2>
      <Card className="mt-4">
        <p className="text-xs text-muted-foreground mb-2">October 2024</p>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map(i => {
            const saved = i < 13;
            const today = i === 13;
            return <div key={i} className={`aspect-square rounded-md ${today ? "pulse-soft" : ""}`} style={{ background: saved ? "#10B981" : today ? "#F59E0B" : "#1E2640" }} />;
          })}
        </div>
      </Card>
      <Card className="mt-3 text-center">
        <p className="font-display text-[26px] text-warning">🔥 13-Day Streak!</p>
        <div className="mt-2 inline-block"><Badge tone="blue">Personal Best! 🏆</Badge></div>
        <p className="text-xs text-muted-foreground mt-2">Top 23% of savers this week</p>
      </Card>

      <p className="font-display text-base mt-5 mb-2">Active Challenges</p>
      <Card accent="#10B981">
        <p className="font-semibold">🍔 No GrabFood for 3 days</p>
        <div className="flex gap-1.5 mt-2.5">
          <div className="w-3 h-3 rounded-full bg-success" />
          <div className="w-3 h-3 rounded-full bg-success" />
          <div className="w-3 h-3 rounded-full border border-border" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Day 2 of 3 · Reward: RM 5 cashback on completion</p>
      </Card>
      <Card accent="#3B82F6" className="mt-3">
        <p className="font-semibold">💰 Save RM 200 this week</p>
        <div className="my-2"><ProgressBar value={70} color="#3B82F6" /></div>
        <p className="text-xs text-muted-foreground">RM 140 of RM 200 · Reward: AutoPilot Star Badge 🌟</p>
      </Card>

      <div className="flex items-center justify-between mt-5 mb-2">
        <p className="font-display text-base">Squad Race 👥 — October</p>
        <button onClick={() => go("leaderboard")} className="text-primary text-xs font-semibold">View All →</button>
      </div>
      <Card className="space-y-2.5">
        {[
          ["Farah", 1100, false],
          ["You", 882, true],
          ["Hafiz", 750, false],
          ["Sara", 600, false],
          ["Reza", 320, false],
        ].map(([n, v, me]: any) => (
          <div key={n}>
            <div className="flex justify-between text-xs mb-1"><span className={me ? "text-primary font-bold" : ""}>{n}</span><span>RM {v}</span></div>
            <ProgressBar value={(v / 1100) * 100} color={me ? "#3B82F6" : "#1E2640"} />
          </div>
        ))}
        <p className="text-xs text-warning mt-3">Save RM 218 more to overtake Farah</p>
      </Card>
      <BottomNav />
    </div>
  );
}

export function Leaderboard() {
  const { back } = usePrototype();
  const [tab, setTab] = useState("My Squad");
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="Leaderboard 🏆" onBack={back} />
      <div className="flex gap-2 mb-5">
        {["My Squad","My Campus","National"].map(t => (
          <button key={t} onClick={() => setTab(t)} className={`flex-1 h-9 rounded-full text-xs font-semibold ${tab === t ? "bg-primary text-white" : "bg-card border border-border text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="flex items-end justify-center gap-2 mb-5">
        {[
          { r: 2, n: "Farah", v: "RM 1,100", h: 80, c: "#9CA3AF", i: "F" },
          { r: 1, n: "Aina", v: "RM 1,420", h: 110, c: "#F59E0B", i: "A" },
          { r: 3, n: "Hafiz", v: "RM 750", h: 60, c: "#B45309", i: "H" },
        ].map(p => (
          <div key={p.n} className="flex flex-col items-center">
            <Avatar initials={p.i} color={p.c} size={44} />
            <p className="text-xs font-semibold mt-1">{p.n}</p>
            <p className="text-[10px] text-muted-foreground">{p.v}</p>
            <div className="w-20 rounded-t-xl mt-1 flex items-start justify-center pt-2 font-display text-lg" style={{ height: p.h, background: `${p.c}30`, color: p.c }}>{p.r}</div>
          </div>
        ))}
      </div>
      <Card className="!p-0">
        {[
          [4, "Sara", "RM 720"],
          [5, "Reza", "RM 680"],
          [6, "Amir (You)", "RM 882", true],
          [7, "Iman", "RM 540"],
          [8, "Daniel", "RM 510"],
          [9, "Lina", "RM 480"],
          [10, "Zaki", "RM 410"],
        ].map(([r, n, v, me]: any) => (
          <div key={r} className={`flex items-center gap-3 px-4 py-3 border-b border-border last:border-0 ${me ? "" : ""}`} style={me ? { background: "rgba(59,130,246,0.1)" } : undefined}>
            <span className="w-6 text-sm font-bold text-muted-foreground">{r}</span>
            <Avatar initials={String(n)[0]} color={me ? "#3B82F6" : "#6B7FA3"} size={32} />
            <span className="flex-1 text-sm font-semibold">{n}</span>
            <span className="text-sm font-bold">{v}</span>
          </div>
        ))}
      </Card>
      <Card className="mt-3" accent="#3B82F6">
        <p className="text-sm font-bold">#6 — Amir — RM 882</p>
        <p className="text-xs text-warning mt-1">Save RM 218 more to reach Top 5</p>
      </Card>
    </div>
  );
}

/* AI ADVISOR */
export function AI() {
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-24">
      <h2 className="font-display text-[22px]">AI Advisor 🤖</h2>
      <p className="text-sm text-muted-foreground">Your personalised financial coach</p>

      <Card className="mt-4" accent="#F59E0B">
        <p className="text-xs text-muted-foreground">This Month's Risk</p>
        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" stroke="#1E2640" strokeWidth="10" fill="none" />
              <circle cx="50" cy="50" r="42" stroke="#F59E0B" strokeWidth="10" fill="none" strokeDasharray={`${72 * 2.64} 999`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="font-display text-2xl text-warning">72%</p>
              <p className="text-[10px] text-muted-foreground">Moderate Risk</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">Based on Shopee + food delivery spending patterns detected this month.</p>
      </Card>

      <Card className="mt-3">
        <p className="font-semibold mb-3">Spending Breakdown</p>
        <div className="space-y-2.5">
          {[
            ["Food", 34, "#F59E0B"],
            ["Shopping", 28, "#EF4444"],
            ["Transport", 18, "#3B82F6"],
            ["Entertainment", 12, "#818CF8"],
            ["Others", 8, "#6B7FA3"],
          ].map(([n, v, c]: any) => (
            <div key={n}>
              <div className="flex justify-between text-xs mb-1"><span>{n}</span><span className="text-muted-foreground">{v}%</span></div>
              <ProgressBar value={v} color={c} />
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-3">
        <p className="font-semibold mb-3">Recommended Actions</p>
        <div className="space-y-2.5">
          {[
            ["Pause Shopee for 5 days", true],
            ["Move RM 200 to Bonus Pocket", true],
            ["Reduce dining to 2x per week", false],
            ["Cancel unused subscriptions", false],
          ].map(([t, done]: any) => (
            <div key={t} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${done ? "bg-success" : "border border-border"}`}>
                {done && <Check size={12} color="white" strokeWidth={3} />}
              </div>
              <span className={`text-sm ${done ? "line-through text-muted-foreground" : ""}`}>{t}</span>
            </div>
          ))}
        </div>
      </Card>

      <p className="font-display text-base mt-5 mb-2">Quick Ask</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["How to save faster?", "#3B82F6"],
          ["Am I on track?", "#10B981"],
          ["Reduce my debt", "#F59E0B"],
          ["Explain my score", "#818CF8"],
        ].map(([t, c]: any) => (
          <button key={t} className="h-12 rounded-xl text-sm font-semibold" style={{ background: `${c}1F`, color: c }}>{t}</button>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}

/* PROFILE */
export function Profile() {
  const { back, go, setOverlay } = usePrototype();
  const rows: [any, string, () => void][] = [
    ["👤", "Personal Information", () => {}],
    ["🔒", "Security & Privacy", () => {}],
    ["🔔", "Notification Preferences", () => {}],
    ["⚙", "AutoPilot Settings", () => go("autoBoost")],
    ["🎁", "Refer a Friend", () => go("referral")],
    ["❓", "Help & Support", () => {}],
    ["📄", "Terms & Privacy", () => {}],
  ];
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="Profile" onBack={back} />
      <div className="flex flex-col items-center mt-2">
        <div className="relative">
          <Avatar initials="AH" size={80} />
          <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center border-2 border-background"><Camera size={12} color="white" /></button>
        </div>
        <p className="font-display text-[20px] mt-3">Amir Haziq</p>
        <p className="text-xs text-muted-foreground">amir@email.com</p>
        <p className="text-[11px] text-muted-foreground mt-1">Member since October 2024</p>
      </div>
      <Card className="mt-4 text-center" accent="#F59E0B">
        <p className="text-sm font-semibold text-warning">AutoPilot Score: 85 — Great Saver 🌟</p>
      </Card>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[["Streak","13 days"],["Goals","2 active"],["Saved","RM 1,642"]].map(([k,v]) => (
          <Card key={k} className="!p-3 text-center">
            <p className="text-[10px] text-muted-foreground uppercase">{k}</p>
            <p className="font-display text-sm mt-1">{v}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-3 !p-0">
        {rows.map(([e, t, on], i) => (
          <button key={t} onClick={on} className={`w-full flex items-center gap-3 px-4 py-3.5 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
            <span className="text-lg">{e}</span>
            <span className="flex-1 text-left text-sm">{t}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </Card>
      <button onClick={() => setOverlay("logout")} className="w-full mt-4 py-3 text-danger font-semibold text-sm">Log Out</button>
    </div>
  );
}

/* REFERRAL */
export function Referral() {
  const { back } = usePrototype();
  return (
    <div className="h-full bg-background overflow-y-auto no-scrollbar px-4 pt-10 pb-8">
      <ScreenHeader title="Refer & Earn 🎁" onBack={back} />
      <div className="flex justify-center my-4 gap-3 items-center">
        <Avatar initials="A" color="#3B82F6" size={56} />
        <div className="flex gap-1 text-warning text-xl">→ 💰 →</div>
        <Avatar initials="F" color="#10B981" size={56} />
      </div>
      <h3 className="font-display text-center text-lg">Give RM 10, Get RM 10</h3>
      <p className="text-sm text-muted-foreground text-center mt-1 px-4">Every friend who activates AutoPilot earns you both RM 10 in your GX Account.</p>
      <Card className="mt-4 text-center" accent="#3B82F6">
        <p className="font-display text-2xl tracking-wider">AMIR2024</p>
        <button className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><Copy size={12} /> Tap to copy</button>
      </Card>
      <div className="grid grid-cols-4 gap-2 mt-3">
        {[["WhatsApp","#10B981",MessageCircle],["Telegram","#3B82F6",Send],["Instagram","#818CF8",Instagram],["Copy Link","#6B7FA3",Link2]].map(([n,c,Icon]: any) => (
          <button key={n} className="flex flex-col items-center gap-1 h-16 rounded-xl border border-border" style={{ background: `${c}10` }}>
            <Icon size={18} color={c} />
            <span className="text-[10px]" style={{ color: c }}>{n}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <Card className="text-center"><p className="text-xs text-muted-foreground">Friends referred</p><p className="font-display text-xl mt-1">3</p></Card>
        <Card className="text-center"><p className="text-xs text-muted-foreground">Total earned</p><p className="font-display text-xl mt-1 text-success">RM 30</p></Card>
      </div>
      <p className="font-display text-base mt-5 mb-2">Referred Friends</p>
      <Card className="!p-0">
        {[
          ["✓","Farah","Joined — RM 10 earned","#10B981"],
          ["✓","Hafiz","Joined — RM 10 earned","#10B981"],
          ["⏳","Sara","Pending","#6B7FA3"],
        ].map(([s,n,st,c]: any, i) => (
          <div key={n} className={`flex items-center gap-3 px-4 py-3 ${i < 2 ? "border-b border-border" : ""}`}>
            <span style={{ color: c }}>{s}</span>
            <span className="flex-1 text-sm font-semibold">{n}</span>
            <span className="text-xs" style={{ color: c }}>{st}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* EMPTY / NO CONNECTION */
export function Empty() {
  const { back, go } = usePrototype();
  return (
    <div className="h-full bg-background flex flex-col items-center justify-center px-8 text-center">
      <Ghost size={72} className="text-muted-foreground mb-5" />
      <h3 className="font-display text-lg">Nothing here yet</h3>
      <p className="text-sm text-muted-foreground mt-2">Create your first savings goal to start building your financial future.</p>
      <div className="w-full mt-6 space-y-2">
        <Button onClick={() => go("createGoal")}>Create a Goal</Button>
        <button onClick={back} className="text-sm text-muted-foreground">Go back</button>
      </div>
    </div>
  );
}

export function NoConnection() {
  const { back } = usePrototype();
  return (
    <div className="h-full bg-background flex flex-col items-center justify-center px-8 text-center">
      <Wifi size={72} className="text-muted-foreground mb-5 opacity-50" />
      <h3 className="font-display text-lg">No Connection</h3>
      <p className="text-sm text-muted-foreground mt-2">Check your internet connection and try again.</p>
      <div className="w-full mt-6 space-y-2">
        <Button><RefreshCw size={16} className="inline mr-1" />Try Again</Button>
        <button onClick={back} className="text-sm text-muted-foreground">Go back</button>
      </div>
    </div>
  );
}
