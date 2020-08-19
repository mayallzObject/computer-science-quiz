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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
    root: {
        minWidth: 50,

        align: "center"
    },
    card: {
        alignItems: "center",
        backgroundColor: '#3b5998',
    },
    title: {
        padding: 20,
        fontSize: 40,
        textAlign: "center",
    },



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
                <Box pt={5} pl={2}>

                    {answers.map((answer) => (
                        <Button
                            key={answer}
                            startIcon={<CloudUploadIcon />}
                            color="primary"
                            variant="contained"
                            disabled={userAnswer ? true : false}
                            value={answer}
                            onClick={callback}>
                            {renderHTML(answer)}
                        </Button>
                    ))}

                </Box>
            </CardContent>
        </Card>

    )

}

export default QuestionCard
