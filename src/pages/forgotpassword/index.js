import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {sendMail} from '../../actions/auth'

const ForgotPassword = () => {
    const [email , setEmail] = useState(String)
    const dispatch = useDispatch()

    const onSendMail = () => {
        dispatch(sendMail(email))
    }
    return (
        <div className={'w-full bg-gray-200 flex justify-center items-center h-screen'}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 xl:w-2/6 lg:w-1/2 md:w-1/2 sm:w-1/2 w-9/12">
            <h2 className="font-bold text-center text-3xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500">
                Reset your password
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
                    onClick={(e)=>onSendMail(e)}
            >
                Send Mail
            </button>
        </div>
    </div>
    )
}

export default ForgotPassword
