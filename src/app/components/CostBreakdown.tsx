"use client";

import { CostItem } from "../types";
import CostBar from "./CostBar";

interface CostBreakdownProps {
  carCosts: CostItem[];
  depreciacion: number;
  maxBar: number;
}

const fmt2 = (n: number) => `S/ ${n.toFixed(0)}`;

export default function CostBreakdown({
  carCosts,
  depreciacion,
  maxBar,
}: CostBreakdownProps) {
  const sorted = [...carCosts].sort((a, b) => b.value - a.value);
  const total = sorted.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="section-heading" style={{ color: "#E8ECF4" }}>Desglose mensual del auto</h3>
        <span className="text-sm font-semibold" style={{ color: "#0EA5E9" }}>
          Total: S/ {Math.round(total).toLocaleString()}
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        {sorted.map((cost) => (
          <CostBar
            key={cost.label}
            label={cost.label}
            value={cost.value}
            color={cost.color}
            maxValue={maxBar}
            formatValue={fmt2}
          />
        ))}
        <div className="pt-3 mt-1" style={{ borderTop: "1px solid #1E293B" }}>
          <CostBar
            label="Depreciacion"
            value={depreciacion}
            color="#64748B"
            maxValue={maxBar}
            formatValue={fmt2}
            opacity={0.4}
            suffix="(oculto)"
          />
        </div>
      </div>
    </div>
  );
}
