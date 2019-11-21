import React, { FC, MouseEvent } from "react"

import { Layout } from "../comps/MyLayout"
import Link from "next/Link"
import { MaterialUiButton } from "../comps/MaterialUiButton"




interface PostLinkProps {
    title: string

}


const headline = {

    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    fontSize: 40


};





export const PostLink: React.FC<PostLinkProps> = props => (

    <Link href={`/post?title=${props.title}`}>

        <MaterialUiButton onClick={() => alert("redirect")}>
            <a>{props.title}</a>
        </MaterialUiButton>
    </Link>

);

export default function NextJsPractice() {
    return (
        <Layout style={headline}>
            <h1 style={headline}>Next.js Practice</h1>
            <ul>
                <PostLink title="Next.js" />
                <PostLink title="Bla Blub" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}

