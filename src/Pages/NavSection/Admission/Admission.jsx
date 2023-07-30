import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/college")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="">
          <div className="text-center mb-1">
            <h2 className="text-xl text-black font-bold mb-10">              
                Experience the Excellence of Our Top University <br /> Apply Now and Elevate Your Future!
            </h2>
          </div>
        </div>

        <Link to="/apply" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((college, index) => (
            <div key={index} className="col">
              <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                  alt="College"
                  src={college.collegeImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                  <div className="p-4 sm:p-6">
                    <time
                      className="block text-xs text-white/90"
                    >
                      {college.admissionDates}
                    </time>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-white">
                        {college.collegeName}
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                      {college.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Admission;
