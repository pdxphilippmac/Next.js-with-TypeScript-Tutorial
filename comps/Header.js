import Link from "next/Link"

const linkStyle = {
    marginRight: 15
};

export const Header = () => (



    <div>
        <Link href="/"><a style={linkStyle}>Home</a></Link>
        <Link href="/about">< a style={linkStyle}>About</a></Link>

    </div>
)

