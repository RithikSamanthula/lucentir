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

const capabilities = [
  {
    title: "Applied Machine Learning Systems",
    summary: "Supervised, unsupervised, and semi-supervised learning pipelines. Time-series forecasting, anomaly detection, classification at scale. Real-world constraints: noisy data, missing labels, domain drift.",
    details: [
      "Feature engineering under sparse or adversarial data",
      "Model evaluation beyond accuracy (precision-recall tradeoffs, calibration)",
      "Deployment constraints in regulated or air-gapped environments",
      "Continuous model monitoring and drift detection",
      "Automated retraining pipelines with validation gates",
    ],
  },
  {
    title: "Computer Vision & Geospatial Intelligence",
    summary: "Satellite imagery analysis. Aerial and sensor-based detection. Automated segmentation, object tracking, and change detection.",
    details: [
      "CNNs, Vision Transformers, 3D spatial models",
      "Multi-sensor fusion (optical + radar + metadata)",
      "False-positive mitigation and confidence scoring",
      "Temporal analysis for change detection",
      "Scale-invariant feature extraction",
    ],
  },
  {
    title: "Decision Intelligence & Predictive Analytics",
    summary: "ML systems that support human decision-makers. Risk scoring, prioritization, and scenario modeling.",
    details: [
      "Bayesian inference & probabilistic modeling",
      "Forecast uncertainty quantification",
      "Human-in-the-loop AI systems",
      "Explainable AI for high-stakes decisions",
      "Multi-objective optimization under constraints",
    ],
  },
  {
    title: "ML Infrastructure & MLOps",
    summary: "End-to-end ML lifecycle design. Secure training, evaluation, deployment, and monitoring.",
    details: [
      "Model versioning, drift detection, retraining pipelines",
      "On-prem, hybrid, and cloud-agnostic architectures",
      "Reproducibility and auditability",
      "Feature stores and data versioning",
      "CI/CD for machine learning workflows",
    ],
  },
  {
    title: "Research-Driven AI Development",
    summary: "Translating cutting-edge ML research into production systems.",
    details: [
      "Custom model architectures",
      "Experimental validation and ablation studies",
      "Benchmarking against baselines and SOTA models",
      "Research-to-production pipelines",
      "Novel algorithm development and optimization",
    ],
  },
]

export function WhatWeBuild() {
  const [openModal, setOpenModal] = useState<number | null>(null)

  return (
    <section id="capabilities" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          AI & Machine Learning Systems for High-Stakes, Data-Intensive Environments
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-3xl">
          Purpose-built systems designed for operational environments where reliability, interpretability, and performance are non-negotiable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group p-6 border border-neutral-800 rounded-lg bg-neutral-950/50 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-3">{cap.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">{cap.summary}</p>
              <button
                onClick={() => setOpenModal(index)}
                className="inline-flex items-center text-sm text-neutral-500 hover:text-white transition-colors"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <Dialog open={openModal === index} onOpenChange={(open) => setOpenModal(open ? index : null)}>
                <DialogContent className="bg-neutral-950 border-neutral-800 text-white max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-white">{cap.title}</DialogTitle>
                    <DialogDescription className="text-neutral-400 mt-2">
                      {cap.summary}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-neutral-300 mb-3 uppercase tracking-wide">Technical Depth</h4>
                    <ul className="space-y-2">
                      {cap.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                          <span className="w-1 h-1 rounded-full bg-neutral-600 mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
