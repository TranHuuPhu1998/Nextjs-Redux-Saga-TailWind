import React, { useState } from "react";
import Link from "next/link";
import { useDispatch , useSelector} from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { singup } from "../../actions/auth";
import validate from "./validate"
import dynamic from "next/dynamic";
import TextField from '../../components/FormHelper/TextField'

const SignUp = () => {
    const [email, SetEmail] = useState(String);
    const [name , SetName] = useState(String);
    const [password, SetPassword] = useState(String);
    const [position , SetPosition] = useState(String);
    const [permission , SetPermission] = useState(String);
    const [password_confirmation , SetPasswordConfirmation] = useState(String);
    const [error , SetError] = useState('');
    const status = 'free time';
    const dispatch = useDispatch();

    const onSingup = (event) => {
        event.preventDefault();
        
        if(password === password_confirmation){
            dispatch(singup(name,email,password_confirmation,password,position,permission));
        }
    }

    return (
        <>
            <div className={'w-full bg-gray-200 flex justify-center items-center h-screen'}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 xl:w-2/4 lg:w-1/2 md:w-9/12 sm:w-1/2 w-9/12">
                    <h2 className="font-bold text-center text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
                        Sign Up
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
                            htmlFor="name"
                            >
                            User Name
                            </label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="User name"
                                onChange={(e) => SetName(e.currentTarget.value)}
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
                            placeholder="******************"
                            onChange={(e) => SetPassword(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                    <div className="md:w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Retype Password
                        </label>
                        <Field
                            id="confirmpassword"
                            name="confirmpassword"
                            type="password"
                            placeholder="******************"
                            onChange={(e) => SetPasswordConfirmation(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="position"
                        >
                        Position
                        </label>
                        <Field
                            id="position"
                            name="position"
                            type="number"
                            onChange={(e) => SetPosition(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="permission"
                        >
                        Permission
                        </label>
                        <Field
                            id="permission"
                            name="permission"
                            type="number"
                            placeholder="permission"
                            onChange={(e)=>SetPermission(e.currentTarget.value)}
                            component={TextField}
                        />
                    </div>
                    </div>
                    <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg"
                            onClick={(e)=>onSingup(e)}
                    >
                        Registration
                    </button>
                    <button className="mt-5 bg-gray-200 hover:bg-blue-700 hover:text-white border border-gray-400 text-blue-700 font-bold py-2 px-6 rounded-lg">
                        <Link href="/login">
                            <a>Go to login</a>
                        </Link>
                    </button>
                </div>

            </div>
        </>
   );
};

export default reduxForm({
    form: 'SING_UP',  // a unique identifier for this form
    validate
})(SignUp)


