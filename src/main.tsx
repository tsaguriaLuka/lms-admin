import React from 'react'
import { createRoot } from "react-dom/client";

import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PrivateRoutes from "@/PrivateRoutes.tsx";
import { ThemeProvider } from "./theme.tsx";

import Index from './pages/index.tsx'
import DefaultLayout from './layouts/default.tsx'
import Lesson from "@/pages/lesson.tsx";
import Login from "@/pages/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <PrivateRoutes/>,
        children: [
          {
            path: "/",
            element: <Index />
          }
        ]
      },
      {
        path: "/lesson",
        element: <PrivateRoutes/>,
        children: [
          {
            path: "/lesson",
            element: <Lesson />
          }
        ]
      }
    ]
  },

  {
    path: '/login',
    element: <PrivateRoutes/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <RouterProvider router={ router } />
  </ThemeProvider>
)
