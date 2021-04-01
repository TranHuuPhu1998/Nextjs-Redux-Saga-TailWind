import React from 'react'

const UserModel = () => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 xl:w-2/4 lg:w-1/2 md:w-9/12 sm:w-1/2 w-9/12">
        <h2 className="font-bold text-center text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
            Edit User
        </h2>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="email"
                >
                Email
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="email"
                type="text"
                placeholder="Jane"
                onChange={(e) => SetEmail(e.currentTarget.value)}
                />
                <p className="text-red text-xs italic">
                Please fill out this field.
                </p>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="name"
                >
                User Name
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="name"
                type="text"
                placeholder="User name"
                onChange={(e) => SetName(e.currentTarget.value)}
                />
                <p className="text-red text-xs italic">
                Please fill out this field.
                </p>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="name"
                >
                Position
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="name"
                type="text"
                placeholder="User name"
                onChange={(e) => SetPosition(e.currentTarget.value)}
                />
                <p className="text-red text-xs italic">
                Please fill out this field.
                </p>
            </div>
        </div>
    </div>
    )
}

export default UserModel
