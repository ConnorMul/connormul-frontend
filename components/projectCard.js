'use client'

import { useState } from 'react'
import Image from 'next/image'
import date from 'date-and-time'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false)
    const dateObj = new Date(project.date)
    const formattedDate = date.format(dateObj, 'MMM DD, YYYY h:mm A')

    return (
        <div 
            className={`card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='card-image'>
                <Image 
                    src={project.image}
                    alt="Connor Mulholland"
                    width={260}
                    height={400}

                />
            </div>
            <div className='card-content'>
                <Link href={`/projects/${project.id}`}>
                    <h3 className='card-name'>{project.name}</h3>
                </Link>
                <p>{project.description}</p>
                <p>{formattedDate}</p>
            </div>
        </div>
    )
}