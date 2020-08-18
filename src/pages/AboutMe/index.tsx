import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/loading";
import { Grid, Paper, makeStyles, createStyles, Theme } from "@material-ui/core";


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


export default function AboutMe() {
    const classes = useStyles()
    const history = useHistory();
    const user = useSelector(selectUser);
    const loading = useSelector(selectAppLoading);

    useEffect(() => {
        if (!user.token) {
            history.push("/");
        }
    }, [user, history]);

    if (loading) {
        return <Loading />;
    } else {
        if (!user.id) return null;

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        );
    }
}