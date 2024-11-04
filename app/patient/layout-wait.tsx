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

const PatientDashboardComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "My Profile", icon: User },
    { name: "Appointments", icon: Calendar },
    { name: "Medical Records", icon: FileText },
    { name: "Payments", icon: CreditCard },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-5">
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
          </div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant={selectedNavItem === item.name ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedNavItem(item.name)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </li>
            ))}
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
            <Button
              variant="ghost"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
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

        {/* Breadcrumbs */}
        <nav
          className="text-gray-500 dark:text-gray-400 mb-4"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-800 dark:hover:text-white">
                Home
              </a>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
            <li className="flex items-center">
              <a href="#" className="hover:text-gray-800 dark:hover:text-white">
                {selectedNavItem}
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content Area */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {selectedNavItem}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            This is the content for the {selectedNavItem} section. You can add
            more specific content here based on the selected navigation item.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardComponent;
