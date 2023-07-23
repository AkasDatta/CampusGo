import { Link } from 'react-router-dom';
import error from '../../../../src/assets/logo/1_C8_Bkzt7pPbkztckqEvmqg (1).png';

const ErrorPage = () => {
  return (
    <div className='text-center error bg-[#E2E5E6] min-h-screen flex flex-col justify-center items-center text-black'>
      <img className='errorImg w-48 h-auto sm:w-64 sm:h-auto mb-5' src={error} alt="" />
      <h2 className='text-2xl sm:text-lg md:text-2xl font-semibold mb-2'>Something went wrong.</h2>
      <p className='text-sm sm:text-md md:text-lg lg:text-xl'>
        We're sorry, but the page you're looking for could not be found.
      </p>
      <p>
        Let's get you <Link to='/' className='text-blue-700'><u>back</u></Link>
      </p>
    </div>
  );
};

export default ErrorPage;
