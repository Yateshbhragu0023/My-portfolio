import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path : "/",
        element : <Layout/>,
        children : [
          {
            path : '',
            element : <Home/>,
          },
          {
            path : "/about",
            element : <About/>
          },
          {
            path : "/service",
            element : <Service/>
          },
          {
            path: "/contact",
            element : <Contact/>
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={routes}/>
  )
}
