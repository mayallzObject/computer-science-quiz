import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

//? Components
import QuestionCard from "./QuestionCard"

//? Store 
import { addScore } from "../../store/user/actions"
import { selectUser } from "../../store/user/selectors"
import { selectQuestion } from "../../store/questions/selectors"
import { fetchQuestions } from "../../store/questions/actions"

//? Types
import { AnswerObject, ID, QuestionsState } from "./types"

import { Button, Box, Grid, makeStyles } from '@material-ui/core'



export const useStyles = makeStyles({
    table: {
        minWidth: 500,
        margin: 100,
    },
    button: {
        marginLeft: 400,
    }

})


const Questions: React.FC = () => {
    const classes = useStyles()
    const [TOTAL_QUESTIONS] = useState(10)
    const [questions, setQuestions] = useState<QuestionsState[]>([])
    const [number, setNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [id, setID] = useState<ID>(null)

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

        setScore(0)
        setUserAnswers([])
        setNumber(0)
    }

    const checkAnswer = (e: any) => {

        if (!gameOver) {

            const answer = e.currentTarget.value
            const correct = someQuestions[number].correct_answer === answer

            if (correct) setScore((prev) => prev + 1);
            const answerObject = {
                question: someQuestions[number].question,
                answer,
                correct,
                correctAnswer: someQuestions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        // Move on to the next question if not the last question
        const nextQ = number + 1;

        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);


            //call the funciton here, which will pass the score and the user
        } else {
            setNumber(nextQ);
        }
    }

    const submitScore = () => {
        dispatch(addScore(score, id))
        setNumber(0)
    }




    return (
        <Grid className={classes.table} container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
                {
                    gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                        <Button onClick={startTrivia}>
                            Start New Game
                        </Button>
                    ) : null
                }
                {!gameOver ? <Box className='score'>Score: {score}</Box> : null}
                <Grid item xs={12} sm={6}>
                    {
                        !gameOver && (
                            <QuestionCard
                                questionNr={number + 1}
                                totalQuestions={TOTAL_QUESTIONS}
                                question={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={userAnswers ? userAnswers[number] : undefined}
                                callback={checkAnswer}
                            />
                        )
                    }

                    {
                        !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                            <Button onClick={nextQuestion}>
                                Next Question
                            </Button>
                        ) : null
                    }
                    <Box className={classes.button}>
                        {
                            number > 0 && userAnswers.length === TOTAL_QUESTIONS ? (
                                <Button onClick={submitScore}>
                                    Submit Score
                                </Button>
                            ) : null
                        }
                    </Box>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Questions

