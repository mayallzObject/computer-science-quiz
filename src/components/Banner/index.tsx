import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import { IconButton, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import { useStyles } from "../Questions/mui"
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";



export default function Banner() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton color="primary">
                {"Cool"}<DeckRoundedIcon fontSize="large" />{"rivia"}
            </IconButton>

            <Button

                className={classes.button}
                startIcon={<PlayCircleOutlineRoundedIcon />}
                variant="contained"
                color="primary"
                component={NavLink} to="/"
            > Play
        </Button>
            <Button
                className={classes.button}
                startIcon={<AirplanemodeActiveIcon />}
                color="primary"
                variant="contained"
                component={NavLink} to="/weekly-race"
            > Race
        </Button>
            <Button
                className={classes.button}
                startIcon={<FaceRoundedIcon />}
                color="primary"
                variant="contained"
                component={NavLink} to="/about-me"
            > Me
        </Button>


        </Paper >
    );
}