import { useEffect, useState } from "react";

const Research = () => {
    const [research, setResearch] = useState([]);

    useEffect(() => {
      fetch('research.json')
        .then(res => res.json())
        .then(data => setResearch(data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="mx-auto max-w-screen-xl px-4 pt-16 py-24 sm:px-6 lg:px-8">
            <h2 className="text-blue-900 mx-1">Our Esteemed Researchers</h2>
            <h2 className="text-4xl mb-10 text-gray-700 font-bold">Research Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {research.map((researchpaper, index) => (
              <div key={index} className="col">
                <a href="#" className="group relative block bg-black">
                <img
                    src={researchpaper.src} alt={researchpaper.alt} // Fix: Use parentheses () instead of curly braces {}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">

                    <p className="text-xl font-bold text-white sm:text-2xl"> {researchpaper.name}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                            {researchpaper.description}
                            </p>
                        </div>
                    </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Research;
