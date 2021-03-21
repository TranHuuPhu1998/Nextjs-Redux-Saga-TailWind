import React from 'react'
import styles from './CardItem.module.css'


const CardItem = ({title , description , content }) => {
console.log("🚀 ~ file: CardItem.js ~ line 6 ~ CardItem ~ title", description)
    return (
        <div className={styles.card_item + " bg-white rounded-xl shadow-md overflow-hidden mb-5 mr-5 ml-5 ml-0"} >
            <div className="md:flex">
                <div className="md:flex-shrink-0 w-1/4 text-center bg-green-400	">
                    <p className="text-8xl text-while font-bold font-serif h-full flex items-center	justify-center">{title[0]}</p>
                </div>
                <div className="p-6">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{description}</a>
                    <p className="mt-2 text-gray-500">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default CardItem
