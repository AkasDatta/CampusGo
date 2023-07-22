import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-white shadow'>
        <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-xl mx-auto lg:px-10 overflow-x-hidden">
        <div className="flex justify-between items-center">
            <span className="text-2xl font-[Poppins] text-blue-600 font-bold cursor-pointer">
            campusGo
            </span>

            <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
            >
            {menuOpen ? <IoClose /> : <IoMenu />}
            </span>
        </div>

        <ul
            className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
            } transition-all ease-in duration-500`}
        >
            <li className="mx-2 my-6 md:my-0">
            <a href="#" className="text-lg hover:text-blue-500 duration-500">
                Home
            </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
            <a href="#" className="text-lg hover:text-blue-500 duration-500">
                Colleges
            </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
            <a href="#" className="text-lg hover:text-blue-500 duration-500">
                Admission
            </a>
            </li>
            <li className="mx-2 my-6 md:my-0">
            <a href="#" className="text-lg hover:text-blue-500 duration-500">
                My College
            </a>
            </li>
            <div className="form-control mx-2 sm:y-5">
                <input type="text" placeholder="Search" className="input input-bordered border-gray-300 bg-white md:w-36" />
            </div>
            <button className="bg-blue-600 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-blue-700 rounded">
            Login
            </button>
        </ul>
        </nav>
    </div>
  );
};

export default Navbar;
