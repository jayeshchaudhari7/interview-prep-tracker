
import {
  Code2,
  CheckCircle2,
  MessageSquare,
  Monitor,
} from "lucide-react";

const StatsGrid = ({
  totalQuestions = 0,
  dsaCompleted = 0,
  interviewCompleted = 0,
  machineCodingCompleted = 0,
}) => {
  const stats = [
    {
      title: "Total Questions",
      value: totalQuestions,
      subtitle: "Questions tracked",
      footerLeft: "All categories",
      footerRight: "Total",
      icon: Code2,
    },
    {
      title: "DSA Completed",
      value: dsaCompleted,
      subtitle: "completed",
      footerLeft: `${dsaCompleted} solved`,
      footerRight: "DSA",
      icon: CheckCircle2,
    },
    {
      title: "Interview Completed",
      value: interviewCompleted,
      subtitle: "completed",
      footerLeft: `${interviewCompleted} completed`,
      footerRight: "Technical + Git",
      icon: MessageSquare,
    },
    {
      title: "Machine Coding",
      value: machineCodingCompleted,
      subtitle: "completed",
      footerLeft: `${machineCodingCompleted} completed`,
      footerRight: "Projects",
      icon: Monitor,
    },
  ];

  const StatCard = ({
    title,
    value,
    subtitle,
    footerLeft,
    footerRight,
    icon: Icon,
  }) => {
    return (
      <div className="rounded-xl border border-[#e9e2d8] bg-white p-6 shadow-sm">
        {/* Top */}
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-[#514941]">
            {title}
          </p>

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0e5] text-[#c96524]">
            <Icon size={19} />
          </div>
        </div>

        {/* Value */}
        <div className="mt-8 flex items-baseline gap-2">
          <span className="text-4xl font-medium tracking-tight text-[#171310]">
            {value}
          </span>

          {subtitle && (
            <span className="text-sm text-[#8b8178]">
              {subtitle}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between text-xs">
          <span className="rounded-full bg-[#f5f1eb] px-3 py-1.5 text-[#514941]">
            {footerLeft}
          </span>

          <span className="text-[#8b8178]">
            {footerRight}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;