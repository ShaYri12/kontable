import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ chartNumbers }) => {
  const data = {
    datasets: [
      {
        data: chartNumbers,
        backgroundColor: ["#FFC7F5", "#CAFFCC", "#A3DEFF"], // Segment colors
        borderColor: "#ffffff", // White border to create gaps
        borderWidth: 3, // Width of the gaps
        cutout: "70%", // Size of the inner circle
        borderRadius: 6.72, // Rounds corners of the segments
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills its container
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `${context.raw}%`; // Show only percentage
          },
        },
        titleFont: {
          size: 0, // Remove the title font (if any)
        },
        bodyFont: {
          size: 14, // Adjust tooltip font size
          weight: "600",
        },
        displayColors: false, // Disable tooltip colors
        backgroundColor: "#fff", // Tooltip background
        bodyColor: "#000", // Tooltip text color
        borderColor: "#ccc", // Tooltip border
        borderWidth: 1,
      },
    },
    layout: {
      padding: 0, // Remove extra padding
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full mx-auto">
      {/* Central Icon */}
      <div className="absolute z-[0] flex items-center justify-center w-[90px] h-[90px] bg-[#E8EFFF] rounded-full shadow">
        <img
          src="/assets/paper-icon.png" // Replace with your icon path
          alt="Center Icon"
          className="w-[39.17px] h-[39.17px]"
        />
      </div>

      {/* Doughnut Chart */}
      <div className="w-full h-full relative z-[2]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
