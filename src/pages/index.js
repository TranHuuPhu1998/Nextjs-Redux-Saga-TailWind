import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../styles/Home.module.css'

const Login = dynamic(()=>import('./login'))

export default function Home() {
  
  return (
    <div className={styles.container + "w-full"}>
      <Head>
        <title>Trello App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>

      </Head>
      
      <div className="bg-blue-300	flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900" >
          <Login/>
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
