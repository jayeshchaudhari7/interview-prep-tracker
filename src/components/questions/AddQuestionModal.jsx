import { useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

const AddQuestionModal = ({isOpen,onClose,onAddQuestion,editingQuestion,}) => {
  
  const { register,handleSubmit,reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  useEffect(() => {
    if (editingQuestion) {
      reset({
        title: editingQuestion.title,
        category: editingQuestion.category,
        difficulty: editingQuestion.difficulty,
        status: editingQuestion.status,
      });
    } else {
      reset({
        title: "",
        category: "DSA",
        difficulty: "Easy",
        status: "Pending",
      });
    }
  }, [editingQuestion, reset]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data) => {
    onAddQuestion(data);

    reset();
    onClose();
  };

  const isEditing = Boolean(editingQuestion);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">

      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#eee7df] px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-[#29231f]">
              {isEditing ? "Edit Question" : "Add Question"}
            </h2>

            <p className="mt-1 text-xs text-[#8b8178]">
              {isEditing
                ? "Update your interview question."
                : "Add a question to your interview preparation tracker."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[#8b8178] transition hover:bg-[#f5f1eb] hover:text-[#29231f]"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6"
        >

          {/* Question */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#4b433d]">
              Question
            </label>

            <input
              type="text"
              placeholder="e.g. Explain the two pointer technique"
              {...register("title", {
                required: "Question is required",
                minLength: {
                  value: 3,
                  message:
                    "Question must be at least 3 characters",
                },
              })}
              className={`w-full rounded-lg border bg-[#fcfaf7] px-3 py-2.5 text-sm text-[#29231f] outline-none transition ${
                errors.title
                  ? "border-red-400"
                  : "border-[#e4ddd4] focus:border-[#c96524]"
              }`}
            />

            {errors.title && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#4b433d]">
              Category
            </label>

            <select
              {...register("category", {
                required: "Category is required",
              })}
              className="w-full rounded-lg border border-[#e4ddd4] bg-[#fcfaf7] px-3 py-2.5 text-sm text-[#29231f] outline-none focus:border-[#c96524]"
            >
              <option value="DSA">DSA</option>
              <option value="Git">Git</option>
              <option value="Technical">Technical</option>
              <option value="Machine Coding">
                Machine Coding
              </option>
            </select>
          </div>

          {/* Difficulty */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#4b433d]">
              Difficulty
            </label>

            <select
              {...register("difficulty", {
                required: "Difficulty is required",
              })}
              className="w-full rounded-lg border border-[#e4ddd4] bg-[#fcfaf7] px-3 py-2.5 text-sm text-[#29231f] outline-none focus:border-[#c96524]"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Status */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#4b433d]">
              Status
            </label>

            <select
              {...register("status", {
                required: "Status is required",
              })}
              className="w-full rounded-lg border border-[#e4ddd4] bg-[#fcfaf7] px-3 py-2.5 text-sm text-[#29231f] outline-none focus:border-[#c96524]"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex justify-end gap-3 border-t border-[#eee7df] pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#e4ddd4] px-4 py-2.5 text-sm font-medium text-[#5e5750] transition hover:bg-[#f7f3ed]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#c96524] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#b7581e]"
            >
              {isEditing ? "Save Changes" : "Add Question"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;