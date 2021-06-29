import axios from 'axios';
import React from 'react';
import * as url from '../../constants'
import ReactVitualScroll from '../../components/ReactLibrary/ReactVitualScroll';
import AdminLayout from '../../common/Layout/AdminLayout'
import Throttling from '../../components/ReactLibrary/Throttling'

const library = ({data}) => {
    return (
        <AdminLayout>
          <div className="flex" style={{height: 'calc(100vh - 64px)'}}>
            <ReactVitualScroll taskitem = {data.data}/>
            <Throttling taskitem = {data.data}/>
          </div>
        </AdminLayout>
    )
}

export const getStaticProps  = async () => {
    const {data} = await axios.get(`${url.API_ENDPOINT}/taskitem`)

    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default library
