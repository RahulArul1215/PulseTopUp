// import React from 'react';

// function Sidebar() {
//   return (
//     <div className="w-60 bg-red-600 text-white flex flex-col">
//       <div className="text-center py-4 text-2xl font-bold border-b border-red-700">Admin Dashboard</div>
//       <nav className="flex-1 p-4">
//         <ul>
//           <li className="py-2 px-4 hover:bg-red-700 cursor-pointer">Dashboard</li>
//           <li className="py-2 px-4 hover:bg-red-700 cursor-pointer">User Management</li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaTachometerAlt, FaUsers } from 'react-icons/fa';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-red-600 text-white flex flex-col">
      <div className="text-center py-6 text-2xl font-bold border-b border-red-700">Admin</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="flex items-center space-x-4 py-2 px-4 rounded hover:bg-red-700 cursor-pointer transition duration-300">
            <FaTachometerAlt className="text-xl" />
            <span>Dashboard</span>
          </li>
          {/* Add more items here as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
