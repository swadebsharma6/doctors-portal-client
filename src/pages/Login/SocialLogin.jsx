import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleSing =()=>{
        googleLogin()
        .then(result =>{
            const user = result.user;
            console.log('google', user);
            toast.success('Google Login Successfully !')
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className="p-4 text-center">
        <div className="divider divider-primary">OR</div>
        <button
        onClick={handleGoogleSing}
        className="btn  btn-info uppercase text-white">
         Continue With Google
         <FaGoogle className="text-xl" />
        </button>
        </div>
    );
};

export default SocialLogin;