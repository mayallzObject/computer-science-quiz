//HomePage/ react / redux imports 
import React from 'react'

//Components
import QuestionCard from "../../components/Questions/Questions";


//Mui components
import { useStyles } from "./mui"
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


import Banner from '../../components/Banner'
import BannerControls from '../../components/BannerControls'

import Leaderboards from "../../components/TableCards/Leaderboards";
import RulesCard from '../../components/TableCards/RulesCard';
import ScoreTable from '../../components/ScoresTable';


export default function Home() {
    const classes = useStyles()

    return (
        <Grid className={classes.paper} container spacing={2}>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <Banner />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Paper>
                    <BannerControls />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={8}>
                <QuestionCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ScoreTable />
            </Grid>
        </Grid>
    );
}
