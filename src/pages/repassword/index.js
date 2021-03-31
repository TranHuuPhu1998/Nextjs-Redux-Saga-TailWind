import "tailwindcss/tailwind.css";
import React , {useState} from 'react'


const RePassword = () => {
    const [email , setEmail] = useState(String)

    const onResetPassword = () => {
        return <></>
    }
    return (
        <div className={'w-full bg-gray-200 flex justify-center items-center h-screen'}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 xl:w-1/4">
            <h2 className="font-bold text-center text-3xl text-purple-400 pb-5 mb-5 border-b-2 border-solid border-red-500">
                Reset Password
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
                    placeholder="email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <p className="text-red text-xs italic">
                    Please fill out this field.
                    </p>
                </div>
            </div>
            <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                    onClick={(e)=>onResetPassword(e)}
            >
                Send
            </button>
        </div>
    </div>
    )
}

export default RePassword
