import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function AccountRevenue() {
  const data = {
    labels: ["Deposit", "Spent", "Spent"], // The labels for each section
    datasets: [
      {
        label: "Account Revenue",
        data: [40000, 7000, 7000], // The data points for each section
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)", // color for Deposit
          "rgba(255, 99, 132, 0.5)", // color for Spent
          "rgba(54, 162, 235, 0.5)", // color for Spent
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // border color for Deposit
          "rgba(255, 99, 132, 1)", // border color for Spent
          "rgba(54, 162, 235, 1)", // border color for Spent
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full mx-auto py-5 px-8 border border-gray-200 rounded-xl bg-neutral-100 text-slate-600">
      <h3 className="text-base font-bold text-black">Account Revenue</h3>
      <Pie data={data} />
      <div className="text-center">Out of 100%</div>
    </div>
  );
}
