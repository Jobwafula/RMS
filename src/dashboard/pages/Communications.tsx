// src/pages/Communications.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Send, Users, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Communications() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showCompose, setShowCompose] = useState(false);

  // Sample message data (in a real app, this would come from an API)
  const messages = [
    {
      id: "M001",
      sender: "John Smith",
      subject: "Maintenance Request",
      date: "2025-04-02",
      preview: "Need to report a leaking faucet...",
      status: "Unread",
    },
    {
      id: "M002",
      sender: "Sarah Johnson",
      subject: "Payment Confirmation",
      date: "2025-04-01",
      preview: "Just sent this month's rent...",
      status: "Read",
    },
    {
      id: "M003",
      sender: "Mike Brown",
      subject: "Lease Renewal",
      date: "2025-03-31",
      preview: "Interested in renewing for another year...",
      status: "Unread",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <Mail className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-green-600">Pending review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sent Today</CardTitle>
            <Send className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-green-600">Messages sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-green-600">Active tenants</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Message List */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Inbox</CardTitle>
              <div className="flex gap-2">
                <Button onClick={() => setShowCompose(true)}>
                  <Send className="mr-2 h-4 w-4" />
                  Compose
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sender</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Preview</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((message) => (
                  <TableRow
                    key={message.id}
                    className={message.status === "Unread" ? "font-bold" : ""}
                    onClick={() => setSelectedMessage(message)}
                  >
                    <TableCell>{message.sender}</TableCell>
                    <TableCell>{message.subject}</TableCell>
                    <TableCell>{message.date}</TableCell>
                    <TableCell className="truncate max-w-[200px]">
                      {message.preview}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Message Detail / Compose */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>
              {showCompose ? "New Message" : "Message Details"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {showCompose ? (
              <div className="space-y-4">
                <Input placeholder="To" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Type your message here..." rows={5} />
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            ) : selectedMessage ? (
              <div className="space-y-4">
                <div>
                  <strong>From:</strong> {selectedMessage.sender}
                </div>
                <div>
                  <strong>Subject:</strong> {selectedMessage.subject}
                </div>
                <div>
                  <strong>Date:</strong> {selectedMessage.date}
                </div>
                <div>{selectedMessage.preview}</div>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Reply
                </Button>
              </div>
            ) : (
              <p className="text-gray-500">Select a message to view details</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}