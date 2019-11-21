import Header from "../comps/Header"


const layoutStyle = {

    margin: 80,
    padding: 80,
    border: "1px solid #DDD",
    textDecoration: "none"

}

export const Layout = props => (

    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>

);

