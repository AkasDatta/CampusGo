import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImage from '../../../../assets/logo/google.png';
import gitHubImage from '../../../../assets/logo/gitHub.png';
import "./Login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    // Validate the data (if needed)
    // Call the signIn function to authenticate the user
    signIn(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError('');
        setSuccess('User has been logged in successfully');
      })
      .catch(error => {
        setError('Failed to log in. Please check your credentials.');
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setError('');
        setSuccess('User has been logged in successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGithub()
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
        setError('');
        setSuccess('User has been logged in successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
              </div>
              <a onClick={handleGoogleSignIn} href="#" className="google-link">
                <img src={googleImage} alt="Google" />Continue with Google
              </a>
              <a onClick={handleGitHubSignIn} href="#" className="google-link">
                <img src={gitHubImage} alt="GitHub" />Continue with GitHub
              </a>
              <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      type="email"
                      name="email"
                      {...register("email", {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="peer h-10 w-full border-b-2 border-gray-300 bg-white text-black focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      type={show ? "text" : "password"}
                      name="password"
                      {...register("password", {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters'
                        },
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                          message: 'Password must have one uppercase, one lowercase, and one special character'
                        }
                      })}
                      className="peer h-10 w-full border-b-2 border-gray-300 bg-white text-black focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <p onClick={() => setShow(!show)}>
                      {show ? <FaEye className="FaEye my-2" /> : <FaEyeSlash className="FaEye my-2" />}
                    </p>
                    {errors.password && <p className="text-red-700 text-sm">{errors.password.message}</p>}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
