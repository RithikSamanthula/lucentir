"use client"

import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const steps = [
  {
    number: "01",
    title: "Problem Framing",
    description: "Translate ambiguous objectives into measurable ML tasks. Define constraints, risks, and success metrics.",
    details: [
      "Stakeholder alignment on objectives and constraints",
      "Feasibility assessment given data and timeline",
      "Risk identification and mitigation planning",
      "Success metrics definition and validation approach",
    ],
  },
  {
    number: "02",
    title: "Data Intelligence",
    description: "Data auditing and validation. Bias, noise, and signal analysis.",
    details: [
      "Data quality assessment and gap analysis",
      "Signal-to-noise characterization",
      "Bias detection and documentation",
      "Data pipeline architecture design",
    ],
  },
  {
    number: "03",
    title: "Model Development",
    description: "Architecture selection. Iterative experimentation. Performance and robustness testing.",
    details: [
      "Baseline establishment and benchmark selection",
      "Architecture search and hyperparameter optimization",
      "Robustness testing under distribution shift",
      "Interpretability analysis and documentation",
    ],
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description: "Secure deployment. Continuous evaluation. Model governance.",
    details: [
      "Deployment infrastructure design",
      "Monitoring and alerting configuration",
      "Drift detection and retraining triggers",
      "Governance documentation and audit trails",
    ],
  },
]

export function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section id="process" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          From Problem Definition to Deployed System
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-3xl">
          A disciplined engineering approach that prioritizes correctness, reproducibility, and operational readiness.
        </p>

        <TooltipProvider>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-6 h-px bg-neutral-800 z-0" />
                )}

                <div
                  className="p-6 border border-neutral-800 rounded-lg bg-neutral-950/50 hover:border-neutral-700 transition-all cursor-pointer"
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <span className="text-xs font-mono text-neutral-600 mb-2 block">{step.number}</span>
                  <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>

                  {/* Expanded details */}
                  {expandedStep === index && (
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                            <span className="w-1 h-1 rounded-full bg-neutral-700 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="mt-4 text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                        {expandedStep === index ? "Collapse" : "Expand details"}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-neutral-900 border-neutral-800 text-neutral-300">
                      <p>Click to {expandedStep === index ? "collapse" : "view"} technical details</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
