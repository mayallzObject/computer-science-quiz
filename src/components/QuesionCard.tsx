import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/questions/actions";
import { selectQuestion } from "../store/questions/selectors";


const Card = () => {
    const dispatch = useDispatch();
    const someQuestions = useSelector(selectQuestion);

    console.log(
        "the log is", someQuestions)

    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    return (
        <div>
            Haaloo
        </div>
    );
}

export default Card
