/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useContext, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import {GatsbyContext} from '../context/context';
import LoadingScreen from './LoadingScreen';

const Layout = ({children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const {isSidebarOpen} = useContext(GatsbyContext);
  // console.log("Gatsby Context:", isSidebarOpen);
  return (
    <>
      {loading === false ? (
        <div className='layout-wrapper'>
          <Navbar />
          {isSidebarOpen && <Sidebar />}
          {children}
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Layout;
