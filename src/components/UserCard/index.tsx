import React, { useEffect, useState } from "react";

// Mui components
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {
  Fade,
  Snackbar,
  Box,
  CardHeader,
  Paper,
  CardMedia,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useStyles } from "./styles";

export default function UserCard() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const score = user.score;
  const [level, setLevel] = useState("");

  useEffect(() => {
    //@ts-ignore
    if (score > 5 && score <= 10) {
      setLevel("noob");
      //@ts-ignore
    } else if (score > 10 && score <= 15) {
      //@ts-ignore
      setLevel("newbie");
      //@ts-ignore
    } else if (score > 15 && score <= 20) {
      setLevel("newb");
      //@ts-ignore
    } else if (score > 20 && score <= 30) {
      setLevel("begginer");
      //@ts-ignore
    } else if (score > 30 && score <= 1000) {
      setLevel("advanced");
      //@ts-ignore
    } else if (score > 1000 && score <= 1999) {
      setLevel("master");
      //@ts-ignore
    } else if (score > 10000) {
      setLevel("wizard");
    }
  }, [score, setLevel]);

  return (
    <Card>
      <Paper elevation={23}>
        <CardHeader
          title={<h2>{user.name}</h2>}
          subheader={<h2>{`Score: ${user.score} Level:${level}`}</h2>}
        />

        <Box
          style={{
            width: `${score}%`,
            backgroundColor: "darkgreen",
          }}
          p={1}
          right={0}
        ></Box>
        <Typography paragraph>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={<h1>{user.score}</h1>}
            key={state.Transition.name}
          />
        </Typography>

        <CardMedia
          className={classes.media}
          //@ts-ignore
          image={user.userImg}
          title={user.name}
        />
      </Paper>
    </Card>
  );
}
