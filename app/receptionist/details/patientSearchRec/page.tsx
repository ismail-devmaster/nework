"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import PatientDetails from "./patientDetails";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Mock patient data (unchanged)
const patients = [
  {
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
        date: "2022-03-10",
        diagnosis: "Hypertension",
        treatment: "Prescribed lisinopril",
      },
      {
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
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    dateOfBirth: "1991-09-22",
    sex: "Female",
    phoneNumber: "(555) 987-6543",
    email: "jane.smith@example.com",
    condition: "Diabetes",
    medicalHistory: [
      {
        date: "2022-07-05",
        diagnosis: "Type 2 Diabetes",
        treatment: "Prescribed metformin",
      },
      {
        date: "2021-12-10",
        diagnosis: "Influenza",
        treatment: "Bed rest and fluids",
      },
    ],
    paymentHistory: [
      {
        date: "2023-05-20",
        time: "11:00",
        doctor: "Dr. ismail",
        amount: 200,
        description: "Diabetes consultation",
        status: "Pending",
      },
      {
        date: "2023-02-10",
        time: "11:00",
        doctor: "Dr. ismail",
        amount: 100,
        description: "HbA1c test",
        status: "Paid",
      },
    ],
  },
];

export default function PatientSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patients);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(term) ||
        patient.condition.toLowerCase().includes(term)
    );
    setFilteredPatients(filtered);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsDialogOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Patient Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={handleSearch}
              className="flex-grow"
            />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <Card
                key={patient.id}
                className="cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handlePatientClick(patient)}
              >
                <CardContent className="flex items-center space-x-4 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{patient.name}</h3>
                    <p className="text-sm text-gray-500">Age: {patient.age}</p>
                    <p className="text-sm text-gray-500">
                      Condition: {patient.condition}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredPatients.length === 0 && (
              <p className="text-center text-gray-500">No patients found</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Patient Details</DialogTitle>
          </DialogHeader>
          {selectedPatient && <PatientDetails patient={selectedPatient} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
