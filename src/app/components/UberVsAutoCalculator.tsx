"use client";

import { useState } from "react";
import { useCarCalculator } from "../hooks/useCarCalculator";
import ResultBanner from "./ResultBanner";
import UberPanel from "./UberPanel";
import CarPanel from "./CarPanel";
import CostBreakdown from "./CostBreakdown";
import BreakEven from "./BreakEven";
import Projection from "./Projection";

const fmt = (n: number) => `S/ ${Math.round(n).toLocaleString()}`;

export default function UberVsAutoCalculator() {
  const [kmPerMonth, setKmPerMonth] = useState(800);
  const [uberMonthly, setUberMonthly] = useState(1034);
  const [carPrice, setCarPrice] = useState(45000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanYears, setLoanYears] = useState(4);
  const [loanRate, setLoanRate] = useState(12);
  const [fuelPricePerGallon] = useState(15.5);
  const [kmPerLiter, setKmPerLiter] = useState(13);
  const [parkingMonthly] = useState(350);
  const [hasCochera, setHasCochera] = useState(false);

  const results = useCarCalculator({
    kmPerMonth,
    uberMonthly,
    carPrice,
    downPayment,
    loanYears,
    loanRate,
    fuelPricePerGallon,
    kmPerLiter,
    parkingMonthly,
    hasCochera,
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-1 text-white">
          🚗 vs 🚕
        </h1>
        <p className="text-center text-gray-400 mb-8 text-sm">
          ¿Te conviene comprar auto o seguir con Uber en Lima?
        </p>

        <ResultBanner
          diff={results.diff}
          diffWithDepr={results.diffWithDepr}
          fmt={fmt}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UberPanel
            uberMonthly={uberMonthly}
            onUberMonthlyChange={setUberMonthly}
            fmt={fmt}
          />
          <CarPanel
            carPrice={carPrice}
            downPayment={downPayment}
            loanYears={loanYears}
            loanRate={loanRate}
            kmPerLiter={kmPerLiter}
            kmPerMonth={kmPerMonth}
            hasCochera={hasCochera}
            onCarPriceChange={setCarPrice}
            onDownPaymentChange={setDownPayment}
            onLoanYearsChange={setLoanYears}
            onLoanRateChange={setLoanRate}
            onKmPerLiterChange={setKmPerLiter}
            onKmPerMonthChange={setKmPerMonth}
            onHasCocheraChange={setHasCochera}
            downPaymentAmount={results.downPaymentAmount}
            totalMonths={results.totalMonths}
            monthlyRate={results.monthlyRate}
            totalCarMonthly={results.totalCarMonthly}
            totalCarWithDepreciation={results.totalCarWithDepreciation}
            operatingMonthly={results.operatingMonthly}
            fmt={fmt}
          />
        </div>

        <CostBreakdown
          carCosts={results.carCosts}
          depreciacion={results.depreciacion}
          maxBar={results.maxBar}
        />

        <BreakEven
          uberMonthly={uberMonthly}
          totalCarMonthly={results.totalCarMonthly}
          totalCarWithDepreciation={results.totalCarWithDepreciation}
          fmt={fmt}
        />

        <Projection
          loanYears={loanYears}
          operatingMonthly={results.operatingMonthly}
          totalCarProjection={results.totalCarProjection}
          totalUberProjection={results.totalUberProjection}
          carPrice={carPrice}
          fmt={fmt}
        />

        <p className="text-xs text-gray-600 text-center mt-6">
          * Estimaciones basadas en costos promedio de Lima 2026. Los valores
          reales pueden variar.
        </p>
      </div>
    </div>
  );
}
