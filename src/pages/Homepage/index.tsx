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
import sphinx from "../../images/sphinx.jpg";

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

export default function Home(props: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.paper} container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={23} className={classes.smHeader}>
          <Paper elevation={23} className={classes.backPaper}>
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
          </Paper>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          marginTop: 150,
          marginBottom: 200,
        }}
      >
        <Paper
          className={classes.smHeader}
          elevation={23}
          style={{
            padding: 10,
            borderRadius: 360,
            height: 590,
          }}
        >
          <Paper
            elevation={23}
            style={{
              borderRadius: 360,
              height: 570,
              backgroundImage: `url(${sphinx})`,
            }}
          >
            <QuestionCard />
          </Paper>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginBottom: 100,
        }}
      >
        <Scoreboard />
      </Grid>
    </Grid>
  );
}
