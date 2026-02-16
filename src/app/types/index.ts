export interface CarCalculatorInputs {
  kmPerMonth: number;
  uberMonthly: number;
  carPrice: number;
  downPayment: number;
  loanYears: number;
  loanRate: number;
  fuelPricePerGallon: number;
  kmPerLiter: number;
  parkingMonthly: number;
  hasCochera: boolean;
  mantenimientoMensual: number;
  lavadoMensual: number;
  peajesMensual: number;
  revisionTecnicaMensual: number;
  soatMensual: number;
}

export interface CostItem {
  label: string;
  value: number;
  color: string;
}

export interface CarCalculatorResults {
  fuelMonthly: number;
  soatMonthly: number;
  seguroVehicular: number;
  mantenimiento: number;
  revisionTecnica: number;
  lavado: number;
  peajes: number;
  depreciacion: number;
  parking: number;
  downPaymentAmount: number;
  loanAmount: number;
  monthlyRate: number;
  totalMonths: number;
  cuotaMensual: number;
  operatingMonthly: number;
  totalCarMonthly: number;
  totalCarWithDepreciation: number;
  diff: number;
  diffWithDepr: number;
  totalCarProjection: number;
  totalUberProjection: number;
  carCosts: CostItem[];
  maxBar: number;
}
