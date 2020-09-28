import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../../components/Loading";

//Redux store
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";

//Mui components
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import UserCard from "../../components/UserCard";
import Scoreboard from "../../components/Scoreboard";

export default function AboutMe() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(selectUser);
  const loading = useSelector(selectAppLoading);

  useEffect(() => {
    if (!user.token) {
      history.push("/");
    }
    console.log(user.score);
  }, [user, history]);

  if (loading) {
    return <Loading />;
  } else {
    if (!user.id) return null;

    return (
      <Grid className={classes.paper} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <UserCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.smHeader} elevation={23}>
            <Scoreboard />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
