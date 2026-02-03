"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"
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

export function Hero() {
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
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-[linear-gradient(to_bottom,#000,#0000_30%,#1a1a1a_78%,#000_99%)] 
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-60 h-[600px] w-full 
        bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] bg-black 
        bg-[radial-gradient(closest-side,#000_82%,#333)] 
        animate-fade-up"
      />

      {/* Title */}
      <h1
        className="animate-fade-in opacity-0 text-balance 
        bg-gradient-to-br from-white from-30% to-white/40 
        bg-clip-text py-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter 
        text-transparent max-w-5xl mx-auto"
      >
        Artificial Intelligence systems for analytics, automation, and decision support.
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in opacity-0 mb-12 text-balance 
        text-lg tracking-tight text-neutral-400 
        md:text-xl max-w-2xl mx-auto"
        style={{ animationDelay: "0.3s" }}
      >
        Lucentir designs, builds, and deploys reliable systems for research organizations, enterprises, and public-sector partners.
      </p>

      {/* CTA */}
      <div className="flex justify-center gap-4 flex-col sm:flex-row items-center">
        <Link
          href="#capabilities"
          className="z-20 inline-flex items-center justify-center px-8 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors"
        >
          View Capabilities
        </Link>
        <button
          onClick={() => setIsScheduleOpen(true)}
          className="z-20 inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <Calendar className="mr-2 w-4 h-4" />
          Schedule a Call
          <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up opacity-0 relative mt-32 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,#000_10%,transparent)]"
      />

      {/* Schedule Dialog */}
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
    </section>
  )
}
