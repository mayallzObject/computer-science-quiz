//HomePage/ react / redux imports
import React from "react";

//Components
import QuestionCard from "../../components/Questions/Questions";

import Scoreboard from "../../components/Scoreboard";

//Mui components
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Box } from "@material-ui/core";
import CoolPlaces from "../../components/CoolPlaces";
import Banner from "../../components/Banner";

type Props = {
  darkMode: boolean;
  set_darkMode: (value: boolean) => void;
};

const founder = [
  {
    name: "Developer",
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

export default function Home(props: Props) {
  const classes = useStyles();

  return (
    <Grid className={classes.paper} container spacing={5}>
      <Grid
        item
        style={{
          marginTop: 30,
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
            borderRadius: 100,
            minHeight: 720,
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
          marginTop: 30,
          backgroundImage:
            "url(http://quotesideas.com/wp-content/uploads/2015/05/Summer-Beach-Wallpaper-107.jpg)",
        }}
        xs={12}
        sm={3}
      >
        <Paper>
          <h1 style={{ fontFamily: "Kaushan Script", paddingTop: 10 }}>
            Cool Places
          </h1>
          <CoolPlaces />
        </Paper>
        <Box mt={12}>
          <Scoreboard />
        </Box>
      </Grid>
    </Grid>
  );
}
