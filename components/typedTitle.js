'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { roboto } from '@/lib/fonts'

export default function TypedTitle() {
    const typedRef = useRef(null)
    
    useEffect(() => {
      const typed = new Typed('#typed', {
        strings: ["Hello World, I'm Connor!"],
        typeSpeed: 100,
        backSpeed: 50,
        // loop: true,
        showCursor: false,
      })
      typedRef.current = typed
    }, [])

    return (
        <div className='typedContainer'>
            <h1 className={`text-7xl font-bold hello ${roboto.className}`}>
                <span ref={typedRef} id="typed"></span>
            </h1>
        </div>
    )
}