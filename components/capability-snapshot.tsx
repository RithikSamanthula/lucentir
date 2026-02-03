export function CapabilitySnapshot() {
  const categories = [
    {
      title: "Core Competencies",
      items: [
        "Machine Learning System Design",
        "Computer Vision & Image Analysis",
        "Predictive Analytics & Forecasting",
        "MLOps & ML Infrastructure",
        "Research Translation",
      ],
    },
    {
      title: "Technical Domains",
      items: [
        "Supervised & Unsupervised Learning",
        "Deep Learning & Neural Networks",
        "Time-Series Analysis",
        "Geospatial Intelligence",
        "Natural Language Processing",
      ],
    },
    {
      title: "Data Types Handled",
      items: [
        "Satellite & Aerial Imagery",
        "Sensor Network Data",
        "Structured Enterprise Data",
        "Unstructured Text & Documents",
        "Real-Time Streaming Data",
      ],
    },
    {
      title: "Deployment Environments",
      items: [
        "Cloud (AWS, GCP, Azure)",
        "On-Premises Infrastructure",
        "Hybrid Architectures",
        "Air-Gapped Networks",
        "Edge Deployment",
      ],
    },
    {
      title: "Security Practices",
      items: [
        "Security-First Architecture",
        "Data Handling Protocols",
        "Access Control & Audit Trails",
        "Compliance Documentation",
        "Vulnerability Management",
      ],
    },
  ]

  return (
    <section id="capability-statement" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Capability Snapshot
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-3xl">
          A structured overview for RFP responses and partnership evaluation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="border border-neutral-800 rounded-lg p-6 bg-neutral-950/50">
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="w-1 h-1 rounded-full bg-neutral-600 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-neutral-800 rounded-lg bg-neutral-950/50">
          <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
            NAICS Codes
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "541511 - Custom Computer Programming Services",
              "541512 - Computer Systems Design Services",
              "541715 - R&D in Physical, Engineering, and Life Sciences",
              "518210 - Data Processing, Hosting, and Related Services",
            ].map((code, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded"
              >
                {code}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
