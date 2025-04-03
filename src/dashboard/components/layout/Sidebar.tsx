// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Home, Users, FileText, DollarSign, MessageSquare, LogOut } from "lucide-react";

export function Sidebar() {
  // Simple logout handler (you'd replace this with your actual logout logic)
  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing auth tokens, redirecting to login
    console.log("Logging out...");
    // Example: window.location.href = "/login";
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-green-600">Rochman Properties</h1>
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
          <MessageSquare className="w-5 h-5 mr-3" />
          Messages
        </NavLink>
      </nav>
      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center p-3 rounded-lg text-gray-600 hover:bg-gray-100 w-full text-left"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}