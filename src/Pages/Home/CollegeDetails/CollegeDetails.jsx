import { useLoaderData, useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const colleges = useLoaderData();
    const { id } = useParams();
    const college = colleges.find(item => item.id === id);
    console.log((college));


    return (
        <div className='mx-auto max-w-screen-xl py-8 sm:px-6 lg:px-8'>
            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt="Dhaka University"
                src={college.collegeImage}
                className="rounded-md object-cover h-96 w-full"
            />

            <div className="mt-2">
                <dl>
                <div>
                    <dt className="font-bold text-black text-3xl my-10">{college.collegeName}</dt>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div>
                        <dd className="font-medium text-blue-900 lg:mb-3 md:mb-3 sm:mb-0"><b className='text-lg'>Admission Process:</b> <br />{college.admissionProcess}.</dd>
                        <dd className="font-medium text-gray-900 mb-1"><b className='text-lg'>Research Works:</b> <br />{college.researchWorks}.</dd>
                    </div>
                    <div>
                        <dd className="font-medium text-blue-900 lg:mb-5 md:mb-3 sm:mb-9"><b className='text-lg'>Event Details: <br /></b>{college.eventsDetails}.</dd>
                        <dd className="font-medium text-gray-700"><b className='text-lg'>Sports Categories: <br /></b>{college.sportsCategories}.</dd>
                    </div>
                </div>
                </dl>
            </div>
            </div>
        </div>
    );
};

export default CollegeDetails;


