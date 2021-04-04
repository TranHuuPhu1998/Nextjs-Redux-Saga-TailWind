import React , {useState , useEffect} from 'react'
import Navigation from '../../../components/Nav/Navigation'
import Header from '../../../components/Header/Header'
import { useRouter } from "next/router"


const AdminLayout = ({children}) => {
    const router = useRouter()
    const [isAdmin , setIsAdmin] = useState(false)

    useEffect(() => {
        const isAdmin = localStorage.getItem('ADMIN')
        if(isAdmin){   
            setIsAdmin(true)
        }else {
            setIsAdmin(false)
        }
    }, [])
    
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
            {
                isAdmin ? <Navigation/> : ""
            }
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
