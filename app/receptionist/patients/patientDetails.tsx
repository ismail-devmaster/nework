import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

export default function PatientDetails({ patient = {} }) {
  const [payments, setPayments] = useState(patient?.paymentHistory || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().split(" ")[0].slice(0, 5),
    description: "",
    amount: "",
    status: "Pending",
    doctor: "",
  });

  const doctors = [
    { id: 1, name: "Dr. John Doe" },
    { id: 2, name: "Dr. Jane Smith" },
    { id: 3, name: "Dr. Mike Johnson" },
  ];

  if (!patient) return null;

  const addNewPayment = () => {
    if (!newPayment.description || !newPayment.amount || !newPayment.doctor) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const updatedPayment = {
      ...newPayment,
      amount: parseFloat(newPayment.amount),
    };

    setPayments([...payments, updatedPayment]);
    patient.paymentHistory = [...patient.paymentHistory, updatedPayment];

    setIsModalOpen(false);
    setNewPayment({
      date: new Date().toISOString().split("T")[0],
      time: new Date().toTimeString().split(" ")[0].slice(0, 5),
      description: "",
      amount: "",
      status: "Pending",
      doctor: "",
    });
    toast({
      title: "Success",
      description: "Payment added successfully",
    });
  };

  const toggleLastPaymentStatus = () => {
    if (payments.length === 0) return;

    const updatedPayments = [...payments];
    const lastIndex = updatedPayments.length - 1;
    updatedPayments[lastIndex].status =
      updatedPayments[lastIndex].status === "Paid" ? "Pending" : "Paid";
    setPayments(updatedPayments);
    patient.paymentHistory = updatedPayments;
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Patient Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <p>
              <strong>Full Name:</strong> {patient.name}
            </p>
            <p>
              <strong>Age:</strong> {patient.age}
            </p>
            <p>
              <strong>Date of Birth:</strong> {patient.dateOfBirth}
            </p>
            <p>
              <strong>Sex:</strong> {patient.sex}
            </p>
            <p>
              <strong>Phone:</strong> {patient.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {patient.email}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Medical Information</h3>
            <p>
              <strong>Current Condition:</strong> {patient.condition}
            </p>
            <h4 className="font-semibold mt-2">Medical History</h4>
            <ul className="list-disc pl-5">
              {patient.medicalHistory.map((record, index) => (
                <li key={index}>
                  {record.date}: {record.diagnosis} - {record.treatment}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Payment History</h3>
          <div className="flex justify-between items-center mb-2">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button>New Payment</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Payment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input
                      id="description"
                      value={newPayment.description}
                      onChange={(e) =>
                        setNewPayment({
                          ...newPayment,
                          description: e.target.value,
                        })
                      }
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                      Amount
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      value={newPayment.amount}
                      onChange={(e) =>
                        setNewPayment({ ...newPayment, amount: e.target.value })
                      }
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="doctor" className="text-right">
                      Doctor
                    </Label>
                    <Select
                      value={newPayment.doctor}
                      onValueChange={(value) =>
                        setNewPayment({ ...newPayment, doctor: value })
                      }
                      required
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.name}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={newPayment.date}
                      onChange={(e) =>
                        setNewPayment({ ...newPayment, date: e.target.value })
                      }
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="time" className="text-right">
                      Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={newPayment.time}
                      onChange={(e) =>
                        setNewPayment({ ...newPayment, time: e.target.value })
                      }
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>
                    <Select
                      value={newPayment.status}
                      onValueChange={(value) =>
                        setNewPayment({ ...newPayment, status: value })
                      }
                      required
                    >
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Paid">Paid</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={addNewPayment}>Add Payment</Button>
              </DialogContent>
            </Dialog>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Date</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Doctor</th>
                  <th className="text-left">Description</th>
                  <th className="text-right">Amount</th>
                  <th className="text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.date}</td>
                    <td>{payment.time}</td>
                    <td>{payment.doctor}</td>
                    <td>{payment.description}</td>
                    <td className="text-right">${payment.amount.toFixed(2)}</td>
                    <td className="text-right">
                      <Badge
                        variant={
                          payment.status === "Paid" ? "success" : "warning"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLastPaymentStatus}
              disabled={payments.length === 0}
            >
              Toggle Last Payment Status
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
