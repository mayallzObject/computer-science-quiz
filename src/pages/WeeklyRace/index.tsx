//HomePage/ react / redux imports 
import React from 'react'


//Mui components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RecipeReviewCard from '../../components/categoryTable'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
        },
    }),
)

export default function WeeklyRace() {
    const classes = useStyles()

    return (





        <Grid className={classes.paper} container spacing={2}>
            <Grid item xs={12} sm={6}>
                <RecipeReviewCard />
            </Grid>

            <Grid item xs={12} sm={6}>
                <RecipeReviewCard />
            </Grid>

        </Grid>
    );
}