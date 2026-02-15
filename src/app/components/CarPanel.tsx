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
  // Computed values for display
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
  downPaymentAmount,
  totalMonths,
  monthlyRate,
  totalCarMonthly,
  totalCarWithDepreciation,
  operatingMonthly,
  fmt,
}: CarPanelProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🚗</span>
        <h2 className="text-xl font-bold">Auto propio</h2>
      </div>

      <div className="space-y-3 mb-4">
        <SliderInput
          label="Precio del auto"
          min={35000}
          max={120000}
          step={5000}
          value={carPrice}
          onChange={onCarPriceChange}
          formatValue={(v) => fmt(v)}
        />

        <div className="grid grid-cols-2 gap-3">
          <SliderInput
            label="Inicial (%)"
            min={0}
            max={100}
            step={5}
            value={downPayment}
            onChange={onDownPaymentChange}
            formatValue={(v) => `${v}% = ${fmt(downPaymentAmount)}`}
          />
          <SliderInput
            label="Plazo (años)"
            min={1}
            max={6}
            step={1}
            value={loanYears}
            onChange={onLoanYearsChange}
            formatValue={(v) => `${v} años (${v * 12} cuotas)`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SliderInput
            label="TEA préstamo (%)"
            min={5}
            max={25}
            step={0.5}
            value={loanRate}
            onChange={onLoanRateChange}
            formatValue={() =>
              `${loanRate}% TEA → ${(monthlyRate * 100).toFixed(3)}% mensual`
            }
          />
          <SliderInput
            label="Km/litro del auto"
            min={8}
            max={20}
            step={0.5}
            value={kmPerLiter}
            onChange={onKmPerLiterChange}
            formatValue={(v) => `${v} km/L`}
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
            `${v} km/mes → ~${(v / 30).toFixed(0)} km/día`
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={hasCochera}
              onChange={(e) => onHasCocheraChange(e.target.checked)}
              size="small"
            />
          }
          label={
            <span className="text-xs text-gray-400">
              Tengo cochera propia
            </span>
          }
        />
      </div>

      <p className="text-2xl font-bold text-blue-400">
        {fmt(totalCarMonthly)}/mes
      </p>
      <p className="text-xs text-gray-500">
        Con depreciación: {fmt(totalCarWithDepreciation)}/mes
      </p>
      {loanYears < 5 && (
        <p className="text-xs text-emerald-500 mt-1">
          Después de {loanYears} años (sin cuota): {fmt(operatingMonthly)}/mes
        </p>
      )}
    </div>
  );
}
