

const LatestNews = () => {
    return (
        <div>
            <div className="bg-blue-100">
                <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
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
                            Discover our university's academic journey through captivating updates: groundbreaking research, faculty accomplishments, student stories, and dynamic campus events.
                            </p>
                        </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">
                                <label htmlFor="UserEmail" className="sr-only">Email</label>

                                <div className="border border-gray-400 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@rhcp.com"
                                        className="w-full bg-white focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />

                                    <button className="mt-1 w-full bg-blue-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-blue-600 sm:mt-0 sm:w-auto sm:shrink-0">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LatestNews;