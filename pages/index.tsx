import * as React from 'react'
import { NextPage } from "next"
import { Layout } from "../comps/MyLayout"
import Link from "next/Link"



interface PostLinkProps {
    title: string

}

export const PostLink: React.FC<PostLinkProps> = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
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