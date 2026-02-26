import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function Adminportal() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default Adminportal;
