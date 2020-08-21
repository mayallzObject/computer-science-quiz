import React from 'react'
import { Props } from "./types"
import {
    Button,
    Typography,

    Paper,
    Box,

} from '@material-ui/core'

import { useStyles } from "./mui"

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';


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
        <Paper>
            <Typography className={classes.title} variant="body2" color="textSecondary" component="div">

                Question: {questionNr} / {totalQuestions}
            </Typography>
            <Typography className={classes.title} variant="body2" color="textSecondary" component="div">

                <div >{renderHTML(question)}</div>
            </Typography>
            <Box mt={10} mb={1}>

                {answers.map((answer) => (
                    <Button
                        key={answer}

                        color="primary"
                        variant="contained"
                        startIcon={<CheckCircleOutlineRoundedIcon />}
                        className={classes.button}
                        disabled={userAnswer ? true : false}
                        value={answer}
                        onClick={callback}>
                        <p dangerouslySetInnerHTML={{ __html: answer }} />
                    </Button>
                ))}

            </Box>
        </Paper >

    )

}

export default QuestionCard
