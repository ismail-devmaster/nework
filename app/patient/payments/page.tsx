"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

// Mock data for demonstration
const mockPaymentHistory = [
  {
    id: 1,
    date: "2024-11-15",
    description: "General Checkup",
    amount: 15000,
    status: "Pending",
  },
  {
    id: 2,
    date: "2024-10-02",
    description: "Lab Tests",
    amount: 20000,
    status: "Paid",
  },
  {
    id: 3,
    date: "2024-09-20",
    description: "Specialist Consultation",
    amount: 25000,
    status: "Paid",
  },
  {
    id: 4,
    date: "2024-08-05",
    description: "Prescription Refill",
    amount: 7500,
    status: "Paid",
  },
  {
    id: 5,
    date: "2024-07-18",
    description: "Follow-up Appointment",
    amount: 10000,
    status: "Paid",
  },
];

const Payments = () => {
  const [paymentHistory, setPaymentHistory] = useState(mockPaymentHistory);

  const totalOutstanding = paymentHistory
    .filter((payment) => payment.status === "Pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  // Function to format amount in Algerian Dinar
  const formatDZD = (amount: number) => {
    return new Intl.NumberFormat("ar-DZ", {
      style: "currency",
      currency: "DZD",
    }).format(amount);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Payments
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <DollarSign className="mr-2 h-6 w-6 text-blue-500" />
            Payments
          </CardTitle>
          <CardDescription>
            View your payment history and outstanding balances
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Outstanding Balance</h3>
            <p className="text-2xl font-bold text-blue-600">
              {formatDZD(totalOutstanding)}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment History</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.description}</TableCell>
                      <TableCell>{formatDZD(payment.amount)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.status === "Paid" ? "success" : "warning"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Payments;
