//HomePage/ react / redux imports 
import React from 'react'

//Mui components

import Grid from '@material-ui/core/Grid'

import { Paper } from '@material-ui/core'
import BannerControls from '../../components/BannerControls'


import Banner from '../../components/Banner'
import { useStyles } from './mui'
import ScoresTable from '../../components/TableCards/ScoresTable'
import Leaderboards from '../../components/TableCards/Leaderboards'
import RulesCard from '../../components/TableCards/RulesCard'


export default function WeeklyRace() {
    const classes = useStyles()

    return (
        <Grid className={classes.paper} container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Paper>
                    <Banner />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper>
                    <BannerControls />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <ScoresTable />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Leaderboards />

            </Grid>
            <Grid item xs={12} sm={4}>
                <RulesCard />
            </Grid>

        </Grid>
    );
}