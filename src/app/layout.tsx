import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from '../components/shared/SideBar'
import TopNavbar from '../components/shared/TopNavbar'
import ScrollToTop from '@/components/shared/ScrollToTop'
import Footer from '@/components/shared/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnimeTrix',
  description: 'An ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black w-full text-white max-w-[2500px] m-auto`}>
        <TopNavbar />
        <SideBar />
        <ScrollToTop/>
        <main className='flex flex-col ml-0 md:ml-20 lg:ml-64 '>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
