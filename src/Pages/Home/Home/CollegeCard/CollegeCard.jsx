import { useEffect, useState } from "react";
import signiture from "../../../../assets/signiture.png";

const CollegeCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('college.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 pt-24 sm:px-6 lg:px-8">
        <div className="">
          <div className="text-center mb-1">
            <h2 className="text-4xl text-black font-bold">Explore Our Top-Rated <br /> University Courses</h2>
            <p className="text-center mb-5 mt-3 text-gray-700">
              Explore boundless opportunities for knowledge and growth at our prestigious university, where innovation, diversity, and academic excellence converge to shape aspiring minds into the leaders of tomorrow.
            </p>
            <img className="mx-auto" src={signiture} alt="" />
            <p>University Master</p>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((college, index) => (
              <div key={index} className="col">
                <div className="card h-full rounded-lg">
                  <div className="card-body flex flex-col justify-center items-center text-black">
                    <img src={college.collegeImage} alt="" />
                    <h5 className="card-title text-2xl">{college.collegeName}</h5>
                    <p className="card-text text-center"><b>Admission Date: </b>
                      {college.admissionDates}
                    </p>
                    <p className="card-text text-center">
                        <b>Cultural Events: </b>
                      {college.events}
                    </p>
                    <p><b>Research History:</b> {college.researchHistory}</p>
                    <p><b>Sports:</b> {college.sports}</p>
                    <div className="card-actions">
                      <button className="btn btn-ghost text-blue-600 border-b-4 px-6 border-blue-700 hover:bg-gray hover:text-blue-600">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;