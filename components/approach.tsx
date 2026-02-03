const steps = [
  {
    number: "01",
    title: "Problem Definition",
    description: "Align technical systems with operational or research objectives.",
  },
  {
    number: "02",
    title: "System Architecture",
    description: "Design data pipelines, model structure, and deployment strategy.",
  },
  {
    number: "03",
    title: "Model Development",
    description: "Train, validate, and iterate on machine learning systems.",
  },
  {
    number: "04",
    title: "Deployment & Integration",
    description: "Integrate into existing workflows and infrastructure.",
  },
  {
    number: "05",
    title: "Evaluation & Monitoring",
    description: "Measure performance and refine systems over time.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Our Approach
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="max-w-3xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-8 py-8 border-b border-neutral-800 last:border-0"
            >
              <span className="text-sm font-mono text-neutral-500 w-8 shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
