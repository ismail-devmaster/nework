import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Edit } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  ongoingTreatments: string;
  lastVisit: string;
  nextAppointment: string;
}

interface TreatmentsProps {
  patients: Patient[];
}

export default function Treatments({ patients }: TreatmentsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatments</CardTitle>
        <CardDescription>Ongoing treatments and procedures</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Treatment</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.ongoingTreatments}</TableCell>
                <TableCell>
                  <Progress value={Math.random() * 100} className="w-[60%]" />
                </TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell>{patient.nextAppointment}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
