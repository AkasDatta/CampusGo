import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
        <div>
            {isVisible ? <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-green-500"></div>
      </div> : <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div> }
        </div>
    );
};

export default Main;