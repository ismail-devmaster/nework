"use client";

import React, { useState } from "react";
import {
  Bell,
  Calendar,
  CreditCard,
  FileText,
  Home,
  Menu,
  Moon,
  Sun,
  User,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const PatientDashboardComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-60 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0 w-60" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <Link href={"/patient"} className="flex items-center mb-5">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Patient"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
              John Doe
            </span>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/profile"}
              >
                <User className="mr-2 h-4 w-4" />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/appointments"}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Appointments
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/queue"}
              >
                <FileText className="mr-2 h-4 w-4" />
                Queque Status
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/payments"}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payments
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`p-4 sm:ml-64 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "" : "sm:ml-0"
        }`}
      >
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md rounded-lg mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* <Button
              variant="ghost"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button> */}
            <div className="flex items-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleDarkMode}
                    >
                      {darkMode ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {darkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>New appointment scheduled</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Test results available</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Prescription refill reminder</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="container px-6 py-8 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default PatientDashboardComponent;
