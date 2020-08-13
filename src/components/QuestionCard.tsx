import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/questions/actions";
import { selectQuestion } from "../store/questions/selectors";

//! Working on the game logic

const Card = () => {

    const dispatch = useDispatch();
    const someQuestions = useSelector(selectQuestion);
    console.log("what are we selecting :", someQuestions)

    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch])

    return (
        <div>

        </div>
    )
}

export default Card