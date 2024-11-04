"use client";

import * as React from "react";
import { Calendar as CalendarIcon, Clock, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { format, isWeekend } from "date-fns";

type DoctorAvailability = {
  [date: string]: "available" | "busy" | "off";
};

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  availability: DoctorAvailability;
};

const ReceptionistDoctor = () => {
  // export default function ReceptionistDoctor() {
  const [doctors, setDoctors] = React.useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Brown",
      specialty: "General Practitioner",
      availability: {},
    },
    { id: 2, name: "Dr. Green", specialty: "Pediatrician", availability: {} },
    { id: 3, name: "Dr. White", specialty: "Dentist", availability: {} },
  ]);

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [isAddDoctorOpen, setIsAddDoctorOpen] = React.useState(false);

  const handleAvailabilityChange = (
    doctorId: number,
    newAvailability: string
  ) => {
    if (!selectedDate) return;

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === doctorId
          ? {
              ...doctor,
              availability: {
                ...doctor.availability,
                [formattedDate]: newAvailability as
                  | "available"
                  | "busy"
                  | "off",
              },
            }
          : doctor
      )
    );
  };

  const addAppointmentSlot = (doctorId: number) => {
    // Logic to add an appointment slot
    console.log(`Adding appointment slot for doctor ${doctorId}`);
  };

  const addNewDoctor = (newDoctor: { name: string; specialty: string }) => {
    setDoctors([
      ...doctors,
      { id: doctors.length + 1, ...newDoctor, availability: {} },
    ]);
    setIsAddDoctorOpen(false);
  };

  const getDoctorAvailability = (doctor: Doctor, date: Date): string => {
    const formattedDate = format(date, "yyyy-MM-dd");
    if (doctor.availability[formattedDate]) {
      return doctor.availability[formattedDate];
    }
    return isWeekend(date) ? "off" : "available";
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Doctor Management
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Doctor Schedule Management</CardTitle>
          <CardDescription>
            Adjust doctors&apos; schedules and availability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? (
                    format(selectedDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Dialog open={isAddDoctorOpen} onOpenChange={setIsAddDoctorOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add New Doctor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Doctor</DialogTitle>
                  <DialogDescription>
                    Enter the details of the new doctor.
                  </DialogDescription>
                </DialogHeader>
                <AddDoctorForm onSubmit={addNewDoctor} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder-avatar-${doctor.id}.jpg`}
                      alt={doctor.name}
                    />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{doctor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Select
                    onValueChange={(value) =>
                      handleAvailabilityChange(doctor.id, value)
                    }
                    value={
                      selectedDate
                        ? getDoctorAvailability(doctor, selectedDate)
                        : "available"
                    }
                    disabled={selectedDate ? isWeekend(selectedDate) : false}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="busy">Busy</SelectItem>
                      <SelectItem value="off">Day Off</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">
                            Appointment Slots
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Add or remove appointment slots for {doctor.name}
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <Button onClick={() => addAppointmentSlot(doctor.id)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Slot
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function AddDoctorForm({
  onSubmit,
}: {
  onSubmit: (doctor: { name: string; specialty: string }) => void;
}) {
  const [name, setName] = React.useState("");
  const [specialty, setSpecialty] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, specialty });
    setName("");
    setSpecialty("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="specialty">Specialty</Label>
        <Input
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Add Doctor
      </Button>
    </form>
  );
}
export default ReceptionistDoctor;
