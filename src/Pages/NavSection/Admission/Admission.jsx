import { useEffect, useState } from "react";
import AdmissionCard from "../AdmissionCard/AdmissionCard";

const Admission = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://campus-go-server-side.vercel.app/college")
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            categories.map(college => <AdmissionCard
            key={college._id}
            college={college}
            ></AdmissionCard>)
           }
        </div>
      </div>
    </div>
  );
};

export default Admission;
