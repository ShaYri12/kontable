"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Lorem Ipsum", "Lorem", "Dolor Sit"],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ["#9333ea", "#3b82f6", "#22c55e"],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  cutout: "70%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 20,
        usePointStyle: true,
      },
    },
  },
};

export function CategoriesChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Categories</h3>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>
      <div className="relative">
        <Doughnut options={options} data={data} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-semibold">60%</div>
            <div className="text-sm text-gray-500">Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
