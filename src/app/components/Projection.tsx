"use client";

interface ProjectionProps {
  loanYears: number;
  operatingMonthly: number;
  totalCarProjection: number;
  totalUberProjection: number;
  carPrice: number;
  fmt: (n: number) => string;
}

export default function Projection({
  loanYears,
  operatingMonthly,
  totalCarProjection,
  totalUberProjection,
  carPrice,
  fmt,
}: ProjectionProps) {
  const netCost = totalCarProjection - carPrice * 0.5;
  const carWins5yr = totalUberProjection > totalCarProjection;
  const carWinsResale = totalUberProjection > netCost;

  return (
    <div className="card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h3 className="section-heading" style={{ color: "#E8ECF4" }}>Proyeccion a 5 anos</h3>
      </div>

      {loanYears < 5 && (
        <div
          className="rounded-xl p-3 mb-5 flex items-start gap-2"
          style={{ backgroundColor: "rgba(34, 197, 94, 0.06)", border: "1px solid rgba(34, 197, 94, 0.15)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <p className="text-xs leading-relaxed" style={{ color: "#22C55E" }}>
            Tu prestamo termina en {loanYears} anos -- los ultimos{" "}
            {5 - loanYears} ano(s) solo pagas costos operativos (
            {fmt(operatingMonthly)}/mes)
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-center mb-5">
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "rgba(250, 204, 21, 0.06)", border: "1px solid rgba(250, 204, 21, 0.12)" }}
        >
          <p className="label-text mb-2">Uber (5 anos)</p>
          <p className="text-2xl font-bold tracking-tight" style={{ color: "#FACC15" }}>
            {fmt(totalUberProjection)}
          </p>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "rgba(14, 165, 233, 0.06)", border: "1px solid rgba(14, 165, 233, 0.12)" }}
        >
          <p className="label-text mb-2">Auto (5 anos)</p>
          <p className="text-2xl font-bold tracking-tight" style={{ color: "#0EA5E9" }}>
            {fmt(totalCarProjection)}
          </p>
          <div className="mt-2 flex flex-col gap-0.5">
            <p className="text-xs" style={{ color: "#64748B" }}>
              Reventa est.: ~{fmt(carPrice * 0.5)}
            </p>
            <p className="text-xs font-medium" style={{ color: "#22C55E" }}>
              Neto: ~{fmt(netCost)}
            </p>
          </div>
        </div>
      </div>

      <div className="card-elevated p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-sm" style={{ color: "#8896AB" }}>Diferencia a 5 anos:</span>
          <span
            className="text-sm font-bold"
            style={{ color: carWins5yr ? "#22C55E" : "#EF4444" }}
          >
            {carWins5yr
              ? `Ahorras ${fmt(totalUberProjection - totalCarProjection)} con auto`
              : `Ahorras ${fmt(totalCarProjection - totalUberProjection)} con Uber`}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs" style={{ color: "#64748B" }}>Con reventa:</span>
          <span
            className="text-xs font-semibold"
            style={{ color: carWinsResale ? "#22C55E" : "#EF4444" }}
          >
            {carWinsResale
              ? `Ahorras ${fmt(totalUberProjection - netCost)} con auto`
              : `Ahorras ${fmt(netCost - totalUberProjection)} con Uber`}
          </span>
        </div>
      </div>
    </div>
  );
}
