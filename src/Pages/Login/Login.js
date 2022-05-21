import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const onSubmit = data => console.log(data);
    return (
        <section class="h-screen">
            <div class="container px-6 py-16 mx-auto">
                <div class="flex justify-center text-gray-800">
                    <div class="md:w-8/12 lg:w-4/12 w-10/12">
                        <h2 className='text-center text-2xl mb-10 font-bold text-secondary'>LogIn</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    type="email"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /(.+)@(.+){2,}\.(.+){2,}/,
                                            message: 'Invalid email'
                                        }
                                    })}
                                />
                                <span className='text-red-500'>{errors.email?.type === 'required' && errors.email.message}</span>
                                <span className='text-red-500'>{errors.email?.type === 'pattern' && errors.email.message}</span>
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must have 6 character'
                                        }
                                    })}
                                />
                                <span className='text-red-500'>{errors.password?.type === 'required' && errors.password.message}</span>
                                <span className='text-red-500'>{errors.password?.type === 'minLength' && errors.password.message}</span>
                            </div>

                            <div class="flex justify-between items-center mb-6">
                                <a
                                    href="#!"
                                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                >Forgot password?</a>
                            </div>

                            {/* <!-- Submit button --> */}
                            <input
                                type="submit"
                                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            >
                                Log in
                            </input>

                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p class="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>

                            <button
                                onClick={() => signInWithGoogle()}
                                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-secondary"
                            >
                                <FcGoogle className='text-2xl mr-2' />Continue with Facebook
                            </button>
                        </form>
                        <p className='text-center text-secondary'>New to BD Computers LTD?<Link className='text-primary' to={'/signup'}>Create an account</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;