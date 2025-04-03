// src/pages/Tenants.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Filter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Tenants() {
  // Sample tenant data (in a real app, this would come from an API)
  const tenants = [
    {
      id: "T001",
      name: "John Smith",
      property: "123 Main St",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      leaseEnd: "2025-05-31",
      status: "Current",
    },
    {
      id: "T002",
      name: "Sarah Johnson",
      property: "456 Oak Ave",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      leaseEnd: "2025-07-31",
      status: "Current",
    },
    {
      id: "T003",
      name: "Mike Brown",
      property: "789 Pine Rd",
      email: "mike.brown@email.com",
      phone: "(555) 345-6789",
      leaseEnd: "2025-12-31",
      status: "Current",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-green-600">Active tenants</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lease Renewals</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-green-600">Due within 60 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacant Units</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-green-600">Available properties</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Tenant Directory</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Input
                  placeholder="Search tenants..."
                  className="pl-8 w-[200px]"
                />
                <Filter className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Lease End</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell>{tenant.id}</TableCell>
                  <TableCell>{tenant.name}</TableCell>
                  <TableCell>{tenant.property}</TableCell>
                  <TableCell>{tenant.email}</TableCell>
                  <TableCell>{tenant.phone}</TableCell>
                  <TableCell>{tenant.leaseEnd}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        tenant.status === "Current"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}