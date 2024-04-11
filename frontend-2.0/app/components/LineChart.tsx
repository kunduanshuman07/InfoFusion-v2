"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
ChartJS.register(CategoryScale, /* ... */)

interface LineChartProps {
  graph: any;
}

const LineChart: React.FC<LineChartProps> = ({ graph }) => {
  const ratingLabel = [];
  const n = graph?.length;
  for (let i = 0; i < n; i++) {
    ratingLabel.push("");
  }
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="mt-2 w-full">
      <Line
        className="bg-[#ffffff] shadow-md rounded-lg p-5"
        data={{
          labels: ratingLabel,
          datasets: [
            {
              data: graph,
              backgroundColor: "#2dd4bf",
              showLine: true,
              stepped: false,
              borderJoinStyle: 'round',
              borderColor: "#2dd4bf",
              borderCapStyle: "round",
            },
          ],

        }}
        options={chartOptions}
      />
    </div>
  );
};
export default LineChart;
