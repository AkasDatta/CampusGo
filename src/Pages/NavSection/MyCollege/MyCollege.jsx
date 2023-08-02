import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyCollege = () => {
    const {user} = useContext(AuthContext);
    const [apply, setApply] = useState([]);

    const url = `http://localhost:5000/apply?email=${user?.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setApply(data));
    }, [])

    return (
        <div>
            <h2>Mycollege {apply.length}</h2>
        </div>
    );
};

export default MyCollege;
