// src/components/notifications/NotificationDropdown.tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function NotificationDropdown() {
  const notifications = [
    { id: '1', type: 'payment', message: 'New payment received from Alex Johnson', time: '2 hours ago', read: false },
    { id: '2', type: 'maintenance', message: 'Maintenance request for Unit B202', time: '1 day ago', read: false },
    { id: '3', type: 'lease', message: 'Lease for James Wilson expires in 30 days', time: '3 days ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="p-2 border-b">
          <p className="font-medium">Notifications</p>
        </div>
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className={`py-3 ${!notification.read ? 'bg-gray-50' : ''}`}>
            <div className="flex items-start gap-3">
              <div className={`h-2 w-2 mt-1 rounded-full ${!notification.read ? 'bg-indigo-500' : 'bg-transparent'}`} />
              <div>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <div className="p-2 border-t">
          <Button variant="ghost" size="sm" className="w-full">
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}