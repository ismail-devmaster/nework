"use client";

import * as React from "react";
import {
  Bell,
  Calendar,
  Layout,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Armchair,
  Menu,
  Search,
  User,
  Users,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReceptionistAppointments from "./appointments/page";
import ReceptionistPatient from "./patient/page";
import ReceptionistDoctor from "./doctor/page";
import ReceptionistLobby from "./lobby/page";
import Link from "next/link";

const ReceptionistDashboardComponent = () => {
  // export function ReceptionistDashboardComponent() {
  const [activeContent, setActiveContent] = React.useState("appointments");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [showToggle, setShowToggle] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowToggle(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [patientQueue, setPatientQueue] = React.useState([
    { id: 1, name: "John Doe", status: "Waiting", timeLeft: "10 mins" },
    { id: 2, name: "Jane Smith", status: "In Progress", timeLeft: "15 mins" },
    { id: 3, name: "Bob Johnson", status: "Waiting", timeLeft: "25 mins" },
  ]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } overflow-y-auto bg-gray-800 transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="flex items-center justify-between h-20 bg-gray-900 px-4">
          {isSidebarOpen && (
            <h2 className="text-2xl font-semibold text-white">RamdaniClinic</h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-white hover:bg-gray-700"
          >
            {isSidebarOpen ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </div>
        <nav className="mt-5 flex-grow">
          <a
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "appointments"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href=""
            onClick={() => setActiveContent("appointments")}
          >
            <Calendar className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Appointments</span>}
          </a>
          <Link
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "lobby"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="/receptionist/lobby"
            // onClick={() => setActiveContent("lobby")}
          >
            <Armchair className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Lobby</span>}
          </Link>
          <a
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "patients"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="#"
            onClick={() => setActiveContent("patients")}
          >
            <Users className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Patients</span>}
          </a>
          <a
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "doctor"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="#"
            onClick={() => setActiveContent("doctor")}
          >
            <User className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Doctor</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container px-6 py-8 mx-auto">
          {activeContent === "doctor" && (
            <>
              <h3 className="mb-4 text-3xl font-medium text-gray-700">
                Doctor Schedule Management
              </h3>
              <ReceptionistDoctor />
            </>
          )}
          {activeContent === "patients" && (
            <>
              <h3 className="mb-4 text-3xl font-medium text-gray-700">
                Patient Management
              </h3>
              <ReceptionistPatient />
            </>
          )}
          {activeContent === "appointments" && (
            <>
              <h3 className="mb-4 text-3xl font-medium text-gray-700">
                Appointment Management
              </h3>
              <ReceptionistAppointments />
            </>
          )}
          {activeContent === "lobby" && (
            <>
              <h3 className="mb-4 text-3xl font-medium text-gray-700">
                Lobby Management
              </h3>
              <Link href="/receptionist/lobby">Dashboard</Link>
            </>
          )}
        </div>
      </main>
    </div>
  );
};
export default ReceptionistDashboardComponent;
