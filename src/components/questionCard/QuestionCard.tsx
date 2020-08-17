import React from 'react'
import { Props } from "./types"
import { Button, Typography, makeStyles, CardMedia, CardContent, Card, ButtonGroup } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        blackgroundColor: '#29ab87',
    },

    card: {

        textAlign: "center",
    },
    title: {
        fontSize: 20,
        backgroundColor: '#6BCAE2',
        textAlign: "center",
    },

    media: {
        height: 0,
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
            <Typography className={classes.title}>
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
                height="300"
                src="https://lh3.googleusercontent.com/proxy/5qgHRi1Tw5xhmrUtgYGewXGAAohLl0EYBqleSZlZDyr4sdKVT1m91oG0iwhrypIp3VX4NFQI9Ctvzhe502b0wGyCWcIGvqwY7CQFpgZH1NhvILfFX-VHwCO0w9AvJMOFQ8xsu_8rCtKTnpRlngicF1OE-ve8"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.card}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {answers.map((answer) => (
                        <Button
                            key={answer}
                            color="primary"
                            variant="contained"
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}>
                            <React.Fragment>
                                {answer}
                            </React.Fragment>
                        </Button>
                    ))}
                </ButtonGroup>
            </CardContent>
            <Button className="SoundPlayer" />
        </Card>

    )

}

export default QuestionCard

