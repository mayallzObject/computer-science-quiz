export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[] | any;
  question: string | any;
  type: string;
};

export type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  callback: any;
  questionNr: number;
  totalQuestions: number;
};

export type ID = number | any;

export type QuestionsState = Question & { answers: string[] };
