"use client";

import * as React from "react";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PatientDetails from "./patientDetails";

const ReceptionistPatient = () => {
  const [patients, setPatients] = React.useState([
    // {
    //   id: 1,
    //   name: "John Doe",
    //   contact: "john@example.com",
    //   lastVisit: "2023-05-15",
    //   medicalHistory: [
    //     {
    //       condition: "Hypertension",
    //       diagnosisDate: "2020-03-10",
    //       medications: "Lisinopril",
    //     },
    //     {
    //       condition: "Diabetes",
    //       diagnosisDate: "2019-11-22",
    //       medications: "Metformin",
    //     },
    //   ],
    //   appointmentPreferences: {
    //     preferredDays: ["Monday", "Wednesday"],
    //     preferredTime: "Morning",
    //     notes: "Prefers early morning appointments",
    //   },
    // },
    {
      contact: "john@example.com",
      lastVisit: "2023-05-15",
      id: 1,
      name: "John Doe",
      age: 45,
      dateOfBirth: "1978-05-15",
      sex: "Male",
      phoneNumber: "(555) 123-4567",
      email: "john.doe@example.com",
      condition: "Hypertension",
      medicalHistory: [
        {
          condition: "Hypertension",
          diagnosisDate: "2020-03-10",
          medications: "Lisinopril",
          date: "2022-03-10",
          diagnosis: "Hypertension",
          treatment: "Prescribed lisinopril",
        },
        {
          condition: "Hypertension",
          diagnosisDate: "2020-03-10",
          medications: "Lisinopril",
          date: "2021-11-22",
          diagnosis: "Sprained ankle",
          treatment: "Rest and ice therapy",
        },
      ],
      paymentHistory: [
        {
          date: "2023-06-01",
          time: "10:30",
          doctor: "Dr. Zin Dinne",
          amount: 150,
          description: "Regular checkup",
          status: "Pending",
        },
        {
          date: "2023-03-15",
          time: "14:00",
          doctor: "Dr. Zin Dinne",
          amount: 75,
          description: "Blood test",
          status: "Paid",
        },
      ],
      appointmentPreferences: {
        preferredDays: ["Monday", "Wednesday"],
        preferredTime: "Morning",
        notes: "Prefers early morning appointments",
      },
    },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   contact: "jane@example.com",
    //   lastVisit: "2023-06-02",
    //   medicalHistory: [
    //     {
    //       condition: "Asthma",
    //       diagnosisDate: "2018-07-15",
    //       medications: "Albuterol inhaler",
    //     },
    //   ],
    //   appointmentPreferences: {
    //     preferredDays: ["Tuesday", "Thursday"],
    //     preferredTime: "Afternoon",
    //     notes: "Prefers late afternoon appointments",
    //   },
    // },
    {
      contact: "john@example.com",
      lastVisit: "2023-05-15",
      id: 2,
      name: "John Doek",
      age: 45,
      dateOfBirth: "1978-05-15",
      sex: "Male",
      phoneNumber: "(555) 123-4567",
      email: "john.doe@example.com",
      condition: "Hypertension",
      medicalHistory: [
        {
          condition: "Hypertension",
          diagnosisDate: "2020-03-10",
          medications: "Lisinopril",
          date: "2022-03-10",
          diagnosis: "Hypertension",
          treatment: "Prescribed lisinopril",
        },
        {
          condition: "Hypertension",
          diagnosisDate: "2020-03-10",
          medications: "Lisinopril",
          date: "2021-11-22",
          diagnosis: "Sprained ankle",
          treatment: "Rest and ice therapy",
        },
      ],
      paymentHistory: [
        {
          date: "2023-06-01",
          time: "10:30",
          doctor: "Dr. Zin Dinne",
          amount: 150,
          description: "Regular checkup",
          status: "Pending",
        },
        {
          date: "2023-03-15",
          time: "14:00",
          doctor: "Dr. Zin Dinne",
          amount: 75,
          description: "Blood test",
          status: "Paid",
        },
      ],
      appointmentPreferences: {
        preferredDays: ["Monday", "Wednesday"],
        preferredTime: "Morning",
        notes: "Prefers early morning appointments",
      },
    },
  ]);

  const [selectedPatient, setSelectedPatient] = React.useState(null);
  const [isAddingPatient, setIsAddingPatient] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [patientToDelete, setPatientToDelete] = React.useState(null);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
    setIsAddingPatient(false);
  };

  const handleUpdatePatient = (updatedPatient) => {
    setPatients(
      patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
    setSelectedPatient(null);
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
    setIsDeleteDialogOpen(false);
    setPatientToDelete(null);
  };

  const [isHelloDialogOpen, setIsHelloDialogOpen] = React.useState(false);
  const [isPatientInfoDialogOpen, setIsPatientInfoDialogOpen] =
    React.useState(false);
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsPatientInfoDialogOpen(true);
  };
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Patient Management
      </h1>
      <Card className="col-span-2 mb-6">
        <CardHeader>
          <CardTitle>Patient Management</CardTitle>
          <CardDescription>
            View, add, or update patient information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="w-1/3">
              <Label htmlFor="search-patients">Search Patients</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search-patients"
                  placeholder="Search patients..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Dialog open={isAddingPatient} onOpenChange={setIsAddingPatient}>
              <DialogTrigger asChild>
                <Button onClick={() => setIsAddingPatient(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add New Patient
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Patient</DialogTitle>
                  <DialogDescription>
                    Enter the new patient&apos;s information below.
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const newPatient = {
                      name: formData.get("name"),
                      contact: formData.get("contact"),
                      medicalHistory: [
                        {
                          condition: formData.get("condition"),
                          diagnosisDate: formData.get("diagnosisDate"),
                          medications: formData.get("medications"),
                        },
                      ],
                      appointmentPreferences: {
                        preferredDays: formData.getAll("preferredDays"),
                        preferredTime: formData.get("preferredTime"),
                        notes: formData.get("notes"),
                      },
                    };
                    handleAddPatient(newPatient);
                  }}
                >
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div>
                        <Label htmlFor="contact">Contact</Label>
                        <Input
                          id="contact"
                          name="contact"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <Separator />
                    <h4 className="font-medium">Medical History</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="condition">Condition</Label>
                        <Input id="condition" name="condition" />
                      </div>
                      <div>
                        <Label htmlFor="diagnosisDate">Diagnosis Date</Label>
                        <Input
                          id="diagnosisDate"
                          name="diagnosisDate"
                          type="date"
                        />
                      </div>
                      <div>
                        <Label htmlFor="medications">Medications</Label>
                        <Input id="medications" name="medications" />
                      </div>
                    </div>
                    <Separator />
                    <h4 className="font-medium">Appointment Preferences</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDays">Preferred Days</Label>
                        <Select name="preferredDays" multiple>
                          <SelectTrigger>
                            <SelectValue placeholder="Select days" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                            ].map((day) => (
                              <SelectItem key={day} value={day}>
                                {day}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select name="preferredTime">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Morning">Morning</SelectItem>
                            <SelectItem value="Afternoon">Afternoon</SelectItem>
                            <SelectItem value="Evening">Evening</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" name="notes" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Add Patient</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Medical History</TableHead>
                <TableHead>Appointment Preferences</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell
                    className="cursor-pointer"
                    onClick={() => handlePatientClick(patient)}
                  >
                    {patient.name}
                  </TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>
                    {patient.medicalHistory.map((history, index) => (
                      <div key={index} className="mb-1">
                        {history.condition}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>
                    {patient.appointmentPreferences.preferredDays.join(", ")} -{" "}
                    {patient.appointmentPreferences.preferredTime}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedPatient(patient)}
                          >
                            <Edit className="mr-2 h-4 w-4" /> View/Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Patient Information</DialogTitle>
                            <DialogDescription>
                              View or update patient details.
                            </DialogDescription>
                          </DialogHeader>
                          {selectedPatient && (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const updatedPatient = {
                                  ...selectedPatient,
                                  name: formData.get("name"),
                                  contact: formData.get("contact"),

                                  medicalHistory: [
                                    {
                                      condition: formData.get("condition"),
                                      diagnosisDate:
                                        formData.get("diagnosisDate"),
                                      medications: formData.get("medications"),
                                    },
                                  ],
                                  appointmentPreferences: {
                                    preferredDays:
                                      formData.getAll("preferredDays"),
                                    preferredTime:
                                      formData.get("preferredTime"),
                                    notes: formData.get("notes"),
                                  },
                                };
                                handleUpdatePatient(updatedPatient);
                              }}
                            >
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="edit-name">Name</Label>
                                    <Input
                                      id="edit-name"
                                      name="name"
                                      defaultValue={selectedPatient.name}
                                      required
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="edit-contact">
                                      Contact
                                    </Label>
                                    <Input
                                      id="edit-contact"
                                      name="contact"
                                      type="email"
                                      defaultValue={selectedPatient.contact}
                                      required
                                    />
                                  </div>
                                </div>
                                <Separator />
                                <h4 className="font-medium">Medical History</h4>
                                <div className="grid grid-cols-3 gap-4">
                                  <div>
                                    <Label htmlFor="edit-condition">
                                      Condition
                                    </Label>
                                    <Input
                                      id="edit-condition"
                                      name="condition"
                                      defaultValue={
                                        selectedPatient.medicalHistory[0]
                                          ?.condition
                                      }
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="edit-diagnosisDate">
                                      Diagnosis Date
                                    </Label>
                                    <Input
                                      id="edit-diagnosisDate"
                                      name="diagnosisDate"
                                      type="date"
                                      defaultValue={
                                        selectedPatient.medicalHistory[0]
                                          ?.diagnosisDate
                                      }
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="edit-medications">
                                      Medications
                                    </Label>
                                    <Input
                                      id="edit-medications"
                                      name="medications"
                                      defaultValue={
                                        selectedPatient.medicalHistory[0]
                                          ?.medications
                                      }
                                    />
                                  </div>
                                </div>
                                <Separator />
                                <h4 className="font-medium">
                                  Appointment Preferences
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="edit-preferredDays">
                                      Preferred Days
                                    </Label>
                                    <Select
                                      name="preferredDays"
                                      defaultValue={
                                        selectedPatient.appointmentPreferences
                                          .preferredDays
                                      }
                                      multiple
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select days" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {[
                                          "Monday",
                                          "Tuesday",
                                          "Wednesday",
                                          "Thursday",
                                          "Friday",
                                        ].map((day) => (
                                          <SelectItem key={day} value={day}>
                                            {day}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div>
                                    <Label htmlFor="edit-preferredTime">
                                      Preferred Time
                                    </Label>
                                    <Select
                                      name="preferredTime"
                                      defaultValue={
                                        selectedPatient.appointmentPreferences
                                          .preferredTime
                                      }
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select time" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Morning">
                                          Morning
                                        </SelectItem>
                                        <SelectItem value="Afternoon">
                                          Afternoon
                                        </SelectItem>
                                        <SelectItem value="Evening">
                                          Evening
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <div>
                                  <Label htmlFor="edit-notes">
                                    Additional Notes
                                  </Label>
                                  <Textarea
                                    id="edit-notes"
                                    name="notes"
                                    defaultValue={
                                      selectedPatient.appointmentPreferences
                                        .notes
                                    }
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit">Update Patient</Button>
                              </DialogFooter>
                            </form>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Dialog
                        open={isDeleteDialogOpen}
                        onOpenChange={setIsDeleteDialogOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setPatientToDelete(patient);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Deletion</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this
                              patient&apos;s record? This action cannot be
                              undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant="outline"
                              onClick={() => setIsDeleteDialogOpen(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={() =>
                                handleDeletePatient(patientToDelete.id)
                              }
                            >
                              Confirm
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog
        open={isPatientInfoDialogOpen}
        onOpenChange={setIsPatientInfoDialogOpen}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Patient Details</DialogTitle>
          </DialogHeader>
          {selectedPatient && <PatientDetails patient={selectedPatient} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReceptionistPatient;
