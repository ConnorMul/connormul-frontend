import styles from './about.module.css'

export default function AboutLayout({ children }) {
    return <div className={styles.layoutContainer}>{children}</div>
}