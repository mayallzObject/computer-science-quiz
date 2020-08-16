import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    btn: {
        marginLeft: "1vw",
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffa000",
        },
    },
}));

const Logout = (props: any) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <>
            <Typography>Hello, {props.user.name} </Typography>
            <Button className={classes.btn} onClick={() => dispatch(logOut())}>
                Logout
      </Button>
        </>
    )
}

export default Logout