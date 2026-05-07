import { createContext, useContext, useState, ReactNode } from "react";

export type ScreenId =
  | "splash" | "onb1" | "onb2" | "onb3" | "onb4"
  | "signup" | "login" | "otp" | "biometric" | "forgot"
  | "dashboard" | "notifications" | "buckets" | "transactions" | "txDetail"
  | "goals" | "goalDetail" | "createGoal" | "autoBoost"
  | "streaks" | "leaderboard" | "ai" | "profile" | "referral"
  | "empty" | "noConnection";

export type Overlay = "success" | "deleteConfirm" | "logout" | "splitEdit" | "addExtra" | null;

interface Ctx {
  screen: ScreenId;
  go: (s: ScreenId) => void;
  back: () => void;
  overlay: Overlay;
  setOverlay: (o: Overlay) => void;
}

const PrototypeCtx = createContext<Ctx | null>(null);

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<ScreenId[]>(["splash"]);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const screen = stack[stack.length - 1];
  const go = (s: ScreenId) => setStack((p) => [...p, s]);
  const back = () => setStack((p) => (p.length > 1 ? p.slice(0, -1) : p));
  return (
    <PrototypeCtx.Provider value={{ screen, go, back, overlay, setOverlay }}>
      {children}
    </PrototypeCtx.Provider>
  );
}

export const usePrototype = () => {
  const c = useContext(PrototypeCtx);
  if (!c) throw new Error("PrototypeProvider missing");
  return c;
};
