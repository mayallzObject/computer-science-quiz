//HomePage/ react / redux imports 
import React from 'react'


import CategoryCart from 'react'

//Mui components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Paper } from '@material-ui/core'
import BannerControls from '../../components/BannerControls'
import QuestionCard from '../../components/Questions/Questions'

import Banner from '../../components/Banner'
import { useStyles } from './mui'
import ScoresTable from '../../components/ScoresTable'



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
                <ScoresTable />

            </Grid>
            <Grid item xs={12} sm={4}>
                <ScoresTable />
            </Grid>

        </Grid>
    );
}