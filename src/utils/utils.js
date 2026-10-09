const STORAGE_KEY = "interview_questions";

export const getQuestions = () => {
  const questions = localStorage.getItem(STORAGE_KEY);

  return questions ? JSON.parse(questions) : [];
};

export const saveQuestions = (questions) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
};