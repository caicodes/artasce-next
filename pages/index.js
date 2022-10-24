import Head from 'next/head'
import Image from 'next/image'
import ThemeSwitch from '../components/ThemeSwitch'

export default function Home() {
  return (
    <div className='h-screen w-full grid place-items-center'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello Next with Tailwind CSS!
        </h1>

        <ThemeSwitch />

      </main>
      <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span >
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
