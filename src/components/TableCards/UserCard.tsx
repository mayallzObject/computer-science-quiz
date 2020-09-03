import React, { useEffect, useState } from "react";

// Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Fade, Snackbar, Paper, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    media: {
      paddingTop: "56.25%", // 16:9
      alignItems: "center",
      borderRadius: 10,
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
      backgroundColor: red[500],
    },
  })
);

// const HtmlTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: "#f5f5f9",
//     color: "rgba(0, 0, 0, 0.87)",
//     minWidth: 400,
//     fontSize: theme.typography.pxToRem(14),
//     border: "1px solid #dadde9",
//     textColor: "#000000",
//   },
// }))(Tooltip);

export default function UserCard() {
  const user = useSelector(selectUser);

  const classes = useStyles();

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
    if (score === null && score <= 100) {
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
    } else if (score > 2000) {
      setLevel("mammoth");
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
