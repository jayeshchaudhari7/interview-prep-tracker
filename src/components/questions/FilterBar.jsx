const FilterBar = ({
  category,
  status,
  difficulty,
  onCategoryChange,
  onStatusChange,
  onDifficultyChange,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Category */}
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-lg border border-[#e4ddd4] bg-white px-4 py-3 text-sm text-[#5e5750] outline-none focus:border-[#c96524]"
      >
        <option value="All Categories">All Categories</option>
        <option value="DSA">DSA</option>
        <option value="Git">Git</option>
        <option value="Technical">Technical</option>
        <option value="Machine Coding">Machine Coding</option>
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        className="rounded-lg border border-[#e4ddd4] bg-white px-4 py-3 text-sm text-[#5e5750] outline-none focus:border-[#c96524]"
      >
        <option value="All Status">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Difficulty */}
      <select
        value={difficulty}
        onChange={(event) => onDifficultyChange(event.target.value)}
        className="rounded-lg border border-[#e4ddd4] bg-white px-4 py-3 text-sm text-[#5e5750] outline-none focus:border-[#c96524]"
      >
        <option value="All Difficulties">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};

export default FilterBar;