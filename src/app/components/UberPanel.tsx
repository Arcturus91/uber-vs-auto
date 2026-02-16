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
    <div className="card p-6 flex flex-col" style={{ borderColor: "rgba(250, 204, 21, 0.15)" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-uber-bg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight" style={{ color: "#E8ECF4" }}>Uber / Taxi</h2>
          <p className="text-xs" style={{ color: "#8896AB" }}>Gasto mensual estimado</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="label-text block mb-2" id="uber-monthly-label">
          Gasto mensual
        </label>
        <Slider
          min={500}
          max={3000}
          step={50}
          value={uberMonthly}
          onChange={(_, v) => onUberMonthlyChange(v as number)}
          sx={{ color: "#FACC15" }}
          size="small"
          aria-labelledby="uber-monthly-label"
        />
        <p className="text-3xl font-bold mt-2 tracking-tight" style={{ color: "#FACC15" }}>
          {fmt(uberMonthly)}
          <span className="text-sm font-normal ml-1" style={{ color: "#8896AB" }}>/mes</span>
        </p>
      </div>

      <div className="card-elevated p-4">
        <p className="label-text mb-1">Tu promedio real (Ene 2026)</p>
        <p className="text-base font-semibold" style={{ color: "#E8ECF4" }}>
          S/ 1,034 en soles + US$ 8.95
        </p>
        <p className="text-xs mt-1" style={{ color: "#64748B" }}>
          42 viajes -- S/ 24.63 promedio/viaje
        </p>
      </div>

      <div className="mt-auto pt-6">
        <p className="label-text mb-3">Consideraciones</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(34, 197, 94, 0.15)" />
              <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm" style={{ color: "#8896AB" }}>Sin preocuparte por estacionamiento</span>
          </div>
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(34, 197, 94, 0.15)" />
              <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm" style={{ color: "#8896AB" }}>Sin mantenimiento ni seguros</span>
          </div>
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(34, 197, 94, 0.15)" />
              <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm" style={{ color: "#8896AB" }}>Puedes tomar alcohol</span>
          </div>
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(239, 68, 68, 0.15)" />
              <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-sm" style={{ color: "#8896AB" }}>Dependes de disponibilidad</span>
          </div>
          <div className="flex items-start gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="8" cy="8" r="8" fill="rgba(239, 68, 68, 0.15)" />
              <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-sm" style={{ color: "#8896AB" }}>Surge pricing en horas punta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
