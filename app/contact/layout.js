import styles from './contact.module.css'

export default function ContactLayout({ children }) {
    return <div className={styles.layoutContainer}>{children}</div>
}