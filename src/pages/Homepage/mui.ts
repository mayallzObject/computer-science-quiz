import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {

            padding: theme.spacing(10),
            textAlign: 'center',
        },
    }),
)

