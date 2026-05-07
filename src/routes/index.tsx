import { createFileRoute } from "@tanstack/react-router";
import PrototypeApp from "@/components/proto/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoPilot by GXBank — AI-Powered Finance for Malaysian Youth" },
      { name: "description", content: "AutoPilot by GXBank: AI-driven smart buckets, savings streaks, goal lock and future vision for Malaysian youth aged 18–25." },
    ],
  }),
  component: PrototypeApp,
});
