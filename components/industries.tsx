"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const industries = [
  {
    sector: "Government & Public Sector",
    useCases: [
      {
        name: "Environmental monitoring & anomaly detection",
        dataType: "Satellite imagery, sensor networks, time-series environmental data",
        approach: "Change detection algorithms, anomaly scoring, multi-temporal analysis",
        impact: "Early warning systems, compliance verification, resource allocation optimization",
      },
      {
        name: "Infrastructure risk assessment",
        dataType: "Structural sensor data, maintenance records, geospatial information",
        approach: "Predictive maintenance models, risk scoring, degradation forecasting",
        impact: "Prioritized maintenance scheduling, reduced failure rates, budget optimization",
      },
      {
        name: "Scientific modeling & forecasting",
        dataType: "Research datasets, simulation outputs, observational data",
        approach: "Physics-informed ML, ensemble methods, uncertainty quantification",
        impact: "Improved forecast accuracy, resource planning, policy support",
      },
    ],
  },
  {
    sector: "Defense & National Security",
    useCases: [
      {
        name: "Sensor data fusion",
        dataType: "Multi-modal sensor streams, metadata, contextual information",
        approach: "Fusion architectures, confidence calibration, temporal alignment",
        impact: "Enhanced situational awareness, reduced analyst workload, faster response",
      },
      {
        name: "Pattern detection in large-scale datasets",
        dataType: "Structured and unstructured data at scale",
        approach: "Scalable ML pipelines, anomaly detection, clustering analysis",
        impact: "Identification of patterns of interest, prioritization, trend analysis",
      },
      {
        name: "Decision support under uncertainty",
        dataType: "Incomplete information, probabilistic assessments",
        approach: "Bayesian methods, scenario modeling, risk quantification",
        impact: "Informed decision-making, risk mitigation, resource optimization",
      },
    ],
  },
  {
    sector: "Healthcare & Life Sciences",
    useCases: [
      {
        name: "Medical imaging analysis",
        dataType: "CT, MRI, X-ray, pathology slides",
        approach: "Deep learning segmentation, classification, detection models",
        impact: "Diagnostic support, workflow efficiency, quality assurance",
      },
      {
        name: "Predictive diagnostics",
        dataType: "Electronic health records, lab results, clinical notes",
        approach: "Risk stratification, temporal modeling, multi-modal fusion",
        impact: "Early intervention, resource allocation, patient outcomes",
      },
      {
        name: "Research automation",
        dataType: "Experimental data, literature, molecular structures",
        approach: "NLP, structured extraction, hypothesis generation",
        impact: "Accelerated discovery, reduced manual review, knowledge synthesis",
      },
    ],
  },
  {
    sector: "Energy, Climate & Infrastructure",
    useCases: [
      {
        name: "Emissions monitoring",
        dataType: "Satellite data, ground sensors, industrial telemetry",
        approach: "Source attribution, trend analysis, anomaly detection",
        impact: "Compliance tracking, leak detection, reporting automation",
      },
      {
        name: "Asset reliability forecasting",
        dataType: "Operational data, maintenance logs, environmental conditions",
        approach: "Survival analysis, degradation modeling, predictive maintenance",
        impact: "Reduced downtime, optimized maintenance, extended asset life",
      },
      {
        name: "Environmental compliance analytics",
        dataType: "Regulatory data, monitoring outputs, historical records",
        approach: "Automated compliance checking, trend detection, reporting",
        impact: "Reduced compliance risk, audit preparation, operational efficiency",
      },
    ],
  },
]

export function Industries() {
  const [openModal, setOpenModal] = useState<{ sector: number; useCase: number } | null>(null)

  return (
    <section id="industries" className="py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Built for Environments Where Errors Matter
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-3xl">
          Specific buyers, specific problems. We build systems for organizations where ML failures have real consequences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, sectorIndex) => (
            <div key={sectorIndex} className="border border-neutral-800 rounded-lg p-6 bg-black">
              <h3 className="text-xl font-medium text-white mb-6">{industry.sector}</h3>
              <ul className="space-y-4">
                {industry.useCases.map((useCase, useCaseIndex) => (
                  <li key={useCaseIndex}>
                    <button
                      onClick={() => setOpenModal({ sector: sectorIndex, useCase: useCaseIndex })}
                      className="group flex items-center justify-between w-full text-left text-neutral-400 hover:text-white transition-colors"
                    >
                      <span className="text-sm">{useCase.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <Dialog
                      open={openModal?.sector === sectorIndex && openModal?.useCase === useCaseIndex}
                      onOpenChange={(open) => setOpenModal(open ? { sector: sectorIndex, useCase: useCaseIndex } : null)}
                    >
                      <DialogContent className="bg-neutral-950 border-neutral-800 text-white max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-white">{useCase.name}</DialogTitle>
                          <DialogDescription className="text-neutral-500 text-sm mt-1">
                            {industry.sector}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">Data Type</h4>
                            <p className="text-sm text-neutral-300">{useCase.dataType}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">ML Approach</h4>
                            <p className="text-sm text-neutral-300">{useCase.approach}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">Operational Impact</h4>
                            <p className="text-sm text-neutral-300">{useCase.impact}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
