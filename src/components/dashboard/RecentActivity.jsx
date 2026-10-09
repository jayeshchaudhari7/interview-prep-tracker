import { History } from "lucide-react";

const RecentActivity = () => {
  return (
    <div className="rounded-xl border border-[#e9e2d8] bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#171310]">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-[#8b8178]">
            Your latest preparation updates
          </p>
        </div>

        <History size={20} className="text-[#8b8178]" />
      </div>

      <div className="flex min-h-[180px] items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-medium text-[#c96524]">
            Not created yet
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;