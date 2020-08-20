import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Paper, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: "#353839",
        alignItems: "center",

    },

    btn: {
        marginTop: theme.spacing(1),
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
    },
    pallete: {
        alignItems: "center",
    }
}))

export default function BannerControls() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton color="primary">
                {"Cool"}<DeckRoundedIcon fontSize="large" />{"rivia"}
            </IconButton>
            <ButtonGroup variant="outlined" color="primary" aria-label="contained primary button group">
                <Button className={classes.btn}
                    component={NavLink} to="/"
                > Play
                    </Button>
                <Button className={classes.btn}
                    component={NavLink} to="/weekly-race"
                > Leaderboards
                    </Button>
                <Button className={classes.btn}
                    component={NavLink} to="/about-me"
                > My page
                    </Button>
            </ButtonGroup>
        </Paper >
    );
}