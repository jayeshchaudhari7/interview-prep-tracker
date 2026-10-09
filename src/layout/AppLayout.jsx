import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ed]">
      <Sidebar />

      <Header />

      <main className="ml-0 pt-[76px] lg:ml-[250px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;