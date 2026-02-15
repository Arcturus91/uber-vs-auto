"use client";

import { Slider } from "@mui/material";

interface UberPanelProps {
  uberMonthly: number;
  onUberMonthlyChange: (value: number) => void;
  fmt: (n: number) => string;
}

export default function UberPanel({
  uberMonthly,
  onUberMonthlyChange,
  fmt,
}: UberPanelProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🚕</span>
        <h2 className="text-xl font-bold">Uber</h2>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-400 block mb-1">
          Gasto mensual Uber
        </label>
        <Slider
          min={500}
          max={3000}
          step={50}
          value={uberMonthly}
          onChange={(_, v) => onUberMonthlyChange(v as number)}
          sx={{ color: "#eab308" }}
          size="small"
        />
        <p className="text-2xl font-bold text-yellow-400 mt-1">
          {fmt(uberMonthly)}
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-4 mt-4">
        <p className="text-sm text-gray-400">Tu promedio real (Ene 2026)</p>
        <p className="text-lg font-semibold text-white">
          S/ 1,034 en soles + US$ 8.95
        </p>
        <p className="text-xs text-gray-500 mt-1">
          42 viajes · S/ 24.63 promedio/viaje
        </p>
      </div>

      <div className="mt-4 space-y-2 text-sm text-gray-400">
        <p>✅ Sin preocuparte por estacionamiento</p>
        <p>✅ Sin mantenimiento ni seguros</p>
        <p>✅ Puedes tomar alcohol</p>
        <p>❌ Dependes de disponibilidad</p>
        <p>❌ Surge pricing en horas punta</p>
      </div>
    </div>
  );
}
