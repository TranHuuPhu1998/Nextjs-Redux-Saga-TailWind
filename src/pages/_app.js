import "tailwindcss/tailwind.css";
import App from 'next/app'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {AUTHORIZATION_KEY} from '../constants'
import { ToastContainer } from 'react-toastify';
import axiosService from '../common/Theme/axiosService'
import makeStore from "../redux/configureStore"
import Loading from '../components/Loading/Loading'

import "../styles/globals.css"
import "../styles/main.css"
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const [token , SetToken] = useState(String)
  const router = useRouter()

  useEffect(()=> {

    const token = localStorage.getItem(AUTHORIZATION_KEY);

    if(router.pathname === "/forgotpassword"){
      router.push('/forgotpassword');
    } 
    else if(router.pathname === "/reset-password/[id]"){
      let _asPath = router.asPath;
      router.push(_asPath);
    } 
    else if(router.pathname === "/singup"){
      router.push("/singup");
    }
    if(token && token !== 'undefined') {
      SetToken(token);
      axiosService.setHeader('Authorization' , `Bearer ${token}`);
    }
    else{
      router.push('/login');
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


// export default MyApp
export default makeStore.withRedux(MyApp);
