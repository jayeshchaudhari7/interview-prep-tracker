import {
  Bell,
  Settings,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router";

function Header() {

  const userName = localStorage.getItem("user_name")

  const navigate = useNavigate();
  return (
    <header className="fixed left-[250px] right-0 top-0 z-30 h-[64px] border-b border-[#e9e2d8] bg-[#fbf8f3]/95 px-8 backdrop-blur">
      <div className="flex h-full items-center justify-between">

        <div className="flex h-9 w-[450px] items-center gap-2 "> </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative text-[#5e5750] transition hover:text-[#c96524]">
            <Bell size={19} />

            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#c96524]" />
          </button>

          {/* Settings */}
          <button className="text-[#5e5750] transition hover:text-[#c96524]"
          onClick={() => navigate("/settings")}>

            <Settings size={19} />
          </button>

          <div className="h-6 w-px bg-[#e5ddd3]" />

          {/* Profile */}
          <div className="flex items-center gap-2.5">
            
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c96524] text-white">
              <UserRound size={17} />
            </div>

            <div className="leading-tight">
              <p className="text-xs font-semibold text-[#29231f]">
                {userName}
              </p>

              <p className="text-[10px] text-[#8b8177]">
                Interview Prep
              </p>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;