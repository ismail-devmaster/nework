import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";

export function Reminders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Bell className="mr-2 h-6 w-6 text-blue-500" />
          Appointment Reminders
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="email-reminder"
              className="flex items-center space-x-2 text-gray-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Email Reminders</span>
            </Label>
            <Switch id="email-reminder" />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="sms-reminder"
              className="flex items-center space-x-2 text-gray-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105  6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>SMS Reminders</span>
            </Label>
            <Switch id="sms-reminder" />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="push-reminder"
              className="flex items-center space-x-2 text-gray-900 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span>Push Notifications</span>
            </Label>
            <Switch id="push-reminder" />
          </div>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="reminder-timing"
            className="text-gray-900 dark:text-white"
          >
            Reminder Timing
          </Label>
          <Select>
            <SelectTrigger id="reminder-timing">
              <SelectValue placeholder="Select timing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-day">1 day before</SelectItem>
              <SelectItem value="2-hours">2 hours before</SelectItem>
              <SelectItem value="1-hour">1 hour before</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="apply-all"
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <Label htmlFor="apply-all" className="text-gray-900 dark:text-white">
            Apply to all future appointments
          </Label>
        </div>
        <Button className="w-full">Save Reminder Settings</Button>
      </CardContent>
    </Card>
  );
}
