import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 1,

        padding: theme.spacing(1),

    },
    btn: {
        fontWeight: "bold",
        color: "#aa0d00",
        backgroundColor: "#ffffff",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
    },
}))

