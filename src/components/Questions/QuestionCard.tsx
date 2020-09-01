import React, { useState } from "react";
import { Props } from "./types";
import {
  Button,
  Typography,
  Box,
  Grid,
  ButtonGroup,
  IconButton,
  Paper,
} from "@material-ui/core";

import { useStyles } from "./mui";

const renderHTML = (rawHTML: string) =>
  React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const classes = useStyles();

  return (
    <Box style={{ borderRadius: 150 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={23}
            style={{
              borderRadius: 150,
              backgroundImage:
                "url(https://image.freepik.com/free-photo/microprocessor-chipset-central-processor-unit-illumination-circuit_34645-889.jpg)",
            }}
          >
            <Typography variant="body2" color="textPrimary" component="div">
              <div>
                Question: {questionNr} / {totalQuestions}
              </div>
            </Typography>
            <Typography
              className={classes.title}
              variant="body2"
              color="textSecondary"
              component="div"
            >
              <div className={classes.content}>{renderHTML(question)}</div>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup orientation="vertical">
            {answers.map((answer) => (
              <Button
                key={answer}
                color="primary"
                variant="contained"
                className={classes.button}
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <p dangerouslySetInnerHTML={{ __html: answer }} />
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionCard;
