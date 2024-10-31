

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, UserRound, Activity, Clock, Home } from "lucide-react";

export default function HomePage() {
  const navigationCards = [
    {
      title: "Appointments",
      description: "Manage patient appointments and schedules",
      icon: Calendar,
      href: "/receptionist/appointments",
      color: "text-blue-600"
    },
    {
      title: "Doctor",
      description: "View and manage doctor schedules",
      icon: UserRound,
      href: "/receptionist/doctor",
      color: "text-green-600"
    },
    {
      title: "Lobby",
      description: "Monitor waiting room and patient status",
      icon: Clock,
      href: "/receptionist/lobby",
      color: "text-orange-600"
    },
    {
      title: "Patients",
      description: "Access patient records and information",
      icon: Users,
      href: "/receptionist/patients",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <Home className="mr-2 h-6 w-6" />
          <h1 className="text-xl font-semibold">Dental Center Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Welcome Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Dental Center Management System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access all your dental practice management tools from one central dashboard.
            </p>
          </CardContent>
        </Card>

        {/* Navigation Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {navigationCards.map((item) => (
            <a 
              href={item.href} 
              key={item.title}
              className="no-underline"
            >
              <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Today&apos;s Appointments
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Patients in Lobby
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Average wait: 10 mins
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Available Doctors
              </CardTitle>
              <UserRound className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Out of 5 total
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>

  );
}