import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// Redux Store
import { selectUser } from "../../store/user/selectors";

// TypeScript types
import { ScoreBoard } from "./types";

// Mui components
import { StyledTableCell, StyledTableRow } from "./styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const Scoreboard = () => {
  const someUser = useSelector(selectUser);
  const [score, setScore] = useState<ScoreBoard[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://cooltrivia.herokuapp.com/score`);
      setScore(res.data);
    };
    getData();
  }, [someUser]);

  return (
    <Paper elevation={23}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="left"
                style={{
                  fontFamily: "Kaushan Script",
                  backgroundColor: "#3c4f65",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Place
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  fontFamily: "Kaushan Script",
                  backgroundColor: "#3c4f65",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Points
              </StyledTableCell>
              <StyledTableCell
                align="left"
                style={{
                  fontFamily: "Kaushan Script",
                  backgroundColor: "#3c4f65",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Player
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {score.length > 0 &&
              score.map((data, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell style={{ fontFamily: "Kaushan Script" }}>
                    {data.id}
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ fontFamily: "Kaushan Script" }}
                  >
                    {data.score}
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ fontFamily: "Kaushan Script" }}
                  >
                    {data.user.name}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Scoreboard;
