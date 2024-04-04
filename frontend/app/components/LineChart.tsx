
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
  const n = graph.length; 
  for (let i = 0; i < n; i++) {
    ratingLabel.push("");
  }
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="m-auto" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Line
        className="bg-[#ffffff] shadow-md rounded-lg p-2"
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
