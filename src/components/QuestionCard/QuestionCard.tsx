import React from 'react'
import { Props } from "./types"
import { Button, Typography, makeStyles, CardMedia, CardContent, Card, CardActions } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        marginLeft: 300,
        align: 'center',
        blackgroundColor: '#8bd8c6',
        minWidth: 500,
        alignItems: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        align: 'center',
    },
    card: {
        backgroundColor: '#8bd8c6',
        alignItems: "center"

    },
    title: {
        fontSize: 40,
        backgroundColor: '#8bd8c6'
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
                <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
                    {question}
                </Typography>
            </React.Fragment>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="325"
                src="https://lh3.googleusercontent.com/proxy/5qgHRi1Tw5xhmrUtgYGewXGAAohLl0EYBqleSZlZDyr4sdKVT1m91oG0iwhrypIp3VX4NFQI9Ctvzhe502b0wGyCWcIGvqwY7CQFpgZH1NhvILfFX-VHwCO0w9AvJMOFQ8xsu_8rCtKTnpRlngicF1OE-ve8"
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
            <Button className="SoundPlayer" />
        </Card>

    )

}

export default QuestionCard

