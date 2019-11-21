import Link from "next/Link"
import AppBar from '@material-ui/core/AppBar';


const linkStyle = {
    marginRight: 15,
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "center"

};



export const Header = () => (


    <AppBar     	>
        <div>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about">< a style={linkStyle}>About</a></Link>

        </div>
    </AppBar>
)

