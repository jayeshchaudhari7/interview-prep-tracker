import {
  CheckCircle2,
  Circle,
  Clock3,
  Code2,
  GitBranch,
  MessageSquare,
  Monitor,
  Pencil,
  Trash2,
} from "lucide-react";

const QuestionCard = ({
  title,
  category,
  difficulty,
  status,
  onEdit,
  onDelete,
}) => {
  const categoryIcons = {
    DSA: Code2,
    Git: GitBranch,
    Technical: MessageSquare,
    "Machine Coding": Monitor,
  };

  const CategoryIcon = categoryIcons[category] || Code2;

  const statusConfig = {
    Pending: {
      icon: Circle,
      className: "bg-[#f5f1eb] text-[#746b63]",
    },
    "In Progress": {
      icon: Clock3,
      className: "bg-[#fff0e5] text-[#c96524]",
    },
    Completed: {
      icon: CheckCircle2,
      className: "bg-[#edf6ef] text-[#4d7c57]",
    },
  };

  const currentStatus =
    statusConfig[status] || statusConfig.Pending;

  const StatusIcon = currentStatus.icon;

  const difficultyStyles = {
    Easy: "bg-[#edf6ef] text-[#4d7c57]",
    Medium: "bg-[#fff4df] text-[#9a6a20]",
    Hard: "bg-[#fbeceb] text-[#a84d47]",
  };

  return (
    <div className="rounded-xl border border-[#e9e2d8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff0e5] text-[#c96524]">
            <CategoryIcon size={17} />
          </div>

          <span className="text-xs font-medium text-[#756c64]">
            {category}
          </span>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${
            difficultyStyles[difficulty] ||
            "bg-[#f5f1eb] text-[#746b63]"
          }`}
        >
          {difficulty}
        </span>
      </div>

      {/* Question */}
      <h3 className="mt-5 min-h-[48px] text-base font-semibold leading-6 text-[#29231f]">
        {title}
      </h3>

      {/* Status */}
      <div className="mt-5 border-t border-[#eee7df] pt-4">
        <div className="flex items-center justify-between">

          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${currentStatus.className}`}
          >
            <StatusIcon size={14} />
            {status}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onEdit}
              className="rounded-lg p-2 text-[#8b8178] transition hover:bg-[#f5f1eb] hover:text-[#c96524]"
              title="Edit question"
            >
              <Pencil size={15} />
            </button>

            <button
              type="button"
              onClick={onDelete}
              className="rounded-lg p-2 text-[#8b8178] transition hover:bg-red-50 hover:text-red-500"
              title="Delete question"
            >
              <Trash2 size={15} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuestionCard;