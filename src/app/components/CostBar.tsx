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
  const widthPct = Math.max((value / maxValue) * 100, 3);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-400 w-32 text-right shrink-0 font-bold">
        {label}
      </span>
      <div className="flex-1 bg-gray-800 rounded-full h-6 overflow-hidden">
        <div
          className="h-full rounded-full flex items-center px-2"
          style={{
            width: `${widthPct}%`,
            backgroundColor: color,
            opacity: opacity ?? 1,
          }}
        >
          <span className="text-xs font-semibold text-white whitespace-nowrap">
            {formatValue(value)}
            {suffix ? ` ${suffix}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
