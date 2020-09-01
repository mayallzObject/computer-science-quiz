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
        <div className={classes.button}>
            <IconButton >
                {"Cool"}{"Trivia"}
            </IconButton>





        </div >
    );
}