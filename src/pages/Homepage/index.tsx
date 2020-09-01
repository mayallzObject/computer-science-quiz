//HomePage/ react / redux imports 
import React from 'react'

//Components
import QuestionCard from "../../components/Questions/Questions";


//Mui components
import { useStyles, } from "./mui"

import Grid from '@material-ui/core/Grid'
import { Paper, Box } from '@material-ui/core';


type Props = {
    darkMode: boolean
    set_darkMode: (value: boolean) => void
}

export default function Home(props: Props) {
    const classes = useStyles()


    return (
        <Grid className={classes.paper} container spacing={2}>


            <Grid item xs={12} sm={4}>
                <Box mt={10}>
                    <Paper style={{ marginTop: 20, minHeight: 500, borderRadius: 150, backgroundImage: "url(https://image.freepik.com/free-photo/microprocessor-chipset-central-processor-unit-illumination-circuit_34645-889.jpg)" }}>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box mt={10}>
                    <Paper style={{ marginTop: 20, minHeight: 500, borderRadius: 150, backgroundImage: "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)" }}>
                        <QuestionCard />
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box mt={10}>
                    <Paper style={{ marginTop: 20, minHeight: 500, borderRadius: 150, backgroundImage: "url(https://image.freepik.com/free-photo/microprocessor-chipset-central-processor-unit-illumination-circuit_34645-889.jpg)" }}>

                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}
