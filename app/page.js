
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import anime from 'animejs'
import TypedTitle from '@/components/typedTitle'
import Typed from 'typed.js'
import ProjectsList from '@/components/projectList'
import AboutCard from '@/components/aboutCard'

export const metadata = {
  title: 'Connor Mulholland',
  description: 'Hello, World!',
}

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 main-gradient">
      <main className="flex flex-col justify-center flex-1 px-20 text-center">
        <div className='main-title'>
          <TypedTitle />
          {/* <p className="mt-3 text-2xl">
            I'm a software engineer living in NYC. I like to build apps and write poetry.
          </p>
          <p className="mt-3 text-2xl">
            I'm working on a few exciting personal projects and am looking for a new role.
          </p>
          <p className="mt-3 text-2xl my-links">
            Check out my <Link href='/projects'>Projects</Link> or Learn more <Link href='/about'>About Me</Link>.
          </p> */}
        </div>
        <div className="about-card-container">
          <AboutCard />
        </div>
        <div className="project-list-container">
          <ProjectsList />
        </div>
      </main>
    </div>
  )
}
