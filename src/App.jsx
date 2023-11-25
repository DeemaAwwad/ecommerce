import React from 'react'
import Home from './components/web/Home'
import Layout from './layouts/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catogeries from './components/web/categories/Catogeries';
import DashBoardLayout from './layouts/DashBoardLayout';
import HomeDashboard from './components/dashboard/home/Home'
import CategoriesDashboard from './components/dashboard/categories/Categories'
import Register from './components/web/register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
       path:'register',
       element:<Register />,
      },
      {
        path:"home",
        element:<Home />
      },
      {
        path:"categories",
        element:<Catogeries />

      }
    ]

   
  },
  {
    path: "/Dashboard",
    element:<DashBoardLayout />,
    children:[{
      path:"home",
      element:<HomeDashboard />
    },
  {
    path:"categories",
    element:<CategoriesDashboard />
  }]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
