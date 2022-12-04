
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const {createUser,updateUser,logInGoogle}= useContext(AuthContext)
    const navigate = useNavigate()
    const [signUpError, setSignUpError] = useState('')
    const [createUserEmail, setCreateUserEmail]= useState('')

  const [token]= useToken(createUserEmail)
    if(token){
      navigate('/')
    }
  const handelSignUp = data =>{
    console.log(data);
    createUser(data.email,data.password)
    .then(res=>{
      const user = res.user;
      setSignUpError('')
      console.log(user);
      toast('User Create Successfully');
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{
        saveUser(data.name,data.email)
        navigate('/')
      })
      .catch((err)=>{
        setSignUpError(err.message)
      })
    })
    .catch(err=>{
      setSignUpError(err.message)
    })
  }


  const handelGoogleIn=()=>{
    logInGoogle()
    .then(res=>{
      const user = res.user;
      console.log(user);
    })
    .catch(err=>console.log(err))
  }


  const saveUser = (name,email)=>{
    const user ={name,email}
    fetch(`https://doctor-portal-server-nurmohammad83.vercel.app/users`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      setCreateUserEmail(email)
     
    })
  }

    return (
        <div className="h-[800px] flex  justify-center items-center ">
      <div className="w-96 p-7 rounded-xl shadow-xl bg-white">
        <h3 className="text-xl text-center py-5">Sign Up</h3>
        <form onSubmit={handleSubmit(handelSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name",{required:"Name is a requierd" })}
              className="input input-bordered w-full max-w-xs"
              />
              {errors.name && <p className="text-red-400 py-2" role="alert">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email",{required:"Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              />
              {errors.email && <p className="text-red-400 py-2" role="alert">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password",
              {required:'Password is required',
            minLength:{value:6,message:'Password must be 6 character or longer'},
            })
            }
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-400 py-2" role="alert">{errors.password?.message}</p>}
            <label className="label mb-2">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn py-4 btn-accent w-full"
            value="Sign Up"
            type="submit"
          />
          {
            signUpError && <p className='text-red-400'>{signUpError}</p>
          }
        </form>
        <p className="py-5">
          New to Doctors Portal? 
          <Link className="text-primary" to="/login">
            Already have an account?
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button onClick={handelGoogleIn} className="btn btn-outline w-full py-5">Google With Connected</button>
      </div>
    </div>
    );
};

export default SignUp;