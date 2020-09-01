import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { Button, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: 4,
        fontSize: 45,
        fontWeight: "bold",
        color: "#6BCAE2",
        backgroundImage: "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
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
            <Avatar aria-label="userImg" className={classes.avatar}
                src={props.user.userImg}
            >
            </Avatar>
            <Button
                startIcon={<ExitToAppRoundedIcon />}
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => dispatch(logOut())}>

            </Button>
            <Button
                className={classes.button}
                startIcon={<FaceRoundedIcon />}
                color="primary"
                variant="contained"
                component={NavLink} to="/about-me"
            >
            </Button>

        </>
    )
}

export default Logout
