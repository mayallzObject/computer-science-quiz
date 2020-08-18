import React from 'react'
import { Props } from "./types"
import {
    Button,
    Typography,
    makeStyles,
    CardMedia,
    CardContent,
    Card,
    ButtonGroup,
} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
    root: {
        minWidth: 50,

        align: "center"
    },
    card: {
        alignItems: "center",
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 20,
        textAlign: "center",
    },
    media: {

        height: -40,
        paddingTop: '56.25%', // 16:9
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
            <Typography color="primary" className={classes.title}>
                Question: {questionNr} / {totalQuestions}
            </Typography>
            <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
                {renderHTML(question)}
            </Typography>
            <CardContent className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://media.nationalgeographic.org/assets/photos/000/343/custom/34332_610x343.jpg"
                    title="GameImage"
                />
                <ButtonGroup>
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
                </ButtonGroup>
            </CardContent>
        </Card>

    )

}

export default QuestionCard
