import React , {useState , useEffect} from 'react'
import Navigation from '../../../components/Nav/Navigation'
import Header from '../../../components/Header/Header'
import { useRouter } from "next/router"


const AdminLayout = ({children}) => {
    const router = useRouter()
    const [isAdmin , setIsAdmin] = useState(false)
    const [isopen , setIsopen] = useState(true)

    useEffect(() => {
        const isAdmin = localStorage.getItem('ADMIN')
        if(isAdmin){   
            setIsAdmin(true)
        }else {
            setIsAdmin(false)
        }
    }, [])

    const onClickOutSide = () => {
        setIsopen(!isopen)
    }
    
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
            {
                isAdmin ? <Navigation onClickOutSide={onClickOutSide}/> : ""
            }
            <div className="flex flex-col flex-1 w-full">
                <Header onClickOutSide={onClickOutSide} isopen={isopen} />
                <main className="h-full overflow-y-auto" onClick={onClickOutSide} >
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
