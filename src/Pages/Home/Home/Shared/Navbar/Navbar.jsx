import './Navbar.css';

const Navbar = () => {

  return (
    <div className='bg-white'>
        <div className="max-w-screen-xl mx-auto lg:px-10 overflow-x-hidden">
        <header className="">
            <div
                className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
            >
                <a className="block text-blue-600" href="/">
                {/* <span className="sr-only">Home</span> */}
                <h2 className="font-bold text-2xl">CampusGo</h2>
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center lg:gap-7 md:gap-2 text-sm">

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Home
                        </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Colleges
                        </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Admission
                        </a>
                    </li>

                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        My College
                        </a>
                    </li>

                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                    <a>
                        <input type="text" placeholder="Search" className="input input-bordered md:w-32 lg:w-42 bg-white" />
                    </a>
                    <a
                        className="block rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        href="/"
                    >
                        Login
                    </a>
                    </div>

                    <button
                    className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                    >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </header>
        </div>
    </div>
  );
};

export default Navbar;
