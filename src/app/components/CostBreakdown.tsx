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

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-8">
      <h3 className="text-lg font-bold mb-4">Desglose mensual del auto</h3>
      <div className="space-y-2">
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
        <div className="pt-2 border-t border-gray-700">
          <CostBar
            label="Depreciación"
            value={depreciacion}
            color="#9CA3AF"
            maxValue={maxBar}
            formatValue={fmt2}
            opacity={0.5}
            suffix="(costo oculto)"
          />
        </div>
      </div>
    </div>
  );
}
