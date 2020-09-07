import React from "react";

//Mui components

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, CardMedia, Paper, TextField } from "@material-ui/core";
import { useStyles } from "./styles";

export default function RulezCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={23}>
      <Card className={classes.root}>
        <CardHeader title="Rules" subheader="Rules and Information" />
        <CardMedia
          className={classes.media}
          image="https://cdn5.vectorstock.com/i/1000x1000/36/59/retro-pastel-color-smile-pink-brain-with-vector-10373659.jpg"
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
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  );
}