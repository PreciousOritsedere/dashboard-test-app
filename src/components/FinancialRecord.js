import Image from "next/image";
import Calendar from "../../public/assets/icons/calendar.svg";
import Down from "../../public/assets/icons/graph-line-down.svg";
import Up from "../../public/assets/icons/graph-line-up.svg";
import Arrow from "../../public/assets/icons/down-arrow.svg";

export default function FinancialRecord() {
  const financialData = [
    {
      title: "Total Balance",
      amount: "$25000.00",
      trend: "up",
      trendPercentage: "31%",
      trendText: "from last month",
      icon: Up,
      color: "#00B02D",
    },
    {
      title: "Total Spent",
      amount: "$19000.00",
      trend: "down",
      trendPercentage: "2%",
      trendText: "from last month",
      icon: Down,
      color: "#FF2400",
    },
    {
      title: "Total Saving",
      amount: "$16000.00",
      trend: "up",
      trendPercentage: "15%",
      trendText: "from last month",
      icon: Up,
      color: "#00B02D",
    },
  ];

  return (
    <main className="flex flex-col gap-5 pt-2.5 text-slate-400 text-xs">
      <section className="w-full flex items-center justify-between">
        <p>Financial Record</p>

        <div className="flex items-center gap-1.5 px-1 border border-gray-400 rounded-md">
          <Image src={Calendar} alt="calendar" />
          <p>Last 30 Days</p>
          <Image src={Arrow} alt="arrow" />
        </div>
      </section>

      <section className="w-full flex items-center gap-5">
        {financialData.map((data, index) => (
          <div
            key={index}
            className=" w-full flex flex-col gap-3 p-4 border border-gray-200 rounded-xl"
          >
            <p>{data.title}</p>
            <h3 className="font-bold text-base text-black">{data.amount}</h3>
            <div className="flex items-center gap-1 text-xs">
              <Image src={data.icon} alt="graph up" />
              <span style={{ color: data.color }}>{data.trendPercentage}</span>
              <p>{data.trendText}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
