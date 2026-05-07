import logo from "@/assets/gx-logo.png";

export function GxLogo({ size = 28 }: { size?: number }) {
  return (
    <img
      src={logo}
      alt="GX Bank"
      width={size}
      height={size}
      className="rounded-[8px] shadow-[0_4px_12px_rgba(139,92,246,0.45)]"
      style={{ width: size, height: size }}
    />
  );
}
