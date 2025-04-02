// src/components/payments/PaymentOverview.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const paymentData = [
  { name: 'Jan', paid: 4000, overdue: 2400 },
  { name: 'Feb', paid: 3000, overdue: 1398 },
  { name: 'Mar', paid: 2000, overdue: 9800 },
  { name: 'Apr', paid: 2780, overdue: 3908 },
  { name: 'May', paid: 1890, overdue: 4800 },
  { name: 'Jun', paid: 2390, overdue: 3800 },
  { name: 'Jul', paid: 3490, overdue: 4300 },
];

export function PaymentOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="paid" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="overdue" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}