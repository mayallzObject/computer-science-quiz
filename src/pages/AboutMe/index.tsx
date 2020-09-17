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
          <Paper
            className={classes.smHeader}
            elevation={23}
            style={{
              marginTop: 80,
              padding: 20,
              borderRadius: 360,
              minHeight: 600,
            }}
          >
            <Paper
              elevation={23}
              style={{
                borderRadius: 360,
                minHeight: 550,
                backgroundImage:
                  "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
              }}
            >
              <UserCard />
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            className={classes.smHeader}
            elevation={23}
            style={{
              marginTop: 80,
              padding: 20,
              borderRadius: 360,
              minHeight: 600,
            }}
          >
            <Paper
              elevation={23}
              style={{
                borderRadius: 360,
                minHeight: 550,
                backgroundImage:
                  "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
              }}
            >
              <Scoreboard />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
