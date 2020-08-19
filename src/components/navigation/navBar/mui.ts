import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),

    },
    btn: {
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
    },
}))