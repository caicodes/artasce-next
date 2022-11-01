import Head from 'next/head'
import { BeakerIcon, SwatchIcon } from '@heroicons/react/24/solid'
import ThemeSwitch from '../components/ThemeSwitch'

export default function Home() {
  return (
    <div className='h-screen w-full grid place-items-center'>
      <Head>
        <title>Next App with Tailwind</title>
        <meta name="description" content="New next app site for Artasce Creative with Component Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">
          Next Site for Custom UI Components
        </h1>

        <ul className='p-4'>
          <li className='flex gap-2 justify-center'><SwatchIcon className="h-6 w-6 text-lime-500" /> with next-themes</li>
          <li className='flex gap-2 justify-center'><BeakerIcon className="h-6 w-6 text-blue-500" /> with heroicons</li>
        </ul>

        <div className='p-4'>
          <ThemeSwitch />
        </div>

      </main>
      <footer >
        <a
          href="https://artasce.com"
          target="_blank"
          className='flex place-items-center' rel="noreferrer"
        >
          <span className='opacity-40'>Created by{' '}</span>
          <div className='p-2' >
            {/* create svg replacement, make a reusable element for other projects */}
            Artasce Creative
          </div>
        </a>


      </footer>
    </div>
  )
}
