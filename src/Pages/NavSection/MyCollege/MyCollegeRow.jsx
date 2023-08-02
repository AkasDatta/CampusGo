const MyCollegeRow = ({ apply }) => {
    const { collegeImage, collegeName, userName, userEmail, photo, subject, address, number, date } = apply;
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <img src={collegeImage} alt="" className="max-w-full h-auto sm:max-h-20" />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {collegeName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {userName}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{userEmail}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <img src={photo} alt="" className="max-w-full h-auto sm:max-h-14 rounded-full mx-6" />
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {subject}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {address}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {number}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {date}
            </td>
            <td className="whitespace-nowrap px-4 py-2">
                <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    Remove
                </a>
            </td>
        </tr>
    );
};

export default MyCollegeRow;
