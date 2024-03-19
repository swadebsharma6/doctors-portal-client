import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {user, signUser, resetPass } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [logErr, setLogErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLogErr("");
    // Sign in User
    signUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("login", user);
        toast.success("User Login Successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLogErr(error.message);
      });
  };

  const handleResetPass = () => {
    resetPass(user?.email).then(() => {
      toast("Please Check Your Email and Reset Password!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    })
    .catch(error =>{
      setLogErr(error.message)
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupidity voluptatem et in. Quadrat fugit ut assumed except
            exercitation quasi. In delegati ease aut repudiate et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <label 
              className="label">
                <p 
                onClick={handleResetPass}
                className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-xs font-bold text-center">
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-secondary">
                Create new account
              </Link>
            </p>
          </form>
          {logErr && <p className=" text-red-500 text-center">{logErr}</p>}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;

// {logErr && <p className=" text-red-500 text-center">{logErr}</p>}
