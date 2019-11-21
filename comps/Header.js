import Link from "next/Link"




const linkStyle = {

    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",


};
export const headerStyle = {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",


};






export default function Header() {



    return (

        <div style={headerStyle}>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about">< a style={linkStyle}>About</a></Link>
            <Link href="/signUp">< a style={linkStyle}>Sign Up Mate</a></Link>
            <Link href="/data">< a style={linkStyle}>Data Page</a></Link>

        </div>

    )
}

