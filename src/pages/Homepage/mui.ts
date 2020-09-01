import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {

            padding: theme.spacing(5),
            textAlign: 'center',
        },
    }),
)

export const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
};