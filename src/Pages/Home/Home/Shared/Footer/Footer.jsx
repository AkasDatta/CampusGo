
const Footer = () => {
    return (
        <div>
            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="text-blue-700 font-bold text-3xl">
                       CampusGo
                    </div>

                    <div
                        className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
                    >
                        <div className="col-span-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                            Get the latest news!
                            </h2>

                            <p className="mt-4 text-gray-500">
                            Discover the latest university updates! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                            </p>
                        </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                        <form className="w-full">
                            <label htmlFor="UserEmail" className="sr-only"> Email </label>

                            <div
                            className="border border-gray-200 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                            >
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="john@rhcp.com"
                                className="w-full focus:ring-transparent bg-white"
                            />

                            <button
                                className="mt-1 w-full bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0"
                            >
                                Sign Up
                            </button>
                            </div>
                        </form>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Explore</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Home
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Colleges
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Admission
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    My College
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Become a Teacher
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Blog
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-700 transition hover:opacity-75">
                                    Our Teachers
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">About CampusGo University Website</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <p className="text-gray-600">
                                    CampusGo is a comprehensive university website providing easy access to academic resources and campus information for students and faculty.</p>
                            </ul>
                        </div>

                    </div>
                    </div>

                    <div className="mt-8 border-t border-blue-700 pt-8">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-blue-700">
                        &copy; 2022. CampusGo. All rights reserved.
                        </p>

                        <ul
                        className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                        >
                        <li>
                            <a href="#" className="text-blue-700 transition hover:opacity-75">
                            Terms & Conditions
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-700 transition hover:opacity-75">
                            Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-700 transition hover:opacity-75">
                            Cookies
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
};

export default Footer;
