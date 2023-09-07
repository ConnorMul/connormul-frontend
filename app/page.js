import Image from 'next/image'
import Navbar from './components/navbar'

export const metadata = {
  title: 'Connor Mulholland',
  description: 'Hello, World!',
}

export default function Home({ Component, pageProps }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Hello, World!
            </h1>
            <p className="mt-3 text-2xl">
              Welcome to my website!
            </p>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
             </div>
          </main>
        </div>
      </body>
    </html>
  )
}
