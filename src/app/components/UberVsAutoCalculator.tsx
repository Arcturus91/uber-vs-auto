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
  const [viajesPorMes, setViajesPorMes] = useState(42);
  const [promedioPorViaje, setPromedioPorViaje] = useState(25);
  const uberMonthly = viajesPorMes * promedioPorViaje;
  const [carPrice, setCarPrice] = useState(45000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanYears, setLoanYears] = useState(4);
  const [loanRate, setLoanRate] = useState(12);
  const [fuelPricePerGallon] = useState(15.5);
  const [kmPerLiter, setKmPerLiter] = useState(13);
  const [parkingMonthly] = useState(350);
  const [hasCochera, setHasCochera] = useState(false);
  const [mantenimientoMensual, setMantenimientoMensual] = useState(150);
  const [lavadoMensual, setLavadoMensual] = useState(60);
  const [peajesMensual, setPeajesMensual] = useState(200);
  const [revisionTecnicaMensual, setRevisionTecnicaMensual] = useState(10);
  const [soatMensual, setSoatMensual] = useState(7);
  const [costosFijosOpen, setCostosFijosOpen] = useState(false);

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
    mantenimientoMensual,
    lavadoMensual,
    peajesMensual,
    revisionTecnicaMensual,
    soatMensual,
  });

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12" style={{ backgroundColor: "#0B0F1A", color: "#E8ECF4" }}>
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <span className="text-sm font-medium" style={{ color: "#64748B" }}>vs</span>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ backgroundColor: "rgba(250, 204, 21, 0.1)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: "#E8ECF4" }}>
            Auto propio vs Uber
          </h1>
          <p className="text-sm" style={{ color: "#64748B" }}>
            {"Compara el costo real de tener auto vs seguir con Uber en Lima"}
          </p>
        </header>

        <ResultBanner
          diff={results.diff}
          diffWithDepr={results.diffWithDepr}
          fmt={fmt}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UberPanel
            uberMonthly={uberMonthly}
            viajesPorMes={viajesPorMes}
            promedioPorViaje={promedioPorViaje}
            onViajesPorMesChange={setViajesPorMes}
            onPromedioPorViajeChange={setPromedioPorViaje}
            costosFijosOpen={costosFijosOpen}
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
            mantenimientoMensual={mantenimientoMensual}
            lavadoMensual={lavadoMensual}
            peajesMensual={peajesMensual}
            revisionTecnicaMensual={revisionTecnicaMensual}
            soatMensual={soatMensual}
            onMantenimientoChange={setMantenimientoMensual}
            onLavadoChange={setLavadoMensual}
            onPeajesChange={setPeajesMensual}
            onRevisionTecnicaChange={setRevisionTecnicaMensual}
            onSoatChange={setSoatMensual}
            costosFijosOpen={costosFijosOpen}
            onCostosFijosToggle={() => setCostosFijosOpen(!costosFijosOpen)}
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

        <footer className="text-center mt-10 pb-6">
          <p className="text-xs mb-6" style={{ color: "#334155" }}>
            Estimaciones basadas en costos promedio de Lima 2026. Los valores reales pueden variar.
          </p>
          <div className="flex flex-col items-center gap-3 pt-6" style={{ borderTop: "1px solid #1E293B" }}>
            <p className="text-sm font-medium" style={{ color: "#8896AB" }}>
              Esta demo fue hecha por CloudforgeAI
            </p>
            <a
              href="https://www.cloud-forge-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar CloudforgeAI"
            >
              <img
                src="/images/cloudforgeai-logo.jpeg"
                alt="CloudforgeAI logo"
                className="h-24 rounded-lg object-contain"
              />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
