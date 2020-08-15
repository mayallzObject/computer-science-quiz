import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestions } from "../../store/questions/actions"

import { selectQuestion } from "../../store/questions/selectors"
import { selectUser } from "../../store/user/selectors"

import QuestionCard from "./QuestionCard"

import { addScore } from "../../store/user/actions"






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
    incorrect_answers: string[];
    question: string;
    type: string;

};

type ID = number | any;

export type QuestionsState = Question & { answers: string[] };

const Card: React.FC = () => {



    const [TOTAL_QUESTIONS] = useState(10);
    const [questions, setQuestions] = useState<QuestionsState[]>([])

    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

    const [id, setID] = useState<ID>(null);





    const dispatch = useDispatch()
    const someUser = useSelector(selectUser)
    const someQuestions = useSelector(selectQuestion)

    useEffect(() => {

        dispatch(fetchQuestions())
        setID(someUser.id)
    }, [dispatch, someUser, id])



    const startTrivia = async () => {
        setGameOver(false);


        setQuestions(someQuestions)

        setScore(0);
        setUserAnswers([]);
        setNumber(0);
    };


    const checkAnswer = (e: any) => {
        if (!gameOver) {
            // User's answer
            const answer = e.currentTarget.value;
            // Check answer against correct answer
            const correct = someQuestions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore((prev) => prev + 1);
            // Save the answer in the array for user answers
            const answerObject = {
                question: someQuestions[number].question,
                answer,
                correct,
                correctAnswer: someQuestions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };



    const nextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQ = number + 1;

        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);


            //call the funciton here, which will pass the score and the user
        } else {
            setNumber(nextQ);
        }
    };


    const submitScore = () => {
        dispatch(addScore(score, id))
        setNumber(0)
    }




    return <>


        <div>
            <h1>REACT QUIZ</h1>

            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='start' onClick={startTrivia}>
                    Start
                </button>
            ) : null}

            {!gameOver ? <p className='score'>Score: {score}</p> : null}

            {!gameOver && (
                <QuestionCard
                    questionNr={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}

            {!gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                <button className='next' onClick={nextQuestion}>
                    Next Question
                </button>
            ) : null}

            {number > 0 && userAnswers.length === TOTAL_QUESTIONS ? (
                <button className='start' onClick={submitScore}>
                    Submit Score
                </button>
            ) : null}



        </div>


    </>
}

export default Card

