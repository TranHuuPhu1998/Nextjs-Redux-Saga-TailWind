import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../styles/Home.module.css'
import {NextSeo} from "next-seo";

const Login = dynamic(()=>import('./login'))

export default function Home() {
  
  return (
    <div className={styles.container + "w-full"}>
      <NextSeo
        config={{
          title: "Custom Title",
          description: "Custom description"
        }}
      />
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
