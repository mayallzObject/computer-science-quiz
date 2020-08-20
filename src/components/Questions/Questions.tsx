// QuestionCard 
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// Components
import QuestionCard from "./QuestionCard"

// Redux store 
import { addScore, updateScoree } from "../../store/user/actions"
import { selectUser } from "../../store/user/selectors"
import { selectQuestion } from "../../store/questions/selectors"
import { fetchQuestions } from "../../store/questions/actions"

// TypesScript types
import { AnswerObject, ID, QuestionsState } from "./types"
import { Button, Box, Icon } from '@material-ui/core'
import { OnClick } from "../../types/eventType"

//MUI components
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }),
);



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
        setID(someUser.id)
        dispatch(fetchQuestions())

    }, [dispatch, someUser, id])

    const startTrivia = async () => {
        setGameOver(false)
        setQuestions(someQuestions)
        setScore(0)
        setUserAnswers([])
        setNumber(0)

    }

    const checkAnswer = (e: OnClick) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            console.log(someQuestions)
            const correct = someQuestions[number].correct_answer === answer

            if (correct) {
                console.log('correct')
                setScore((prev) => prev + 1)
            };
            const answerObject = {
                question: someQuestions[number].question,
                answer,
                correct,
                correctAnswer: someQuestions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQ = number + 1
        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQ)
        }
    }

    const submitScore = () => {
        dispatch(addScore(score, id))
        setNumber(0)

        setTimeout(() => {
            dispatch(updateScoree(id))

        }, 1500)
    }

    return (
        <>
            {
                gameOver || userAnswers.length
                    === TOTAL_QUESTIONS ? (
                        <Box mb={4}>
                            <Button variant="outlined"
                                color="primary"
                                startIcon={<PlayArrowOutlinedIcon />}
                                onClick={startTrivia}>
                                Start New Game
                        </Button>
                        </Box>
                    ) : null
            }
            {
                !gameOver ?
                    <div className={classes.root}> Score: {score}</div>
                    : null
            }
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
                !gameOver && userAnswers.length
                    === number + 1 && number
                    !== TOTAL_QUESTIONS - 1 ? (
                        <Box mt={2}>
                            <Button variant="outlined" color="primary" onClick={nextQuestion}>
                                Next Question
                        </Button>
                        </Box>
                    ) : null
            }
            <Box className="primary" mt={2}>
                {
                    number > 0 && userAnswers.length
                        === TOTAL_QUESTIONS ? (
                            <Button variant="outlined" color="secondary"
                                startIcon={<CloudUploadIcon />}
                                onClick={submitScore}>

                                Submit Score
                            </Button>
                        ) : null
                }
            </Box>
        </>
    )
}

export default Questions

