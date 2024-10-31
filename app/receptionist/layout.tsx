"use client";

import * as React from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Armchair,
  User,
  Users,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReceptionistDashboardComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeContent, setActiveContent] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [, setShowToggle] = React.useState(true);

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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
        <div className="flex items-center justify-between h-20 bg-gray-900 px-4 ">
          {isSidebarOpen && (
            <Link href="/receptionist" onClick={() => setActiveContent("")}>
              <h2 className="text-2xl font-semibold text-white">
                RamdaniClinic
              </h2>
            </Link>
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
          <Link
            // className="flex items-center px-6 py-2 mt-4"
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "appointments"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="/receptionist/appointments"
            onClick={() => setActiveContent("appointments")}
          >
            <Calendar className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Appointments</span>}
          </Link>

          <Link
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "lobby"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="/receptionist/lobby"
            onClick={() => setActiveContent("lobby")}
          >
            <Armchair className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Lobby</span>}
          </Link>
          <Link
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "patinets"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="/receptionist/patients"
            onClick={() => setActiveContent("patients")}
          >
            <Users className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Patients</span>}
          </Link>
          <Link
            className={`flex items-center px-6 py-2 mt-4 ${
              activeContent === "doctor"
                ? "text-gray-100 bg-gray-700 bg-opacity-25"
                : "text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            }`}
            href="/receptionist/doctor"
            onClick={() => setActiveContent("doctor")}
          >
            <User className="w-5 h-5" />
            {isSidebarOpen && <span className="mx-3">Doctor</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container px-6 py-8 mx-auto">{children}</div>
      </main>
    </div>
  );
};
export default ReceptionistDashboardComponent;
