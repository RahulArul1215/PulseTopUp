
import React from 'react';
import { FaBell, FaTools } from 'react-icons/fa';

function NotificationsAlerts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-zinc-100">
      <div className="text-2xl font-bold text-red-600 mb-4 ">Notifications and Alerts</div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <FaTools className="text-red-600 text-xl" />
          <span>System will undergo maintenance on 1st Aug</span>
        </li>
        <li className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <FaBell className="text-red-600 text-xl" />
          <span>Payment issue resolved for User123</span>
        </li>
      </ul>
    </div>
  );
}

export default NotificationsAlerts;
