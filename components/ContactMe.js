import styles from '../app/contact/contact.module.css'

export default function ContactMe() {
    return (
        <>
            <h1 className='page-title'>Contact Me</h1>
            <div className={styles.container}>
                <p>Here's how to reach me</p>
                <p>Email: <a className='my-links' href="mailto:mulhollandconnor@icloud.com">mulhollandconnor@icloud.com</a></p>
            </div>
            <div>
                
            </div>
        </>
    )
}