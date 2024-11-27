import React, { useState } from 'react';
import { AiFillDashboard } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaNetworkWired } from 'react-icons/fa6';
import { MdOutlineInsertEmoticon } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-[90%] w-64 p-4 text-white fixed m-8 top-0 rounded-xl">
      <div className="flex items-center mb-8">
        <MdOutlineInsertEmoticon className="text-2xl mr-2" />
        <span className="text-lg font-semibold">Material Dashboard 2</span>
      </div>
      <div className="space-y-4">
        <div
          onClick={() => handleTabClick(0)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            activeTab === 0 ? 'bg-blue-600' : 'hover:bg-gray-600'
          }`}
        >
          <Link to="/" className="flex items-center">
            <AiFillDashboard className="mr-2 text-2xl" />
            <span>Dashboard</span>
          </Link>
        </div>
        <div
          onClick={() => handleTabClick(1)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            activeTab === 1 ? 'bg-blue-600' : 'hover:bg-gray-600'
          }`}
        >
          <BiSolidDashboard className="mr-2 text-2xl" />
          <span>Quản lý dự án</span>
        </div>
        <div
          onClick={() => handleTabClick(2)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            activeTab === 2 ? 'bg-blue-600' : 'hover:bg-gray-600'
          }`}
        >
          <Link to="/taskkanban" className="flex items-center">
            <FaNetworkWired className="mr-2 text-2xl" />
            <span>Phân công nhiệm vụ</span>
          </Link>
        </div>
        <div
          onClick={() => handleTabClick(3)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            activeTab === 3 ? 'bg-blue-600' : 'hover:bg-gray-600'
          }`}
        >
          <Link to="/users" className="flex items-center">
            <BiSolidDashboard className="mr-2 text-2xl" />
            <span>Quản lý Tài khoản</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
