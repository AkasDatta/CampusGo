import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/Home/CollegeDetails/CollegeDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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