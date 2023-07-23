import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";

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
        ]
      },
  ]);