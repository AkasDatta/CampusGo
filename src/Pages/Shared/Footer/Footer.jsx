
const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-100">
                <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-start lg:gap-8">

                    <div
                        className="grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
                    >
                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Explore</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Home
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Colleges
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Admission
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    My College
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Become a Teacher
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Blog
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
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

                    <div className="mt-8 border-t border-blue-800 pt-8">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-black">
                        &copy; 2022. CampusGo. All rights reserved.
                        </p>

                        <ul
                        className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                        >
                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
                            Terms & Conditions
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
                            Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
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
