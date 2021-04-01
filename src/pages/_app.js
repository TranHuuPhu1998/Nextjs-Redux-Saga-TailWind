import "tailwindcss/tailwind.css";
import {Provider} from "react-redux"
import {useRouter} from 'next/router'
import makeStore from "../redux/configureStore"
import axiosService from '../common/Theme/axiosService'
import {AUTHORIZATION_KEY} from '../constants'
import {REDIRECT_AFTER_LOGIN_SUCCESS} from '../constants/auth'
import {useEffect, useState} from 'react'
import {fetchListTask} from './../actions/taskActions'
import Login from './login'
import Loading from '../components/Loading/Loading'
import "../styles/globals.css"
import "../styles/main.css"

function MyApp({ Component, pageProps }) {
  const store = makeStore(pageProps.initialReduxState)
  const [token , SetToken] = useState(String)
  const router = useRouter()

  useEffect(()=> {
    const token = localStorage.getItem(AUTHORIZATION_KEY);
    if(token && token !== 'undefined') {
      SetToken(token);
      axiosService.setHeader('Authorization' , `Bearer ${token}`);
    }
    else {
      router.push('/login');
    }

  },[])

  return (
    <Provider store={store}>
      <Loading/>
      <Component {...pageProps} />
    </Provider>
  )
}


export default MyApp
