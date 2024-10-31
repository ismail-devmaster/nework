import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Users,
  UserRound,
  Activity,
  Clock,
} from "lucide-react";
import Link from "next/link";

const page = () => {
  const navigationCards = [
    {
      title: "Appointments",
      description: "Manage patient appointments and schedules",
      icon: Calendar,
      href: "/receptionist/appointments",
      color: "text-blue-600",
    },
    {
      title: "Doctor",
      description: "View and manage doctor schedules",
      icon: UserRound,
      href: "/receptionist/doctor",
      color: "text-green-600",
    },
    {
      title: "Lobby",
      description: "Monitor waiting room and patient status",
      icon: Clock,
      href: "/receptionist/lobby",
      color: "text-orange-600",
    },
    {
      title: "Patients",
      description: "Access patient records and information",
      icon: Users,
      href: "/receptionist/patients",
      color: "text-purple-600",
    },
  ];

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Welcome to Dental Center Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Access all your dental practice management tools from one central
            dashboard.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {navigationCards.map((item) => (
          <Link href={item.href} key={item.title} className="no-underline">
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
          </Link>
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
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
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
            <p className="text-xs text-muted-foreground">Out of 5 total</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default page;
