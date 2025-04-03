// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Home, Users, FileText, DollarSign, Bell, MessageSquare } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-green-600">Rochman Propeties</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <Home className="w-5 h-5 mr-3" />
          Properties
        </NavLink>
        <NavLink
          to="/tenants"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <Users className="w-5 h-5 mr-3" />
          Tenants
        </NavLink>
        <NavLink
          to="/leases"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <FileText className="w-5 h-5 mr-3" />
          Leases
        </NavLink>
        <NavLink
          to="/payments"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <DollarSign className="w-5 h-5 mr-3" />
          Payments
        </NavLink>
        <NavLink
          to="/communications"
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-indigo-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
          Messages
        </NavLink>
      </nav>
    </div>
  );
}