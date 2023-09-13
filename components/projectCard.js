'use client'

import { useState } from 'react'
import Image from 'next/image'
import date from 'date-and-time'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false)
    const dateObj = new Date(project.updated_at)
    const formattedDate = date.format(dateObj, 'MMM DD, YYYY h:mm A')

    return (
        <div 
            className={`card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='card-image'>
                <Image 
                    src="/Addison2.jpg"
                    alt="Connor Mulholland"
                    width={200}
                    height={200}

                />
            </div>
            <div className='card-content'>
                <Link href={`/projects/${project.id}`}>
                    <h3>{project.name}</h3>
                </Link>
                <p>{project.description}</p>
                <p>{formattedDate}</p>
            </div>
        </div>
    )
}