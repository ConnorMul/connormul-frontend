import Navbar from '../components/navbar'
import MenuIcon from '@/components/menuIcon'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Connor Mulholland',
  description: 'Hello, World!',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`main-gradient ${roboto.className}`}>
        <Navbar />
        {children}
        {/* <MenuIcon /> */}
      </body>
    </html>
  )
}
