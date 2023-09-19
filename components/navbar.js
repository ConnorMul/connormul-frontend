'use client'

import Link from 'next/link';
import { roboto } from '@/lib/fonts'
import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function Navbar() {
    const animationRef = useRef(null)
    
    useEffect(() => {
        animationRef.current = anime({
            targets: ['.navLinks', '.navLogo'],
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutSine',
            delay: 200,
        })
    }, [])

    return (
        <nav className="navbar">
            <div className="navLogo">
                <Link href="/">
                    <h1 className={roboto.className}>Connor Mulholland</h1>
                </Link>
            </div>
            <div className={`navLinks ${roboto.className}`}>
                <Link href='#title' spy={true} smooth={true} duration={500}>
                    Home
                </Link>
                <Link href='#about' spy={true} smooth={true} duration={500}>
                    Who's Connor?
                </Link>
                <Link href='#projects' spy={true} smooth={true} duration={500}>
                    Projects
                </Link>
                <Link href='#contact-me' spy={true} smooth={true} duration={500}>
                    Contact
                </Link>
            </div>
        </nav>
    )
}