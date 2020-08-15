import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import axios from 'axios';

import { ScoreBoard } from "./types"

import { selectUser } from "../../store/user/selectors"

//? MUI components
import { StyledTableCell, StyledTableRow, useStyles } from "./mui"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


const ScoreboardPage = () => {

    const someUser = useSelector(selectUser)
    const [score, setScore] = useState<ScoreBoard[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:4000/score`)
            console.log(res.data);
            setScore(res.data)
        }
        getData()
    }, [someUser])


    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right">Points</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {score.length > 0 && score.map((data, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {data.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{data.score}</StyledTableCell>
                                <StyledTableCell align="right">{data.user.name}</StyledTableCell>
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ScoreboardPage
