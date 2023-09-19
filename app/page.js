
import TypedTitle from '@/components/typedTitle'
import ProjectsList from '@/components/projectList'
import AboutCard from '@/components/aboutCard'
import DownloadButton from '@/components/downloadButton'
import TestModal from '@/components/TestModal'
import ContactMe from '@/components/ContactMe'
import Contact from './contact/page'

export const metadata = {
  title: 'Connor Mulholland',
  description: 'Hello, World!',
}

export default function Home() {

  return (
      <main className="justify-center flex-1 text-center">
        <div className='main-title' id='title'>
          <TypedTitle />
          <br />
          <h2 className='sub-title text-4xl font-bold'>#1 Software Engineer in the world 3 years in a row*</h2>
          <p>*according to my mom</p>
        </div>
        <div className="download-button-container">
          <TestModal />
          <DownloadButton fileUrl='/Connor-Mulhollands-Resume.pdf' fileName='My Resume'/>
        </div>
        <div className="about-card-container" id='about'>
          <AboutCard />
        </div>
        <div className="project-list-container" id='projects'>
          <ProjectsList />
        </div>
        <div className='contact-container' id='contact-me'>
            <ContactMe />
        </div>
      </main>
  )
}
