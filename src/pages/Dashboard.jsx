import React, { useEffect, useState } from 'react'
import StatsGrid from '../components/dashboard/StatsGrid'
import { getQuestions } from '../utils/utils';
import ProgressCard from '../components/dashboard/ProgressCard';
import RecentActivity from '../components/dashboard/RecentActivity';

const Dashboard = () => {
  const userName = localStorage.getItem("user_name")

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedQuestions = getQuestions();

    setQuestions(storedQuestions);
  }, []);

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter((question) => question.status === "Completed").length;

  const dsaCompleted = questions.filter(
    (question) =>
      question.category === "DSA" &&
      question.status === "Completed"
  ).length;

  const interviewCompleted = questions.filter(
    (question) =>
      (question.category === "Technical" || question.category === "Git") && question.status === "Completed"
  ).length;

  // Machine coding completed
  const machineCodingCompleted = questions.filter(
    (question) =>
      question.category === "Machine Coding" && question.status === "Completed"
  ).length;

  // Overall progress
  const progress =
    totalQuestions === 0
      ? 0
      : Math.round(
        (completedQuestions / totalQuestions) * 100
      );


  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-[#171310]">
              Welcome , {userName} 👋
            </h1>

          </div>

          <p className="mt-2 text-sm text-[#8b8178] sm:text-base">
            Keep pushing your interview preparation. Consistency beats intensity.
          </p>
        </div>

        <div className="rounded-full bg-white px-5 py-3 text-sm shadow-sm">
          <span className="mr-2">🔥</span>

          <span className="font-medium text-[#29231f]">
            Interview Preparation
          </span>
        </div>
      </div>

      {/* Statistics */}
      <StatsGrid
        totalQuestions={totalQuestions}
        dsaCompleted={dsaCompleted}
        interviewCompleted={interviewCompleted}
        machineCodingCompleted={machineCodingCompleted}
      />

      {/* Progress + Activity */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
      <ProgressCard
          progress={progress}
          completedQuestions={completedQuestions}
          totalQuestions={totalQuestions}
        />

        <RecentActivity/>

      </div>
    </div>



  )
}

export default Dashboard