import Head from 'next/head.js'
import AboutLayout from './layout.js'

export default function About() {
    return (
        <AboutLayout>
            <Head>
                <title>About Connor</title>
            </Head>
            <div className="title">
                <h1>Who's Connor?</h1>
            </div>
            
            <div className="content">
                <p>Hi, I'm Connor!</p>
            </div>
        </AboutLayout>
    )
}