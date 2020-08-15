import React from 'react'


import { AnswerObject } from './index';


// type Props = {
//     question: string;
//     answers: string[];
//     callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
//     userAnswer: AnswerObject | undefined;
//     questionNr: number;
//     totalQuestions: number;
// };


type Props = {
    question: string
    answers: string[]
    userAnswer: any,
    callback: any
    questionNr: number
    totalQuestions: number
}


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
                    <button
                        key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </button>
                ))}
            </div>
        </div>
    );


export default QuestionCard
