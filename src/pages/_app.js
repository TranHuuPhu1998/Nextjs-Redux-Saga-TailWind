import "tailwindcss/tailwind.css";
import {Provider} from "react-redux"
import makeStore from "../redux/configureStore"
import "../styles/globals.css"
import "../styles/main.css"


function MyApp({ Component, pageProps }) {
  const store = makeStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
