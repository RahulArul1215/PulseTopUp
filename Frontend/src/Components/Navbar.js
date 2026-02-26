// import React from 'react';
// import image from '../Resource/image';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate()
//   const change =()=>{
//     navigate("/contact")
//   }
//   return (
//     <nav className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className=" flex items-center h-16">

//           <div className="flex -ml-[270px] mr-[280px]">
//             <a href="#" className="flex items-center">
//               <img src={image.pulse} className="h-8 w-auto" alt="Pulse Logo" />
//               <span className="ml-3 text-xl font-bold">PulseTopUp</span>
//             </a>
//           </div>

//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-[210px]">
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-[30px]">
//                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={()=>{navigate("/")}}>Home</a>
//                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold"onClick={()=>{navigate("/history")}}>BillPayment</a>
//                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={()=>{navigate("/about")}}>About</a>
//                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={change}
//                 >Contact</a>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center ml-[370px]">
//             <div className="relative hidden sm:block">
//               <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-md border border-gray-300" />
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.58-1.42 1.42-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className='ml-4 '>
//             <a href="#" className="ml-[20px] -mr-9 p-5 md:ml-0 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={()=>navigate("/login")}>Login</a>
//           </div>


//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import image from '../Resource/image';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const { isAuthenticated, logout } = useAuth();

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     return (
//         <nav className="bg-white border-b border-gray-200">
//             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-5">
//                 <div className=" flex items-center h-16">
//                     <div className="flex -ml-[240px] mr-[280px]">
//                         <a href="#" className="flex items-center">
//                             <img src={image.pulse} className="h-8 w-auto" alt="Pulse Logo" />
//                             <span className="ml-2 text-xl font-bold">PulseTopUp</span>
//                         </a>
//                     </div>
//                     <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-[210px]">
//                         <div className="hidden sm:block sm:ml-6">
//                             <div className="flex space-x-[30px]">
//                                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/") }}>Home</a>
//                                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/history") }}>BillPayment</a>
//                                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/about") }}>About</a>
//                                 <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/contact") }}>Contact</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center ml-[270px]">
//                         <div className="relative hidden sm:block">
//                             <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-md border border-gray-300" />
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                     <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.58-1.42 1.42-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='ml-4 '>
//                         {isAuthenticated ? (
//                             <button className="ml-[20px] -mr-9 p-5 md:ml-0 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>
//                                 Logout
//                             </button>
//                         ) : (
//                             <button className="ml-[20px] -mr-9 p-5 md:ml-0 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => navigate("/login")}>
//                                 Login
//                             </button>
//                         )}
//                     </div>
//                 </div>
//                         <img src={image.profileimg} height={40} width={40}></img>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../AuthContext';
import image from '../Resource/image';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout,login,setIsAuthenticated } = useContext(AuthContext);

    // const handleLogout = () => {
    //     setIsAuthenticated(!isAuthenticated);
    //     console.log(isAuthenticated);
    //     logout();
    //     navigate('/login');
    // };
    const handlelogout=()=>{
        navigate("/login");
        logout();
    }
    const handlelogin=()=>{
        navigate("/login");
        login();
    }

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-5">
                <div className="flex items-center justify-between h-16">
                    <div className="flex  -ml-[240px] mr-[280px]">
                        <a href="#" className="flex items-center">
                            <img src={image.pulse} className="h-8 w-auto" alt="Pulse Logo" />
                            <span className="ml-2 text-xl font-bold">PulseTopUp</span>
                        </a>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ml-[210px]">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-8">
                                <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/") }}>Home</a>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/history") }}>BillPayment</a>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/about") }}>About</a>
                                <a href="#" className="text-gray-700 hover:bg-gray-50 hover:text-redfooter px-3 py-2 rounded-md text-lg font-semibold" onClick={() => { navigate("/contact") }}>Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative hidden sm:block  ml-[280px]">
                            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-md border border-gray-300" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.58-1.42 1.42-4.58-4.58zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        {isAuthenticated ? (
                            <button className="ml-4 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handlelogout}>
                                Logout
                            </button>
                        ) : (
                            <button className="ml-4 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handlelogin}>
                                Login
                            </button>
                        )}
                        <img src={image.profileimg} className="h-9 w-9 rounded-full ml-3 transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer" alt="Profile" onClick={() => navigate("/profile")} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
