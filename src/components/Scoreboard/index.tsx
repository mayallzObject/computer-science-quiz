// Scoreboard/ react / redux components
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

// Redux Store
import { selectUser } from "../../store/user/selectors"

// TypeScript types
import { ScoreBoard } from "./types"

// Mui components
import { StyledTableCell, StyledTableRow, } from "./mui"
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

import axios from 'axios';
import { Avatar } from '@material-ui/core'

const ScoreboardPage = () => {

    const someUser = useSelector(selectUser)
    const [score, setScore] = useState<ScoreBoard[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:4000/score`)
            setScore(res.data)
        }
        getData()
    }, [someUser])


    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">
                            Points
                            </StyledTableCell>
                        <StyledTableCell align="left">
                            P.img
                            </StyledTableCell>
                        <StyledTableCell align="left">
                            Player
                            </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {score.length > 0 && score.map((data, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {data.score}
                            </StyledTableCell>
                            <StyledTableCell
                                align="left">
                                {data.user.name}
                                <Avatar aria-label="recipe"
                                    src={data.user.userImg}
                                >
                                </Avatar>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default ScoreboardPage

