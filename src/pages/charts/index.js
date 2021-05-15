import React from 'react'
import dynamic from 'next/dynamic'
const AdminLayout = dynamic(()=>import('../../common/Layout/AdminLayout/'),{ssr:false})
const Dankmemes = dynamic(()=>import('../../components/Charjs/Dankmemes'),{ssr:false})
const VerticalBar =  dynamic(()=>import('../../components/Charjs/VerticalBar'),{ssr:false})
const PieChart = dynamic(()=>import('../../components/Charjs/Pie'),{ssr:false})
const PolarareaChart = dynamic(()=>import('../../components/Charjs/Polararea'),{ssr:false})
const Chartc3 = dynamic(()=>import('../../components/Charjs/c3Chart'),{ssr:false})
const LineChart = dynamic(()=>import('../../components/Charjs/LineChart'),{ssr:false})

const charts = () => {
    return (
        <AdminLayout>
            <div className="flex flex-wrap">
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <Dankmemes/>
                </div>
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <VerticalBar/>
                </div>
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <PieChart/>
                </div>
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <PolarareaChart/>
                </div>
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <Chartc3/>
                </div>
                <div className="min-w-2/5 border-2 border-solid border-blue-500	m-4">
                    <LineChart/>
                </div>
            </div>
        </AdminLayout>
    )
}

export default charts
