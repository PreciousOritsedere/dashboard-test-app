import Image from "next/image";
import Card from "../../public/assets/debit-card.png";
import Arrow from "../../public/assets/icons/down-arrow.svg";
import Add from "../../public/assets/icons/add.svg";

export default function Wallet() {
  // Array with transaction data
  const transactions = [
    { name: "Water Bill", amount: -226 },
    { name: "Gym & Fitness", amount: -50 },
    { name: "Car Purchase", amount: -196632 },
    { name: "Home Rent", amount: -50 },
    { name: "Bank Deposit", amount: 995074 },
  ];

  return (
    <main className="w-full flex flex-col gap-5 py-6 px-5 mt-2.5 border border-gray-200 rounded-xl bg-neutral-100 text-slate-600 text-xs">
      <section className="flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <h3 className="font-bold text-xl text-black">My Wallet</h3>
            <Image src={Arrow} alt="" />
          </div>
          <div className="flex items-center gap-1.5 py-1 px-2 border border-gray-400 rounded">
            <Image src={Add} alt="add" />
            <p>Add Card</p>
          </div>
        </div>

        <div className="w-full h-[240px] rounded-md">
          <Image src={Card} alt="card" className="w-full h-full rounded-xl" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-bold text-xl text-black">Card Activities</h3>

          <div className="flex items-center gap-1.5 py-1 px-2 border border-emerald-500 rounded bg-emerald-200 text-green-600">
            <p>See All</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 ${index !== transactions.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <p>{transaction.name}</p>
              <p style={{ color: transaction.amount < 0 ? "red" : "#00B02D" }}>
                {/* Format the amount to include a comma for thousands */}
                {transaction.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
