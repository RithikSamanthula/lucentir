"use client"

import React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

export function Footer() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({ name: "", email: "" })

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Scheduled:", { date: selectedDate, time: selectedTime, ...formData })
    setIsScheduleOpen(false)
    setSelectedDate(undefined)
    setSelectedTime("")
    setFormData({ name: "", email: "" })
  }

  return (
    <footer className="py-12 px-6 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <span className="text-xl font-semibold tracking-wide text-white">LUCENTIR</span>
            <p className="text-neutral-500 text-sm mt-2 max-w-md">
              Lucentir is a research-driven technology company specializing in applied artificial intelligence and machine learning systems.
            </p>
          </div>

          <button
            onClick={() => setIsScheduleOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded text-sm text-white hover:bg-neutral-800 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <p className="text-neutral-600 text-sm">
              {new Date().getFullYear()} Lucentir. All rights reserved.
            </p>
            <a 
              href="mailto:contact@lucentir.com" 
              className="text-neutral-500 hover:text-white text-sm transition-colors"
            >
              contact@lucentir.com
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="bg-neutral-950 border-neutral-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">Schedule a Call</DialogTitle>
            <DialogDescription className="text-neutral-400 mt-1">
              Select a date and time that works for you. All times are in your local timezone.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleScheduleSubmit} className="mt-4 space-y-4">
            <div className="flex justify-center">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                className="rounded-md border border-neutral-800"
              />
            </div>

            {selectedDate && (
              <div>
                <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                  Select Time
                </label>
                <Select onValueChange={setSelectedTime}>
                  <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-900 border-neutral-800">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {selectedTime && (
              <>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors"
                >
                  Confirm Booking
                </button>
              </>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
