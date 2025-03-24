// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import  Dashpour from "../bages/Dashpour"
// Your admin sidebar component

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApplications: 0,
    totalJobs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStats({
        totalUsers: 150,
        totalApplications: 75,
        totalJobs: 20,
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar is fixed on the left */}
      <Dashpour />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Admin Dashboard
        </h1>
        
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Users Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Users
              </h2>
              <p className="text-4xl font-bold text-indigo-600 mt-2">
                {stats.totalUsers}
              </p>
            </div>
            {/* Total Applications Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Applications
              </h2>
              <p className="text-4xl font-bold text-indigo-600 mt-2">
                {stats.totalApplications}
              </p>
            </div>
            {/* Total Jobs Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Jobs
              </h2>
              <p className="text-4xl font-bold text-indigo-600 mt-2">
                {stats.totalJobs}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
