"use client";
import React from "react";
import {
  Bell,
  Calendar,
  CreditCard,
  FileText,
  User,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const healthData = [
  { date: "2023-01", bloodPressure: 120, heartRate: 72 },
  { date: "2023-02", bloodPressure: 118, heartRate: 70 },
  { date: "2023-03", bloodPressure: 122, heartRate: 74 },
  { date: "2023-04", bloodPressure: 119, heartRate: 71 },
  { date: "2023-05", bloodPressure: 121, heartRate: 73 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="font-semibold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const page = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Dashboard
      </h1>
      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
        <div className="flex space-x-2">
          <Button size="sm">Book Appointment</Button>
          <Button size="sm" variant="outline">
            View Medical Records
          </Button>
          <Button size="sm" variant="outline">
            Make a Payment
          </Button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Appointment
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Dr. Smith</div>
                <p className="text-xs text-muted-foreground">
                  June 1, 2023 at 10:00 AM
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Unread Records
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  New test results available
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  View Records
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Outstanding Payments
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$150.00</div>
                <p className="text-xs text-muted-foreground">
                  Due by June 15, 2023
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Pay Now
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Queue Status
                </CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Position 3</div>
                <p className="text-xs text-muted-foreground">
                  Estimated wait: 15 minutes
                </p>
              </CardContent>
              <CardFooter>
                <Progress value={66} className="w-full" />
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          Appointment with Dr. Johnson
                        </p>
                        <p className="text-sm text-muted-foreground">
                          May 15, 2023
                        </p>
                      </div>
                      <Badge>Completed</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Blood Test Results</p>
                        <p className="text-sm text-muted-foreground">
                          May 10, 2023
                        </p>
                      </div>
                      <Badge variant="outline">New</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Payment for Lab Services</p>
                        <p className="text-sm text-muted-foreground">
                          May 5, 2023
                        </p>
                      </div>
                      <Badge variant="secondary">Paid</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Prescription Refill</p>
                        <p className="text-sm text-muted-foreground">
                          April 30, 2023
                        </p>
                      </div>
                      <Badge variant="outline">Processed</Badge>
                    </li>
                    <li className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Telemedicine Consultation</p>
                        <p className="text-sm text-muted-foreground">
                          April 25, 2023
                        </p>
                      </div>
                      <Badge>Completed</Badge>
                    </li>
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Health Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <RechartsTooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="bloodPressure"
                      stroke="#8884d8"
                      name="Blood Pressure"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="heartRate"
                      stroke="#82ca9d"
                      name="Heart Rate"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Dr. Smith - General Checkup</p>
                    <p className="text-sm text-muted-foreground">
                      June 1, 2023 at 10:00 AM
                    </p>
                  </div>
                  <Button size="sm">Reschedule</Button>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      Dr. Johnson - Cardiology Follow-up
                    </p>
                    <p className="text-sm text-muted-foreground">
                      June 15, 2023 at 2:00 PM
                    </p>
                  </div>
                  <Button size="sm">Reschedule</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="health">
          <Card>
            <CardHeader>
              <CardTitle>Health Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Blood Pressure
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          120/80{" "}
                          <span className="text-sm font-normal">mmHg</span>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <ArrowDownRight className="text-green-500 mr-1" />
                          5% lower than last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Heart Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          72 <span className="text-sm font-normal">bpm</span>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <ArrowUpRight className="text-red-500 mr-1" />
                          2% higher than last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">BMI</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">22.5</div>
                        <p className="text-xs text-muted-foreground">
                          Normal weight
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recent Diagnoses</h3>
                  <ul className="list-disc list-inside">
                    <li>Seasonal Allergies - May 1, 2023</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Medications</h3>
                  <ul className="list-disc list-inside">
                    <li>Loratadine - 10mg daily</li>
                    <li>Vitamin D - 1000 IU daily</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Outstanding Balance</h3>
                  <p className="text-2xl font-bold">$150.00</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recent Transactions</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span>Lab Services - May 5, 2023</span>
                      <span className="font-medium">$75.00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Consultation - April 20, 2023</span>
                      <span className="font-medium">$120.00</span>
                    </li>
                  </ul>
                </div>
                <Button>Make a Payment</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
