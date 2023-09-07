import styles from './layout.module.css'

export default function ProjectsLayout({ children }) {
    return <div className={styles.container}>{children}</div>
}