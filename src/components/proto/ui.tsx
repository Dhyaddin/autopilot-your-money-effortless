import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Card = ({ children, className, accent }: { children: ReactNode; className?: string; accent?: string }) => (
  <div
    className={cn("bg-card border border-border rounded-2xl p-4", className)}
    style={accent ? { borderLeft: `3px solid ${accent}` } : undefined}
  >
    {children}
  </div>
);

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outlined" | "danger" | "muted";
}
export const Button = ({ variant = "primary", className, children, ...p }: BtnProps) => {
  const styles = {
    primary: "bg-primary text-white hover:opacity-90",
    outlined: "border border-primary text-white bg-transparent hover:bg-primary/10",
    danger: "bg-danger text-white hover:opacity-90",
    muted: "border border-border text-foreground bg-transparent hover:bg-card",
  }[variant];
  return (
    <button
      className={cn("w-full h-[52px] rounded-xl font-semibold text-[15px] transition active:scale-[0.98]", styles, className)}
      {...p}
    >
      {children}
    </button>
  );
};

export const Input = ({ label, className, ...p }: InputHTMLAttributes<HTMLInputElement> & { label?: string }) => (
  <div className="space-y-1.5">
    {label && <label className="text-xs text-muted-foreground font-medium">{label}</label>}
    <input
      className={cn(
        "w-full h-12 px-4 bg-card border border-border rounded-xl text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition",
        className
      )}
      {...p}
    />
  </div>
);

export const Badge = ({ tone = "blue", children }: { tone?: "blue" | "green" | "amber" | "red" | "purple"; children: ReactNode }) => {
  const map = {
    blue: { c: "#3B82F6", bg: "rgba(59,130,246,0.15)" },
    green: { c: "#10B981", bg: "rgba(16,185,129,0.15)" },
    amber: { c: "#F59E0B", bg: "rgba(245,158,11,0.15)" },
    red: { c: "#EF4444", bg: "rgba(239,68,68,0.15)" },
    purple: { c: "#818CF8", bg: "rgba(129,140,248,0.15)" },
  }[tone];
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ color: map.c, background: map.bg }}>
      {children}
    </span>
  );
};

export const ProgressBar = ({ value, color = "#3B82F6" }: { value: number; color?: string }) => (
  <div className="h-2 w-full rounded-md overflow-hidden" style={{ background: "#1E2640" }}>
    <div className="h-full rounded-md transition-all" style={{ width: `${Math.min(100, value)}%`, background: color }} />
  </div>
);

export const Avatar = ({ initials, color = "#3B82F6", size = 44 }: { initials: string; color?: string; size?: number }) => (
  <div
    className="flex items-center justify-center rounded-full font-bold"
    style={{
      width: size, height: size, background: `${color}25`, color, fontSize: size * 0.36,
    }}
  >
    {initials}
  </div>
);

export const ScreenHeader = ({ title, onBack, right }: { title: string; onBack?: () => void; right?: ReactNode }) => (
  <div className="flex items-center justify-between mb-4 pt-1">
    <div className="flex items-center gap-3">
      {onBack && (
        <button onClick={onBack} className="w-9 h-9 -ml-2 flex items-center justify-center rounded-full hover:bg-card">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}
      <h2 className="font-display text-[22px] font-bold">{title}</h2>
    </div>
    {right}
  </div>
);
