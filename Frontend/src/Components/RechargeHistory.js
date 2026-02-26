
// import React, { useEffect,useContext } from 'react';
// import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import { AuthContext } from '../AuthContext';
// import axios from 'axios';

// const rechargeData = [
//     { id: 1, name: 'Rahul A', sim: 'Airtel', amount: '₹219', date: '2024-07-28', time: '10:45 AM', offerPlan: 'Unlimited Talktime', plan: 'Basic', status: 'Success' },
//     { id: 2, name: 'Kavin A', sim: 'Jio', amount: '₹159', date: '2024-07-27', time: '03:15 PM', offerPlan: '1.5GB/day', plan: 'Premium', status: 'Failed' },
//     { id: 3, name: 'Kavin A', sim: 'VI', amount: '₹299', date: '2024-07-26', time: '09:30 AM', offerPlan: '2GB/day', plan: 'Golden', status: 'Success' },
//     { id: 4, name: 'Haripraveen', sim: 'BSNL', amount: '₹599', date: '2024-07-25', time: '11:00 AM', offerPlan: 'Unlimited Data', plan: 'Normal', status: 'Success' },
//     { id: 5, name: 'Kiran Kumar', sim: 'Airtel', amount: '₹410', date: '2024-07-24', time: '12:15 PM', offerPlan: '500MB/day', plan: 'Premium', status: 'Failed' },
//     { id: 6, name: 'Kirthik', sim: 'Jio', amount: '₹1299', date: '2024-07-23', time: '01:30 PM', offerPlan: '4GB/day', plan: 'Golden', status: 'Success' },
//     { id: 7, name: 'Kiran Pandiyan', sim: 'VI', amount: '₹219', date: '2024-07-22', time: '02:45 PM', offerPlan: '1GB/day', plan: 'Normal', status: 'Success' },
//     { id: 8, name: 'Larwin J', sim: 'BSNL', amount: '₹256', date: '2024-07-21', time: '03:00 PM', offerPlan: '2GB/day', plan: 'Basic', status: 'Success' },
//     { id: 9, name: 'Prasana Venkatesan', sim: 'Airtel', amount: '₹149', date: '2024-07-20', time: '04:15 PM', offerPlan: 'Unlimited Calls', plan: 'Premium', status: 'Failed' },
//     { id: 10, name: 'Patrick', sim: 'Jio', amount: '₹312', date: '2024-07-19', time: '05:30 PM', offerPlan: '3GB/day', plan: 'Golden', status: 'Success' },
//   ];


// function RechargeHistory() {

//   const {user} = useContext(AuthContext);

//   const {id}=user;
//   // if(id===null){
//   //   return <>No History</>
//   // }
//   const historylist = async () => {
//     const url = `http://localhost:8080/getHistory?id=${id}}`;
//     // console.log('Requesting URL:', url);  // Debugging: Check the URL
  
//     try {
//       const response = await axios.get(url);
//       console.log(response.data);  // Access the data property of the response
//     } catch (error) {
//       console.error('Error fetching history:', error);
//     }
//   }
  
  
//   useEffect(()=>{
//     historylist();
//   },[])

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 bg-white rounded-lg shadow-lg">
//         <div className="flex h-[200px] border-t border-b mb-10">
//           <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Recharge History</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-red-600 text-white text-left">
//                 <th className="py-2 px-4 font-semibold font-poppins">Status</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">Name</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">SIM</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">Amount</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">Date</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">Time</th>
//                 <th className="py-2 px-4 font-semibold font-poppins">Offer Plan</th>
//               </tr>
//             </thead>
//             <tbody className="space-y-4">
//               {rechargeData.map((recharge, index) => (
//                 <tr
//                   key={recharge.id}
//                   className={`transition duration-300 ${
//                     index % 2 === 0 ? 'bg-white' : 'bg-red-50'
//                   }`}
//                 >
//                   <td className="py-2 px-4">
//                     <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full">
//                       {recharge.status === 'Success' ? <FaRegCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 text-lg text-gray-600 font-semibold font-poppins">{recharge.name}</td>
//                   <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{recharge.sim}</td>
//                   <td className="py-2 px-4 text-lg text-gray-600 font-poppins ">{recharge.amount}</td>
//                   <td className="py-2 px-4 text-sm text-gray-600  font-poppins">{recharge.date}</td>
//                   <td className="py-2 px-4 text-sm text-gray-600  font-poppins">{recharge.time}</td>
//                   <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.offerPlan}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default RechargeHistory;
import React, { useEffect, useState, useContext } from 'react';
import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './Navbar';
import { AuthContext } from '../AuthContext';
import axios from 'axios';

function RechargeHistory() {
  const { user,uid } = useContext(AuthContext);
  const { info } = useContext(AuthContext);
  const { phno } = info;


  const [rechargeData, setRechargeData] = useState([]);

  const historylist = async () => {
    
    try {
      const response = await axios.get(`http://localhost:8080/getuserHistory/${uid}`);
      console.log(response.data)
      // const response = await axios.get(url);
      setRechargeData(response.data);  // Store fetched data in state
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect(() => {
    historylist();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex h-[200px] border-t border-b mb-10">
          <h2 className="text-5xl font-poppins font-semibold mt-[140px]">Recharge History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="py-2 px-4 font-semibold font-poppins">Status</th>
                <th className="py-2 px-4 font-semibold font-poppins">Phone</th>
                <th className="py-2 px-4 font-semibold font-poppins">SIM</th>
                <th className="py-2 ml-4 px-4 font-semibold font-poppins">Amount</th>
                <th className="py-2 px-4 font-semibold font-poppins">Date</th>
                <th className="py-2 px-4 font-semibold font-poppins">Time</th>
                <th className="py-2 px-4 font-semibold font-poppins">Offer Plan</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {rechargeData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-500 font-poppins">
                    No recharge history available.
                  </td>
                </tr>
              ) : (
                rechargeData.map((recharge, index) => (
                  <tr
                    key={recharge.id}
                    className={`transition duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-red-50'
                    }`}
                  >
                    <td className="py-2 px-5">
                      <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full">
                        {recharge.status === 'Success' ? <FaRegCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
                      </div>
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{recharge.phno}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{recharge.sim}</td>
                    <td className="py-2 px-4 text-lg text-gray-600 font-poppins">{recharge.amt}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.date}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.time}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{recharge.offerplan}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RechargeHistory;
