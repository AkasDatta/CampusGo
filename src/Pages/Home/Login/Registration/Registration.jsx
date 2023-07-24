import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Registration = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

    // validate
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one uppercase');
      return;
    } else if (password.length < 6) {
      setError('Please add at least 6 characters in your password');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError('');
        setSuccess('User has been created successfully');
        updateUserData(createdUser, name, photo); // pass createdUser object instead of createUser function
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };


  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: `${photo}?t=${Date.now()}`,
    })
      .then(() => {
        // handle success
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-100 py-24'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create an account
            </h1>
            <SocialLogin></SocialLogin>
            <p className='mx-auto text-center font-bold'>Or</p>
            <form className='space-y-4 md:space-y-6' onSubmit={handleRegister}>
              <div>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />

                <div className='my-5'>
                    <label htmlFor='photo' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Photo URL
                        </label>
                        <input
                        type='text'
                        name='photo'
                        placeholder='Photo URL'
                        id='photo'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        
                        />
                </div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div className='relative'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Set Password
                </label>
                <input
                  type={show ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Enter Your Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
                <br />
                    <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer mt-2'
                        onClick={() => setShow(!show)}>
                        {show ? <FaEye className='FaEye mb-2' /> : <FaEyeSlash className='FaEye mb-2' />}
                    </span>
              </div>

              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                    I accept the <a href='#' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Register Now
              </button>
              <br />
                {success && <p className='text-success mt-4'>{success}</p>}
                {error && <p className='text-danger mt-4'>{error}</p>}

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account? <Link to='/login' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
