import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { Button, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    btn: {
        padding: 10,
        marginLeft: "5vw",
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#f4a460",
        "&:hover": {
            color: "#3b5998",
            backgroundColor: "#00000",
        },
    },
    hello: {
        fontSize: 10,
        paddingLeft: 10,
        fontWeight: "bold",
    },
    avatar: {
        backgroundColor: red[500],

    },
}));

const Logout = (props: any) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <>
            <Avatar aria-label="recipe" className={classes.avatar}

                src={props.user.userImg}
            >
            </Avatar>
            <Typography className={classes.hello}>
                Hi {props.user.name}, welcome back!
            </Typography>
            <Button className={classes.btn} onClick={() => dispatch(logOut())}>
                Logout
            </Button>

        </>
    )
}

export default Logout
