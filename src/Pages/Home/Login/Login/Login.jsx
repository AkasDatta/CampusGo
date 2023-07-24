import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../../Provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const auth = getAuth();
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // validate
       if (password.length < 6) {
        setError('Please add at least 6 characters in your password.');
        return;
      } else if (!/(?=.*[A-Z])/.test(password)) {
          setError('Please add at least one uppercase letter.');
          return;
      }

      signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError('');
        setSuccess('User has been logged in successfully.');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email){
        alert('Please provide your email address to reset password')
        return;
    }
    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert('Please check your email')
    })
    .catch(error => {
        console.log(error);
        setError(error.message)
    })
  }



  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-gray-600">Login Form with Floating Labels</h1>
              </div>
                <SocialLogin></SocialLogin>
              <form onSubmit={handleLogin} className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                   
                      ref={emailRef}
                      className="peer h-10 w-full border-b-2 border-gray-300 bg-white text-black focus:outline-none focus:border-rose-600"
                      placeholder="Email address" required
                    />
        
                  </div>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 bg-white text-black focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                     <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer mt-2'
                        onClick={() => setShow(!show)}>
                        {show ? <FaEye className='FaEye mb-12' /> : <FaEyeSlash className='FaEye mb-12' />}
                    </span>

                    



                  </div>
                  <div className='text-sm my-3'>
                    <p className="text-green-700">{success}</p>
                    <p className="text-red-700">{error}</p>
                  </div>
                  <div>
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">
                    Login
                  </button>
                  </div>
                  
                </div>
                <div className="relative py-2">
                    <span className='text-sm text-gray-700'>Don't Have an Account? <Link className='text-blue-700 underline' to="/registration">Register</Link></span>
                </div>
              </form>
              <p className='text-sm my-3'>Forget Password? <button className='underline text-blue-700' onClick={handleResetPassword}>Reset</button> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
