//HomePage/ react / redux imports
import React from "react";

//Components
import QuestionCard from "../../components/Questions/Questions";

import Scoreboard from "../../components/Scoreboard";

//Mui components
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

import Banner from "../../components/Banner";
import UserManual from "../../components/UserManual";

type Props = {
  darkMode: boolean;
  set_darkMode: (value: boolean) => void;
};

const founder = [
  {
    name: "Developer",
    description: ` Welcome to, Cool Triva.✌ I made this is application as a first portfolio project. 
    My goal is to learn new technologies and desing a cool looking site.`,
    imageUrl:
      "https://avatars0.githubusercontent.com/u/66206483?s=400&u=c2a444fe4defb6454d8f0876bb6538ed653c2111&v=4",
    gitUrl: "https://github.com/mayallzObject",
    email: "mayallzobject@gmail.com",
    location: "Venlo, the Netherlands",
    aboutMe:
      "My name is Ivaylo Yankov. I am passionate about coding, crazy about people, and inlove with problem solving",
    linkedUrl: "https://www.linkedin.com/in/ivo-yankov/",
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <Grid className={classes.paper} container spacing={3}>
      <Grid
        item
        style={{
          backgroundImage:
            "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
        }}
        xs={12}
        sm={3}
      >
        {founder.map((f) => {
          return (
            <Banner
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
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          elevation={23}
          style={{
            marginTop: 50,
            marginBottom: 50,
            borderRadius: 360,
            minHeight: 590,
            backgroundImage:
              "url(https://a-static.besthdwallpaper.com/sphinx-and-the-pyramid-of-giza-oil-on-canvas-wallpaper-640x960-6798_169.jpg)",
          }}
        >
          <QuestionCard />
        </Paper>
      </Grid>
      <Grid
        item
        style={{
          backgroundImage:
            "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
        }}
        xs={12}
        sm={3}
      >
        <Paper
          elevation={23}
          style={{
            marginTop: 20,
          }}
        >
          <UserManual />
        </Paper>
        <Paper
          elevation={23}
          style={{
            marginTop: 230,
          }}
        >
          <Scoreboard />
        </Paper>
      </Grid>
    </Grid>
  );
}
