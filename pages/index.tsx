import React, { FC, MouseEvent } from "react"

import { Layout } from "../comps/MyLayout"
import Link from "next/Link"
import Button from "@material-ui/core/Button";




interface PostLinkProps {
    title: string

}



export const PostLink: React.FC<PostLinkProps> = props => (

    <Link href={`/post?title=${props.title}`}>

        <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => alert("redirect")}

        ><a>{props.title}</a></Button>
    </Link>

);

export default function NextJsPractice() {
    return (
        <Layout>
            <h1>Next.js Practice</h1>
            <ul>
                <PostLink title="Next.js" />
                <PostLink title="Bla Blub" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}

