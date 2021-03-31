import React from 'react'
import Navigation from '../../../components/Nav/Navigation'
import Header from '../../../components/Header/Header'

const AdminLayout = ({children}) => {
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
            <Navigation/>
            <div className="flex flex-col flex-1 w-full">
            <Header/>
            <main className="h-full pb-16 overflow-y-auto">
                {children}
            </main>
        </div>
    </div>
    )
}

export default AdminLayout
