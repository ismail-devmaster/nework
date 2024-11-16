"use client";

import * as React from "react";
import { Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ReceptionistAppointments = () => {
  // export function ReceptionistAppointments() {
  const [appointments, setAppointments] = React.useState([
    {
      id: 1,
      patientName: "Sarah Johnson",
      doctorName: "Dr. John Smith",
      type: "General Checkup",
      date: "2024-11-15",
      time: "14:00",
    },
    {
      id: 2,
      patientName: "Mike Brown",
      doctorName: "Dr. Sarah Lee",
      type: "Dental Cleaning",
      date: "2024-11-17",
      time: "10:00",
    },
    {
      id: 3,
      patientName: "Emily White",
      doctorName: "Dr. Michael Johnson",
      type: "Annual Physical",
      date: "2024-11-30",
      time: "11:00",
    },
  ]);

  const [isAddingAppointment, setIsAddingAppointment] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterPeriod, setFilterPeriod] = React.useState("all");

  const patients = [
    { id: 1, name: "Sarah Johnson" },
    { id: 2, name: "Mike Brown" },
    { id: 3, name: "Emily White" },
    { id: 4, name: "John Doe" },
    { id: 5, name: "Jane Smith" },
  ];

  const doctors = [
    { id: 1, name: "Dr. John Smith" },
    { id: 2, name: "Dr. Sarah Lee" },
    { id: 3, name: "Dr. Michael Johnson" },
    { id: 4, name: "Dr. Emily Brown" },
    { id: 5, name: "Dr. David Wilson" },
  ];

  const appointmentTypes = [
    "General Checkup",
    "Dental Cleaning",
    "Annual Physical",
    "Vaccination",
    "Consultation",
  ];

  const handleAddAppointment = (newAppointment) => {
    setAppointments([
      ...appointments,
      {
        ...newAppointment,
        id: appointments.length + 1,
        doctorName: newAppointment.doctorName,
      },
    ]);
    setIsAddingAppointment(false);
  };

  const handleUpdateAppointment = (updatedAppointment) => {
    setAppointments(
      appointments.map((a) =>
        a.id === updatedAppointment.id
          ? {
              ...a,
              ...updatedAppointment,
              doctorName: updatedAppointment.doctorName,
            }
          : a
      )
    );
    setSelectedAppointment(null);
  };

  const handleRemoveAppointment = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patientName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase());

    const appointmentDate = new Date(appointment.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const oneWeekLater = new Date(today);
    oneWeekLater.setDate(today.getDate() + 7);
    const oneMonthLater = new Date(today);
    oneMonthLater.setMonth(today.getMonth() + 1);

    switch (filterPeriod) {
      case "today":
        return (
          matchesSearch &&
          appointmentDate.toDateString() === today.toDateString()
        );
      case "this-week":
        return (
          matchesSearch &&
          appointmentDate >= today &&
          appointmentDate < oneWeekLater
        );
      case "this-month":
        return (
          matchesSearch &&
          appointmentDate >= today &&
          appointmentDate < oneMonthLater
        );
      default:
        return matchesSearch;
    }
  });

  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Appointment Management
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Appointment Management</CardTitle>
          <CardDescription>
            Schedule, reschedule, or cancel appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Search appointments..."
                className="w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Dialog
              open={isAddingAppointment}
              onOpenChange={setIsAddingAppointment}
            >
              <DialogTrigger asChild>
                <Button onClick={() => setIsAddingAppointment(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Schedule New Appointment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                  <DialogDescription>
                    Enter the appointment details below.
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    handleAddAppointment(Object.fromEntries(formData));
                  }}
                >
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="patientName" className="text-right">
                        Patient Name
                      </Label>
                      <Select name="patientName" required>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select a patient" />
                        </SelectTrigger>
                        <SelectContent>
                          {patients.map((patient) => (
                            <SelectItem key={patient.id} value={patient.name}>
                              {patient.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="doctorName" className="text-right">
                        Doctor Name
                      </Label>
                      <Select name="doctorName" required>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select a doctor" />
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
                      <Label htmlFor="type" className="text-right">
                        Appointment Type
                      </Label>
                      <Select name="type" required>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
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
                        name="date"
                        type="date"
                        className="col-span-3"
                        required
                        min={formattedToday}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="time" className="text-right">
                        Time
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        className="col-span-3"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddingAppointment(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Schedule Appointment</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Doctor Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patientName}</TableCell>
                    <TableCell>{appointment.doctorName}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>{`${appointment.date} ${appointment.time}`}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setSelectedAppointment(appointment)
                              }
                            >
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Appointment</DialogTitle>
                              <DialogDescription>
                                Update the appointment details below.
                              </DialogDescription>
                            </DialogHeader>
                            {selectedAppointment && (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  const formData = new FormData(e.target);
                                  handleUpdateAppointment({
                                    ...selectedAppointment,
                                    ...Object.fromEntries(formData),
                                  });
                                }}
                              >
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="edit-doctorName"
                                      className="text-right"
                                    >
                                      Doctor Name
                                    </Label>
                                    <Select
                                      name="doctorName"
                                      defaultValue={
                                        selectedAppointment.doctorName
                                      }
                                    >
                                      <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a doctor" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {doctors.map((doctor) => (
                                          <SelectItem
                                            key={doctor.id}
                                            value={doctor.name}
                                          >
                                            {doctor.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="edit-type"
                                      className="text-right"
                                    >
                                      Appointment Type
                                    </Label>
                                    <Select
                                      name="type"
                                      defaultValue={selectedAppointment.type}
                                    >
                                      <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select appointment type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {appointmentTypes.map((type) => (
                                          <SelectItem key={type} value={type}>
                                            {type}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="edit-date"
                                      className="text-right"
                                    >
                                      Date
                                    </Label>
                                    <Input
                                      id="edit-date"
                                      name="date"
                                      type="date"
                                      defaultValue={selectedAppointment.date}
                                      className="col-span-3"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                      htmlFor="edit-time"
                                      className="text-right"
                                    >
                                      Time
                                    </Label>
                                    <Input
                                      id="edit-time"
                                      name="time"
                                      type="time"
                                      defaultValue={selectedAppointment.time}
                                      className="col-span-3"
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button type="submit">
                                    Update Appointment
                                  </Button>
                                </DialogFooter>
                              </form>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            handleRemoveAppointment(appointment.id)
                          }
                        >
                          Remove
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
export default ReceptionistAppointments;
