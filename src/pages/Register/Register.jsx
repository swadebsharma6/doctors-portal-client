import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/useToken";
import SocialLogin from "../Login/SocialLogin";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [logErr, setLogErr] = useState('');
    const { register,  handleSubmit, formState: { errors }, } = useForm();
    
    const [createdUserEmail, setCreatedUserEmail]= useState('');
    const [token] = useToken(createdUserEmail);

    if(token){
      navigate('/login')
    }
      
    const handleRegister = (data) =>{

        setLogErr('');
        console.log(data);
        // create user
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log('create user', user);
            updateProfile(user, {
                displayName:data.name
            })
            .then(()=>{
                saveUserInDb(data.name, data.email);
                toast.success('User Register Successfully !');
                navigate('/login')
            })
            .catch(error => {
               setLogErr(error.message)
            })
        })
        .catch(error => {
            setLogErr(error.message)
         })
    }

    const saveUserInDb = (name, email) =>{
      const user = {name, email}
      fetch('http://localhost:5000/users',{
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        // getUserToken(email);
        setCreatedUserEmail(email)
        if(data.acknowledged){
          toast.success('User Saved in database');
        }
      
      })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupidity voluptatem et in. Quadrat fugit ut assumed except
              exercitation quasi. In delegati ease aut repudiate et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body"
              onSubmit={handleSubmit(handleRegister)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name" ,{required: "Name is Required"})}
                  placeholder="name"
                  className="input input-bordered w-full"
                />
                {errors.name && <p className="text-lg text-red-500">{errors.name.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email",{required: "Email is Required"})}
                  placeholder="email"
                  className="input input-bordered w-full"
                />
                {errors.email && <p className="text-lg text-red-500">{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{
                    required: "Password is Required",
                    minLength: {value: 6, message: 'Password must be 6 character.'},
                  })}
                  placeholder="password"
                  className="input input-bordered w-full"
                  
                />
                {errors.password &&  <p className="text-lg text-red-500">{errors.password.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <p className="text-xs font-bold text-center">
                Already Have an Account?{" "}
                <Link to="/login" className="text-secondary">
                  Login on account
                </Link>
              </p>
            </form>
            {logErr && <p className=" text-red-500 text-center">{logErr}</p>}
           <SocialLogin/>
          </div>
        </div>
      </div>
    );
};

export default Register;