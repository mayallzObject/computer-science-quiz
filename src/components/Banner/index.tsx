import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import { IconButton, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: "#353839",
        alignItems: "center",

    },

    pallete: {
        alignItems: "center",
    }
}))

export default function Banner() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton color="primary">
                {"Cool"}<DeckRoundedIcon fontSize="large" />{"rivia"}
            </IconButton>
        </Paper >
    );
}