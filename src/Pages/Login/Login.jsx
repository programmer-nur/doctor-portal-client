import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const {logIn,logInGoogle,forgetPasswordUser} = useContext(AuthContext)
  const [logInError, setLogInError]= useState('')
  const [userEmail, setUserEmail] = useState('')
  const [loginUserEmail, setLoginUserEmail]= useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const [token]=useToken(loginUserEmail)
  if(token){
    navigate(from, {replace:true})
  }



  const handelLogin = data =>{
    console.log(data);
    logIn(data.email,data.password)
    .then(res=>{
      const user = res.user;
      console.log(user);
      setLoginUserEmail(data.email)
    })
    .catch(err=>{
      setLogInError(err.message)
    })
  }
  const handelEmailBlur =(e)=>{
    const email =e.target.value;
    setUserEmail(email)
  }
  const handelForgetPassword=()=>{
    if(!userEmail){
      toast('Please Enter Your Email')
    }
    forgetPasswordUser(userEmail)
    .then(()=>{
      toast.success('Reser Password Send. Please Check Your email')
    })
    .catch(err=>console.log(err))
  }
  const handelGoogleIn =()=>{
    logInGoogle()
    .then(res=>{
      const user = res.user;
      console.log(user);
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="h-[600px] flex  justify-center items-center ">
      <div className="w-96 p-7 rounded-xl shadow-xl bg-white">
        <h3 className="text-xl text-center py-5">Log in</h3>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            onBlur={handelEmailBlur}
            name='email'
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
            minLength:{value:6,message:'Password must be 6 charectear or longer'}
            })
            }
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-400 py-2" role="alert">{errors.password?.message}</p>}
            <label className="label mb-2">
              <button onClick={handelForgetPassword}>Forget Password</button>
            </label>
          </div>
          <input
            className="btn py-4 btn-accent w-full"
            value="Log In"
            type="submit"
          />
        </form>
        <p>{logInError && <p className="text-red-500">{logInError}</p>}</p>
        <p className="py-5">
          New to Doctors Portal?
          <Link className="text-primary" to="/signup">
            Create an Account
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

export default Login;
