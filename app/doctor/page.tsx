"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar as CalendarIcon,
  Sun,
  Moon,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Plus,
  Search,
  Edit,
  Trash2,
  DollarSign,
  Clipboard,
  Menu,
  LogOut,
  User,
  Stethoscope,
} from "lucide-react";
import { format } from "date-fns";
import * as MockData from "../data/MockData";
import { Patient } from "../data/MockData";

export default function InteractiveDashboardComponent() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isPatientProfileOpen, setIsPatientProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(MockData.default.MockAppointments);
  const [patients, setPatients] = useState<Patient[]>(
    MockData.default.MockPatients
  );
  const [appointments, setAppointments] = useState(
    MockData.default.MockAppointments
  );
  const [inventory, setInventory] = useState(MockData.default.MockInventory);
  const [billingRecords, setBillingRecords] = useState(
    MockData.default.MockBillingRecords
  );
  const [messages, setMessages] = useState(MockData.default.MockMessages);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddPatientDialogOpen, setIsAddPatientDialogOpen] = useState(false);
  const [isAddBillingRecordDialogOpen, setIsAddBillingRecordDialogOpen] =
    useState(false);
  const [isAddTodoDialogOpen, setIsAddTodoDialogOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("'dark'");
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof patient.ongoingTreatments === "string" &&
        patient.ongoingTreatments
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  const addPatient = (newPatient: any) => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
    setIsAddPatientDialogOpen(false);
  };

  const updatePatient = (updatedPatient: any) => {
    setPatients(
      patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
  };

  const deletePatient = (patientId: any) => {
    setPatients(patients.filter((p) => p.id !== patientId));
  };

  const addInventoryItem = (newItem: any) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
    setIsAddPatientDialogOpen(false);
  };

  const updateInventoryItem = (updatedItem: any) => {
    setInventory(
      inventory.map((i: { id: any }) =>
        i.id === updatedItem.id ? updatedItem : i
      )
    );
  };

  const deleteInventoryItem = (itemId: any) => {
    setInventory(inventory.filter((i: { id: any }) => i.id !== itemId));
  };

  const addBillingRecord = (newRecord: any) => {
    setBillingRecords([
      ...billingRecords,
      { ...newRecord, id: billingRecords.length + 1 },
    ]);
    setIsAddBillingRecordDialogOpen(false);
  };

  const updateBillingRecord = (updatedRecord: any) => {
    setBillingRecords(
      billingRecords.map((r: { id: any }) =>
        r.id === updatedRecord.id ? updatedRecord : r
      )
    );
  };

  const deleteBillingRecord = (recordId: any) => {
    setBillingRecords(
      billingRecords.filter((r: { id: any }) => r.id !== recordId)
    );
  };

  const openPatientProfile = (patient: any) => {
    setSelectedPatient(patient);
    setIsPatientProfileOpen(true);
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "'dark'" : "''"
      } bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white`}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "'spring'", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60"
      >
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Stethoscope className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <span className="ml-2 text-xl flex justify-center items-center  text-center font-bold">
              DentaCare
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-4">
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
              />
              <Label htmlFor="dark-mode" className="sr-only">
                Dark mode
              </Label>
              {isDarkMode ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/placeholder-avatar.jpg"
                      alt="Dr. Smith"
                    />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Dr. Smith
                    </p>
                    <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                      dr.smith@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "'spring'", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-48 border-r bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60 overflow-y-auto"
            >
              <nav className="flex-1 space-y-2 p-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("appointments")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Appointments
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("patients")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Patients
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("treatments")}
                >
                  <Clipboard className="mr-2 h-4 w-4" />
                  Treatments
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("billing")}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Billing
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveTab("messages")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className={`flex-1 overflow-y-auto p-6 ${
            isSidebarOpen ? "'md:ml-64'" : "''"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="container mx-auto"
          >
            <h1 className="text-3xl font-bold mb-6">Dental Dashboard</h1>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-8"
            >
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="treatments">Treatments</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>Appointments</CardTitle>
                    <CardDescription>Manage your appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {appointments.map((appointment: any) => (
                          <TableRow key={appointment.id}>
                            <TableCell>
                              {
                                patients.find(
                                  (p) => p.id === appointment.patientId
                                )?.name
                              }
                            </TableCell>
                            <TableCell>{appointment.date}</TableCell>
                            <TableCell>{appointment.time}</TableCell>
                            <TableCell>{appointment.type}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  appointment.status === "Confirmed"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {appointment.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="patients">
                <Card>
                  <CardHeader>
                    <CardTitle>Patients</CardTitle>
                    <CardDescription>Manage patient records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <div className="flex space-x-2">
                        <Input
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search by name"
                        />
                        <Button>
                          <Search className="mr-2 h-4 w-4" />
                          Search
                        </Button>
                      </div>
                      <Button onClick={() => setIsAddPatientDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Patient
                      </Button>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead>Last Visit</TableHead>
                          <TableHead>Next Appointment</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Priority</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPatients.length > 0 ? (
                          filteredPatients.map((patient) => (
                            <TableRow key={patient.id}>
                              <TableCell>{patient.name}</TableCell>
                              <TableCell>{patient.age}</TableCell>
                              <TableCell>{patient.lastVisit}</TableCell>
                              <TableCell>{patient.nextAppointment}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    patient.status === "Completed"
                                      ? "secondary"
                                      : patient.status === "In Progress"
                                      ? "default" // Change "warning" to "default"
                                      : "default" // Fallback to default if none match
                                  }
                                >
                                  {patient.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    patient.priority === "High"
                                      ? "destructive"
                                      : patient.priority === "Medium"
                                      ? "secondary" // Change "warning" to "secondary"
                                      : "default" // Fallback to default if none match
                                  }
                                >
                                  {patient.priority}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center">
                              No patients found.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treatments">
                <Card>
                  <CardHeader>
                    <CardTitle>Treatments</CardTitle>
                    <CardDescription>
                      Ongoing treatments and procedures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Treatment</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead>End Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {patients.map((patient) => (
                          <TableRow key={patient.id}>
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>{patient.ongoingTreatments}</TableCell>
                            <TableCell>
                              <Progress
                                value={Math.random() * 100}
                                className="w-[60%]"
                              />
                            </TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                            <TableCell>{patient.nextAppointment}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing</CardTitle>
                    <CardDescription>
                      Manage patient invoices and payments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Input
                        placeholder="Search billing records..."
                        className="max-w-sm"
                      />
                      <Button
                        onClick={() => setIsAddBillingRecordDialogOpen(true)}
                      >
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
                        {billingRecords.map((record: any) => (
                          <TableRow key={record.id}>
                            <TableCell>
                              {
                                patients.find((p) => p.id === record.patientId)
                                  ?.name
                              }
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
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  /* Open payment dialog */
                                }}
                              >
                                <DollarSign className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  /* Open edit record dialog */
                                }}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteBillingRecord(record.id)}
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
              </TabsContent>

              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>
                      Communicate with patients and staff
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Input
                        placeholder="Search messages..."
                        className="max-w-sm"
                      />
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Message
                      </Button>
                    </div>
                    <ScrollArea className="h-[400px]">
                      {messages.map((message: any) => (
                        <div
                          key={message.id}
                          className="flex items-start space-x-4 mb-4"
                        >
                          <Avatar>
                            <AvatarImage
                              src="/placeholder-avatar.jpg"
                              alt={message.from}
                            />
                            <AvatarFallback>{message.from[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {message.from}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {message.content}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {format(new Date(message.timestamp), "'PPpp'")}
                            </p>
                          </div>
                          {!message.read && (
                            <Badge variant="secondary">New</Badge>
                          )}
                        </div>
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t text-center bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
              © 2023 DentaCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <Dialog
        open={isAddPatientDialogOpen}
        onOpenChange={setIsAddPatientDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Patient</DialogTitle>
            <DialogDescription>
              Enter the details of the new patient.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const newPatient = Object.fromEntries(formData.entries());
              addPatient(newPatient);
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="age" className="text-right">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastVisit" className="text-right">
                  Last Visit
                </Label>
                <Input
                  id="lastVisit"
                  name="lastVisit"
                  type="date"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nextAppointment" className="text-right">
                  Next Appointment
                </Label>
                <Input
                  id="nextAppointment"
                  name="nextAppointment"
                  type="date"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="medicalHistory" className="text-right">
                  Medical History
                </Label>
                <Textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Patient</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAddBillingRecordDialogOpen}
        onOpenChange={setIsAddBillingRecordDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Billing Record</DialogTitle>
            <DialogDescription>
              Enter the details of the new billing record.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const newRecord = Object.fromEntries(formData.entries());
              addBillingRecord(newRecord);
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="patientId" className="text-right">
                  Patient
                </Label>
                <Select name="patientId">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    {patients.map((patient) => (
                      <SelectItem
                        key={patient.id}
                        value={patient.id.toString()}
                      >
                        {patient.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="treatment" className="text-right">
                  Treatment
                </Label>
                <Input id="treatment" name="treatment" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  className="col-span-3"
                />
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
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Record</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isPatientProfileOpen}
        onOpenChange={setIsPatientProfileOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Patient Profile</DialogTitle>
            <DialogDescription>
              Detailed information about the patient.
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={selectedPatient.name}
                    alt={selectedPatient.name}
                  />
                  <AvatarFallback>{selectedPatient.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedPatient.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Age: {selectedPatient.age}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Last Visit</p>
                  <p className="text-sm">{selectedPatient.lastVisit}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Next Appointment</p>
                  <p className="text-sm">{selectedPatient.nextAppointment}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Medical History</p>
                <p className="text-sm">{selectedPatient.medicalHistory}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ongoing Treatments</p>
                <p className="text-sm">{selectedPatient.ongoingTreatments}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Allergies</p>
                <p className="text-sm">
                  {selectedPatient.allergies.length > 0
                    ? selectedPatient.allergies.join("', '")
                    : "'None'"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Notes</p>
                <p className="text-sm">{selectedPatient.notes}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
