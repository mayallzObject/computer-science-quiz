import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),

    },
    button: {
        fontWeight: "bold",
        color: "#6BCAE2",
        backgroundImage: "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",
        "&:hover": {
            color: "#000000",
            backgroundColor: "#ffff00",
        },
    },
}))
