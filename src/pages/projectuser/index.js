import dynamic from 'next/dynamic'
import React from 'react'
const AdminLayout = dynamic(()=>import('../../common/Layout/AdminLayout'))
const ListTask = dynamic(()=>import('../../components/ListTask/ListTask'), {ssr:false})

const ProjectUser = () => {
    return (
        <div>
            <AdminLayout>
                <ListTask/>
            </AdminLayout>
        </div>
    )
}

export default ProjectUser
