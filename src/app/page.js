import CalculatorGraph from "@/components/CalculatorGraph";
import HistoricalChart from "@/components/HistoricalChart";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HistoricalChart />
      <CalculatorGraph />
    </div>
  );
}
