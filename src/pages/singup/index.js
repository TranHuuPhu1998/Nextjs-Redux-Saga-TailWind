import React from 'react'

const Singup = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900" >
             <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane" />
            <p className="text-red text-xs italic">Please fill out this field.</p>
            </div>
        </div>
       
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                Password
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />
            <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="position">
                Position
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="position" type="text" placeholder="Position" />
            </div>
            <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="permission">
                Permission
            </label>
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="permission" type="text" placeholder="permission" />
            </div>
        </div>
        </div>
        </div>
    )
}

export default Singup
