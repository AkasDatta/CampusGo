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
            element: <CollegeDetails></CollegeDetails>,
            loader: () => fetch('../college.json')
          },
          {
            path: '/colleges/:id',
            element: <CollegeSports></CollegeSports>,
            loader: () => fetch('../college.json')
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
          }
        ]
      },
  ]);