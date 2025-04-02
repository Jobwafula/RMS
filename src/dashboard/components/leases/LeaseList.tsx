// src/components/leases/LeaseList.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Lease {
  id: string;
  tenant: string;
  property: string;
  unit: string;
  startDate: string;
  endDate: string;
  rent: number;
  status: 'active' | 'expired' | 'pending';
}

export function LeaseList() {
  const leases: Lease[] = [
    { id: '1', tenant: 'Alex Johnson', property: 'Sunrise Apartments', unit: 'A101', startDate: '2023-01-01', endDate: '2024-12-31', rent: 1200, status: 'active' },
    { id: '2', tenant: 'Maria Garcia', property: 'Harbor View', unit: 'B202', startDate: '2023-03-15', endDate: '2025-06-30', rent: 1500, status: 'active' },
    { id: '3', tenant: 'James Wilson', property: 'Mountain Ridge', unit: 'C303', startDate: '2022-09-01', endDate: '2024-09-15', rent: 1800, status: 'active' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lease Agreements</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leases.map((lease) => (
              <TableRow key={lease.id}>
                <TableCell className="font-medium">{lease.tenant}</TableCell>
                <TableCell>{lease.property}</TableCell>
                <TableCell>{lease.unit}</TableCell>
                <TableCell>
                  {new Date(lease.startDate).toLocaleDateString()} - {new Date(lease.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>${lease.rent}/mo</TableCell>
                <TableCell>
                  <Badge variant={lease.status === 'active' ? 'default' : lease.status === 'expired' ? 'destructive' : 'secondary'}>
                    {lease.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Renew</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}