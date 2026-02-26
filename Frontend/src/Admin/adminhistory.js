import React, { useEffect, useState } from 'react';
import { FaRegCheckCircle, FaTimesCircle } from 'react-icons/fa';

import axios from 'axios';
import Sidebar from './Sidebar';

function AllHistory() {
  const [historyData, setHistoryData] = useState([]);

  const fetchAllHistory = async () => {
    try {
      const response = await axios.get('http://localhost:8080/allhistory');
      setHistoryData(response.data);  // Store fetched data in state
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useEffect(() => {
    fetchAllHistory();
  }, []);

  return (
    <>

      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex h-[120px] border-t border-b mb-10">
          <h2 className="text-3xl font-poppins font-semibold mt-[60px] ">All Recharge History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-red-600 text-white text-left">
                <th className="py-2 px-4 font-semibold font-poppins">Status</th>
                <th className="py-2 px-4 font-semibold font-poppins">Phone</th>
                <th className="py-2 px-4 font-semibold font-poppins">SIM</th>
                <th className="py-2 px-4 font-semibold font-poppins">Amount</th>
                <th className="py-2 px-4 font-semibold font-poppins">Date</th>
                <th className="py-2 px-4 font-semibold font-poppins">Time</th>
                <th className="py-2 px-4 font-semibold font-poppins">Offer Plan</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {historyData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-4 text-center text-gray-500 font-poppins">
                    No recharge history available.
                  </td>
                </tr>
              ) : (
                historyData.map((history, index) => (
                  <tr
                    key={history.id}
                    className={`transition duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-red-50'
                    }`}
                  >
                    <td className="py-2 px-5">
                      <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full">
                        {history.status === 'Success' ? <FaRegCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />}
                      </div>
                    </td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{history.phno}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-medium font-poppins">{history.sim}</td>
                    <td className="py-2 px-4 text-lg text-gray-600 font-poppins">{history.amt}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{history.date}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{history.time}</td>
                    <td className="py-2 px-4 text-sm text-gray-600 font-poppins">{history.offerplan}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllHistory;
