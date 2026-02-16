"use client";

interface ResultBannerProps {
  diff: number;
  diffWithDepr: number;
  fmt: (n: number) => string;
}

export default function ResultBanner({ diff, diffWithDepr, fmt }: ResultBannerProps) {
  const positive = diff > 0;
  const deprPositive = diffWithDepr > 0;

  const bgColor = positive ? "rgba(34, 197, 94, 0.06)" : "rgba(239, 68, 68, 0.06)";
  const borderColor = positive ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)";
  const accentColor = positive ? "#22C55E" : "#EF4444";
  const deprAccentColor = deprPositive ? "#22C55E" : "#EF4444";

  return (
    <div
      className="rounded-2xl p-8 mb-8 text-center"
      style={{ backgroundColor: bgColor, border: `1px solid ${borderColor}` }}
    >
      <p className="text-sm font-medium mb-2" style={{ color: "#8896AB" }}>
        {positive ? "El auto te ahorraria" : "El auto te costaria de mas"}
      </p>
      <p
        className="text-5xl font-bold tracking-tight"
        style={{ color: accentColor }}
      >
        {fmt(Math.abs(diff))}
        <span className="text-lg font-normal ml-1" style={{ color: "#8896AB" }}>/mes</span>
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="text-xs" style={{ color: "#64748B" }}>Sin depreciacion</span>
        <span className="text-xs" style={{ color: "#334155" }}>|</span>
        <span className="text-xs" style={{ color: "#64748B" }}>
          Con depreciacion:{" "}
          {deprPositive ? "ahorras" : "gastas de mas"}{" "}
          <span className="font-semibold" style={{ color: deprAccentColor }}>
            {fmt(Math.abs(diffWithDepr))}/mes
          </span>
        </span>
      </div>
    </div>
  );
}
