import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Amsterdam, The Netherlands",
    imgPath:
      "https://static.vueling.com/blog/media/1063/004-20-amsterdam-kiribatis.jpg",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "The Denmark Strait, The Biggest waterfall on the planet",
    imgPath:
      "https://steemitimages.com/DQmNdMQaxK5JV6V5vKeUaMhc7F9NmzXEt3f31cPo68uwcSD/1_49zcmrM3PFvChMut-fazCw.jpeg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "The Piraminds, Egypt",
    imgPath:
      "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/11/12/3185811003.jpg",
  },
  {
    label: "The Seychelles Islands, Indian Ocean",
    imgPath:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Africa/Seychelles/AP78907278_Seychelles_Trave.jpg?imwidth=1400",
  },
  {
    label: "Bermuda Triangle",
    imgPath:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/10/bermudatriangl-1477104012.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    padding: 20,
    height: 70,
    paddingLeft: theme.spacing(4),
  },
  img: {
    height: 250,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  button: {
    fontFamily: "Kaushan Script",
    fontWeight: "bold",
  },
}));

function CoolPlaces() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={23} className={classes.header}>
        <Typography
          style={{ fontFamily: "Kaushan Script", alignContent: "center" }}
        >
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default CoolPlaces;
