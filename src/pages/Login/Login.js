import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.config';


const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const handleLogin = (data)=>{
        signInWithEmailAndPassword(data.email, data.password)
    }

    useEffect(()=>{
      if(user || googleUser){
        navigate(from, {replace:true})
    }
    }, [user, googleUser, navigate, from])

    if(googleLoading || loading){
        return <Loading/>
    }
    let loginError;

    if(googleError || error){
      loginError = googleError?.message || error?.message
    }
    return (
    <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-accent text-lg font-semibold text-center">Login</h2>
                <div className="flex flex-col w-full border-opacity-50">
                    {/* Top From */}
                   <div className="grid card rounded-box place-items-center">
                      <form onSubmit={handleSubmit(handleLogin)} className='w-full text-accent' action="">
                        {/* Name */}
                         <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-accent">What is your name?</span>
                          </label>
                          <input {...register('email', {required:true, maxLength:50, pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'give a valid email'
                          }})} type="text" placeholder="Type here" className="input border-accent input-bordered w-full max-w-xs" />
                          <label className="label">
                            <span className="label-text-alt text-red-400">
                                {errors.email && errors.email?.type === 'required' && 'email is required'}
                                {errors.email && errors.email?.type === 'maxLength' && 'Max length exceeded'}
                                {errors.email && errors.email?.type === 'pattern' && errors.email.message}
                            </span>
                          </label>
                        </div>
                        {/* Email */}
                         <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-accent">What is your password?</span>
                          </label>
                          <input type="password" {...register('password', {required: true, maxLength: 30, minLength: 6})} placeholder="Type here" className="input border-accent input-bordered w-full max-w-xs" />
                          <label className="label">
                          <span className="label-text-alt text-red-400">
                                {errors.password && errors.password?.type === 'required' && 'pasword is required'}
                                {errors.password && errors.password?.type === 'maxLength' && 'Max length exceeded'}
                                {errors.password && errors.password?.type === 'minLength' && 'Min length is 6'}
                            </span>
                          </label>
                        </div>

                        <p className='text-red-400 text-sm mb-2'>{loginError && loginError}</p>
                        {/* Submit button */}
                        <input className='btn btn-primary w-full' type="submit" name="" id="" />

                        <p className='label-text-alt mt-2 text-accent'>New to doctors portal? <Link to="/signup" className='text-primary'>Create new account</Link></p>
                      </form>
                   </div>
                   <div className="divider text-accent">OR</div> {/* Divider */}
                   {/* Down social login */}
                   <div className="grid h-20 card rounded-box place-items-center">
                       <button onClick={()=> signInWithGoogle()} className="btn btn-outline w-full text-accent hover:bg-accent hover:text-white">Continue With Google</button>
                   </div>
                </div>
            </div>
       </div>
    </div>
    );
};

export default Login;