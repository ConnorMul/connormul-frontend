import ProjectCard from './projectCard'
import styles from '../app/projects/projects.module.css'
import { allProjects } from '@/lib/projects'

export default function ProjectsList() {
    return (
        <>
            <div className="pageTitleContainer">
                <h1 className='pageTitle'>Projects</h1>
            </div>
            <div className={styles.projectList}>
                {allProjects.map((project) => (
                    <ProjectCard project={project} key={project.id} image="/Addison.png" />
                ))}
            </div>
        </>
    )
}