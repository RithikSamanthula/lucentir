"use client"

import React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ctaOptions = [
  {
    title: "Discuss a Technical Problem",
    description: "Share a specific challenge you are facing. We will assess feasibility and provide an initial technical perspective.",
  },
  {
    title: "Explore a Research Collaboration",
    description: "Partner on applied research initiatives. We work with academic institutions and research organizations.",
  },
  {
    title: "Request a Capability Overview",
    description: "Receive a detailed overview of our technical capabilities tailored to your organization's needs.",
  },
]

export function Engage() {
  const [openModal, setOpenModal] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    problemDomain: "",
    dataType: "",
    outcome: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setOpenModal(null)
    setFormData({
      name: "",
      email: "",
      organization: "",
      problemDomain: "",
      dataType: "",
      outcome: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Engage with Lucentir
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-3xl">
          Select the engagement type that best fits your needs, or reach out directly at{" "}
          <a 
            href="mailto:contact@lucentir.com" 
            className="text-white hover:underline"
          >
            contact@lucentir.com
          </a>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {ctaOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setOpenModal(index)}
              className="group p-6 border border-neutral-800 rounded-lg bg-black hover:border-neutral-700 transition-colors text-left"
            >
              <h3 className="text-lg font-medium text-white mb-2 flex items-center justify-between">
                {option.title}
                <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
              </h3>
              <p className="text-neutral-500 text-sm">{option.description}</p>
            </button>
          ))}
        </div>

        {ctaOptions.map((option, index) => (
          <Dialog key={index} open={openModal === index} onOpenChange={(open) => setOpenModal(open ? index : null)}>
            <DialogContent className="bg-neutral-950 border-neutral-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white">{option.title}</DialogTitle>
                <DialogDescription className="text-neutral-400 mt-1">
                  {option.description}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Problem Domain
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, problemDomain: value })}>
                    <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
                      <SelectValue placeholder="Select domain" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-neutral-800">
                      <SelectItem value="computer-vision">Computer Vision & Imagery</SelectItem>
                      <SelectItem value="predictive">Predictive Analytics</SelectItem>
                      <SelectItem value="nlp">Natural Language Processing</SelectItem>
                      <SelectItem value="time-series">Time-Series Analysis</SelectItem>
                      <SelectItem value="mlops">MLOps & Infrastructure</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Data Type
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, dataType: value })}>
                    <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
                      <SelectValue placeholder="Select data type" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 border-neutral-800">
                      <SelectItem value="imagery">Satellite / Aerial Imagery</SelectItem>
                      <SelectItem value="sensor">Sensor Data</SelectItem>
                      <SelectItem value="structured">Structured Enterprise Data</SelectItem>
                      <SelectItem value="text">Text / Documents</SelectItem>
                      <SelectItem value="streaming">Real-Time Streaming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                    Intended Outcome
                  </label>
                  <textarea
                    value={formData.outcome}
                    onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700 resize-none"
                    placeholder="Describe your goals and success criteria"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2.5 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}
