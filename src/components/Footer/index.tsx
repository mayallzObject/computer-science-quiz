import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function Footer() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper>
                <Grid container >
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>Ivaylo</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    );
}