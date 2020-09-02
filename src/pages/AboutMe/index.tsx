import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../../components/loading";
import PremierFounder from "../../components/TableCards/RulesCard";

//Redux store
import { selectUser } from "../../store/user/selectors";
import { selectAppLoading } from "../../store/appState/selectors";

//Mui components
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./mui";

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
      <Grid container>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper} elevation={23}>
            <PremierFounder />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    );
  }
}
