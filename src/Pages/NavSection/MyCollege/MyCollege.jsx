import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import MyCollegeRow from "./MyCollegeRow";

const MyCollege = () => {
    const {user} = useContext(AuthContext);
    const [applys, setApplys] = useState([]);

    const url = `http://localhost:5000/apply?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setApplys(data));
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if(proceed){
            fetch(`http://localhost:5000/apply/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remaining = applys.filter(apply => apply._id !== id);
                    setApplys(remaining);
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto">
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <table className="min-w-full divide-y-2 divide-gray-500 text-sm">
                    <thead className="ltr:text-left rtl:text-right bg-indigo-200">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                College Image
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                College name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Candidate Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Candidate Image
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Subject
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Address
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Contact
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Date of Birth
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Remove
                            </th>
                           
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-400">
                        {applys.map(apply => (
                            <MyCollegeRow 
                                key={apply._id} 
                                apply={apply}
                                handleDelete= {handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCollege;
