import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="p-4 text-center">
        <div className="divider divider-primary">OR</div>
        <button className="btn  btn-info uppercase text-white">
         Continue With Google
         <FaGoogle className="text-xl" />
        </button>
        </div>
    );
};

export default SocialLogin;