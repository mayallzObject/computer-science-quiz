import React from 'react'
import { Button, Typography, Container } from '@material-ui/core'
import { Props } from "./types"


const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
        <div>
            <Container maxWidth="xl">

                <Typography align="center">
                    Question: {questionNr} / {totalQuestions}
                </Typography>

                <p dangerouslySetInnerHTML={{ __html: question }} />
                {answers.map((answer) => (
                    <div
                        key={answer}>
                        <Button
                            color="primary"
                            variant="contained"
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />

                        </Button>
                    </div>
                ))}

            </Container>
        </div>
    );


export default QuestionCard

