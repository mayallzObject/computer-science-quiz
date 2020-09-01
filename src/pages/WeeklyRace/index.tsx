//HomePage/ react / redux imports
import React from "react";

//Components
import QuestionCard from "../../components/Questions/Questions";

//Mui components
import { useStyles } from "./mui";
import { Paper, Box, Snackbar, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slide, { SlideProps } from "@material-ui/core/Slide";

import Banner from "../../components/Banner";

import Leaderboards from "../../components/TableCards/Leaderboards";
import RulesCard from "../../components/TableCards/RulesCard";
import ScoreboardPage from "../../components/Scoreboard";
import OwnerCard from "../../components/TableCards/Owner";

const premierFounders = [
  {
    name: "Ivo",
    description: "Loves coffee!",
    imageUrl:
      "https://avatars0.githubusercontent.com/u/66206483?s=400&u=c2a444fe4defb6454d8f0876bb6538ed653c2111&v=4",
    gitUrl: "https://github.com/mayallzObject",
    email: "goranbre@abv.bg",
    linkedIn: "unknown",
    aboutMe: "Float like a butterfly, sting like a bee.",
  },
];

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const handleClick = (Transition: any) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={23}>
            {premierFounders.map((founder) => {
              return (
                <OwnerCard
                  key={Math.random()}
                  name={founder.name}
                  description={founder.description}
                  imageUrl={founder.imageUrl}
                  gitUrl={founder.gitUrl}
                  email={founder.email}
                  linkedIn={founder.linkedIn}
                  aboutMe={founder.aboutMe}
                />
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={23}>
            <Grid item xs={12}>
              <h1 style={{ fontFamily: "Courier New" }}>Portfolio Project</h1>
              <h2>Why cool trivia?</h2>
              <Button
                color="primary"
                variant="contained"
                onClick={handleClick(TransitionDown)}
              >
                Technologies
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Snackbar
                style={{ fontSize: 10 }}
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message={
                  <Box>
                    <img src="https://img.icons8.com/color/96/000000/javascript.png" />
                    <img src="https://img.icons8.com/color/96/000000/typescript.png" />
                    <img src="https://img.icons8.com/nolan/96/react-native.png" />
                    <img src="https://img.icons8.com/color/96/000000/redux.png" />
                    <img src="https://img.icons8.com/color/96/000000/material-ui.png" />
                  </Box>
                }
                key={transition ? transition.name : ""}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
