// import React from 'react';
// import RechargeForm from './RechargeForm';
// import Fragment2 from './Fragment2';
// import Fragment3 from './Fragment3';
// import Membership from './Membership';
// import Contact from './Contact'
// import About from './About'
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Home = () => {
//   return (
//     <>
//     <Navbar/>
//       <RechargeForm />
//       <Fragment3 />
//       <Membership />    
//       <Fragment2 />
//     <Footer/>
//     </>
//   );
// }

// export default Home;
// Home.js
import React, { useState, useEffect } from 'react';
import RechargeForm from './RechargeForm';
import Fragment2 from './Fragment2';
import Fragment3 from './Fragment3';
import Membership from './Membership';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          <Navbar />
          <RechargeForm />
          <Fragment3 />
          <Membership />
          <Fragment2 />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
