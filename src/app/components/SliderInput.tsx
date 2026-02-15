"use client";

import { Slider } from "@mui/material";

interface SliderInputProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  color?: string;
  formatValue?: (value: number) => string;
}

export default function SliderInput({
  label,
  min,
  max,
  step,
  value,
  onChange,
  color = "#3b82f6",
  formatValue,
}: SliderInputProps) {
  return (
    <div>
      <label className="text-xs text-gray-400">{label}</label>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(_, v) => onChange(v as number)}
        sx={{ color }}
        size="small"
      />
      {formatValue && (
        <p className="text-xs text-gray-300">{formatValue(value)}</p>
      )}
    </div>
  );
}
