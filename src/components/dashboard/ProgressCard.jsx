const ProgressCard = ({
  progress,
  completedQuestions,
  totalQuestions,
}) => {
  return (
    <div className="rounded-xl border border-[#e9e2d8] bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#171310]">
            Preparation Progress
          </h2>

          <p className="mt-1 text-sm text-[#8b8178]">
            Overall completion across your interview questions
          </p>
        </div>

        <span className="hidden rounded-full bg-[#f5f1eb] px-3 py-1.5 text-xs text-[#514941] sm:block">
          Interview Prep
        </span>
      </div>

      {/* Progress */}
      <div className="mt-7 rounded-xl bg-[#faf6f1] p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-medium text-[#c96524]">
              {progress}%
            </span>

            <span className="text-sm text-[#8b8178]">
              overall completion
            </span>
          </div>

          <p className="text-sm font-medium text-[#514941]">
            {completedQuestions} of {totalQuestions} questions completed
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e7dfd6]">
          <div
            className="h-full rounded-full bg-[#c96524] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-4 flex justify-between text-xs text-[#8b8178]">
          <span>
            {totalQuestions === 0
              ? "Add questions to start tracking"
              : "Keep going"}
          </span>

          <span>
            {completedQuestions} completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;