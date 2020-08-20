import React from 'react'
import { Props } from "./types"
import {
    Button,
    Typography,
    makeStyles,
    CardContent,
    Card,
    Paper,
    Box,
} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        minWidth: 50,

        align: "center"
    },
    card: {
        padding: 20,
        alignItems: "center",
        backgroundColor: '#232b2b',
    },
    title: {
        padding: 30,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    content: {
        spacing: 5,
        fontSize: 13,
        fontWeight: "bold",
    }



})
const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } })

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
            <CardContent className={classes.card}>
                <Typography color="primary" className={classes.title}>
                    Question: {questionNr} / {totalQuestions}
                </Typography>
                <Paper>
                    <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
                        {renderHTML(question)}
                    </Typography>
                </Paper>
                <Box pt={8}>
                    {answers.map((answer) => (
                        <Button
                            key={answer}
                            color="primary"
                            variant="outlined"
                            className={classes.content}
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}>
                            <p dangerouslySetInnerHTML={{ __html: answer }} />
                        </Button>
                    ))}
                </Box>

            </CardContent>
        </Card >

    )

}

export default QuestionCard
