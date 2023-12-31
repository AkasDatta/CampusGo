import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://campus-go-server-side.vercel.app/college')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
        <div className="mx-auto max-w-screen-xl px-4 py-16 pt-24 sm:px-6 lg:px-8">
          <div className="">
            <div className="text-center mb-1">
              <h2 className="text-4xl text-black font-bold">Experience the Excellence of <br /> Our Top University</h2>
            </div>
          </div>
  
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((college, index) => (
                <div key={index} className="col">
                  <div className="card h-full rounded-lg">
                    <div className="card-body flex flex-col justify-center items-center text-black">
                      <img src={college.collegeImage} alt="" />
                      <h5 className="card-title text-2xl">{college.collegeName}</h5>

                      <p>
                        <b>Ratings:</b>{' '}
                        <Rating
                          placeholderRating={college.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={<FaStar className='text-red-500'></FaStar>}
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating>{' '}
                        {college.rating}
                      </p>

                      <p className="card-text text-center"><b>Admission Date: </b>
                        {college.admissionDates}
                      </p>
                      <p><b>Research History:</b> {college.researchHistory}</p>
                      <div className="card-actions">
                      <Link to={{ pathname: `/colleges/${college._id}`, state: { college } }}>
                        <button className="btn btn-ghost text-blue-600 border-b-4 px-6 border-blue-700 hover:bg-gray hover:text-blue-600">
                          Details
                        </button>
                      </Link>
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

export default Colleges;


