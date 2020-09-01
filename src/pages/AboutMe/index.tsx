import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../../components/loading";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import { Grid, Paper, CardMedia, Box } from "@material-ui/core";
import Banner from "../../components/Banner";

import { useStyles } from "./mui"
import Leaderboards from "../../components/TableCards/Leaderboards";

import ScoreTable from "../../components/ScoresTable";



export default function AboutMe() {
    const [name, set_name] = useState("");
    const [description, set_description] = useState("");

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
            <Box mt={5}>
                <Grid className={classes.paper} container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper>
                            <Banner />

                            <ScoreTable />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe"
                                        //@ts-ignore
                                        src={user.userImg}
                                    >
                                    </Avatar>
                                }
                                title={user.name}
                                subheader={user.score}

                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    About: My name is Putin. I the best trivia player! Do you disagree with Putin?
                            </Typography>
                            </CardContent>
                        </Card>

                    </Grid>



                </Grid >
            </Box >
        );
    }
}
















