"use client";

import React, { useState, useEffect } from "react";
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
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } overflow-y-auto bg-gray-800 transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <Button
            variant="ghost"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-5"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href={"/patient"} className="flex items-center mb-5">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Patient"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
                John Doe
              </span>
            )}
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/profile"}
              >
                <User className="mr-2 h-4 w-4" />
                {sidebarOpen && <span>My Profile</span>}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/appointments"}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {sidebarOpen && <span>Appointments</span>}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/queue"}
              >
                <FileText className="mr-2 h-4 w-4" />
                {sidebarOpen && <span>Queue Status</span>}
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-4 py-2 mt-4"
                href={"/patient/payments"}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                {sidebarOpen && <span>Payments</span>}
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-md rounded-lg mb-0 mx-10 my-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
        <div className="container px-6 py-8 mx-auto">{children}</div>
      </main>
      {/* Main Content */}
    </div>
  );
};

export default PatientDashboardComponent;
