"use client";
import * as React from "react";
import { Plus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ReceptionistLobby = () => {
  // export default function ReceptionistLobby() {
  const [patientQueue, setPatientQueue] = React.useState([
    {
      id: "1",
      name: "John Doe",
      status: "Waiting",
      estimatedWaitTime: 20,
      arrivalTime: "14:30",
    },
    {
      id: "2",
      name: "Jane Smith",
      status: "In Progress",
      estimatedWaitTime: 5,
      arrivalTime: "14:15",
    },
    {
      id: "3",
      name: "Bob Johnson",
      status: "Waiting",
      estimatedWaitTime: 35,
      arrivalTime: "14:45",
    },
  ]);

  const [isAddingPatient, setIsAddingPatient] = React.useState(false);
  const [newPatientName, setNewPatientName] = React.useState("");
  const [newPatientEstimatedWaitTime, setNewPatientEstimatedWaitTime] =
    React.useState(30);

  // Predefined list of patients
  const predefinedPatients = [
    "Alice Anderson",
    "Bob Brown",
    "Charlie Clark",
    "David Davis",
    "Eva Evans",
    "Frank Foster",
    "Grace Green",
    "Henry Hill",
    "Ivy Ingram",
    "Jack Johnson",
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPatientQueue((prevQueue) =>
        prevQueue.map((patient) => ({
          ...patient,
          estimatedWaitTime: Math.max(0, patient.estimatedWaitTime - 1),
        }))
      );
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const sortedPatientQueue = React.useMemo(() => {
    return [...patientQueue].sort((a, b) => {
      if (a.status === "In Progress" && b.status !== "In Progress") return -1;
      if (a.status !== "In Progress" && b.status === "In Progress") return 1;
      if (a.status === "Waiting" && b.status !== "Waiting") return -1;
      if (a.status !== "Waiting" && b.status === "Waiting") return 1;
      return 0;
    });
  }, [patientQueue]);

  const updatePatientStatus = (id, newStatus) => {
    // const updatePatientStatus = (id: number, newStatus: string): void => {

    setPatientQueue(
      patientQueue.map((patient) =>
        patient.id === id ? { ...patient, status: newStatus } : patient
      )
    );
    toast({
      title: "Patient Status Updated",
      description: `Patient ${id} status changed to ${newStatus}`,
    });
  };

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Updates the estimated wait time for a given patient ID
   * @param {string} id The patient ID
   * @param {string} newTime The new estimated wait time in minutes
   * @returns {void}
   */
  /******  fb1f337f-f36d-461a-8833-902edf0ae386  *******/
  const updateEstimatedWaitTime = (id, newTime) => {
    setPatientQueue(
      patientQueue.map((patient) =>
        patient.id === id
          ? {
              ...patient,
              estimatedWaitTime: parseInt(newTime, 10) || 0,
            }
          : patient
      )
    );
  };

  const notifyPatient = (id) => {
    toast({
      title: "Patient Notified",
      description: `Notification sent to patient ${id}`,
    });
  };

  const calculateTimeDifference = (arrivalTime) => {
    const now = new Date();
    const arrival = new Date(now.toDateString() + " " + arrivalTime);
    const diffInMinutes = Math.floor((now - arrival) / 60000);
    return diffInMinutes;
  };

  const addNewPatient = () => {
    if (newPatientName.trim() === "") {
      toast({
        title: "Error",
        description: "Please select a patient from the list",
        variant: "destructive",
      });
      return;
    }

    const now = new Date();
    const newPatient = {
      id: String(patientQueue.length + 1),
      name: newPatientName,
      status: "Waiting",
      estimatedWaitTime: newPatientEstimatedWaitTime,
      arrivalTime: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setPatientQueue([...patientQueue, newPatient]);
    setNewPatientName("");
    setNewPatientEstimatedWaitTime(30);
    setIsAddingPatient(false);
    toast({
      title: "New Patient Added",
      description: `${newPatient.name} has been added to the queue`,
    });
  };

  const calculateEstimatedTimeToDoctor = (index) => {
    let totalTime = 0;
    for (let i = 0; i < index; i++) {
      if (sortedPatientQueue[i].status !== "Completed") {
        totalTime += sortedPatientQueue[i].estimatedWaitTime;
      }
    }
    return totalTime;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      // If the item is dragged outside the list
      const itemId = result.draggableId;
      setPatientQueue(patientQueue.filter((patient) => patient.id !== itemId));
      toast({
        title: "Patient Removed",
        description: `Patient has been removed from the queue`,
      });
      return;
    }

    const items = Array.from(patientQueue);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPatientQueue(items);
  };

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Lobby Management</CardTitle>
          <CardDescription>
            Track real-time patient flow in the clinic
          </CardDescription>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isAddingPatient} onOpenChange={setIsAddingPatient}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>
                  Select a patient and set their estimated wait time.
                </DialogDescription>
              </DialogHeader>
              <Select value={newPatientName} onValueChange={setNewPatientName}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a patient" />
                </SelectTrigger>
                <SelectContent>
                  {predefinedPatients.map((patient) => (
                    <SelectItem key={patient} value={patient}>
                      {patient}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center space-x-2">
                <Label htmlFor="estimatedWaitTime">
                  Estimated Wait Time (minutes):
                </Label>
                <Input
                  id="estimatedWaitTime"
                  type="number"
                  value={newPatientEstimatedWaitTime}
                  onChange={(e) =>
                    setNewPatientEstimatedWaitTime(parseInt(e.target.value, 10))
                  }
                  className="w-20"
                />
              </div>
              <DialogFooter>
                <Button onClick={addNewPatient}>Add Patient</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant="outline"
            size="icon"
            onClick={() => toast({ title: "Queue Refreshed" })}
          >
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="patientQueue">
              {(provided) => (
                <Table {...provided.droppableProps} ref={provided.innerRef}>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Estimated Wait Time</TableHead>
                      <TableHead>Arrival Time</TableHead>
                      <TableHead>Time Waited</TableHead>
                      <TableHead>Estimated Time to Doctor</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedPatientQueue.map((patient, index) => (
                      <Draggable
                        key={patient.id}
                        draggableId={patient.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <TableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              background: snapshot.isDragging
                                ? "rgba(0, 0, 0, 0.1)"
                                : "transparent",
                            }}
                          >
                            <TableCell>{patient.name}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  patient.status === "In Progress"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {patient.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Input
                                value={patient.estimatedWaitTime}
                                onChange={(e) =>
                                  updateEstimatedWaitTime(
                                    patient.id,
                                    e.target.value
                                  )
                                }
                                className="w-24"
                              />
                              {" mins"}
                            </TableCell>
                            <TableCell>{patient.arrivalTime}</TableCell>
                            <TableCell>
                              {calculateTimeDifference(patient.arrivalTime)}{" "}
                              mins
                            </TableCell>
                            <TableCell>
                              {calculateEstimatedTimeToDoctor(index)} mins
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Select
                                  onValueChange={(value) =>
                                    updatePatientStatus(patient.id, value)
                                  }
                                >
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Update Status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Waiting">
                                      Waiting
                                    </SelectItem>
                                    <SelectItem value="In Progress">
                                      In Progress
                                    </SelectItem>
                                    <SelectItem value="Completed">
                                      Completed
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => notifyPatient(patient.id)}
                                >
                                  Notify
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </TableBody>
                </Table>
              )}
            </Droppable>
          </DragDropContext>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
export default ReceptionistLobby;
