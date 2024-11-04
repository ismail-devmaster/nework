import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function BookNew() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const reasons = [
    "General Checkup",
    "Follow-up Appointment",
    "Vaccination",
    "Lab Results Review",
    "Prescription Refill",
    "Other (please specify)",
  ];

  const handleConfirmAppointment = () => {
    // Implementation remains the same
  };

  const handleCancelBooking = () => {
    // Implementation remains the same
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const today = new Date();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-2xl">Select Date and Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                fromDate={today}
                className="rounded-md border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="h-12 border-gray-200 dark:border-gray-700"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Appointment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select
              value={selectedDoctor || ""}
              onValueChange={setSelectedDoctor}
            >
              <SelectTrigger id="doctor">
                <SelectValue placeholder="Choose a doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dr. Smith">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage
                        src="/placeholder.svg?height=24&width=24"
                        alt="Dr. Smith"
                      />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    Dr. Smith (Cardiology)
                  </div>
                </SelectItem>
                <SelectItem value="Dr. Johnson">
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage
                        src="/placeholder.svg?height=24&width=24"
                        alt="Dr. Johnson"
                      />
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    Dr. Johnson (Neurology)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Visit</Label>
            <Select
              value={selectedReason || ""}
              onValueChange={setSelectedReason}
            >
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select reason" />
              </SelectTrigger>
              <SelectContent>
                {reasons.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="additional-notes">Additional Notes</Label>
            <Textarea
              id="additional-notes"
              placeholder="Any additional information for your visit"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="min-h-[100px] resize-none border-gray-200 dark:border-gray-700"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="border-gray-200 dark:border-gray-700"
            onClick={handleCancelBooking}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (date && selectedTime && selectedDoctor && selectedReason) {
                openDialog();
              } else {
                toast({
                  title: "Error",
                  description: "Please fill in all required fields.",
                  variant: "destructive",
                });
              }
            }}
          >
            Confirm Appointment
          </Button>
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to book this appointment?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will schedule your
                  appointment and notify the doctor.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={closeDialog}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirmAppointment}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
