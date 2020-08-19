import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/loading";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Grid, Paper } from "@material-ui/core";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },

        avatar: {
            backgroundColor: red[500],
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
            history.push("/")
        }
        console.log(user.score)
    }, [user, history])

    if (loading) {
        return <Loading />
    } else {
        if (!user.id) return null

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}
                                        //@ts-ignore
                                        src={user.userImg}
                                    >
                                    </Avatar>
                                }
                                title={user.name}

                                //? There will be a conrol
                                subheader={user.score}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>

                        </Card></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        );
    }
}
















