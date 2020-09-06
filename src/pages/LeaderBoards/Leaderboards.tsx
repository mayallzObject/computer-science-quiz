import React from "react";

//Components
import ScoreBoard from "../../components/Scoreboard";

//Mui components
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";

import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Box, CardMedia, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: blue[500],
    },
  })
);

export default function Leaderboards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={23}>
      <Card>
        <CardHeader title="Leaderboard" subheader="year race leaders" />
        <CardMedia
          className={classes.media}
          image="https://bojanzimmermann.com/wp-content/uploads/2018/03/Increase-Brain-Power-1024x677.png"
        />

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box>
              <ScoreBoard />
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  );
}
