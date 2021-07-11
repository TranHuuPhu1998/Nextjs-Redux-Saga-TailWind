import React , {useState , useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch ,useSelector } from "react-redux"
import { login } from '../../actions/auth'
import {AUTHORIZATION_KEY} from '../../constants'
import {Field , reduxForm} from 'redux-form'
import TextField from '../../components/FormHelper/TextField'
import validate from '../../common/Validate/validate'

const Login = (props) => {
    const { handleSubmit, submitting , dispatch ,invalid ,valid } = props;

    const [email, SetEmail] = useState(String);
    const [password, SetPassword] = useState(String);
    const [error , SetError] = useState('');

    const router = useRouter();

    const user = useSelector(state => state.authReducers)

    const onLogin = () => {
        !invalid ? dispatch(login(email,password)) : "";
    }

    useEffect(()=> {
        const token = localStorage.getItem(AUTHORIZATION_KEY);
        if(token){
            router.push('/dashboard');
        } 
    },[user])

    const onRegister = () => {
        router.push('/signup')
    }

    return (
        <>
        <div className={'w-full bg-gray-200 flex justify-center items-center h-screen'}>
            <form onSubmit={handleSubmit(validate)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <h2 className="font-bold text-center text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500">
                    Login 
                </h2>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="email"
                        >
                        Email
                        </label>
                        <Field
                            id="email"
                            name="email"
                            type="text"
                            placeholder="email"
                            onChange={(e) => SetEmail(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Password
                    </label>
                    <Field
                        id="password"
                        name="password"
                        type="password"
                        // autocomplete="current-password"
                        placeholder="******************"
                        component={TextField}
                        onChange={(e) => SetPassword(e.currentTarget.value)}
                    />
                </div>
                </div>

                <div className="flex items-center justify-between -mx-3 mb-6">
                    <div className="flex items-center px-3">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm px-3 font-medium text-indigo-600 hover:text-indigo-500 text-blue-600">
                        <Link href="/forgotpassword" >
                            Forgot your password?
                        </Link>
                    </div>
                </div>

                <button type="submit" className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                        disabled={submitting}
                        onClick={()=>onLogin(validate)}
                >
                    Login
                </button>
                <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                        type="button"
                        onClick={onRegister}
                >
                    Register
                </button>
            </form>
        </div>
    </>
    )
}

export default reduxForm({
    form:'LOGIN',
    validate
})(Login)
