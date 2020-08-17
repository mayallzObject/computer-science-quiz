import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/user/actions";
import { SignupData } from "../../types/userTypes";
import { OnClick, OnChange } from "../../types/eventType";
import { showMessageWithTimeout } from "../../store/appState/actions";

// Mui Components
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { useStyles } from "./mui"


export default function SignupForm(props: any) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const initialState: SignupData = {
        name: "",
        email: "",
        password: "",

    };
    // const { onClose, setForm } = props
    const [signUpData, setSignUpData] = useState<SignupData>(initialState);

    function submitHandler(event: OnClick) {
        event.preventDefault();
        const { name, email, password } = signUpData
        if (!name || !email || !password) {
            const message = "Please fill in all the required fields"
            dispatch(showMessageWithTimeout("error", true, message, 3000));
        } else {
            dispatch(signUp(signUpData))
            setSignUpData(initialState)
        }
    }

    return (

        <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">name</InputLabel>
                <OutlinedInput
                    type="text"
                    value={signUpData.name}
                    onChange={(e: OnChange) =>
                        setSignUpData({ ...signUpData, name: e.target.value })
                    }
                />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                    type="email"
                    value={signUpData.email}
                    onChange={(e: OnChange) =>
                        setSignUpData({ ...signUpData, email: e.target.value })
                    }
                />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">password</InputLabel>
                <OutlinedInput
                    type="password"
                    value={signUpData.password}
                    onChange={(e: OnChange) =>
                        setSignUpData({ ...signUpData, password: e.target.value })
                    }
                />
                <Button
                    onClick={(e) => submitHandler(e)}
                >
                    Submit
            </Button>
            </FormControl>
            <Link to="/login">
                Already have an account, login here.
        </Link>

        </form>
    );
}

