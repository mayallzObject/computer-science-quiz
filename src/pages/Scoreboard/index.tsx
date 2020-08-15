import React, { useEffect, useState } from 'react';

import { useSelector } from "react-redux"
import { selectUser } from "../../store/user/selectors"



import axios from 'axios';

import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);



const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);



const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



type ScoreBoard = {
    createdAt: string;
    id: string;
    score: number;
    userId: number;
    updatedAt: string;
    user: any;
    name: string;
};




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



    //here we call that api so that it will get all the data of that user

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
