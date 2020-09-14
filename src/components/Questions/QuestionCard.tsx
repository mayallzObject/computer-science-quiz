import React from "react";
import { Props } from "./types";
import {
  Button,
  Typography,
  Grid,
  ButtonGroup,
  Paper,
} from "@material-ui/core";

import { useStyles } from "./styles";

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.title}>
          <div
            style={{
              fontWeight: "bold",
              fontFamily: "Kaushan Script",
              fontSize: 14,
              color: "sandybrown",
            }}
          >
            Question: {questionNr} / {totalQuestions}
          </div>

          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="div"
          >
            <div>{renderHTML(question)}</div>
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
  );
};

export default QuestionCard;
