import Link from "next/link";
import styles from './contact.module.css'
export default function Contact() {
    return (
        <>
            <div className={styles.container}>
                <h1 className='pageTitle'>Contact Connor</h1>
                <p>Here's how to reach me</p>
                <p>My email is <a href="mailto:mulhollandconnor@icloud.com">mulhollandconnor@icloud.com</a></p>
            </div>
            <div>
                
            </div>
        </>
    )
}