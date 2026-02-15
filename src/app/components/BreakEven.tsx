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
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-8">
      <h3 className="text-lg font-bold mb-3">📊 Punto de equilibrio</h3>
      <p className="text-sm text-gray-400">
        Para que el auto sea más barato que Uber, necesitarías gastar más de{" "}
        <span className="text-yellow-400 font-bold">
          {fmt(totalCarMonthly)}/mes
        </span>{" "}
        en Uber.
      </p>
      <p className="text-sm text-gray-400 mt-2">
        {uberMonthly >= totalCarMonthly
          ? `Con tu gasto actual de ${fmt(uberMonthly)}, el auto SÍ te conviene financieramente (sin contar depreciación).`
          : `Con tu gasto actual de ${fmt(uberMonthly)}, Uber sigue siendo más económico.`}
      </p>
      {uberMonthly >= totalCarMonthly && (
        <p className="text-sm text-gray-400 mt-2">
          {uberMonthly >= totalCarWithDepreciation
            ? "✅ Incluso contando la depreciación, el auto te sale más barato."
            : "⚠️ Pero si cuentas la depreciación, Uber sigue siendo más barato. El auto solo conviene si valoras la comodidad y disponibilidad."}
        </p>
      )}
    </div>
  );
}
