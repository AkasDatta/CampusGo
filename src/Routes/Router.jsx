import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Login from "../Pages/Home/Login/Login/Login";
import Registration from "../Pages/Home/Login/Registration/Registration";
import Colleges from "../Pages/NavSection/Colleges/Colleges";
import CollegeSports from "../Pages/Home/CollegeSports/CollegeSports";
import PrivateRoute from "./PrivateRoute";
import Admission from "../Pages/NavSection/Admission/Admission";
import Apply from "../Pages/NavSection/Admission/Apply";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/college/:id',
            element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
            loader: () => fetch(`http://localhost:5000/college`)
          },
          {
            path: '/colleges/:id',
            element: <PrivateRoute><CollegeSports></CollegeSports></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/college')
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/registration',
            element: <Registration></Registration>
          },
          {
            path: '/colleges',
            element: <Colleges></Colleges>
          },
          {
            path: '/admission',
            element: <Admission></Admission>
          },
          {
            path: '/apply',
            element: <Apply></Apply>
          }
        ]
      },
  ]);