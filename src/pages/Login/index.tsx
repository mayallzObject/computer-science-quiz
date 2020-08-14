import React, { useState } from "react";
//? React imports
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";

//? TypeScript types
import { Credentials } from "../../types/userTypes";
import { OnClick, OnChange } from "../../types/eventType";

//? Action creator
import { showMessageWithTimeout } from "../../store/appState/actions";

//? MUI Components
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(4),
            },

        },
    }),
)

export default function LogInForm(props: any) {
    const classes = useStyles();

    const { onClose, setOnClose } = props
    const [credentials, setCredentials] = useState<Credentials>({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();

    function submitCredentials(event: OnClick): void {
        event.preventDefault();
        const { email, password } = credentials
        if (!email || !password) {
            const message = "Email or password incorrect"
            dispatch(showMessageWithTimeout("error", true, message, 3000))
        } else {
            dispatch(login(credentials));
            setCredentials({
                email: "",
                password: "",
            })
        }
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                    type="email"
                    id="component-outlined"
                    value={credentials.email}
                    onChange={(e: OnChange) =>
                        setCredentials({
                            ...credentials,
                            email: e.target.value
                        })
                    }
                />
            </FormControl>

            <FormControl variant="outlined">
                <InputLabel color="secondary" htmlFor="component-outlined">Password</InputLabel>
                <OutlinedInput
                    type="password"
                    id="component-outlined"
                    value={credentials.password}
                    onChange={(e: OnChange) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
            </FormControl>
            <Button
                className="navbtn"
                onClick={(e) => submitCredentials(e)}
            >
                Log in
            </Button>
            <Button
                className="navbtn"
                onClick={onClose}
            >
                Close
            </Button>
            <Button
                onClick={(e) => setOnClose("Signup")}

            >
                Singup
            </Button>
        </form>
    )
}