import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/questions/actions";
import { selectQuestion } from "../store/questions/selectors";
import { selectUser } from "../store/user/selectors";



//! Working on the game logic

const Card = () => {

    const dispatch = useDispatch();
    const someUser = useSelector(selectQuestion)
    const someQuestions = useSelector(selectQuestion);
    console.log("what are we selecting :", someQuestions)
    console.log("what are we selecting :", someUser)




    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch])

    return (
        <div>

        </div>
    )
}

export default Card

