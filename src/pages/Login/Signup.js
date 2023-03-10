import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.config';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateEror] = useUpdateProfile(auth);


      const [token] = useToken(user || googleUser)


    const handleSignup =async (data)=>{
       await createUserWithEmailAndPassword(data.email, data.password);
       const success = await updateProfile({displayName: data.name});
    }
    let signupError;

    if(googleError || signError){
      signupError = googleError?.message || signError?.message
    }

    if(token){
      navigate('/appointment')
    }

    if(googleLoading || loading){
        return <Loading/>
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-accent text-lg font-semibold text-center">Sign up</h2>
                <div className="flex flex-col w-full border-opacity-50">
                    {/* Top From */}
                   <div className="grid card rounded-box place-items-center">
                      <form onSubmit={handleSubmit(handleSignup)} className='w-full text-accent' action="">

                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text text-accent">What is your name?</span>
                          </label>
                          <input type="text" {...register('name', {required: true, maxLength: {
                            value: 50, message: 'Max limit exceeded'
                          }})} placeholder="Type here" className="input border-accent input-bordered w-full max-w-xs" />
                          <label className="label">
                          <span className="label-text-alt text-red-400">
                                {errors.name && errors.name?.type === 'required' && 'name is required'}
                                {errors.name && errors.name?.type === 'maxLength' && 'Max length exceeded'}
                            </span>
                          </label>
                        </div>

                        {/* Email */}
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
                        {/* password */}
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

                        <p className='text-red-400 text-sm mb-2'>{signupError && signupError}</p>
                        {/* Submit button */}
                        <input className='btn btn-primary w-full' type="submit" value='Sign up' name="" id="" />

                        <p className='label-text-alt mt-2 text-accent'>Already have an account? <Link to="/login" className='text-primary'>Please login</Link></p>
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

export default Signup;