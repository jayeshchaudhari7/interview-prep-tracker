import { Plus } from "lucide-react";

const EmptyState = ({ onAddQuestion }) => {
  return (
    <div className="rounded-xl border border-dashed border-[#dcd3c9] bg-white px-6 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e5] text-[#c96524]">
        <Plus size={22} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#29231f]">
        No questions yet
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8b8178]">
        Start building your interview preparation tracker by adding
        your first question.
      </p>

      <button
        onClick={onAddQuestion}
        className="mt-6 rounded-lg bg-[#c96524] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#b7581e]"
      >
        Add Your First Question
      </button>
    </div>
  );
};

export default EmptyState;