"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, Clock, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for demonstration (individual wait times)
const mockQueueData = [
  { id: 1, name: "John Doe", individualWaitTime: 15 },
  { id: 2, name: "Jane Smith", individualWaitTime: 10 },
  { id: 3, name: "Alice Johnson", individualWaitTime: 20 },
  { id: 4, name: "Bob Brown", individualWaitTime: 15 },
];

const QueueStatus = () => {
  const [queueData, setQueueData] = useState(mockQueueData);
  const [userPosition, setUserPosition] = useState(3); // Assuming the user is in position 3
  const { toast } = useToast();

  // Calculate cumulative wait times
  const queueWithCumulativeWaitTimes = useMemo(() => {
    let cumulativeTime = 0;
    return queueData.map((item, index) => {
      cumulativeTime += item.individualWaitTime;
      return { ...item, estimatedWaitTime: cumulativeTime };
    });
  }, [queueData]);

  // Get only the patients before the user
  const patientsBeforeUser = queueWithCumulativeWaitTimes.slice(
    0,
    userPosition - 1
  );

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setQueueData((prevData) =>
        prevData.map((item, index) => ({
          ...item,
          individualWaitTime:
            index === 0
              ? Math.max(0, item.individualWaitTime - 1)
              : item.individualWaitTime,
        }))
      );
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if it's the user's turn
    if (userPosition === 1) {
      toast({
        title: "It's your turn!",
        description: "Please proceed to the reception.",
        duration: 0, // Notification won't auto-dismiss
      });
    }
  }, [userPosition, toast]);

  const userEstimatedWaitTime =
    queueWithCumulativeWaitTimes[userPosition - 1]?.estimatedWaitTime || 0;
  const totalWaitTimeBeforeUser = patientsBeforeUser.reduce(
    (sum, patient) => sum + patient.individualWaitTime,
    0
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center dark:text-white">
        Queue Status
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Users className="mr-2 h-6 w-6 text-blue-500" />
            Queue Status
          </CardTitle>
          <CardDescription>Real-time view of the waiting queue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Badge variant="secondary" className="mr-2">
                Your Position: {userPosition}
              </Badge>
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <span>Estimated Wait: {userEstimatedWaitTime} minutes</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center"
              onClick={() => {
                toast({
                  title: "Notification Set",
                  description: "We'll notify you when it's almost your turn.",
                });
              }}
            >
              <Bell className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </div>
          <Progress
            value={(totalWaitTimeBeforeUser / userEstimatedWaitTime) * 100}
            className="w-full"
          />
          <div className="space-y-4">
            {patientsBeforeUser.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <span className="font-medium">Patient {item.id}</span>
                <span>{item.estimatedWaitTime} minutes</span>
              </div>
            ))}
            <div className="flex justify-between items-center p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
              <span className="font-medium">You</span>
              <span>{userEstimatedWaitTime} minutes</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default QueueStatus;
