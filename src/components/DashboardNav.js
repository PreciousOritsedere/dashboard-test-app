import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import Dashboard from "../../public/assets/icons/dashboard.svg";
import Transaction from "../../public/assets/icons/transaction.svg";
import Card from "../../public/assets/icons/card-transfer.svg";
import Wallet from "../../public/assets/icons/wallet.svg";
import Notification from "../../public/assets/icons/notifications.svg";
import DarkMode from "../../public/assets/icons/dark-mode.svg";
import Privacy from "../../public/assets/icons/privacy-tips.svg";
import Support from "../../public/assets/icons/support.svg";
import Logout from "../../public/assets/icons/logout.svg";

export default function DashboardNav() {
  return (
    <main className="max-w-[260px] w-full h-full fixed top-0 left-0 flex flex-col gap-12 border border-gray-400 bg-[#00B02D] text-sm">
      <section>
        <div className="flex items-center justify-center py-2.5 px-5 border-b border-gray-400">
          <Image src={Logo} alt="logo" />
        </div>

        <section className="flex flex-col gap-4 p-5">
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Dashboard} alt="dashboard icon" />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Transaction} alt="dashboard icon" />
            <p>Transactions</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Card} alt="dashboard icon" />
            <p>Card Activities</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Wallet} alt="dashboard icon" />
            <p>My Wallet</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Notification} alt="dashboard icon" />
            <p>Notifications</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 p-5">
          <h3>Preferences</h3>

          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={DarkMode} alt="dashboard icon" />
            <p>Dark Mode</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Privacy} alt="dashboard icon" />
            <p>Privacy</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 p-5">
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Support} alt="dashboard icon" />
            <p>Support</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Logout} alt="dashboard icon" />
            <p>Logout</p>
          </div>
        </section>
      </section>
    </main>
  );
}
