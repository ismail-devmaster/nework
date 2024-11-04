import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { format } from "date-fns";

interface Message {
  id: number;
  from: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface MessagesProps {
  messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
        <CardDescription>Communicate with patients and staff</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input placeholder="Search messages..." className="max-w-sm" />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Message
          </Button>
        </div>
        <ScrollArea className="h-[400px]">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt={message.from} />
                <AvatarFallback>{message.from[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {message.from}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {message.content}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(message.timestamp), "PPpp")}
                </p>
              </div>
              {!message.read && <Badge variant="secondary">New</Badge>}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
