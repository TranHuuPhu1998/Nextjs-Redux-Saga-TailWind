import App from 'next/app'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {AUTHORIZATION_KEY} from '../constants'
import {ToastContainer} from 'react-toastify';

import { NextSeo } from 'next-seo';
import nextSeoConfig from "../../next-seo.config";

import axiosService from '../common/Theme/axiosService'
import store , { makeStore , useStore } from "../redux/configureStore"

import "tailwindcss/tailwind.css"
import "../styles/tailwind.css"
import "../styles/main.css"
import "../styles/c3.css"
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'

const Loading = dynamic(()=>import('../components/Loading/Loading'))

function MyApp({ Component, pageProps }) {
 
  const store = useStore(pageProps.initialReduxState)
  
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
    <Provider store={store}>
      <NextSeo {...nextSeoConfig} />
      <Loading/>
      <ToastContainer></ToastContainer>
      <Component {...pageProps} />
    </Provider>
  )
}

// export default store.withRedux(MyApp);
export default MyApp;
