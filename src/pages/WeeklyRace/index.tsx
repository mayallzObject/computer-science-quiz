//HomePage/ react / redux imports 
import React from 'react'

//Components
import QuestionCard from "../../components/Questions/Questions";


//Mui components
import { useStyles } from "./mui"
import { Paper, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


import Banner from '../../components/Banner'

import ScoreTable from '../../components/ScoresTable'
import ScoresTable from '../../components/TableCards/ScoresTable';
import Leaderboards from '../../components/TableCards/Leaderboards';
import RulesCard from '../../components/TableCards/RulesCard';
import ScoreboardPage from '../../components/Scoreboard';


export default function Home() {
    const classes = useStyles()

    return (
        <Box mt={5}>
            <Grid className={classes.paper} container spacing={4}>

                <Grid item xs={12} sm={3} >
                    <ScoreboardPage />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <ScoresTable />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper>
                        <Leaderboards />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}