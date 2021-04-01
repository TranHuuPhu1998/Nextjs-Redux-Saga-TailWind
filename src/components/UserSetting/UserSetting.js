import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import {AUTHORIZATION_KEY} from '../../constants'
import {useClickOutSide} from '../../common/CustomHook/useClickOutside'

const UserSetting = ({isOpen}) => {
    const router = useRouter();
    const clickRef = useRef();

    const onLogout = () => {
        localStorage.removeItem(AUTHORIZATION_KEY);
        router.push('/login')
    }

    useClickOutSide(clickRef , ()=> {
        alert('do not hit the box')
    })

    return isOpen ? (
        <div className="text-blue-700 absolute bottom-0 top-13 rounded-2xl right-2 bg-white w-40 h-20 text-center font-bold shadow-lg "
            onClick={onLogout}
            ref={clickRef}
        >
            <p className="cursor-pointer pb-2 pt-2 border-b-2 border-gray-500 border-solid flex justify-between pl-4 pr-4 ">
                <span>
                    Logout
                </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-7"  fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
             
            </p>
            <p className="cursor-pointer pb-2 pt-1 flex justify-between pl-4 pr-4">
                <span>Setting</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </p>
        </div>
    ) : (
        <>
        </>
    )
}

export default UserSetting
