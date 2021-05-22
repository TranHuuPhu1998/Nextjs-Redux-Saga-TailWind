import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const Navigation = ({onClickOutSide}) => {
  const router = useRouter();
  return (
    <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block border-solid border-r-2 border-light-blue-500 border-opacity-75"
      onClick={onClickOutSide}
    >
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          TRELLO ADMIN
        </a>
        <ul className="mt-6">
          <li className="relative ">
            <div className={router.pathname == "/dashboard" ? "bg-green-500 px-6 py-3 text-white" : "px-6 py-3"}>
              <Link href="/dashboard">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"  
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="ml-4">
                      Dashboard
                  </span>
                </a>
              </Link>

            </div>
          </li>
        </ul>
        <ul>
          <li className="relative">
            <div className={router.pathname == "/projectclient" ? "bg-green-500 px-6 py-3 text-white" : "px-6 py-3"}>
              <Link href="/projectclient">
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                  <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="ml-4">
                  Project Manager
                </span>
                </a>
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className={router.pathname == "/usermanager" ? "bg-green-500 px-6 py-3 text-white" : "px-6 py-3"}>
              <Link href="/usermanager" >
                <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="ml-4">User Manager</span>
                </a>
              </Link>
            </div>
          </li>
          <li className="relative">
            <div className={router.pathname == "/charts" ? "bg-green-500 px-6 py-3 text-white" : "px-6 py-3"}>
            <Link href="/charts">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span className="ml-4">Charts</span>
              </a>
            </Link>
            </div>
          </li>
          <li className="relative">
            <div className={router.pathname == "/library" ? "bg-green-500 px-6 py-3 text-white" : "px-6 py-3"}>
            <Link href="/library">
              <a
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
                <span className="ml-4">React Library</span>
              </a>
            </Link>
            </div>
          </li>
        </ul>
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
