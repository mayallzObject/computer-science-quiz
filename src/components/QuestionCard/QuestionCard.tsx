import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Props } from "./types"


const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
        <Grid spacing={5}>
            <Typography align="center">
                Question: {questionNr} / {totalQuestions}
            </Typography>
            {/* <p dangerouslySetInnerHTML={{ __html: question }} /> */}
            <Typography align="center">
                {question}
            </Typography>
            <div>
                {answers.map((answer) => (
                    <Button
                        variant="contained"
                        key={answer}>
                        <Button color="primary"
                            variant="contained"
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}>
                            {/* <span dangerouslySetInnerHTML={{ __html: answer }} /> */}
                            <span>
                                <Typography align="center">
                                    {answers}
                                </Typography>
                            </span>
                        </Button>
                    </Button>
                ))}
            </div>
        </Grid>
    );


export default QuestionCard

