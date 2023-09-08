// import { useEffect, useState } from 'react'
// import { getProjects } from '../../lib/projects'
import ProjectsLayout from './layout.js'
import styles from './projects.module.css'


export const metadata = {
    title: 'My Projects',
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
            <div>
                <h1 className='pageTitle'>Projects</h1>
                <p>Here are some of my projects!</p>
            </div>
            <div>
                <div className={styles.projectList}>
                    {projects.map((project) => (
                        <div className={styles.project} key={project.id}>
                            <h3>{project.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
