import Image from 'next/image'
import styles from '../app/about/about.module.css'
import img from '../public/me.jpg'

export default function AboutCard() {
    return (
        <>
            {/* <div className="pageTitleContainer">
                <h1 className='pageTitle'>Who's Connor?</h1>
            </div> */}
            <div className={styles.aboutContainer}>
                <div className={styles.container}>
                    <p  className={styles.description}>
                        Hi, I'm Connor! I'm a Software Engineer from NYC who enjoys building cool things on my laptop, writing poetry and touching grass.<br />
                        I have two years of experience working in the industry, and I'm currently looking for a new role. I'm also a poet, and I'm working on a collection of poems that I hope to publish soon.<br />
                        The past two years have allowed me to dive deep into complex codebases and get my hands dirty with a variety of technologies.<br />
                        I have expertise in NextJs, React, Javascript, Django, Python, Ruby, HTML and CSS. I've also worked a bit with Java, Spring, Typescript and NodeJS.<br />
                        
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                        src={img}
                        alt="Connor Mulholland"
                        width={470}
                        height={720}
                    />
                </div>
            </div>
        </>
    )
}