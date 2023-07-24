import { useLoaderData, useParams } from 'react-router-dom';

const CollegeSports = () => {
const colleges = useLoaderData();
const { id } = useParams();
const college = colleges.find(item => item.id === id);

    return (
        <div className='mx-auto max-w-screen-xl py-8 sm:px-6 lg:px-8 my-24'>
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">

        <div className="mt-2">
            <dl>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <dd className="font-medium text-blue-900 lg:mb-5 md:mb-3 sm:mb-9"><b className='text-2xl'>Event Details: <br /></b>{college.eventsDetails}.</dd>
                    <dd className="font-medium text-gray-700"><b className='text-2xl'>Sports Categories: <br /></b>{college.sportsCategories}.</dd>
                </div>
            </div>
            </dl>
        </div>
        </div>
    </div>
    );
};

export default CollegeSports;






