import {
    Code2,
    LayoutDashboard,
    ListChecks,
} from "lucide-react";
import { NavLink } from "react-router";


function Sidebar() {


    return (
        <aside className="fixed left-0 top-0 z-40 flex h-screen w-[250px] flex-col border-r border-[#e9e2d8] bg-[#f8f4ee] px-4 py-6 ">

            {/* Logo */}
            <div className="mb-10 flex items-center gap-3 px-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c96524] text-white">
                    <Code2 size={19} strokeWidth={2.5} />
                </div>

                <div>
                    <h1 className="text-[17px] font-semibold tracking-[-0.3px] text-[#29231f]">
                        Interview Tracker
                    </h1>

                    <p className="text-[10px] uppercase tracking-[1px] text-[#8b8177]">
                        Engineering
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive
                            ? "text-[#c96524]"
                            : "text-[#6f665e] hover:bg-[#f4eee7] hover:text-[#c96524]"
                        }`
                    }
                >
                    <LayoutDashboard size={18} />
                    Overview
                </NavLink>

                <NavLink
                    to="/question-tracker"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${isActive
                            ? "border border-[#29231f] bg-[#f9f6f1] text-[#5e5750]"
                            : "text-[#6f665e] hover:bg-[#f4eee7] hover:text-[#c96524]"
                        }`
                    }
                >
                    <ListChecks size={18}/>
                    Question Tracker
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;