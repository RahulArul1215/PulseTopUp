import { FaExchangeAlt } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SummaryMetrics() {

  const [totalHistories, setTotalHistories] = useState(0);
  const [airtelCount, setAirtelCount] = useState(0);
  const [jioCount, setJioCount] = useState(0);
  const [viCount, setViCount] = useState(0);
  const [bsnlCount, setBsnlCount] = useState(0);
  const [revenue,setRevenue]=useState(0);
  const[activeusers,setActiveusers]=useState(0);
  const[support,setSupport]=useState(0);


  const fetchCounts = async () => {
    try {
      // const [totalResponse, airtelResponse, jioResponse, viResponse, bsnlResponse] = await Promise.all([
        // axios.get('http://localhost:8080/count/airtel'),
        // axios.get('http://localhost:8080/count/jio'),
        // axios.get('http://localhost:8080/count/vi'),
        // axios.get('http://localhost:8080/count/bsnl'),
      // ]);
      const totalResponse = await axios.get('http://localhost:8080/count')
      const airtelResponse = await axios.get('http://localhost:8080/count/airtel')
      const jioResponse = await axios.get('http://localhost:8080/count/jio')
      const viResponse = await axios.get('http://localhost:8080/count/vi')
      const bsnlResponse = await axios.get('http://localhost:8080/count/bsnl')
      const revenueResponse=await axios.get('http://localhost:8080/history/total-amount')
      const userResponse=await axios.get('http://localhost:8080/userscount')
      const supportResponse = await axios.get('http://localhost:8080/contactcount')
      setTotalHistories(totalResponse.data);
      setAirtelCount(airtelResponse.data);
      setJioCount(jioResponse.data);
      setViCount(viResponse.data);
      setBsnlCount(bsnlResponse.data);
      setRevenue(revenueResponse.data);
      setActiveusers(userResponse.data);
      setSupport(supportResponse.data);
    } catch (error) {
      console.error('Error fetching SIM counts:', error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);


  return (
    <>
    <div className='bg-gray-100 p-2 pl-6 pr-6' >
<h1 className='font-poppins font-semibold text-2xl mt-7'>Financial Gain</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4 mb-10">

    <div className=" border border-red-700 p-4 rounded-md shadow-md bg-white text-center">
        <div className="text-3xl font-bold text-green-500">Total Transactions</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">{totalHistories}</div>
    </div>
    
    <div className=" border border-red-700 p-4 rounded-md shadow-md bg-white text-center">
        <div className="text-3xl font-bold text-green-500">Total Revenue</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">{revenue}</div>
    </div>

    <div className=" border border-red-700 p-4 rounded-md shadow-md bg-white text-center">
        <div className="text-3xl font-bold text-green-500">Active Users</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">{activeusers}</div>
    </div>

    <div className=" border border-red-700 p-4 rounded-md shadow-md text-center">
        <div className="text-3xl font-bold text-green-500">User Support</div>
        <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-red-500 w-10/12'></hr>
        </div>
        <div className="text-3xl font-montserrat font-semibold ">{support}</div>
    </div>
    </div>

    <div className='flex justify-center items-center'>
            <hr className='mt-4 mb-4 border-t-1 border-white w-10/12'></hr>
        </div>

    <h1 className='font-poppins mt-5 font-semibold text-2xl'>Sim Card Users</h1>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">


      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Airtel Users</div>
          <div className="text-4xl mt-2">{airtelCount}</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Jio Users</div>
          <div className="text-4xl mt-2">{jioCount}</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">BSNL Users</div>
          <div className="text-4xl mt-2">{bsnlCount}</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">VI Users</div>
          <div className="text-4xl mt-2">{viCount}</div>
        </div>
        <FaExchangeAlt className="text-6xl opacity-20" />
      </div>
      <div className='mb-9'></div>
    </div>
    </div>
    </>
  );
}

export default SummaryMetrics;
// import { FaExchangeAlt } from 'react-icons/fa';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SummaryMetrics() {
//   const [totalHistories, setTotalHistories] = useState(0);
//   const [airtelCount, setAirtelCount] = useState(0);
//   const [jioCount, setJioCount] = useState(0);
//   const [viCount, setViCount] = useState(0);
//   const [bsnlCount, setBsnlCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeusers, setActiveusers] = useState(0);
//   const [support, setSupport] = useState(0);

//   const fetchCounts = async () => {
//     try {
//       const totalResponse = await axios.get('http://localhost:8080/count');
//       const airtelResponse = await axios.get('http://localhost:8080/count/airtel');
//       const jioResponse = await axios.get('http://localhost:8080/count/jio');
//       const viResponse = await axios.get('http://localhost:8080/count/vi');
//       const bsnlResponse = await axios.get('http://localhost:8080/count/bsnl');
//       const revenueResponse = await axios.get('http://localhost:8080/history/total-amount');
//       const userResponse = await axios.get('http://localhost:8080/userscount');
//       const supportResponse = await axios.get('http://localhost:8080/contactcount');
//       setTotalHistories(totalResponse.data);
//       setAirtelCount(airtelResponse.data);
//       setJioCount(jioResponse.data);
//       setViCount(viResponse.data);
//       setBsnlCount(bsnlResponse.data);
//       setRevenue(revenueResponse.data);
//       setActiveusers(userResponse.data);
//       setSupport(supportResponse.data);
//     } catch (error) {
//       console.error('Error fetching SIM counts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Financial Metrics</h1>
      
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-300">
//           <div className="text-lg font-semibold text-gray-600">Total Transactions</div>
//           <div className="text-4xl font-bold text-gray-800 mt-2">{totalHistories}</div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-300">
//           <div className="text-lg font-semibold text-gray-600">Total Revenue</div>
//           <div className="text-4xl font-bold text-gray-800 mt-2">${revenue.toLocaleString()}</div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-300">
//           <div className="text-lg font-semibold text-gray-600">Active Users</div>
//           <div className="text-4xl font-bold text-gray-800 mt-2">{activeusers}</div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-300">
//           <div className="text-lg font-semibold text-gray-600">User Support</div>
//           <div className="text-4xl font-bold text-gray-800 mt-2">{support}</div>
//         </div>
//       </div>

//       <hr className="border-t-2 border-gray-300 my-8" />

//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">SIM Card Users</h1>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
//           <div>
//             <div className="text-xl font-semibold">Airtel Users</div>
//             <div className="text-3xl font-bold mt-2">{airtelCount}</div>
//           </div>
//           <FaExchangeAlt className="text-5xl opacity-20" />
//         </div>

//         <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
//           <div>
//             <div className="text-xl font-semibold">Jio Users</div>
//             <div className="text-3xl font-bold mt-2">{jioCount}</div>
//           </div>
//           <FaExchangeAlt className="text-5xl opacity-20" />
//         </div>

//         <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
//           <div>
//             <div className="text-xl font-semibold">BSNL Users</div>
//             <div className="text-3xl font-bold mt-2">{bsnlCount}</div>
//           </div>
//           <FaExchangeAlt className="text-5xl opacity-20" />
//         </div>

//         <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-lg shadow-lg text-white flex items-center justify-between">
//           <div>
//             <div className="text-xl font-semibold">VI Users</div>
//             <div className="text-3xl font-bold mt-2">{viCount}</div>
//           </div>
//           <FaExchangeAlt className="text-5xl opacity-20" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SummaryMetrics;
