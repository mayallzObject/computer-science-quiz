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
    Icon,
    ButtonGroup,
    IconButton,
} from '@material-ui/core'
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';

const useStyles = makeStyles({
    root: {
        align: "center"
    },
    card: {
        padding: 30,
        alignItems: "center",
        backgroundColor: '#232b2b',
    },
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    content: {
        padding: 10,
        fontSize: 10,
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
            <Paper className={classes.root}>

                <Typography color="primary" className={classes.title}>
                </Typography>
            </Paper >
            <CardContent className={classes.card}>
                <Paper>
                    <Typography className={classes.title} variant="body2" color="textSecondary" component="div">
                        Question: {questionNr} / {totalQuestions}
                        <div>{renderHTML(question)}</div>
                    </Typography>
                </Paper>
                <Box pt={8}>
                    <ButtonGroup>
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
                    </ButtonGroup>
                </Box>

            </CardContent>
        </Card >

    )

}

export default QuestionCard
