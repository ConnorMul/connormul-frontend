// import { getProjects } from '../../lib/projects'
import ProjectsLayout from './layout.js'
import styles from './projects.module.css'
import ProjectCard from '@/components/projectCard.js'


export const metadata = {
    title: 'Connor Mulholland | Projects',
    description: 'Here are some of my projects!'
}

async function getProjects() {
    const res = await fetch('https://api.github.com/users/connormul/repos?sort=created')
    const json = await res.json()
    return json
}

const projects = await getProjects()

export default function Projects() {
    return (
        <>
            <div className="pageTitleContainer">
                <h1 className='pageTitle'>Projects</h1>
                <p>Here are some of my projects!</p>
            </div>
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} image="/Addison.png" />
                ))}
            </div>
        </>
    )
}
