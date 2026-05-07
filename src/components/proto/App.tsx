import * as React from "react";
import { PrototypeProvider, usePrototype } from "@/lib/prototype";
import * as S from "@/components/proto/screens";
import { Overlays } from "@/components/proto/Overlays";

const map: Record<string, () => React.ReactElement> = {
  splash: S.Splash, onb1: S.Onb1, onb2: S.Onb2, onb3: S.Onb3, onb4: S.Onb4,
  signup: S.SignUp, login: S.Login, otp: S.OTP, biometric: S.Biometric, forgot: S.Forgot,
  dashboard: S.Dashboard, notifications: S.Notifications, buckets: S.Buckets,
  transactions: S.Transactions, txDetail: S.TxDetail,
  goals: S.Goals, goalDetail: S.GoalDetail, createGoal: S.CreateGoal, autoBoost: S.AutoBoost,
  streaks: S.Streaks, leaderboard: S.Leaderboard, ai: S.AI, profile: S.Profile, referral: S.Referral,
  empty: S.Empty, noConnection: S.NoConnection,
};

function Frame() {
  const { screen } = usePrototype();
  const Cmp = map[screen] ?? S.Splash;
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-2 sm:p-6">
      <div className="relative w-full max-w-[390px] h-[844px] max-h-[100dvh] sm:max-h-[844px] bg-app sm:rounded-[44px] overflow-hidden sm:border-[8px] sm:border-neutral-900 sm:shadow-2xl">
        <Cmp />
        <Overlays />
      </div>
    </div>
  );
}

export default function PrototypeApp() {
  return (
    <PrototypeProvider>
      <Frame />
    </PrototypeProvider>
  );
}
