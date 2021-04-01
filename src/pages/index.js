import Head from 'next/head'
import React , {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Singup from './singup/index'

export default function Home() {
  return (
    <div className={styles.container + " w-full"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>

      </Head>
      {/* <Navigation/> */}
      
      <div className="bg-blue-300	flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900" >
          <Singup/>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
