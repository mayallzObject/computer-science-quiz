import React, { useEffect, useState } from "react";

// Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Slide,
  Fade,
  Snackbar,
  Tooltip,
  CardActions,
  withStyles,
  Paper,
  Box,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    minWidth: 400,
    fontSize: theme.typography.pxToRem(14),
    border: "1px solid #dadde9",
    textColor: "#000000",
  },
}))(Tooltip);

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

export default function PremierFounder(props: any) {
  const user = useSelector(selectUser);

  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition: any) => () => {
    setState({
      open: true,
      Transition,
    });
  };

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
      setLevel("hamster");
      //@ts-ignore
    } else if (score > 15 && score <= 20) {
      setLevel("chihuahua");
      //@ts-ignore
    } else if (score > 20 && score <= 30) {
      setLevel("boar");
      //@ts-ignore
    } else if (score > 30 && score <= 50) {
      setLevel("tiger");
      //@ts-ignore
    } else if (score > 50 && score <= 1999) {
      setLevel("elephant");
      //@ts-ignore
    } else if (score > 2000) {
      setLevel("mammoth");
    }
  }, [score, setLevel]);

  return (
    <Box mt={20}>
      <Card>
        <Paper elevation={23}>
          <CardHeader
            title={<h1>{user.name}</h1>}
            subheader={<h1>{`Score: ${user.score} Level:${level}`}</h1>}
            action={
              <Tooltip
                color="primary"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={<h2>{`Go to ${user.name}'s GitHub `}</h2>}
              >
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="settings"
                >
                  <GitHubIcon fontSize="small" />
                </Button>
              </Tooltip>
            }
          />

          <Typography paragraph>
            <Snackbar
              open={state.open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message={<h1>{user.score}</h1>}
              key={state.Transition.name}
            />
          </Typography>

          <Box
            style={{
              width: `${score}%`,
              backgroundColor: "darkgreen",
              alignItems: "center",
              borderRadius: 100,
              marginRight: 10,
            }}
            p={2}
            right={10}
          ></Box>

          <CardMedia
            className={classes.media}
            //@ts-ignore
            image={user.userImg}
            title={user.name}
          />
          <CardContent>
            <Typography paragraph>About me: {props.aboutMe}</Typography>
          </CardContent>
          <CardActions>
            {/* 
    //@ts-ignore           */}
            <Button
              elevation={23}
              endIcon={<FaceIcon />}
              variant="contained"
              color="primary"
              onClick={handleClick(SlideTransition)}
            >
              About
            </Button>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Contact</Typography>
                  <p> email: {props.email}</p>
                  <p> LinkedIn: {props.linkedIn} </p>
                </React.Fragment>
              }
            >
              <Button>Contact</Button>
            </HtmlTooltip>
          </CardActions>
        </Paper>
      </Card>
    </Box>
  );
}
