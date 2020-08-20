import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ButtonGroup, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {

        padding: 18,
        backgroundColor: "#353839",
    },

    btn: {
        marginTop: theme.spacing(1),
        fontWeight: "bold",

        backgroundColor: "#00000",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#32CD32",
        },
    },

}))

export default function BannerControls() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>

            <ButtonGroup variant="outlined" color="primary" aria-label="contained primary button group">
                <Button
                    color="primary"
                    component={NavLink} to="/"
                > Play
                    </Button>
                <Button
                    component={NavLink} to="/weekly-race"
                > Race
                    </Button>
                <Button
                    component={NavLink} to="/about-me"
                > Me
                    </Button>
            </ButtonGroup>
        </Paper >
    );
}