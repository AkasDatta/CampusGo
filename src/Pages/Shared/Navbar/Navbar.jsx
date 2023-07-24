import { useContext, useEffect, useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [photoLoading, setPhotoLoading] = useState(true);
  const [photoError, setPhotoError] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (user && user.photoURL) {
      const img = new Image();
      img.src = user.photoURL;
      img.onload = () => {
        setPhotoLoading(false);
      };
      img.onerror = () => {
        setPhotoLoading(false);
        setPhotoError(true);
      };
    } else {
      setPhotoLoading(false);
    }
  }, [user]);

  return (
    <div className='bg-white shadow'>
      <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-2xl font-[Poppins] text-blue-600 font-bold cursor-pointer">
              campusGo
            </span>
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
        >

          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600  hover:text-blue-600 duration-600">
              Home
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Colleges
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              Admission
            </Link>
          </li>
          <li className="mx-2 my-3 md:my-0">
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 duration-600">
              My College
            </Link>
          </li>
          <div className="form-control mx-2 sm:my-5">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md bg-white w-36 px-2 py-1" />
          </div>

          {user && !photoError && (
            <li className="m-2">
              {photoLoading ? (
                <span>Loading...</span>
              ) : (
                <img className="navbar-img w-10 h-10 rounded-full" src={user.photoURL} alt="" />
              )}
            </li>
          )}

          {user ? (
            <li className="mx-2 my-3 md:my-0">
              <button onClick={handleLogout} className="bg-blue-600 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-blue-700 rounded">
                Logout
              </button>
            </li>
          ) : (
            <li className="mx-2 my-3 md:my-0">
              <Link to="/login">
                <button className="bg-blue-600 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-blue-700 rounded">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
