import React from "react";

// Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Link,
  Button,
  Slide,
  Fade,
  Snackbar,
  Tooltip,
  CardActions,
  withStyles,
  Paper,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      paddingTop: "56.25%", // 16:9

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

export default function OwnerCard(props: any) {
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

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.name}
        subheader="Codaisseur Academy Graduate"
        action={
          //@ts-ignore
          <Tooltip
            color="primary"
            size="medium"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={<h2>{`Go to ${props.name}'s GitHub `}</h2>}
          >
            {/* 
          //@ts-ignore */}
            <Link href={props.gitUrl} target="_blank" isExternal>
              <Button variant="contained" color="primary" aria-label="settings">
                <GitHubIcon fontSize="small" />
              </Button>
            </Link>
          </Tooltip>
        }
      />

      <Typography paragraph>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message={<h1>{props.description}</h1>}
          key={state.Transition.name}
        />
      </Typography>

      <CardMedia
        className={classes.media}
        image={props.imageUrl}
        title={props.name}
      />
      <CardContent>
        <Typography paragraph>About me: {props.aboutMe}</Typography>
      </CardContent>
      <CardActions>
        {/* 
              //@ts-ignore */}
        <Button
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
    </Card>
  );
}
