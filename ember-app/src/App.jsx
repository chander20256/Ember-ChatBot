import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './Home/Home'

// import Projects from './Projects/Projects'
// import Contact from './ContactUs/Contact'
// import About from './About/About'
// import ScrollToTop from './Scroll'



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   
  
    children: [
      {
        path: "/",
        element: <Home />
      },
      // {
      //   path: "/projects",
      //   element: <Projects />
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />
      // },
      // {
      //   path: "/about",
      //   element: <About />
      // },
  
  
    
    ]
  }
])

const App = () => {
  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
