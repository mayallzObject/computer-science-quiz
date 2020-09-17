import React from "react";

//Mui components
import Card from "@material-ui/core/Card";
import { Paper, CardContent } from "@material-ui/core";
import { useStyles } from "../../components/Banner";

export default function UserManual() {
  const classes = useStyles();
  return (
    <Paper elevation={23}>
      <Card>
        <CardContent>
          <Paper elevation={23} className={classes.smHeader}>
            <h2
              className={classes.smHeader}
              style={{
                fontFamily: "Kaushan Script",
                fontWeight: "bold",
                color: "sandybrown",
              }}
            >
              User Manual
            </h2>
          </Paper>
          <div
            style={{
              fontFamily: "Kaushan Script",
              fontSize: 12,
            }}
          >
            <h2>Register an account</h2>
            <h2>Answer 10 random Qestions.</h2>
            <h2>Submit your Score</h2>
            <h2>Progress in level</h2>
            <h2>Follow your position</h2>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}
