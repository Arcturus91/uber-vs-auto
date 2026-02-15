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

  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
      <h3 className="text-lg font-bold mb-3">🔮 Proyección a 5 años</h3>
      {loanYears < 5 && (
        <p className="text-xs text-emerald-400 mb-3">
          ✨ Tu préstamo termina en {loanYears} años — los últimos{" "}
          {5 - loanYears} año(s) solo pagas costos operativos (
          {fmt(operatingMonthly)}/mes)
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-800/30">
          <p className="text-sm text-gray-400">Uber (5 años)</p>
          <p className="text-2xl font-bold text-yellow-400">
            {fmt(totalUberProjection)}
          </p>
        </div>
        <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-800/30">
          <p className="text-sm text-gray-400">Auto (5 años, sin reventa)</p>
          <p className="text-2xl font-bold text-blue-400">
            {fmt(totalCarProjection)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Valor reventa estimado: ~{fmt(carPrice * 0.5)}
          </p>
          <p className="text-xs text-green-400">
            Costo neto: ~{fmt(netCost)}
          </p>
        </div>
      </div>
      <div className="mt-4 bg-gray-800/50 rounded-xl p-3 text-center">
        <p className="text-sm text-gray-400">
          Diferencia a 5 años:{" "}
          <span
            className={`font-bold ${
              totalUberProjection > totalCarProjection
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {totalUberProjection > totalCarProjection
              ? `Ahorras ${fmt(totalUberProjection - totalCarProjection)} con auto`
              : `Ahorras ${fmt(totalCarProjection - totalUberProjection)} con Uber`}
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Con reventa:{" "}
          <span
            className={`font-bold ${
              totalUberProjection > netCost ? "text-green-400" : "text-red-400"
            }`}
          >
            {totalUberProjection > netCost
              ? `Ahorras ${fmt(totalUberProjection - netCost)} con auto`
              : `Ahorras ${fmt(netCost - totalUberProjection)} con Uber`}
          </span>
        </p>
      </div>
    </div>
  );
}
