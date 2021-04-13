import React from 'react'
import {useRouter} from 'next/router'

const CardItem = ({title , description , content ,id }) => {
    const router = useRouter();
    const onShowTask = (id) => {
        router.push(`projectuser/${id}`)
    }

    return (
        <div className=" bg-white rounded-xl shadow-md overflow-hidden mb-5 mr-5 ml-5 ml-0 2xl:w-2/5 xl:w-5/12 lg:w-5/12 md:w-2/5 sm:w-full xs2:w-full cursor-pointer"
            onClick={()=>onShowTask(id)}
        >
            <div className="md:flex h-full">
                <div className="md:flex-shrink-0 w-1/3 text-center bg-green-400	">
                    <p className="text-8xl text-while font-bold font-serif h-full flex items-center	justify-center pl-6 pr-6 capitalize">{title[0]}</p>
                </div>
                <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{description}</p>
                    <p className="mt-2 text-gray-500">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItem
