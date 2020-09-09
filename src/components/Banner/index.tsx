import React from "react";

// Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import {
  Link,
  Button,
  Slide,
  Fade,
  Snackbar,
  Tooltip,
  Box,
  Grid,
  Paper,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FaceIcon from "@material-ui/icons/Face";
import UserManual from "../UserManual";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: "center",
    },
    media: {
      paddingTop: "56.25%", // 16:9
      minHeight: 500,

      alignItems: "center",
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
    button: {
      margin: 4,
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

function SlideTransition(props: any) {
  return <Slide {...props} direction="up" />;
}

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

export default function Banner(props: any) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });
  const [open, setOpen] = React.useState(false);

  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick = (Transition: any) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClickTwo = (Transition: any) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleCloseTwo = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={23}>
          <h1
            style={{
              fontFamily: "Kaushan Script",
              fontSize: 50,
              fontWeight: "bold",
              color: "sandybrown",
              backgroundColor: "#3c4f65",
              padding: 20,
            }}
          >
            Cool Trivia
          </h1>

          <h3 style={{ fontFamily: "Kaushan Script" }}>Portfolio Project</h3>
          <Tooltip
            color="primary"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={
              <h1 style={{ fontFamily: "Kaushan Script" }}>
                Project Repository
              </h1>
            }
          >
            <Link
              href="https://github.com/mayallzObject/cool-trivia-front/tree/master"
              target="_blank"
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                aria-label="settings"
              >
                <GitHubIcon fontSize="small" />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip
            color="primary"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={
              <h1 style={{ fontFamily: "Kaushan Script" }}>
                Project Technologies
              </h1>
            }
          >
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={handleClickTwo(TransitionLeft)}
            >
              <InfoOutlinedIcon fontSize="small" />
            </Button>
          </Tooltip>
        </Paper>
        <Snackbar
          style={{ fontSize: 10 }}
          open={open}
          onClose={handleCloseTwo}
          TransitionComponent={transition}
          message={
            <Box>
              <img
                src="https://img.icons8.com/color/96/000000/typescript.png"
                alt="typescript"
              />
              <img
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="nodejs"
              />
              <img
                src="https://img.icons8.com/color/96/000000/javascript.png"
                alt="JS"
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
              <img
                src="https://img.icons8.com/nolan/96/api-settings.png"
                alt="rest"
              />
              <img
                src="https://img.icons8.com/color/96/000000/postgreesql.png"
                alt="postgreesql"
              />
            </Box>
          }
          key={transition ? transition.name : ""}
        />
        <Box mt={5}>
          <Paper elevation={23}>
            <UserManual />
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <Paper elevation={23}>
            <h3
              style={{
                fontFamily: "Kaushan Script",
                paddingTop: 20,
              }}
            >
              {" "}
              Developer Info
            </h3>
            <Tooltip
              color="primary"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title={
                <h1
                  style={{ fontFamily: "Kaushan Script" }}
                >{`Go to ${props.name}'s GitHub `}</h1>
              }
            >
              <Link href={props.gitUrl} target="_blank">
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  aria-label="settings"
                >
                  <GitHubIcon fontSize="small" />
                </Button>
              </Link>
            </Tooltip>

            <Tooltip
              color="primary"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title={
                <h1
                  style={{ fontFamily: "Kaushan Script" }}
                >{`Go to ${props.name}'s LinkedIn profile `}</h1>
              }
            >
              <Link
                href="https://www.linkedin.com/in/ivo-yankov/"
                target="_blank"
              >
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  aria-label="settings"
                >
                  <LinkedInIcon fontSize="small" />
                </Button>
              </Link>
            </Tooltip>

            <Tooltip
              color="primary"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title={
                <h1
                  style={{ fontFamily: "Kaushan Script" }}
                >{`${props.name}'s info`}</h1>
              }
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleClick(SlideTransition)}
              >
                <FaceIcon fontSize="small" />
              </Button>
            </Tooltip>
          </Paper>
        </Box>
      </Grid>

      <Typography paragraph component="h3">
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message={<h2>{props.description}</h2>}
          key={state.Transition.name}
        />
      </Typography>
    </Grid>
  );
}
