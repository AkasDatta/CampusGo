import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyCollege = () => {
    const college = useLoaderData(); 
    const {collegeName, _id} = college;
    const {user} = useContext(AuthContext);
    const [apply, setApply] = useState([]);

    const url = `http://localhost:5000/apply?email=${user.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])

    return (
        <div>
            <h2>Mycollege {collegeName}</h2>
        </div>
    );
};

export default MyCollege;