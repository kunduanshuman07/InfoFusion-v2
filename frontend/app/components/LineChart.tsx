
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
const LineChart = () => {
  const chartOptions = {
    maintainAspectRatio: false, // Allow chart to be resized
    responsive: true,
  };
  return (
    <div className="m-auto" style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Line
        className="bg-[#ffffff] shadow-md rounded-lg p-2"
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
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
