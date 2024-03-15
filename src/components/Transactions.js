import Image from "next/image";
import Dots from "../../public/assets/icons/dots.svg";

export default function Transactions() {
  // Dummy data for the transactions
  const transactionData = [
    {
      name: "Wade Warren",
      date: "Dec 2, 2022, 8:24 AM",
      transactionId: "ASD12344",
      quantity: "$9,846",
      status: "Sending",
    },
    {
      name: "Theresa Webb",
      date: "Dec 2, 2022, 8:24 AM",
      transactionId: "MNB1265",
      quantity: "$6,465",
      status: "Received",
    },
    {
      name: "Devon Lane",
      date: "Dec 2, 2022, 8:24 AM",
      transactionId: "VXC192131",
      quantity: "$8,464",
      status: "Canceled",
    },
  ];

  // Function to determine the status color based on the status text
  const getStatusColor = (status) => {
    switch (status) {
      case "Received":
        return "#00B02D";
      case "Sending":
        return "#FFC100";
      case "Canceled":
        return "red";
      default:
        return "inherit"; // Default color if none of the above
    }
  };
  return (
    <main className="w-full flex flex-col gap-2 border border-gray-200 rounded-xl bg-neutral-100 text-slate-600 text-xs">
      <section className="w-full flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h3 className="font-bold text-xl text-black">Transaction History</h3>
          <p>History of last 3 months</p>
        </div>
        <Image src={Dots} alt="dots" />
      </section>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4">Name</th>
            <th className="p-4">Date</th>
            <th className="p-4">Transaction ID</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-4 text-sm font-bold">{transaction.name}</td>
              <td className="p-4">{transaction.date}</td>
              <td className="p-4">{transaction.transactionId}</td>
              <td className="p-4">{transaction.quantity}</td>

              <td
                className="p-4"
                style={{ color: getStatusColor(transaction.status) }}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
