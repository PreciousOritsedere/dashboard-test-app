import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Statistics() {
  // Dummy Data for the chart
  const data = {
    // X-axis labels for the data points
    labels: [
      "12 Jan",
      "15 Jan",
      "18 Jan",
      "22 Jan",
      "24 Jan",
      "28 Jan",
      "30 Jan",
      "05 Feb",
      "10 Feb",
      "14 Feb",
    ],
    datasets: [
      {
        // Dummy data for deposits
        label: "Deposit",
        data: [
          15000, 20000, 25000, 30000, 40000, 35000, 30000, 40000, 35000, 30000,
        ],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(75,192,192,0.2)", // Color of the fill
        borderColor: "rgba(75,192,192,1)", // Color of the line
        tension: 0.4, // Smoothes the line curve
      },
      {
        // Dataset for money spent
        label: "Spent",
        data: [5000, 10000, 15000, 5000, 7000, 10000, 5000, 7000, 10000, 5000], // Dummy data for money spent
        fill: false, // No fill under the line
        borderColor: "rgba(255, 99, 132, 1)", // Color of the line
        tension: 0.4, // Smoothes the line curve
        borderDash: [5, 5], // Creates dashes in the line (dotted line effect)
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        // Configuration for the X-axis
        grid: {
          display: false, // Disable grid lines for the X-axis
        },
      },
      y: {
        // Configuration for the Y-axis
        grid: {
          borderDash: [5, 5], // Creates dashed lines for the Y-axis grid
        },
        beginAtZero: true, // Ensures the Y-axis starts at 0
      },
    },
  };

  return (
    <main className="flex flex-col gap-5 pt-2.5 text-black text-base font-bold">
      <p>Statistics</p>
      <div className="border border-gray-200 rounded-xl p-4 bg-neutral-100">
        <Line data={data} options={options} />
      </div>
    </main>
  );
}
