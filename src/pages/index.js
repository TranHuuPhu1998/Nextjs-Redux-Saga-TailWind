import Head from 'next/head'
import {useEffect} from 'react'
import {fetchListTask} from '../actions/taskActions'
import {useDispatch , useSelector} from 'react-redux'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Nav/Navigation'
import Header from '../components/Header/Header'
import ListCard from '../components/ListCard/ListCard'

export default function Home() {
  const dispatch = useDispatch()
  const tasksReducers = useSelector((state) => state.tasksReducers)

  useEffect(() => {
    dispatch(fetchListTask())
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>

      </Head>
      {/* <Navigation/> */}
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
        <Navigation/>
        <div class="flex flex-col flex-1 w-full">
          <Header/>
          <main class="h-full pb-16 overflow-y-auto">
            <ListCard listTasks = {tasksReducers}/>
          </main>
        </div>
      </div>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
