"use client";

interface CostBarProps {
  label: string;
  value: number;
  color: string;
  maxValue: number;
  formatValue: (n: number) => string;
  opacity?: number;
  suffix?: string;
}

export default function CostBar({
  label,
  value,
  color,
  maxValue,
  formatValue,
  opacity,
  suffix,
}: CostBarProps) {
  const widthPct = Math.max((value / maxValue) * 100, 4);

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-xs w-28 text-right shrink-0 font-medium"
        style={{ color: "#8896AB" }}
      >
        {label}
      </span>
      <div className="flex-1 rounded-lg h-7 overflow-hidden" style={{ backgroundColor: "#1A2235" }}>
        <div
          className="h-full rounded-lg flex items-center px-2.5 transition-all duration-300"
          style={{
            width: `${widthPct}%`,
            backgroundColor: color,
            opacity: opacity ?? 0.85,
          }}
        >
          <span className="text-xs font-semibold whitespace-nowrap" style={{ color: "#FFFFFF" }}>
            {formatValue(value)}
            {suffix ? ` ${suffix}` : ""}
          </span>
        </div>
      </div>
      <span
        className="text-xs w-16 text-right shrink-0 font-mono tabular-nums"
        style={{ color: "#CBD5E1" }}
      >
        {formatValue(value)}
      </span>
    </div>
  );
}
