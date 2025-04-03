// src/pages/Leases.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Filter, Home } from "lucide-react";
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

export default function Leases() {
  // Sample lease data (in a real app, this would come from an API)
  const leases = [
    {
      id: "L001",
      tenant: "John Smith",
      property: "123 Main St",
      monthlyRent: 1200,
      startDate: "2024-06-01",
      endDate: "2025-05-31",
      status: "Active",
    },
    {
      id: "L002",
      tenant: "Sarah Johnson",
      property: "456 Oak Ave",
      monthlyRent: 1500,
      startDate: "2024-08-01",
      endDate: "2025-07-31",
      status: "Active",
    },
    {
      id: "L003",
      tenant: "Mike Brown",
      property: "789 Pine Rd",
      monthlyRent: 1350,
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
            <Home className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-green-600">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-green-600">Within 60 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Monthly Rent</CardTitle>
            <Home className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,050</div>
            <p className="text-xs text-green-600">From active leases</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Lease Management</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Input
                  placeholder="Search leases..."
                  className="pl-8 w-[200px]"
                />
                <Filter className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Filter by Date
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lease ID</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Monthly Rent</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leases.map((lease) => (
                <TableRow key={lease.id}>
                  <TableCell>{lease.id}</TableCell>
                  <TableCell>{lease.tenant}</TableCell>
                  <TableCell>{lease.property}</TableCell>
                  <TableCell>${lease.monthlyRent.toLocaleString()}</TableCell>
                  <TableCell>{lease.startDate}</TableCell>
                  <TableCell>{lease.endDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        lease.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {lease.status}
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