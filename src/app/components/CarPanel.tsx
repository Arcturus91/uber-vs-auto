"use client";

import { Checkbox, FormControlLabel } from "@mui/material";
import SliderInput from "./SliderInput";

interface CarPanelProps {
  carPrice: number;
  downPayment: number;
  loanYears: number;
  loanRate: number;
  kmPerLiter: number;
  kmPerMonth: number;
  hasCochera: boolean;
  onCarPriceChange: (v: number) => void;
  onDownPaymentChange: (v: number) => void;
  onLoanYearsChange: (v: number) => void;
  onLoanRateChange: (v: number) => void;
  onKmPerLiterChange: (v: number) => void;
  onKmPerMonthChange: (v: number) => void;
  onHasCocheraChange: (v: boolean) => void;
  mantenimientoMensual: number;
  lavadoMensual: number;
  peajesMensual: number;
  revisionTecnicaMensual: number;
  soatMensual: number;
  onMantenimientoChange: (v: number) => void;
  onLavadoChange: (v: number) => void;
  onPeajesChange: (v: number) => void;
  onRevisionTecnicaChange: (v: number) => void;
  onSoatChange: (v: number) => void;
  costosFijosOpen: boolean;
  onCostosFijosToggle: () => void;
  downPaymentAmount: number;
  totalMonths: number;
  monthlyRate: number;
  totalCarMonthly: number;
  totalCarWithDepreciation: number;
  operatingMonthly: number;
  fmt: (n: number) => string;
}

export default function CarPanel({
  carPrice,
  downPayment,
  loanYears,
  loanRate,
  kmPerLiter,
  kmPerMonth,
  hasCochera,
  onCarPriceChange,
  onDownPaymentChange,
  onLoanYearsChange,
  onLoanRateChange,
  onKmPerLiterChange,
  onKmPerMonthChange,
  onHasCocheraChange,
  mantenimientoMensual,
  lavadoMensual,
  peajesMensual,
  revisionTecnicaMensual,
  soatMensual,
  onMantenimientoChange,
  onLavadoChange,
  onPeajesChange,
  onRevisionTecnicaChange,
  onSoatChange,
  costosFijosOpen,
  onCostosFijosToggle,
  downPaymentAmount,
  totalMonths,
  monthlyRate,
  totalCarMonthly,
  totalCarWithDepreciation,
  operatingMonthly,
  fmt,
}: CarPanelProps) {
  const totalFijos = mantenimientoMensual + lavadoMensual + peajesMensual + revisionTecnicaMensual + soatMensual;

  return (
    <div className="card p-6 flex flex-col" style={{ borderColor: "rgba(14, 165, 233, 0.15)" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-car-bg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight" style={{ color: "#E8ECF4" }}>Auto propio</h2>
          <p className="text-xs" style={{ color: "#8896AB" }}>Configura tu financiamiento</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <SliderInput
          label="Precio del auto"
          min={35000}
          max={120000}
          step={5000}
          value={carPrice}
          onChange={onCarPriceChange}
          formatValue={(v) => fmt(v)}
          color="#0EA5E9"
        />

        <div className="grid grid-cols-2 gap-4">
          <SliderInput
            label="Inicial (%)"
            min={0}
            max={100}
            step={5}
            value={downPayment}
            onChange={onDownPaymentChange}
            formatValue={(v) => `${v}% = ${fmt(downPaymentAmount)}`}
            color="#0EA5E9"
          />
          <SliderInput
            label="Plazo (anos)"
            min={1}
            max={6}
            step={1}
            value={loanYears}
            onChange={onLoanYearsChange}
            formatValue={(v) => `${v} anos (${v * 12} cuotas)`}
            color="#0EA5E9"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SliderInput
            label="TEA prestamo (%)"
            min={5}
            max={25}
            step={0.5}
            value={loanRate}
            onChange={onLoanRateChange}
            formatValue={() =>
              `${loanRate}% TEA`
            }
            color="#0EA5E9"
          />
          <SliderInput
            label="Km/litro"
            min={8}
            max={20}
            step={0.5}
            value={kmPerLiter}
            onChange={onKmPerLiterChange}
            formatValue={(v) => `${v} km/L`}
            color="#0EA5E9"
          />
        </div>

        <SliderInput
          label="Km recorridos por mes"
          min={200}
          max={2500}
          step={50}
          value={kmPerMonth}
          onChange={onKmPerMonthChange}
          formatValue={(v) =>
            `${v} km/mes`
          }
          color="#0EA5E9"
        />

        <div className="pt-3 mt-2" style={{ borderTop: "1px solid #1E293B" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="label-text">Costos fijos mensuales</p>
            <button
              type="button"
              onClick={onCostosFijosToggle}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium transition-colors"
              style={{ color: "#8896AB", backgroundColor: costosFijosOpen ? "rgba(14, 165, 233, 0.1)" : "transparent" }}
              aria-expanded={costosFijosOpen}
              aria-controls="costos-fijos-content"
            >
              <span>S/ {totalFijos}/mes</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200"
                style={{ transform: costosFijosOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
          {costosFijosOpen && (
            <div id="costos-fijos-content" className="flex flex-col gap-0">
              <div className="grid grid-cols-2 gap-4">
                <SliderInput
                  label="Mantenimiento"
                  min={0}
                  max={500}
                  step={10}
                  value={mantenimientoMensual}
                  onChange={onMantenimientoChange}
                  formatValue={(v) => `S/ ${v}`}
                  color="#22C55E"
                />
                <SliderInput
                  label="Lavado"
                  min={0}
                  max={200}
                  step={10}
                  value={lavadoMensual}
                  onChange={onLavadoChange}
                  formatValue={(v) => `S/ ${v}`}
                  color="#818CF8"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SliderInput
                  label="Peajes"
                  min={0}
                  max={500}
                  step={10}
                  value={peajesMensual}
                  onChange={onPeajesChange}
                  formatValue={(v) => `S/ ${v}`}
                  color="#F472B6"
                />
                <SliderInput
                  label="SOAT"
                  min={0}
                  max={50}
                  step={1}
                  value={soatMensual}
                  onChange={onSoatChange}
                  formatValue={(v) => `S/ ${v}`}
                  color="#FB923C"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <SliderInput
                  label="Rev. tecnica"
                  min={0}
                  max={50}
                  step={1}
                  value={revisionTecnicaMensual}
                  onChange={onRevisionTecnicaChange}
                  formatValue={(v) => `S/ ${v}`}
                  color="#2DD4BF"
                />
              </div>
            </div>
          )}
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={hasCochera}
              onChange={(e) => onHasCocheraChange(e.target.checked)}
              size="small"
            />
          }
          label={
            <span className="text-xs" style={{ color: "#8896AB" }}>
              Tengo cochera propia (ahorro S/ 350/mes)
            </span>
          }
        />
      </div>

      <div className="mt-auto pt-4 border-t" style={{ borderColor: "#1E293B" }}>
        <p className="text-3xl font-bold tracking-tight" style={{ color: "#0EA5E9" }}>
          {fmt(totalCarMonthly)}
          <span className="text-sm font-normal ml-1" style={{ color: "#8896AB" }}>/mes</span>
        </p>
        <p className="text-xs mt-1" style={{ color: "#64748B" }}>
          Con depreciacion: {fmt(totalCarWithDepreciation)}/mes
        </p>
        {loanYears < 5 && (
          <p className="text-xs mt-1" style={{ color: "#22C55E" }}>
            Despues de {loanYears} anos (sin cuota): {fmt(operatingMonthly)}/mes
          </p>
        )}
      </div>
    </div>
  );
}
