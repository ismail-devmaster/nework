"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { CalendarIcon, Clock, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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

interface Patient {
  fullName: string;
  age: number;
  sex: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  medicalHistory: string;
}

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  reason: string;
  notes: string;
  patient: Patient;
}

const Component = () => {
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    Appointment[]
  >([
    {
      id: 1,
      date: "2023-06-15",
      time: "10:00 AM",
      doctor: "Dr. Smith",
      reason: "Annual checkup",
      notes:
        "Remember to bring your health insurance card and a list of current medications.",
      patient: {
        fullName: "John Doe",
        age: 35,
        sex: "Male",
        phoneNumber: "123-456-7890",
        email: "john.doe@example.com",
        dateOfBirth: "1988-03-15",
        medicalHistory:
          "Allergies: Penicillin, Peanuts; Chronic Conditions: Hypertension (2015), Type 2 Diabetes (2018);Past Surgeries: Appendectomy (2010)",
      },
    },
    {
      id: 2,
      date: "2023-06-18",
      time: "2:30 PM",
      doctor: "Dr. Johnson",
      reason: "Follow-up consultation",
      notes:
        "Bring recent lab test results and any questions you have about your treatment plan.",
      patient: {
        fullName: "Jane Smith",
        age: 28,
        sex: "Female",
        phoneNumber: "987-654-3210",
        email: "jane.smith@example.com",
        dateOfBirth: "1995-07-22",
        medicalHistory: "Allergic to penicillin.",
      },
    },
    {
      id: 3,
      date: "2023-06-20",
      time: "11:15 AM",
      doctor: "Dr. Williams",
      reason: "Dental cleaning",
      notes:
        "Please arrive 15 minutes early to fill out necessary paperwork. Don't forget to brush and floss before your appointment.",
      patient: {
        fullName: "Bob Johnson",
        age: 42,
        sex: "Male",
        phoneNumber: "555-123-4567",
        email: "bob.johnson@example.com",
        dateOfBirth: "1981-11-30",
        medicalHistory: "History of hypertension.",
      },
    },
  ]);

  const [isRescheduleDialogOpen, setIsRescheduleDialogOpen] = useState(false);
  const [isPatientInfoDialogOpen, setIsPatientInfoDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newDoctor, setNewDoctor] = useState("");

  const availableDoctors = [
    "Dr. Smith",
    "Dr. Johnson",
    "Dr. Williams",
    "Dr. Brown",
    "Dr. Davis",
  ];

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
    setNewDoctor(appointment.doctor);
    setIsRescheduleDialogOpen(true);
  };

  const handleRescheduleConfirm = () => {
    if (selectedAppointment) {
      const updatedAppointments = upcomingAppointments.map((apt) =>
        apt.id === selectedAppointment.id
          ? { ...apt, date: newDate, time: newTime, doctor: newDoctor }
          : apt
      );
      setUpcomingAppointments(updatedAppointments);
      setIsRescheduleDialogOpen(false);
      setUpcomingAppointments((prevAppointments) =>
        prevAppointments.filter((apt) => apt.id !== selectedAppointment.id)
      );
    }
  };

  const handleCancel = (id: number) => {
    setUpcomingAppointments((prevAppointments) =>
      prevAppointments.filter((apt) => apt.id !== id)
    );
  };

  const handleConfirm = (id: number) => {
    setUpcomingAppointments((prevAppointments) =>
      prevAppointments.filter((apt) => apt.id !== id)
    );
  };

  const handlePatientInfoClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsPatientInfoDialogOpen(true);
  };

  return (
    <>
      <Tabs defaultValue="upcoming">
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="bg-blue-50 dark:bg-gray-700">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
                      {appointment.date}
                    </div>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-transparent"
                      onClick={() => handlePatientInfoClick(appointment)}
                    >
                      <span className="text-blue-500 hover:underline">
                        {appointment.patient.fullName}
                      </span>
                    </Button>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    {appointment.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center mb-2">
                    <User className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {appointment.doctor}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {appointment.reason}
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Additional Notes:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {appointment.notes}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-gray-200 dark:border-gray-700"
                    onClick={() => handleReschedule(appointment)}
                  >
                    Reschedule
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleCancel(appointment.id)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => handleConfirm(appointment.id)}
                  >
                    Confirm
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog
        open={isRescheduleDialogOpen}
        onOpenChange={setIsRescheduleDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-date" className="text-right">
                New Date
              </Label>
              <Input
                id="new-date"
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-time" className="text-right">
                New Time
              </Label>
              <Input
                id="new-time"
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new-doctor" className="text-right">
                New Doctor
              </Label>
              <Select
                value={newDoctor}
                onValueChange={(value) => setNewDoctor(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent>
                  {availableDoctors.map((doctor) => (
                    <SelectItem key={doctor} value={doctor}>
                      {doctor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRescheduleDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleRescheduleConfirm}>
              Confirm Reschedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isPatientInfoDialogOpen}
        onOpenChange={setIsPatientInfoDialogOpen}
      >
        <DialogContent className="sm:max-w-[425px] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Patient Information</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4 max-h-[60vh] overflow-y-auto pr-6 -mr-6">
            {selectedAppointment && (
              <>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Full Name</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.fullName}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs">Age</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.age}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs">Date of Birth</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.dateOfBirth}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs">Sex</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.sex}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">
                    Contact Information
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs">Phone Number</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.phoneNumber}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs">Email</Label>
                      <p className="text-sm font-medium">
                        {selectedAppointment.patient.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400">
                    Medical History
                  </h4>
                  <p className="text-sm whitespace-pre-wrap">
                    {selectedAppointment.patient.medicalHistory}
                  </p>
                </div>
              </>
            )}
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsPatientInfoDialogOpen(false)}
              className="transition-all duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Component;
