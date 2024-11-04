import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, DollarSign, Edit, Trash2 } from "lucide-react";

interface BillingRecord {
  id: number;
  patientId: number;
  treatment: string;
  amount: number;
  status: string;
  date: string;
  paymentMethod: string;
}

interface Patient {
  id: number;
  name: string;
}

interface BillingProps {
  billingRecords: BillingRecord[];
  patients: Patient[];
  onAddRecord: () => void;
  onDeleteRecord: (id: number) => void;
}

export default function Billing({
  billingRecords,
  patients,
  onAddRecord,
  onDeleteRecord,
}: BillingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <CardDescription>Manage patient invoices and payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input placeholder="Search billing records..." className="max-w-sm" />
          <Button onClick={onAddRecord}>
            <Plus className="mr-2 h-4 w-4" />
            Add Record
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Treatment</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billingRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  {patients.find((p) => p.id === record.patientId)?.name}
                </TableCell>
                <TableCell>{record.treatment}</TableCell>
                <TableCell>${record.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      record.status === "Paid"
                        ? "secondary"
                        : record.status === "Pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {record.status}
                  </Badge>
                </TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.paymentMethod}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <DollarSign className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeleteRecord(record.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
