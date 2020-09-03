//HomePage/ react / redux imports
import React from "react";

//Components
import QuestionCard from "../../components/Questions/Questions";

//Mui components
import { useStyles } from "./mui";

import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Leaderboards from "../../components/TableCards/Leaderboards";
import RulezCard from "../../components/TableCards/RulezCard";
import Scoreboard from "../../components/Scoreboard";
type Props = {
  darkMode: boolean;
  set_darkMode: (value: boolean) => void;
};

export default function Home(props: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.paper} container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Paper elevation={23}>
          <QuestionCard />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4}>
        <RulezCard />
      </Grid>
    </Grid>
  );
}
