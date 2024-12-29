import { PriceRange as PriceRangeType } from "@/types/filters";
import { useState, useEffect } from "react";
import { Slider } from "antd";
import { useDebounce } from "@/hooks/useDebounce";

interface PriceRangeProps {
  initialValue: PriceRangeType;
  onChange: (range: PriceRangeType) => void;
}

export default function PriceRange({
  initialValue,
  onChange,
}: PriceRangeProps) {
  const [localPriceRange, setLocalPriceRange] = useState<PriceRangeType>({
    min: initialValue.min,
    max: initialValue.max,
  });

  const debouncedPriceRange = useDebounce(localPriceRange, 500);

  const handleSliderChange = (values: number[]) => {
    const newRange = {
      min: values[0],
      max: values[1],
    };
    setLocalPriceRange(newRange);
  };

  useEffect(() => {
    onChange(debouncedPriceRange);
  }, [debouncedPriceRange]);

  return (
    <div>
      <label className="block header-16-medium text-white mb-4">PRICE</label>
      <Slider
        className="custom-slider"
        range
        min={0.01}
        max={200}
        value={[localPriceRange.min || 0.01, localPriceRange.max || 200]}
        onChange={handleSliderChange}
        tooltip={{
          formatter: (value) => `${value} ETH`,
          className: "text-red !bg-gradient",
        }}
      />
      <div className="flex justify-between mt-2 header-16-medium text-[#D6D6D6]">
        <span>{localPriceRange.min || 0.01} ETH</span>
        <span>{localPriceRange.max || 200} ETH</span>
      </div>
    </div>
  );
}
