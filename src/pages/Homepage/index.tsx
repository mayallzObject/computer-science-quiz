//HomePage/ react / redux imports
import React from "react";

//Components
import QuestionCard from "../../components/Questions/Questions";

//Mui components
import { useStyles } from "./mui";

import Grid from "@material-ui/core/Grid";
import { Paper, Box } from "@material-ui/core";
import PremierFounder from "../../components/TableCards/RulesCard";
import ScoreboardPage from "../../components/Scoreboard";

type Props = {
  darkMode: boolean;
  set_darkMode: (value: boolean) => void;
};

export default function Home(props: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.paper} container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Box mt={10}>
          <Paper>
            <ScoreboardPage />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box mt={10}>
          <Paper>
            <QuestionCard />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box mt={10}>
          <Paper>
            <PremierFounder />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
