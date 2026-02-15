import { useMemo } from "react";
import { CarCalculatorInputs, CarCalculatorResults } from "../types";

export function useCarCalculator(inputs: CarCalculatorInputs): CarCalculatorResults {
  return useMemo(() => {
    const {
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
    } = inputs;

    // Fuel calculation
    const litersPerMonth = kmPerMonth / kmPerLiter;
    const gallonsPerMonth = litersPerMonth / 3.785;
    const fuelMonthly = gallonsPerMonth * fuelPricePerGallon;

    // Fixed costs (monthly)
    const soatMonthly = 80 / 12;
    const seguroVehicular = (carPrice * 0.04) / 12;
    const mantenimiento = 1800 / 12;
    const revisionTecnica = 120 / 12;
    const lavado = 60;
    const peajes = 200;
    const depreciacion = (carPrice * 0.15) / 12;
    const parking = hasCochera ? 0 : parkingMonthly;

    // Loan: Convert TEA to monthly rate
    const downPaymentAmount = carPrice * (downPayment / 100);
    const loanAmount = carPrice - downPaymentAmount;
    const monthlyRate = Math.pow(1 + loanRate / 100, 1 / 12) - 1;
    const totalMonths = loanYears * 12;
    const cuotaMensual =
      loanAmount > 0 && monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount > 0
        ? loanAmount / totalMonths
        : 0;

    // Monthly operating costs (no loan, no depreciation)
    const operatingMonthly =
      fuelMonthly +
      soatMonthly +
      seguroVehicular +
      mantenimiento +
      revisionTecnica +
      lavado +
      peajes +
      parking;

    const totalCarMonthly = cuotaMensual + operatingMonthly;
    const totalCarWithDepreciation = totalCarMonthly + depreciacion;

    const diff = uberMonthly - totalCarMonthly;
    const diffWithDepr = uberMonthly - totalCarWithDepreciation;

    // 5-year projection accounts for loan ending
    const projectionMonths = 60;
    const loanMonthsInProjection = Math.min(totalMonths, projectionMonths);
    const postLoanMonths = projectionMonths - loanMonthsInProjection;
    const totalCarProjection =
      totalCarMonthly * loanMonthsInProjection +
      operatingMonthly * postLoanMonths;
    const totalUberProjection = uberMonthly * projectionMonths;

    const carCosts = [
      { label: "Cuota préstamo", value: cuotaMensual, color: "#3B82F6" },
      { label: "Combustible", value: fuelMonthly, color: "#F59E0B" },
      { label: "Seguro vehicular", value: seguroVehicular, color: "#EF4444" },
      { label: "Estacionamiento", value: parking, color: "#8B5CF6" },
      { label: "Peajes", value: peajes, color: "#EC4899" },
      { label: "Mantenimiento", value: mantenimiento, color: "#10B981" },
      { label: "Lavado", value: lavado, color: "#6366F1" },
      { label: "SOAT", value: soatMonthly, color: "#F97316" },
      { label: "Rev. técnica", value: revisionTecnica, color: "#14B8A6" },
    ];

    const maxBar = Math.max(...carCosts.map((c) => c.value), depreciacion);

    return {
      fuelMonthly,
      soatMonthly,
      seguroVehicular,
      mantenimiento,
      revisionTecnica,
      lavado,
      peajes,
      depreciacion,
      parking,
      downPaymentAmount,
      loanAmount,
      monthlyRate,
      totalMonths,
      cuotaMensual,
      operatingMonthly,
      totalCarMonthly,
      totalCarWithDepreciation,
      diff,
      diffWithDepr,
      totalCarProjection,
      totalUberProjection,
      carCosts,
      maxBar,
    };
  }, [inputs]);
}
