import React from "react";

//Mui components
import Card from "@material-ui/core/Card";
import { Paper, CardContent } from "@material-ui/core";

export default function UserManual() {
  return (
    <Paper elevation={23}>
      <Card>
        <CardContent>
          <Paper elevation={23}>
            <h2
              style={{
                fontFamily: "Kaushan Script",
                fontWeight: "bold",
                color: "sandybrown",
                backgroundColor: "#3c4f65",
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
            <p>Register an account</p>
            <p>Answer 10 random Qestions.</p>
            <p>Submit your Score</p>
            <p>Progress in level</p>
            <p>Follow your position</p>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}
