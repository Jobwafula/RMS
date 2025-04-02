// src/components/tenants/TenantList.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  unit: string;
  leaseEnd: string;
}

export function TenantList() {
  const tenants: Tenant[] = [
    { id: '1', name: 'Alex Johnson', email: 'alex@example.com', phone: '(555) 123-4567', property: 'Sunrise Apartments', unit: 'A101', leaseEnd: '2024-12-31' },
    { id: '2', name: 'Maria Garcia', email: 'maria@example.com', phone: '(555) 234-5678', property: 'Harbor View', unit: 'B202', leaseEnd: '2025-06-30' },
    { id: '3', name: 'James Wilson', email: 'james@example.com', phone: '(555) 345-6789', property: 'Mountain Ridge', unit: 'C303', leaseEnd: '2024-09-15' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenants</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Lease End</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenants.map((tenant) => (
              <TableRow key={tenant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${tenant.email}`} />
                      <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{tenant.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-500">{tenant.email}</div>
                  <div className="text-sm text-gray-500">{tenant.phone}</div>
                </TableCell>
                <TableCell>{tenant.property}</TableCell>
                <TableCell>{tenant.unit}</TableCell>
                <TableCell>{new Date(tenant.leaseEnd).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Message</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}