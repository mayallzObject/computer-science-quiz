import { makeStyles } from "@material-ui/core";



export const useStyles = makeStyles({
    root: {
        align: "center",
        width: "100%",
    },
    card: {
        padding: 30,
        alignItems: "center",

        square: "false",
    },
    title: {

        padding: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",


    },
    content: {
        backgroundColor: "#353839",
    },

    button: {

        margin: 5,
        marginTop: 5,
        fontSize: 10,
        fontWeight: "bold",
    }



})

export const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 10,
    style: { width: '20rem', height: '100rem' },
};