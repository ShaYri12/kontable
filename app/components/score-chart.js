"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
};

const data = {
  labels: ["Declarations", "Flechages", "Temps moyen par declaration"],
  datasets: [
    {
      data: [128, 118, 68],
      backgroundColor: "#3b82f6",
      borderRadius: 4,
    },
  ],
};

export function ScoreChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Score</h3>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-2xl font-semibold">128</div>
              <div className="text-sm text-gray-500">Declarations</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">118</div>
              <div className="text-sm text-gray-500">Flechages</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">~1:08</div>
              <div className="text-sm text-gray-500">
                Temps moyen par declaration
              </div>
            </div>
          </div>
        </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option>Last 30 days</option>
        </select>
      </div>
      <Bar options={options} data={data} height={200} />
    </div>
  );
}
