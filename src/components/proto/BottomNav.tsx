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
    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-2" style={{ background: "linear-gradient(to top, #0A0D14 70%, transparent)" }}>
      <div className="flex items-center justify-around bg-card border border-border rounded-full px-2 py-2">
        {items.map(({ id, icon: Icon, label }) => {
          const active = screen === id;
          return (
            <button
              key={id}
              onClick={() => go(id)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition"
              style={active ? { background: "rgba(59,130,246,0.15)" } : undefined}
            >
              <Icon size={20} color={active ? "#3B82F6" : "#6B7FA3"} fill={active ? "#3B82F6" : "transparent"} strokeWidth={active ? 2 : 1.8} />
              <span className="text-[10px] font-semibold" style={{ color: active ? "#3B82F6" : "#6B7FA3" }}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
