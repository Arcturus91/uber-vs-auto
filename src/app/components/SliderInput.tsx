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
  color = "#0EA5E9",
  formatValue,
}: SliderInputProps) {
  return (
    <div className="py-1">
      <div className="flex items-center justify-between mb-0.5">
        <label className="label-text" id={`slider-${label}`}>
          {label}
        </label>
        {formatValue && (
          <span className="value-text">{formatValue(value)}</span>
        )}
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(_, v) => onChange(v as number)}
        sx={{ color }}
        size="small"
        aria-labelledby={`slider-${label}`}
      />
    </div>
  );
}
