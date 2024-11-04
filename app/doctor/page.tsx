"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sun,
  Moon,
  Users,
  MessageSquare,
  Settings,
  Plus,
  User,
  Stethoscope,
  Menu,
  LogOut,
  CalendarIcon,
  Clipboard,
  DollarSign,
} from "lucide-react";
import * as MockData from "../data/MockData";
import Appointments from "./appointments";
import Patients from "./patients";
import Treatments from "./treatments";
import Billing from "./billing";
import Messages from "./messages";

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("appointments");
  const [patients, setPatients] = useState(MockData.default.MockPatients);
  const [appointments, setAppointments] = useState(
    MockData.default.MockAppointments
  );
  const [billingRecords, setBillingRecords] = useState(
    MockData.default.MockBillingRecords
  );
  const [messages, setMessages] = useState(MockData.default.MockMessages);
  const [isAddPatientDialogOpen, setIsAddPatientDialogOpen] = useState(false);
  const [isAddBillingRecordDialogOpen, setIsAddBillingRecordDialogOpen] =
    useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const addPatient = (newPatient: any) => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
    setIsAddPatientDialogOpen(false);
  };

  const addBillingRecord = (newRecord: any) => {
    setBillingRecords([
      ...billingRecords,
      { ...newRecord, id: billingRecords.length + 1 },
    ]);
    setIsAddBillingRecordDialogOpen(false);
  };

  const deleteBillingRecord = (recordId: number) => {
    setBillingRecords(billingRecords.filter((r) => r.id !== recordId));
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark" : ""
      } bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white`}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
            isSidebarOpen ? "md:ml-64" : ""
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
                <Appointments appointments={appointments} patients={patients} />
              </TabsContent>

              <TabsContent value="patients">
                <Patients
                  patients={patients}
                  onAddPatient={() => setIsAddPatientDialogOpen(true)}
                />
              </TabsContent>

              <TabsContent value="treatments">
                <Treatments patients={patients} />
              </TabsContent>

              <TabsContent value="billing">
                <Billing
                  billingRecords={billingRecords}
                  patients={patients}
                  onAddRecord={() => setIsAddBillingRecordDialogOpen(true)}
                  onDeleteRecord={deleteBillingRecord}
                />
              </TabsContent>

              <TabsContent value="messages">
                <Messages messages={messages} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>

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
    </div>
  );
}
