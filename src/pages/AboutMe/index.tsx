import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../../components/loading";

//Redux store
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";

//Mui components
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import Leaderboards from "../../components/UserManual";
import UserCard from "../../components/UserCard";
import Banner from "../../components/Banner";

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
        <Grid item xs={12} sm={8}>
          <Paper elevation={23}>
            <UserCard />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={23}>
            Change details to be implemented in the next update
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
