"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Calendar,
  Clock,
  FileText,
  CreditCard,
  HourglassIcon,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const page = ({ isNewPatient = false }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Quick Actions Overview
      </h1>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Quick Actions Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">DOB: 05/15/1985</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs">john.doe@example.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <p className="text-xs">123 Main St, Anytown, USA</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Appointments
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              {isNewPatient ? (
                <>
                  <div className="flex items-center justify-center h-24">
                    <p className="text-sm text-muted-foreground">
                      No upcoming appointments
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="text-sm text-blue-600 hover:underline">
                      Schedule your first appointment
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-medium">Upcoming</p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        Cleaning: June 15, 2023 at 10:00 AM
                      </p>
                      <p className="text-xs">
                        Check-up: August 22, 2023 at 2:30 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Past</p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        Check-up: March 3, 2023 at 2:30 PM
                      </p>
                      <p className="text-xs">
                        Filling: January 12, 2023 at 11:00 AM
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Health Records
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              {isNewPatient ? (
                <>
                  <div className="flex items-center justify-center h-24">
                    <p className="text-sm text-muted-foreground">
                      No health records available
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Complete health questionnaire
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Health Questionnaire</DialogTitle>
                          <DialogDescription>
                            Please fill out your health information. This helps
                            us provide better care.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="height" className="text-right">
                              Height
                            </Label>
                            <Input id="height" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="weight" className="text-right">
                              Weight
                            </Label>
                            <Input id="weight" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="allergies" className="text-right">
                              Allergies
                            </Label>
                            <Input id="allergies" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="medications" className="text-right">
                              Medications
                            </Label>
                            <Textarea id="medications" className="col-span-3" />
                          </div>
                          <Button
                            type="submit"
                            onClick={() => setIsDialogOpen(false)}
                          >
                            Submit
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-medium">Recent Procedures</p>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                      <li>Filling (Tooth #18): January 12, 2023</li>
                      <li>Root Canal (Tooth #30): November 5, 2022</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Allergies</p>
                    <p className="text-xs text-red-500">Penicillin, Latex</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Payments</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              {isNewPatient ? (
                <>
                  <div>
                    <p className="text-sm font-medium">Recent Transactions</p>
                    <p className="text-xs text-muted-foreground">
                      No recent transactions
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Balance Due</p>
                    <p className="text-lg font-bold text-green-500">$0</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-medium">Recent Transactions</p>
                    <ul className="text-xs space-y-1">
                      <li>$150 - Check-up (March 3, 2023)</li>
                      <li>$300 - Filling (January 12, 2023)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Balance Due</p>
                    <p className="text-lg font-bold text-red-500">$75</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Queue Status
              </CardTitle>
              <HourglassIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-2">
              {isNewPatient ? (
                <div className="flex items-center justify-center h-24">
                  <p className="text-sm text-muted-foreground">
                    No current appointment
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-sm font-medium">Current Wait Time</p>
                    <p className="text-2xl font-bold text-green-600">15 min</p>
                  </div>
                  <div>
                    <p className="text-xs">Your appointment: 10:00 AM</p>
                    <p className="text-xs">Estimated start: 10:05 AM</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
