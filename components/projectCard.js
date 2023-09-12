'use client'

import { useState } from 'react'
import Image from 'next/image'
import date from 'date-and-time'

export default function ProjectCard({ project, image }) {
    const [hovered, setHovered] = useState(false)
    const dateObj = new Date(project.updated_at)
    const formattedDate = date.format(dateObj, 'MMM DD, YYYY hh:mm a')

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
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{formattedDate}</p>
            </div>
        </div>
    )
}