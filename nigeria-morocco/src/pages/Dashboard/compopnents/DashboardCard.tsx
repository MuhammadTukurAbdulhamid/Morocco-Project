import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface DashboardCardProps {
  color: string;
  value: string | number;
  label: string;
  label2?: string;
  value2?: string | number;
}

export default function DashboardCard({
  color,
  value = "",
  label = "",
  label2 = "",
  value2 = "",
}: DashboardCardProps) {
  // Extract numeric value from string (handles cases like "₦123,456" or "123")
  const extractNumber = (val: string | number): number => {
    if (typeof val === "number") return val;
    if (!val) return 0;
    // Remove currency symbols, commas, and extract number
    const numStr = val.toString().replace(/[₦$€£,\s]/g, "");
    const num = parseFloat(numStr);
    return isNaN(num) ? 0 : num;
  };

  // Check if value has currency symbol
  const hasCurrency =
    typeof value === "string" &&
    (value.includes("₦") ||
      value.includes("$") ||
      value.includes("€") ||
      value.includes("£"));
  const currencySymbol = hasCurrency
    ? value.toString().match(/[₦$€£]/)?.[0] || ""
    : "";

  const numericValue = extractNumber(value);
  const numericValue2 = value2 ? extractNumber(value2) : 0;

  const { count, ref } = useAnimatedCounter(numericValue);
  const { count: count2, ref: ref2 } = useAnimatedCounter(numericValue2, {
    startOnView: !!value2,
  });

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US");
  };

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: color,
      }}
      className="h-[80px] w-full md:w-[227px] flex  px-4 rounded text-white items-center justify-between"
    >
      <div>
        <h1 className="font-bold">
          {hasCurrency
            ? `${currencySymbol}${formatNumber(count)}`
            : formatNumber(count)}
        </h1>
        <p className="text-[12px]">{label}</p>
      </div>
      {label2 && value2 && (
        <div ref={ref2}>
          <h1 className="font-bold">{formatNumber(count2)}</h1>
          <p className="text-[12px]">{label2}</p>
        </div>
      )}
    </div>
  );
}
