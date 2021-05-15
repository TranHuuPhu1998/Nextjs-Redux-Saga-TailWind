import App from 'next/app'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {AUTHORIZATION_KEY} from '../constants'
import {ToastContainer} from 'react-toastify';
import axiosService from '../common/Theme/axiosService'
import makeStore from "../redux/configureStore"

import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import "../styles/main.css"
import "../styles/c3.css"

import 'react-toastify/dist/ReactToastify.css'

const Loading = dynamic(()=>import('../components/Loading/Loading'))

function MyApp({ Component, pageProps }) {
  const [token , SetToken] = useState(String)
  const router = useRouter()
 
  useEffect(()=> {

    const token = localStorage.getItem(AUTHORIZATION_KEY);

    if(router.pathname === "/forgotpassword"){
      router.push('/forgotpassword');
    } 
    else if(router.pathname === "/signup"){
      router.push("/signup");
    }

    if(token && token !== 'undefined') {
      SetToken(token);
      axiosService.setHeader('Authorization' , `Bearer ${token}`);
    }

  },[])

  return (
    <>
      <Loading/>
      <ToastContainer></ToastContainer>
      <Component {...pageProps} />
    </>
  )
}

export default makeStore.withRedux(MyApp);
