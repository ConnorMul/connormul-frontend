import styles from '../styles/about.module.css'

export default function AboutCard() {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Hi, {`I'm`} Connor! {`I'm`} a Software Engineer from NYC who enjoys building cool things on my laptop, writing poetry, binging shows and movies, learning about the latest tech advancements and from time to time touching grass.
                I have 2 years of professional experience working as a Software Engineer, {`I'm`} looking for a new role and am working on a collection of poems that I hope to publish soon.<br />
                The past 2 years working in tech have allowed me to dive deep into complex codebases and get my hands dirty with a variety of technologies across the stack. From Django to NextJs to AWS, {`I've`} worked with the necessary tech to scale web apps to hundreds of thousands of users.<br />
                My most recent role was at an early stage startup, <a className='my-links-inline' href="https://www.invisr.com/">Invisr</a>, where I worked with a small team building out SaaS products for companies in the mortgage, insurance and banking industries. As well as building and maintaining a low-code platform that allowed non-technical clients to make changes to their apps.<br />
                I have expertise in <strong>NextJs, React, Javascript, Django, Python, Ruby, HTML and CSS</strong>. {`I've`} also worked with <strong>Salesforce, Java, Spring, Typescript, NodeJS, Docker, Kubernetes, AWS, MongoDB and PostgreSQL.</strong>
                {`I'm`} eager to find my new adventure, either with a company or on my own. If {`you're`} interested in working together, please reach out! {`I'd`} love to chat.<br />
            </p>
        </div>
    )
}