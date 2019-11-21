import { Layout } from "../comps/MyLayout"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
export default function About() {

    return (

        <Layout>
            <Card>
                <CardContent>
                    <CardHeader>Hello Card Header</CardHeader><p>This is about page</p></CardContent></Card></Layout>)

}