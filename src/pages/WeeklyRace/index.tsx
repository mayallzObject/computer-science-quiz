//HomePage/ react / redux imports
import React from "react";

//Components
import OwnerCard from "../../components/TableCards/Owner";

//Mui components
import { useStyles } from "./mui";
import { Paper, Box, Snackbar, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slide, { SlideProps } from "@material-ui/core/Slide";

const founder = [
  {
    name: "Ivo",
    description:
      " 𝐉𝐒 ➧ 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭 ➧ 𝐍𝐨𝐝𝐞𝐉𝐒  ➧ 𝐑𝐞𝐚𝐜𝐭  ➧ 𝐑𝐞𝐝𝐮𝐱 𝐄𝐱𝐩𝐫𝐞𝐬𝐬   ➧ 𝐀𝐱𝐢𝐨𝐬 ➧ 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐒𝐐𝐋 ➧ 𝐒𝐞𝐪𝐮𝐞𝐥𝐢𝐳𝐞 ➧ 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥-𝐔𝐈 ➧ 𝐆𝐢𝐭𝐇𝐮𝐛 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 𝐜𝐨𝐧𝐭𝐫𝐨𝐥",
    imageUrl:
      "https://avatars0.githubusercontent.com/u/66206483?s=400&u=c2a444fe4defb6454d8f0876bb6538ed653c2111&v=4",
    gitUrl: "https://github.com/mayallzObject",
    email: "goranbre@abv.bg",
    linkedIn: "unknown",
    aboutMe: "Float like a butterfly, sting like a bee.",
  },
];

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
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
            {founder.map((f) => {
              return (
                <OwnerCard
                  key={Math.random()}
                  name={f.name}
                  description={f.description}
                  imageUrl={f.imageUrl}
                  gitUrl={f.gitUrl}
                  email={f.email}
                  linkedIn={f.linkedIn}
                  aboutMe={f.aboutMe}
                />
              );
            })}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={23}>
            <h1 style={{ fontFamily: "Courier New" }}>Portfolio Project</h1>
            <h2>Why cool trivia?</h2>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick(TransitionLeft)}
            >
              Technologies
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Snackbar
              style={{ fontSize: 10 }}
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              message={
                <Box>
                  <img
                    src="https://img.icons8.com/color/96/000000/javascript.png"
                    alt="JS"
                  />
                  <img
                    src="https://img.icons8.com/color/96/000000/typescript.png"
                    alt="react"
                  />
                  <img
                    src="https://img.icons8.com/nolan/96/react-native.png"
                    alt="native"
                  />
                  <img
                    src="https://img.icons8.com/color/96/000000/redux.png"
                    alt="redux"
                  />
                  <img
                    src="https://img.icons8.com/color/96/000000/material-ui.png"
                    alt="mui"
                  />
                </Box>
              }
              key={transition ? transition.name : ""}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
