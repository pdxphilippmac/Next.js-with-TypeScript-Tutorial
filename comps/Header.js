import Link from "next/Link"
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';


const linkStyle = {
    marginRight: 15,
    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "center"

};


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
        width: '100%'
    }
}));



export default function Header() {
    const classes = useStyles();


    return (
        <AppBar className={classes.paper}>
            <div>
                <Link href="/"><a style={linkStyle}>Home</a></Link>
                <Link href="/about">< a style={linkStyle}>About</a></Link>
                <Link href="/signUp">< a style={linkStyle}>Sign Up Mate</a></Link>

            </div>
        </AppBar>
    )
}

