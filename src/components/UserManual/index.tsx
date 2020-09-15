import React from "react";

//Mui components
import Card from "@material-ui/core/Card";
import { Paper, CardContent } from "@material-ui/core";

export default function UserManual() {
  return (
    <Paper elevation={23}>
      <Card>
        <CardContent>
          <h2
            style={{
              fontFamily: "Kaushan Script",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            User Manual
          </h2>
          <div
            style={{
              fontFamily: "Kaushan Script",
              fontSize: 20,
            }}
          >
            <ul>
              <li>Register an account</li>
              <li>Answer 10 Q.</li>
              <li>Submit your Score</li>
              <li>Progress in level</li>
              <li>Follow your position</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}
