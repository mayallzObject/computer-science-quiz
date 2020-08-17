//HomePage/ react / redux imports 
import React from 'react'

//Components
import QuestionCard from '../../components/questionCard'
import ScoreboardPage from '../Scoreboard'

//Mui components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(20),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
)

export default function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid className={classes.paper} container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <QuestionCard />
                </Grid>
                <Grid item className={classes.paper} xs={12} sm={6}>
                    <ScoreboardPage />
                </Grid>
            </Grid>
        </div>
    )
}