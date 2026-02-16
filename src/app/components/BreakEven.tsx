"use client";

interface BreakEvenProps {
  uberMonthly: number;
  totalCarMonthly: number;
  totalCarWithDepreciation: number;
  fmt: (n: number) => string;
}

export default function BreakEven({
  uberMonthly,
  totalCarMonthly,
  totalCarWithDepreciation,
  fmt,
}: BreakEvenProps) {
  const carWins = uberMonthly >= totalCarMonthly;
  const carWinsWithDepr = uberMonthly >= totalCarWithDepreciation;

  return (
    <div className="card p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 3v18h18" />
            <path d="M7 16l4-8 4 4 6-8" />
          </svg>
        </div>
        <h3 className="section-heading" style={{ color: "#E8ECF4" }}>Punto de equilibrio</h3>
      </div>

      <div className="card-elevated p-4 mb-4">
        <p className="text-sm leading-relaxed" style={{ color: "#8896AB" }}>
          Para que el auto sea mas barato que Uber, necesitarias gastar mas de{" "}
          <span className="font-semibold" style={{ color: "#FACC15" }}>
            {fmt(totalCarMonthly)}/mes
          </span>{" "}
          en Uber.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div
          className="flex items-start gap-3 rounded-xl p-3"
          style={{
            backgroundColor: carWins ? "rgba(34, 197, 94, 0.06)" : "rgba(239, 68, 68, 0.06)",
            border: `1px solid ${carWins ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)"}`,
          }}
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5" style={{
            backgroundColor: carWins ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)"
          }}>
            {carWins ? (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 8l3 3 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5 5l6 6M11 5l-6 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
            {carWins
              ? `Con tu gasto actual de ${fmt(uberMonthly)}, el auto SI te conviene financieramente (sin contar depreciacion).`
              : `Con tu gasto actual de ${fmt(uberMonthly)}, Uber sigue siendo mas economico.`}
          </p>
        </div>

        {carWins && (
          <div
            className="flex items-start gap-3 rounded-xl p-3"
            style={{
              backgroundColor: carWinsWithDepr ? "rgba(34, 197, 94, 0.06)" : "rgba(250, 204, 21, 0.06)",
              border: `1px solid ${carWinsWithDepr ? "rgba(34, 197, 94, 0.15)" : "rgba(250, 204, 21, 0.15)"}`,
            }}
          >
            <div className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5" style={{
              backgroundColor: carWinsWithDepr ? "rgba(34, 197, 94, 0.15)" : "rgba(250, 204, 21, 0.15)"
            }}>
              {carWinsWithDepr ? (
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 8l3 3 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 4v5M8 11v1" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
              {carWinsWithDepr
                ? "Incluso contando la depreciacion, el auto te sale mas barato."
                : "Pero si cuentas la depreciacion, Uber sigue siendo mas barato. El auto solo conviene si valoras la comodidad y disponibilidad."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
