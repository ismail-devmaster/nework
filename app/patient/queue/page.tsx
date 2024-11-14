"use client";

import { useState, useEffect } from "react";
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

// Mock data for demonstration
const mockQueueData = [
  { id: 1, name: "John Doe", individualWaitTime: 10 },
  { id: 2, name: "Jane Smith", individualWaitTime: 15 },
  { id: 3, name: "Alice Johnson", individualWaitTime: 12 },
  { id: 4, name: "Bob Brown", individualWaitTime: 8 },
  { id: 5, name: "Charlie Davis", individualWaitTime: 20 },
];

const QueueStatus = () => {
  const [queueData, setQueueData] = useState(mockQueueData);
  const [userPosition, setUserPosition] = useState(4); // Assuming the user is in position 4
  const { toast } = useToast();

  // Calculate cumulative wait times for patients before the user
  const queueWithEstimatedWaitTimes = queueData
    .slice(0, userPosition)
    .map((item, index) => {
      if (index === 0) {
        return { ...item, estimatedWaitTime: 0 };
      } else if (index === 1) {
        return { ...item, estimatedWaitTime: queueData[0].individualWaitTime };
      } else {
        const previousWaitTimes = queueData
          .slice(0, index)
          .reduce((sum, patient) => sum + patient.individualWaitTime, 0);
        return { ...item, estimatedWaitTime: previousWaitTimes };
      }
    });

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
    queueWithEstimatedWaitTimes[userPosition - 1]?.estimatedWaitTime || 0;
  const totalWaitTimeBeforeUser = queueWithEstimatedWaitTimes
    .slice(0, userPosition - 1)
    .reduce((sum, patient) => sum + patient.individualWaitTime, 0);

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
            {queueWithEstimatedWaitTimes.map((item, index) => (
              <div
                key={item.id}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  index === userPosition - 1
                    ? "bg-blue-100 dark:bg-blue-900"
                    : index === 0
                    ? "bg-green-100 dark:bg-green-800"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                <span className="font-medium">
                  {index === userPosition - 1 ? "You" : `Patient ${item.id}`}
                </span>
                <span>
                  {index === 0
                    ? "0 min (In Progress)"
                    : `${item.estimatedWaitTime} min`}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default QueueStatus;
