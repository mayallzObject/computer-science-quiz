import React from 'react';

//Components
import ScoreBoard from '../Scoreboard';

//Mui components
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Box, CardHeader, Paper, CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: 10,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: blue[500],
        },
    }),
)

export default function ScoresTable() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title="King of the hill"
                    subheader="montly pints race"
                />
                <CardMedia
                    className={classes.media}

                    image="https://us.123rf.com/450wm/wowomnom/wowomnom1607/wowomnom160700014/60106421-vector-illustration-of-retro-pastel-color-smile-pink-brain-with-glasses-riding-skateboard-on-gray-ba.jpg?ver=6"
                />
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Paper>
                            <Box>
                                <ScoreBoard />
                            </Box>
                        </Paper>


                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
