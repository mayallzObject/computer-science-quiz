//HomePage/ react / redux imports 
import React from 'react'

//Components
import QuestionCard from "../../components/Questions/Questions";


//Mui components
import { useStyles } from "./mui"
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'


import Banner from '../../components/Banner'
import ScoresTable from '../../components/TableCards/ScoresTable';
import RulesCard from '../../components/TableCards/RulesCard';


export default function Home() {
    const classes = useStyles()

    return (
        <Grid className={classes.paper} container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Paper>
                    <Banner />
                    <ScoresTable />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <QuestionCard />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper>
                    <RulesCard />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
        </Grid>
    );
}
