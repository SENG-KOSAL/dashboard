import React from 'react';
import Link from 'next/link';
import { FaHome, FaFileInvoice, FaUsers } from 'react-icons/fa';

const SideNav = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-500 text-white flex flex-col">
        {/* Logo */}
        <Link href={"/"}>
        <button>

        <div className="p-6">
          <h1 className="text-2xl font-bold">🌐 Acme</h1>
        </div>
        </button>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          <Link href="/dashboard" className="flex items-center px-6 py-3 hover:bg-blue-600">
            <FaHome className="mr-3" />
            Home
          </Link>
          <Link href="/dashboard/invoices" className="flex items-center px-6 py-3 hover:bg-blue-600">
            <FaFileInvoice className="mr-3" />
            Invoices
          </Link>
          <Link href="/dashboard/customers" className="flex items-center px-6 py-3 hover:bg-blue-600">
            <FaUsers className="mr-3" />
            Customers
          </Link>
        </nav>


      </div>

      {/* Main Content
      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold">Dashboard Page</h1>
      </div> */}
    </div>
  );
};

export default SideNav;
