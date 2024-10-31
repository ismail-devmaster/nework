"use client";

import * as React from "react";
import {
  Plus,
  Edit,
} from "lucide-react";
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
import { Switch } from "@/components/ui/switch";

const ReceptionistAppointments = () => {
  // export function ReceptionistAppointments() {
  const [appointments, setAppointments] = React.useState([
    {
      id: 1,
      patientName: "Sarah Johnson",
      type: "General Checkup",
      date: "2023-07-15",
      time: "14:00",
      status: "Scheduled",
      reminderSent: false,
    },
    {
      id: 2,
      patientName: "Mike Brown",
      type: "Dental Cleaning",
      date: "2023-07-16",
      time: "10:00",
      status: "Scheduled",
      reminderSent: true,
    },
    {
      id: 3,
      patientName: "Emily White",
      type: "Annual Physical",
      date: "2023-07-14",
      time: "11:00",
      status: "Completed",
      reminderSent: true,
    },
  ]);

  const [isAddingAppointment, setIsAddingAppointment] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const [patients, setPatients] = React.useState([
    { id: 1, name: "Sarah Johnson" },
    { id: 2, name: "Mike Brown" },
    { id: 3, name: "Emily White" },
    { id: 4, name: "John Doe" },
    { id: 5, name: "Jane Smith" },
  ]);

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
        status: "Scheduled",
        reminderSent: false,
      },
    ]);
    setIsAddingAppointment(false);
  };

  const handleUpdateAppointment = (updatedAppointment) => {
    setAppointments(
      appointments.map((a) =>
        a.id === updatedAppointment.id ? updatedAppointment : a
      )
    );
    setSelectedAppointment(null);
  };

  const handleToggleStatus = (id) => {
    setAppointments(
      appointments.map((a) => {
        if (a.id === id) {
          const newStatus =
            a.status === "Scheduled" ? "Cancelled" : "Scheduled";
          return { ...a, status: newStatus };
        }
        return a;
      })
    );
  };

  const handleToggleReminder = (id) => {
    setAppointments(
      appointments.map((a) =>
        a.id === id ? { ...a, reminderSent: !a.reminderSent } : a
      )
    );
  };

  const handleRemoveAppointment = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.patientName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Appointment Management</CardTitle>
        <CardDescription>
          Schedule, reschedule, or cancel appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search appointments..."
            className="w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <ScrollArea className="h-[400px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reminder</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAppointments
                    .filter((a) => a.status !== "Completed")
                    .map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.patientName}</TableCell>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>{`${appointment.date} ${appointment.time}`}</TableCell>
                        <TableCell>{appointment.status}</TableCell>
                        <TableCell>
                          <Switch
                            checked={appointment.reminderSent}
                            onCheckedChange={() =>
                              handleToggleReminder(appointment.id)
                            }
                          />
                        </TableCell>
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
                                  <Edit className="mr-2 h-4 w-4" /> Reschedule
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Reschedule Appointment
                                  </DialogTitle>
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
                                          htmlFor="edit-patientName"
                                          className="text-right"
                                        >
                                          Patient Name
                                        </Label>
                                        <Select
                                          name="patientName"
                                          defaultValue={
                                            selectedAppointment.patientName
                                          }
                                        >
                                          <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Select a patient" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {patients.map((patient) => (
                                              <SelectItem
                                                key={patient.id}
                                                value={patient.name}
                                              >
                                                {patient.name}
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
                                          defaultValue={
                                            selectedAppointment.type
                                          }
                                        >
                                          <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Select appointment type" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {appointmentTypes.map((type) => (
                                              <SelectItem
                                                key={type}
                                                value={type}
                                              >
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
                                          defaultValue={
                                            selectedAppointment.date
                                          }
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
                                          defaultValue={
                                            selectedAppointment.time
                                          }
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
                              variant="outline"
                              size="sm"
                              onClick={() => handleToggleStatus(appointment.id)}
                            >
                              {appointment.status === "Scheduled"
                                ? "Cancel"
                                : "Reschedule"}
                            </Button>
                            {appointment.status === "Cancelled" && (
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() =>
                                  handleRemoveAppointment(appointment.id)
                                }
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="past">
            <ScrollArea className="h-[400px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAppointments
                    .filter((a) => a.status === "Completed")
                    .map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.patientName}</TableCell>

                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>{`${appointment.date} ${appointment.time}`}</TableCell>
                        <TableCell>{appointment.status}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
export default ReceptionistAppointments;
