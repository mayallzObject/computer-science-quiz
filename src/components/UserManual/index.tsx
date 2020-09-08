import React from "react";

//Components

//Mui components
import Card from "@material-ui/core/Card";
import { Paper, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export default function AboutCard() {
  return (
    <Paper elevation={23}>
      <Card>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
            component="ul"
            style={{ fontFamily: "Kaushan Script", fontWeight: "bold" }}
          >
            <ul>
              <li>Register an account</li>
              <li>Answer 10 Q.</li>
              <li>Submit your Score</li>

              <li>Progress in level</li>
              <li>Follow your position</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
