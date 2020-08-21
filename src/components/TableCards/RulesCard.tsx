import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

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
            backgroundColor: red[500],
        },
    }),
)

export default function RulesCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardHeader

                title="All about the game"
                subheader="Fun days with internet"
            />
            <CardMedia
                className={classes.media}

                image="https://cdn5.vectorstock.com/i/1000x1000/36/59/retro-pastel-color-smile-pink-brain-with-vector-10373659.jpg"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">

                </Typography>
            </CardContent>
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
                    <Typography>
                        an accepted principle or instruction that states the way things are or should be done, and tells you what you are allowed or are not allowed to do:
                        A referee must know all the rules of the game.
                        The first/most important rule in life is always to appear confident.
                        Before you start your own business you should be familiar with the government's rules and regulations.
                        You must follow/obey/observe the rules.
                        You must not break the rules.
                        In special cases the manager will bend/stretch the rules (= allow the rules to be broken slightly).
                        You can trust Ruth because she always plays (it) by/goes by/does things by the rules (= follows instructions, standards, or rules).
                        [ + to infinitive ] It's against the rules (of/in boxing) to hit below the belt.
                        [ + that ] It's a club rule that new members must sing a song.
                        More examples
                        There are exceptions to every rule.
                        There's an unwritten rule that you don't wear jeans to work.
                        They made an ineffective attempt to get the rules changed.
</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
