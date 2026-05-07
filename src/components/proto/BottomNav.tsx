import { Home, Layers, Target, Flame, Sparkles } from "lucide-react";
import { usePrototype, ScreenId } from "@/lib/prototype";

const items: { id: ScreenId; icon: any; label: string }[] = [
  { id: "dashboard", icon: Home, label: "Home" },
  { id: "buckets", icon: Layers, label: "Buckets" },
  { id: "goals", icon: Target, label: "Goals" },
  { id: "streaks", icon: Flame, label: "Streaks" },
  { id: "ai", icon: Sparkles, label: "AI" },
];

export function BottomNav() {
  const { screen, go } = usePrototype();
  return (
    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-3" style={{ background: "linear-gradient(to top, #0B0B17 75%, transparent)" }}>
      <div className="flex items-center justify-around glass rounded-2xl px-2 py-2">
        {items.map(({ id, icon: Icon, label }) => {
          const active = screen === id;
          return (
            <button
              key={id}
              onClick={() => go(id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition"
              style={active ? { background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.25))" } : undefined}
            >
              <Icon size={20} color={active ? "#EC4899" : "#8A8AAE"} strokeWidth={active ? 2.4 : 1.8} />
              <span className="text-[10px] font-semibold" style={{ color: active ? "#F4F4F8" : "#8A8AAE" }}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
