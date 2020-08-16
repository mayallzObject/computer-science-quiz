import React from 'react'
import { Props } from "./types"
import { Button, Typography, makeStyles, CardHeader, CardMedia, CardContent, Card, CardActions } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        minWidth: 300,
        align: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        align: 'center',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        align: 'center',
        marginBottom: 12,
    },
})

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <Typography align="center">
                Question: {questionNr} / {totalQuestions}
            </Typography>

            <React.Fragment>
                {question}
            </React.Fragment>
            <CardMedia
                style={{ height: "150px" }}
            />
            <CardContent>
                {answers.map((answer) => (
                    <div
                        key={answer}>
                        <CardActions>
                            <Button
                                color="primary"
                                variant="contained"
                                disabled={userAnswer ? true : false}
                                value={answer}
                                onClick={callback}>
                                <React.Fragment>
                                    {answer}
                                </React.Fragment>
                            </Button>
                        </CardActions>
                    </div>
                ))}
            </CardContent>
        </Card>
    )

}

export default QuestionCard

