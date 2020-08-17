import React from 'react'
import { Props } from "./types"
import { Button, Typography, makeStyles, CardMedia, CardContent, Card, CardActions } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        minWidth: 300,
        align: 'center',
        blackgroundColor: '#8bd8c6'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        align: 'center',
    },
    card: {
        backgroundColor: '#8bd8c6'



    },
    title: {
        fontSize: 14,
    },
    pos: {
        align: 'center',
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
            {"hallo"}
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                src="https://lh3.googleusercontent.com/cn_LeIsIdFNfNeyKQJINDn4fyzFuUljVML9wzOOgZAxhdC1O8fkVk-n7qNhHNo0qsbtT2Q=s47"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.card}>
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

