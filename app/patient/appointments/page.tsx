"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Bell, CalendarIcon, Clock, User } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AppointmentsPageComponent() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState<string>("");
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
  const [waitingAppointments, setWaitingAppointments] = useState([]);
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

  const handleConfirmAppointment = () => {
    const newAppointment = {
      id: Date.now(),
      date: format(date, "MMMM d, yyyy"),
      time: selectedTime,
      doctor: selectedDoctor,
      reason: selectedReason,
    };

    setWaitingAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);

    toast({
      title: "Appointment Confirmed",
      description: `Your appointment is scheduled for ${format(
        date,
        "MMMM d, yyyy"
      )} at ${selectedTime}`,
    });

    // Reset form
    setDate(new Date());
    setSelectedTime(null);
    setSelectedDoctor(null);
    setSelectedReason(null);
    setAdditionalNotes("");

    // Switch to the Waiting tab
    setActiveTab("waiting");
  };

  const handleCancelBooking = () => {
    // Reset form
    setDate(new Date());
    setSelectedTime(null);
    setSelectedDoctor(null);
    setSelectedReason(null);
    setAdditionalNotes("");

    toast({
      title: "Booking Cancelled",
      description: "Your appointment booking has been cancelled.",
    });
  };

  const handleReschedule = (appointment) => {
    setAppointmentToReschedule(appointment);
    setIsRescheduleDialogOpen(true);
  };

  const handleConfirmReschedule = () => {
    if (!date || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select a new date and time.",
        variant: "destructive",
      });
      return;
    }

    const updatedAppointment = {
      ...appointmentToReschedule,
      date: format(date, "MMMM d, yyyy"),
      time: selectedTime,
    };

    // Remove the appointment from upcomingAppointments
    setUpcomingAppointments((appointments) =>
      appointments.filter((apt) => apt.id !== appointmentToReschedule.id)
    );

    // Add the updated appointment to waitingAppointments
    setWaitingAppointments((appointments) => [
      ...appointments,
      updatedAppointment,
    ]);

    toast({
      title: "Appointment Rescheduled",
      description: `Your appointment has been rescheduled to ${format(
        date,
        "MMMM d, yyyy"
      )} at ${selectedTime}`,
    });

    setIsRescheduleDialogOpen(false);
    setAppointmentToReschedule(null);
    setDate(new Date());
    setSelectedTime(null);
    setActiveTab("waiting");
  };

  const handleCancel = (appointmentId) => {
    setUpcomingAppointments((appointments) =>
      appointments.filter((apt) => apt.id !== appointmentId)
    );
    setWaitingAppointments((appointments) =>
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const disabledDates = ["2024-11-25", "2024-12-31"];

  // Function to handle date selection, with disabled dates check
  const handleSelectDate = (selectedDate) => {
    const isDisabled = disabledDates.some(
      (disabledDate) =>
        new Date(disabledDate).toDateString() === selectedDate.toDateString()
    );
    if (!isDisabled) {
      setDate(selectedDate);
    }
  };

  return (
    // Your component's JSX goes here
    <div className="w-full max-w-6xl mx-auto">
      <main>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
          Appointments
        </h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <TabsTrigger
              value="book-new"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              Book New
            </TabsTrigger>
            <TabsTrigger
              value="waiting"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:text-blue-600 dark:data-[state=active]:text-white"
            >
              Waiting
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Select Date and Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        onSelect={handleSelectDate}
                        fromDate={new Date()}
                        className="rounded-md border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={
                            selectedTime === time ? "default" : "outline"
                          }
                          className="h-12 border-gray-200 dark:border-gray-700"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Appointment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Select Doctor</Label>
                    <Select
                      value={selectedDoctor || ""}
                      onValueChange={setSelectedDoctor}
                    >
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dr. Smith">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src="/placeholder.svg?height=24&width=24"
                                alt="Dr. Smith"
                              />
                              <AvatarFallback>DS</AvatarFallback>
                            </Avatar>
                            Dr. Smith (Cardiology)
                          </div>
                        </SelectItem>
                        <SelectItem value="Dr. Johnson">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage
                                src="/placeholder.svg?height=24&width=24"
                                alt="Dr. Johnson"
                              />
                              <AvatarFallback>DJ</AvatarFallback>
                            </Avatar>
                            Dr. Johnson (Neurology)
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Select
                      value={selectedReason || ""}
                      onValueChange={setSelectedReason}
                    >
                      <SelectTrigger id="reason">
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {reasons.map((reason) => (
                          <SelectItem key={reason} value={reason}>
                            {reason}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="additional-notes">Additional Notes</Label>
                    <Textarea
                      id="additional-notes"
                      placeholder="Any additional information for your visit"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="min-h-[100px] resize-none border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="border-gray-200 dark:border-gray-700"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleConfirmAppointment}>
                    Confirm Appointment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="waiting">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {waitingAppointments.map((appointment) => (
                <Card
                  key={appointment.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="bg-yellow-50 dark:bg-gray-700">
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-yellow-500" />
                      {appointment.date}
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {appointment.reason}
                    </p>
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAppointments.map((appointment) => (
                <Card
                  key={appointment.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="bg-blue-50 dark:bg-gray-700">
                    <CardTitle className="flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
                      {appointment.date}
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {appointment.reason}
                    </p>
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Appointment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Outcome</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointmentHistory.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>{appointment.doctor}</TableCell>
                          <TableCell>{appointment.reason}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              {appointment.outcome}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="link"
                              onClick={() => handleViewDetails(appointment)}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Bell className="mr-2 h-6 w-6 text-blue-500" />
                  Appointment Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="email-reminder"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Email Reminders</span>
                    </Label>
                    <Switch id="email-reminder" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="sms-reminder"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>SMS Reminders</span>
                    </Label>
                    <Switch id="sms-reminder" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="push-reminder"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>Push Notifications</span>
                    </Label>
                    <Switch id="push-reminder" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="reminder-timing"
                    className="text-gray-900 dark:text-white"
                  >
                    Reminder Timing
                  </Label>
                  <Select>
                    <SelectTrigger id="reminder-timing">
                      <SelectValue placeholder="Select timing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-day">1 day before</SelectItem>
                      <SelectItem value="2-hours">2 hours before</SelectItem>
                      <SelectItem value="1-hour">1 hour before</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="apply-all"
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <Label
                    htmlFor="apply-all"
                    className="text-gray-900 dark:text-white"
                  >
                    Apply to all future appointments
                  </Label>
                </div>
                <Button className="w-full">Save Reminder Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

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
                  selected={date}
                  onSelect={setDate}
                  fromDate={today}
                  className="rounded-md border"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Time
              </Label>
              <Select
                value={selectedTime || ""}
                onValueChange={setSelectedTime}
              >
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
}
