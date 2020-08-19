//HomePage/ react / redux imports 
import React, { useState, useEffect } from 'react'

//Components
import QuestionCard from '../../components/questionCard'


//Mui components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RecipeReviewCard from '../../components/categoryTable'


import { Box, Paper, Card, CardContent, CardMedia } from '@material-ui/core'




import CategoryCart from '../../components/categoryTable/category'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(4),
            textAlign: 'center',
        },

    }),
)

export default function Home() {



    const classes = useStyles()



    return (
        <Grid className={classes.paper} container spacing={2}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <CardMedia

                            image="https://media.nationalgeographic.org/assets/photos/000/343/custom/34332_610x343.jpg"
                            title="GameImage"
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <RecipeReviewCard />
                <RecipeReviewCard />
            </Grid>
            <Grid item xs={12} sm={6}>
                <QuestionCard />
            </Grid>
            <Grid item xs={12} sm={3}>
                <CategoryCart />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        General Knowledge
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        Entertainment
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        Science
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
                        Mythology
                        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
                        Geography
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
                        History
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        Politics
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        Art
        </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                        Animals
        </Box>

                </Grid>
            </Grid>



        </Grid>

    );
}
