import styles from './about.module.css'
import Image from 'next/image'
import img from '../../public/Addison.png'

export const metadata = {
    title: "Who's Connor?",
    description: 'Connor is me!',
}

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <p  className={styles.description}>
                    Hi, I'm Connor! I'm a Software Engineer from NYC who enjoys getting to build cool things on my laptop!<br />
                    I have two years of experience working in the industry, and I'm currently looking for a new role.<br />
                    I'm also a poet, and I'm working on a collection of poems that I hope to publish soon.<br />
                    The past two years have allowed me to dive deep into complex codebases and get my hands dirty with a variety of technologies.<br />
                        
                </p>
            </div>
            <div className={styles.imgContainer}>
                <Image 
                    src={img}
                    alt="Connor Mulholland"
                    width={550}
                    height={400}
                />
            </div>
        </>
    )
}