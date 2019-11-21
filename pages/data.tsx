
import * as React from "react"
import { useState, useEffect, SFC } from "react"
import { Layout } from "../comps/MyLayout"


interface AppProps {
    props: string

}

interface Response {
    userID: number
    id: string
    title: string
    body: string

}
const Data: React.SFC<AppProps> = (props) => {

    const [name, setName] = useState<Response[]>([])
    const getName = async () => {

        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let name = await res.json()
        setName(name)
    }

    useEffect(() => {
        getName()
    }, []);

    return (
        <Layout>
            <div>
                {name.map(data => (
                    <div>{data.title}</div>
                ))}
            </div>
        </Layout>
    )

}
export default Data;