import Image from "next/image";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import FinancialRecord from "@/components/FinancialRecord";
import Statistics from "@/components/Statistics";
import Transactions from "@/components/Transactions";
import Wallet from "@/components/Wallet";
import AccountRevenue from "@/components/AccountRevenue";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col gap-[100px] ">
        <Header />

        <section className="w-full flex-col gap-[30px] py-4 px-6 overflow-y-scroll mt-10 md:flex-row">
          <div className="w-full flex flex-col gap-5">
            <FinancialRecord />
            <Statistics />
            <Transactions />
          </div>

          <div className="max-w-sm w-full flex flex-col gap-5">
            <Wallet />
            <AccountRevenue />
          </div>
        </section>
      </main>
    </Layout>
  );
}
