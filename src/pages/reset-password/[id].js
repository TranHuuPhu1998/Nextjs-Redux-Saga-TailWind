import React , {useState} from 'react';
import {useRouter} from 'next/router';
import {resetPassword} from '../../actions/auth';
import {Field , reduxForm } from 'redux-form';
import TextField from '../../components/FormHelper/TextField';
import validate from '../../common/Validate/validate';

const ResetPassword = (props) => {
    const { handleSubmit, submitting , dispatch ,valid } = props;

    const router = useRouter();
    const token = router.query.id;
    
    const [password, setPassword] = useState(String);
    const [passwordConfirmation , setPasswordConfirmation] = useState(String);
    const [error , setError] = useState(String);

    const onResetPassword = () => {
        valid ? dispatch(resetPassword(token , password)) : "";   
    }

    const onLogin = () => {
        router.push('/login');
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
                        <Field
                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                            id="grid-password"
                            type="password"
                            name="password"
                            placeholder="******************"
                            onChange={(e) => setPassword(e.currentTarget.value)}
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
                        Retype Password
                        </label>
                        <Field
                            id="grid-repassword"
                            type="password"
                            name="confirmpassword"
                            placeholder="******************"
                            onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                </div>
                <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                        disabled={submitting}
                        onClick={()=>onResetPassword()}
                >
                    Reset Password
                </button>
                <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                        onClick={()=>onLogin()}
                >
                    Login
                </button>
            </div>

        </div>
        </>
    )
}

export default reduxForm({
    form : 'RESET_PASSWORD',
    validate
})(ResetPassword)
