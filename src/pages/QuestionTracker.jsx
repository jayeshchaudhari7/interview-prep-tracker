import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";


import {
  getQuestions,
  saveQuestions,
} from "../utils/utils";
import FilterBar from "../components/questions/FilterBar";
import SearchBar from "../components/questions/SearchBar";
import QuestionCard from "../components/questions/QuestionCard";
import EmptyState from "../components/questions/EmptyState";
import AddQuestionModal from "../components/questions/AddQuestionModal";

const QuestionTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingQuestion, setEditingQuestion] = useState(null);

  const [questions, setQuestions] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All Categories");

  const [status, setStatus] =
    useState("All Status");

  const [difficulty, setDifficulty] =
    useState("All Difficulties");

  // Load questions
  useEffect(() => {
    const storedQuestions = getQuestions();

    setQuestions(storedQuestions);
    setIsLoaded(true);
  }, []);

  // Save questions
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveQuestions(questions);
  }, [questions, isLoaded]);

  // Add or update question
  const handleSaveQuestion = (questionData) => {
    if (editingQuestion) {
      
      setQuestions((previousQuestions) =>
        previousQuestions.map((question) =>
          question.id === editingQuestion.id
            ? {
                ...question,
                ...questionData,
              }
            : question
        )
      );

      setEditingQuestion(null);
      return;
    }

    const newQuestion = {
      id: Date.now(),
      ...questionData,
    };

    setQuestions((previousQuestions) => [
      ...previousQuestions,
      newQuestion,
    ]);
  };

  // Edit
  const handleEditQuestion = (question) => { 
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  // Delete
  const handleDeleteQuestion = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (!confirmed) {
      return;
    }

    setQuestions((previousQuestions) =>
      previousQuestions.filter(
        (question) => question.id !== id
      )
    );
  };

  // Filtering
  const filteredQuestions = useMemo(() => {
  return questions.filter((question) => {
    return (
      question.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All Categories" || question.category === category) &&
      (status === "All Status" || question.status === status) &&
      (difficulty === "All Difficulties" || question.difficulty === difficulty)
    );
  });
}, [questions, search, category, status, difficulty]);

  const openAddModal = () => {
    setEditingQuestion(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingQuestion(null);
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#171310]">
            Question Tracker
          </h1>

          <p className="mt-2 text-sm text-[#8b8178] sm:text-base">
            Track and organize your interview preparation questions.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c96524] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#b7581e]"
        >
          <Plus size={18} />
          Add Question
        </button>
      </div>

      {/* Search + Filters */}
      <div className="mb-6 rounded-xl border border-[#e9e2d8] bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <FilterBar
            category={category}
            status={status}
            difficulty={difficulty}
            onCategoryChange={setCategory}
            onStatusChange={setStatus}
            onDifficultyChange={setDifficulty}
          />
        </div>
      </div>

      {/* Count */}
      <div className="mb-4">
        <p className="text-sm text-[#8b8178]">
          Showing{" "}
          <span className="font-medium text-[#29231f]">
            {filteredQuestions.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-[#29231f]">
            {questions.length}
          </span>{" "}
          questions
        </p>
      </div>

      {/* Questions */}
      {filteredQuestions.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              title={question.title}
              category={question.category}
              difficulty={question.difficulty}
              status={question.status}
              onEdit={() => handleEditQuestion(question)}
              onDelete={() =>
                handleDeleteQuestion(question.id)
              }
            />
          ))}
        </div>
      ) : questions.length === 0 ? (
        <EmptyState onAddQuestion={openAddModal} />
      ) : (
        <div className="rounded-xl border border-dashed border-[#dcd3c9] bg-white px-6 py-16 text-center">
          <h3 className="text-lg font-semibold text-[#29231f]">
            No questions found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8b8178]">
            Try changing your search or filter selections.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setCategory("All Categories");
              setStatus("All Status");
              setDifficulty("All Difficulties");
            }}
            className="mt-5 rounded-lg border border-[#e4ddd4] px-4 py-2.5 text-sm font-medium text-[#5e5750] transition hover:bg-[#f7f3ed]"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Modal */}
      <AddQuestionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddQuestion={handleSaveQuestion}
        editingQuestion={editingQuestion}
      />
    </div>
  );
};

export default QuestionTracker;