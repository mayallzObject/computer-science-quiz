import React from 'react'
import { Button } from '@material-ui/core'
import { Props } from "./types"


const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
        <div>
            <p className='number'>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <Button
                        variant="contained"
                        key={answer}>
                        <Button color="inherit" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </Button>
                    </Button>
                ))}
            </div>
        </div>
    );


export default QuestionCard
