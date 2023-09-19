import styles from '../app/about/about.module.css'

export default function AboutCard() {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                Hi, I'm Connor! I'm a Software Engineer from NYC who enjoys building cool things on my laptop, writing poetry, binging shows and movies, learning about the latest tech advancements and from time to time touching grass.
                I have two years of professional experience working as a Software Engineer and I'm currently looking for a new role and I'm working on a collection of poems that I hope to publish soon.<br />
                The past two years working in tech have allowed me to dive deep into complex codebases and get my hands dirty with a variety of technologies across the stack.<br />
                My most recent role was at an early stage startup called <a className='my-links' href="https://www.invisr.com/">Invisr</a>, where I worked with a small team building out SaaS products for companies in the mortgage, insurance and banking industries. As well as building a low-code platform that allowed non-technical clients to make necessary changes to their apps.<br />
                I have expertise in <strong>NextJs, React, Javascript, Django, Python, Ruby, HTML and CSS</strong>. I've also worked a bit with Java, Spring, Typescript and NodeJS. I've worked with Docker, Kubernetes, AWS and PostgreSQL.
                I'm eager to find my new adventure, either with a company or on my own. If you're interested in working together, please reach out! I'd love to chat.<br />
            </p>
        </div>
    )
}