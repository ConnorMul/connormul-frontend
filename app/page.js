
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import anime from 'animejs'
import TypedTitle from '@/components/typedTitle'
import Typed from 'typed.js'
import ProjectsList from '@/components/projectList'
import AboutCard from '@/components/aboutCard'
import DownloadButton from '@/components/downloadButton'
import OpenFile from '@/components/openFileButton'
import TestModal from '@/components/TestModal'

export const metadata = {
  title: 'Connor Mulholland',
  description: 'Hello, World!',
}

export default function Home() {

  return (
    <div className="items-center justify-center min-h-screen py-2">
      <main className="justify-center flex-1 text-center">
        <div className='main-title'>
          <TypedTitle />
          <br />
          <h2 className='sub-title text-4xl font-bold'>#1 Software Engineer in the world 3 years in a row*</h2>
          <p>*according to my mom</p>
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
        <div className="download-button-container">
          {/* <OpenFile /> */}
          <TestModal />
          <DownloadButton fileUrl='/Connor-Mulhollands-Resume.pdf' fileName='My Resume'/>
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
