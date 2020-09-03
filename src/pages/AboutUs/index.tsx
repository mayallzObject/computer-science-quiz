//HomePage/ react / redux imports
import React from "react";

//Components
import OwnerCard from "../../components/TableCards/Owner";

//Mui components
import { useStyles } from "./mui";
import { Paper, Box, Snackbar, Button, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Slide, { SlideProps } from "@material-ui/core/Slide";

import GitHubIcon from "@material-ui/icons/GitHub";

const founder = [
  {
    name: "Ivo",
    description: ` ℍ𝕚, 𝕥𝕙𝕖𝕣𝕖.✌ 

    𝕄𝕪 𝕟𝕒𝕞𝕖 𝕚𝕤 𝕀𝕧𝕒𝕪𝕝𝕠 𝕐𝕒𝕟𝕜𝕠𝕧. 🌞 𝕀 𝕒𝕞 𝕒 𝕁𝕣. 𝔽𝕦𝕝𝕝 𝕊𝕥𝕒𝕔𝕜 𝕎𝕖𝕓 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣.
    𝕀 𝕒𝕞 𝕖𝕒𝕘𝕖𝕣 𝕥𝕠 𝕝𝕖𝕒𝕣𝕟 𝕒𝕟𝕕 𝕕𝕖𝕧𝕖𝕝𝕠𝕡 𝕞𝕪 𝕔𝕠𝕕𝕚𝕟𝕘 𝕤𝕜𝕚𝕝𝕝𝕤, 𝕨𝕠𝕣𝕜 𝕙𝕒𝕣𝕕 𝕓𝕦𝕥 𝕒𝕝𝕤𝕠 𝕖𝕟𝕛𝕠𝕪 𝕥𝕙𝕖 𝕛𝕠𝕦𝕣𝕟𝕖𝕪.🔥
    
    𝕄𝕪 𝕡𝕒𝕤𝕤𝕚𝕠𝕟𝕤 𝕒𝕣𝕖 𝕡𝕣𝕠𝕓𝕝𝕖𝕞-𝕤𝕠𝕝𝕧𝕚𝕟𝕘, 𝕔𝕠𝕕𝕚𝕟𝕘, 𝕒𝕟𝕕 𝕖𝕩𝕥𝕣𝕖𝕞𝕖 𝕤𝕡𝕠𝕣𝕥𝕤.💙
    🌞🅲🅾🆁🅴 🆂🅺🅸🅻🅻🆂🌞
    𝕁𝕒𝕧𝕒𝕊𝕔𝕣𝕚𝕡𝕥 || 𝕋𝕪𝕡𝕖𝕊𝕔𝕣𝕚𝕡𝕥 || ℕ𝕠𝕕𝕖𝕁𝕊 || ℝ𝕖𝕒𝕔𝕥 || ℝ𝕖𝕕𝕦𝕩 || 𝔼𝕩𝕡𝕣𝕖𝕤𝕤 || 𝔸𝕩𝕚𝕠𝕤 || ℝ𝔼𝕊𝕋 || 𝕊𝕖𝕢𝕦𝕖𝕝𝕚𝕫𝕖 || 𝕋𝕪𝕡𝕖𝕆ℝ𝕄 || ℍ𝕋𝕄𝕃𝟝 || 𝕊𝔸𝕊𝕊 || 𝕄𝔸𝕋𝔼ℝ𝕀𝔸𝕃-𝕌𝕀

    `,
    imageUrl:
      "https://avatars0.githubusercontent.com/u/66206483?s=400&u=c2a444fe4defb6454d8f0876bb6538ed653c2111&v=4",
    gitUrl: "https://github.com/mayallzObject",
    email: "goranbre@abv.bg",
    location: "the Netherlands",
    aboutMe: "Float like a butterfly, sting like a bee.",
    linkedUrl: "https://www.linkedin.com/in/ivo-yankov/",
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
                  location={f.location}
                  aboutMe={f.aboutMe}
                  LinkedIn={f.linkedUrl}
                />
              );
            })}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={23}>
            <h1 style={{ fontFamily: "Courier New" }}>Portfolio Project</h1>
            {/* 
          //@ts-ignore */}

            {/* 
          //@ts-ignore */}
            <Link
              href="https://github.com/mayallzObject/cool-trivia-front/tree/master"
              target="_blank"
            >
              <Button variant="contained" color="primary" aria-label="settings">
                <GitHubIcon fontSize="small" />
              </Button>
            </Link>

            <Button
              className={classes.button}
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
