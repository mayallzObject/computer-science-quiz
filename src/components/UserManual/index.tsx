import React from "react";

//Mui components
import Card from "@material-ui/core/Card";
import { Paper, CardContent } from "@material-ui/core";

export default function UserManual() {
  return (
    <Paper elevation={23}>
      <Card>
        <CardContent>
          <Paper
            elevation={23}
            style={{
              borderRadius: 360,
              backgroundColor: "#28784b",
              color: "sandybrown",
            }}
          >
            <h2
              style={{
                fontFamily: " 'Nova Oval', cursive",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              User Manual
            </h2>
          </Paper>
          <div
            style={{
              fontFamily: "'Nova Oval', cursive",
              fontSize: 20,
              listStyle: "none",
            }}
          >
            <ul
              style={{
                fontFamily: "'Nova Oval', cursive",
                fontSize: 20,
                listStyle: "none",
              }}
            >
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
