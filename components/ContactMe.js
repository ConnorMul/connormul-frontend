import styles from '../styles/contact.module.css'
import { InboxIcon, PhoneIcon } from "@heroicons/react/24/outline"

export default function ContactMe() {
    return (
        <>
            <h1 className='page-title'>Contact Me</h1>
            <div className={styles.container}>
                <div className='contact-info'>
                    <InboxIcon className="h-6 w-6 mx-2" /><a className='my-links' href="mailto:mulhollandconnor@icloud.com">mulhollandconnor@icloud.com</a>
                    <PhoneIcon className="h-6 w-6 mx-2" /><a className='my-links' href="tel:1-516-458-4636">516-458-4636</a>
                </div>
            </div>
        </>
    )
}