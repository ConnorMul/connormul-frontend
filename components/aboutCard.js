'use client'

import { useState } from 'react'
import Image from 'next/image'
import date from 'date-and-time'

export default function AboutCard() {
    const [hovered, setHovered] = useState(false)

    return (
        <div 
            className={`card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='card-content'>

            </div>
        </div>
    )
}