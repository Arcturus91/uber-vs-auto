"use client";

interface ResultBannerProps {
  diff: number;
  diffWithDepr: number;
  fmt: (n: number) => string;
}

export default function ResultBanner({ diff, diffWithDepr, fmt }: ResultBannerProps) {
  const positive = diff > 0;
  const deprPositive = diffWithDepr > 0;

  return (
    <div
      className={`rounded-2xl p-6 mb-8 text-center ${
        positive
          ? "bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/50"
          : "bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-700/50"
      }`}
    >
      <p className="text-sm text-gray-300 mb-1">
        {positive ? "El auto te ahorraría" : "El auto te costaría de más"}
      </p>
      <p
        className={`text-4xl font-bold ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {fmt(Math.abs(diff))}/mes
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Sin depreciación. Con depreciación:{" "}
        {deprPositive ? "ahorras" : "gastas de más"}{" "}
        <span className={deprPositive ? "text-green-400" : "text-red-400"}>
          {fmt(Math.abs(diffWithDepr))}/mes
        </span>
      </p>
    </div>
  );
}
