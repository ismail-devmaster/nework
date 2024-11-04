"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Bell, Calendar as CalendarIcon, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BookNew } from "./bookNew";
import { Upcoming } from "./upcoming";
import { History } from "./history";
import { Reminders } from "./reminder";

const AppointmentsPageComponent = () => {
  const { toast } = useToast();
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      date: "June 15, 2023",
      time: "2:00 PM",
      doctor: "Dr. Smith",
      reason: "Cardiology Checkup",
    },
    {
      id: 2,
      date: "June 16, 2023",
      time: "3:00 PM",
      doctor: "Dr. Johnson",
      reason: "Follow-up Appointment",
    },
    {
      id: 3,
      date: "June 17, 2023",
      time: "10:00 AM",
      doctor: "Dr. Davis",
      reason: "Annual Physical",
    },
  ]);
  const [appointmentToReschedule, setAppointmentToReschedule] = useState(null);
  const [isRescheduleDialogOpen, setIsRescheduleDialogOpen] = useState(false);
  const [appointmentHistory, setAppointmentHistory] = useState([
    {
      id: 1,
      date: "May 20, 2023",
      time: "2:00 PM",
      doctor: "Dr. Smith",
      reason: "Cardiology Checkup",
      outcome: "Completed",
      notes: "Patient reported improved symptoms. Follow-up in 3 months.",
    },
    {
      id: 2,
      date: "May 15, 2023",
      time: "11:00 AM",
      doctor: "Dr. Johnson",
      reason: "Annual Physical",
      outcome: "Completed",
      notes: "All vitals normal. Recommended increased physical activity.",
    },
    {
      id: 3,
      date: "May 10, 2023",
      time: "3:30 PM",
      doctor: "Dr. Davis",
      reason: "Vaccination",
      outcome: "Completed",
      notes: "Administered flu vaccine. No adverse reactions observed.",
    },
    {
      id: 4,
      date: "May 5, 2023",
      time: "10:00 AM",
      doctor: "Dr. Wilson",
      reason: "Dermatology Consult",
      outcome: "Completed",
      notes: "Prescribed topical treatment for eczema. Follow-up in 2 weeks.",
    },
    {
      id: 5,
      date: "May 1, 2023",
      time: "1:00 PM",
      doctor: "Dr. Brown",
      reason: "Orthopedic Evaluation",
      outcome: "Completed",
      notes: "X-rays taken of left knee. Recommended physical therapy.",
    },
  ]);
  const [selectedAppointmentDetails, setSelectedAppointmentDetails] =
    useState(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("book-new");

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const reasons = [
    "General Checkup",
    "Follow-up Appointment",
    "Vaccination",
    "Lab Results Review",
    "Prescription Refill",
    "Other (please specify)",
  ];

  const handleReschedule = (appointment) => {
    setAppointmentToReschedule(appointment);
    setIsRescheduleDialogOpen(true);
  };

  const handleConfirmReschedule = () => {
    //This function remains the same
  };

  const handleCancel = (appointmentId) => {
    setUpcomingAppointments((appointments) =>
      appointments.filter((apt) => apt.id !== appointmentId)
    );

    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
    });
  };

  const handleViewDetails = (appointment) => {
    setSelectedAppointmentDetails(appointment);
    setIsDetailsDialogOpen(true);
  };

  const today = new Date();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                className="h-8 w-8 mr-3"
              />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                HealthCare Pro
              </h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Appointments
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Medical Records
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Messages
              </a>
            </nav>
            <div className="flex items-center">
              <Switch id="dark-mode" className="mr-4" />
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Appointments
        </h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <TabsTrigger
              value="book-new"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              Book New
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              History
            </TabsTrigger>
            <TabsTrigger
              value="reminders"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              Reminders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="book-new">
            <BookNew />
          </TabsContent>

          <TabsContent value="upcoming">
            <Upcoming
              upcomingAppointments={upcomingAppointments}
              handleReschedule={handleReschedule}
              handleCancel={handleCancel}
            />
          </TabsContent>

          <TabsContent value="history">
            <History
              appointmentHistory={appointmentHistory}
              handleViewDetails={handleViewDetails}
            />
          </TabsContent>

          <TabsContent value="reminders">
            <Reminders />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Contact Support
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} HealthCare Pro. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Dialog
        open={isRescheduleDialogOpen}
        onOpenChange={setIsRescheduleDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
            <DialogDescription>
              Please select a new date and time for your appointment.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Date
              </Label>
              <div className="col-span-3">
                <Calendar
                  mode="single"
                  selected={new Date()}
                  onSelect={() => {}}
                  fromDate={today}
                  className="rounded-md border"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Time
              </Label>
              <Select value={""} onValueChange={() => {}}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
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
            <Button onClick={handleConfirmReschedule}>
              Confirm Reschedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointmentDetails && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-bold">Date:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.date}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-bold">Time:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.time}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-bold">Doctor:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.doctor}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-bold">Reason:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.reason}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-bold">Outcome:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.outcome}
                </div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right font-bold">Notes:</Label>
                <div className="col-span-3">
                  {selectedAppointmentDetails.notes}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsDetailsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AppointmentsPageComponent;
