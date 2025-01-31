import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'
import { AuthContext } from '../../provider/AuthProvider';
import { Result } from 'postcss';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/lottie/loginlottiee.json'
import { Helmet } from 'react-helmet';
import axios from 'axios';
const LoginPage = () => {
    const navigate = useNavigate();
    const { googleSignIn, userLogin, setUser, user } = useContext(AuthContext);
    const emailRef = useRef();
    const [error, setError] = useState({});
    const location = useLocation();
    const handleGoogleSignIn = e => {
        googleSignIn();
        navigate(location?.state ? location.state : '/')



    }
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success('Login Successful')
                
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {

                setError({ ...error, login: err.code })
                toast.error(err.message)


            })

    }
    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login| RestoRooms</title>
            </Helmet>
            <h1 className='text-center font-bold text-[#d3a955]  text-xl md:text-5xl pt-12'>Login to Your  Restorooms <br />Account</h1>
            <p className='text-center text-white mt-4 mb-6'>Manage your bookings, discover new destinations, and enjoy <br /> seamless experiences with Restorooms.</p>
            <div className='md:flex gap-10  border bg-[#181024] items-center flex-row-reverse justify-center'>
                <div className='md:w-1/4 w-1/3 md:mt-10 mx-auto md:mx-0'>
                    <Lottie animationData={loginLottie}></Lottie>

                </div>
                <div className='pb-10 md:w-2/4 '>

                    <div className=' bg-[#181024] mt-6  '>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl ">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name='email' placeholder="email" className=" input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-xl ">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className=" input input-bordered" required />
                                {
                                    error.login && <label className="label text-sm text-red-600">
                                        {error.login}


                                    </label>
                                }

                                <label className="label">
                                    <span
                                        className="label-text-alt text-[#9660ea]  link link-hover text-xl cursor-pointer"
                                        onClick={() => {
                                            const email = emailRef.current.value;
                                            navigate('/forgetPassword', { state: { email } });
                                        }}
                                    >
                                        Forgot password?
                                    </span>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-black text-[#d3a955] border-[#d3a955] text-xl ">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex justify-center  mx-auto mt-1'>
                        <h1 className=' text-base text-white'>New to Visa  RestoRooms? <Link to='/register' className='underline text-[#9660ea]'>Register Now</Link> </h1>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <GoogleButton
                            onClick={handleGoogleSignIn}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default LoginPage;