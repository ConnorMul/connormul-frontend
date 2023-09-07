import styles from './layout.module.css'

export default function AboutLayout({ children }) {
    return <section className={styles.container}>{children}</section>
}