import { createFileRoute } from "@tanstack/react-router";
import PrototypeApp from "@/components/proto/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartGuard AI — Active Spending Guardrail" },
      { name: "description", content: "AI-powered banking guardrail that blocks impulse spending in real time. Need vs. Want scoring for Malaysian Gen-Z." },
      { property: "og:title", content: "SmartGuard AI — Active Spending Guardrail" },
      { property: "og:description", content: "AI-powered banking guardrail that blocks impulse spending in real time. Need vs. Want scoring for Malaysian Gen-Z." },
      { property: "og:url", content: "https://smart-guard-upm.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://smart-guard-upm.lovable.app/" },
    ],
  }),
  component: PrototypeApp,
});
