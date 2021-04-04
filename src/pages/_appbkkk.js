import React from 'react'

import App from 'next/app'

import wrapper from '../redux/configureStore'

class ExampleApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }

    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(ExampleApp)