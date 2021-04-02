import React , {useState} from 'react'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import { resetPassword } from '../../actions/auth'

const ResetPassword = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const tokenpassword = router.query.id;
    console.log("🚀 ~ file: [id].js ~ line 10 ~ ResetPassword ~ tokenpassword", tokenpassword)

    const [password, setPassword] = useState(String);
    const [passwordConfirmation , setPasswordConfirmation] = useState(String);
    const [error , setError] = useState(String)

    const onResetPassword = () => {
        dispatch(resetPassword(tokenpassword , password))    
    }
    return (
        <>
        <div className={'w-full bg-gray-200 flex justify-center items-center h-screen'}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 xl:w-1/4 lg:w-1/2 md:w-9/12 sm:w-1/2 w-9/12">
                <h2 className="font-bold text-center text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
                Reset Password
                </h2>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Password
                        </label>
                        <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <p className="text-grey-dark text-xs italic">
                        Make it as long and as crazy as you'd like
                        </p>
                    </div>
          
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Retype Password
                        </label>
                        <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        id="grid-repassword"
                        type="repassword"
                        placeholder="******************"
                        onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
                        />
                        <p className="text-grey-dark text-xs italic">
                            {error ? error : "re-enter the correct password"}
                        </p>
                    </div>
                </div>
                <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                        onClick={()=>onResetPassword()}
                >
                    Reset Password
                </button>
            </div>

        </div>
    </>
    )
}

export default ResetPassword
