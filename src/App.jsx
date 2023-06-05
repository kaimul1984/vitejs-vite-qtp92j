

import React, {Suspense, lazy} from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.scss'
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';
//import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
//import Services from './pages/Services/Services';
import Services1 from './pages/Services/Services1/Services1';
import Services2 from './pages/Services/Services2/Services2';

const About = lazy(() => delayForDemo(import('./pages/About/About')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}


const App = () => {
 

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
        element: <Suspense fallback={<Loading />}><About/></Suspense>
        },

        {
          path: "/services1",
          element: <Services1 />
        },
        {
          path: "/services2",
          element: <Services2 />
        },
        {
          path: "/contact",
          element: <Contact  />
        },
       
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
