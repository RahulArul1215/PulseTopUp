// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import { Route, Routes, Switch } from 'react-router-dom';
// import LoginPage from './Components/LoginPage'
// import ContactUs from "./Components/Contact";
// import About from "./Components/About";
// import Adminportal from "./Admin/Adminportal";
// import RechargeHistory from "./Components/RechargeHistory";

// function App() {

  
//   return (
//     <>
//       {/* <div> */}
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/contact" element={<ContactUs/>} />
//           <Route path="/about" element={<About/>} />
//           <Route path="/login" element={<LoginPage/>} />
//           <Route path="/admin" element={<Adminportal/>} />
//           <Route path="/history" element={<RechargeHistory/>} />
          
          
//         </Routes>
//       {/* </div> */}
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import ContactUs from './Components/Contact';
import About from './Components/About';
import Adminportal from './Admin/Adminportal';
import RechargeHistory from './Components/RechargeHistory';
import ProtectedRoute from './ProtectedRoute';
import ProfilePage from './Components/Profilepage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Components/Payment';
import AllHistory from './Admin/adminhistory';


function App() {
    return (
        <AuthProvider>
            <ToastContainer/>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/payment" element={<Payment/>}/>
                <Route element={<ProtectedRoute />}>
                    <Route path="/history" element={<RechargeHistory/>} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="/admin" element={<Adminportal />} />
                    <Route path="/adminhistory" element={<AllHistory/>} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </AuthProvider>
    );
}

export default App;
