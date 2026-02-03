const capabilities = [
  {
    title: "Applied AI & Machine Learning",
    description: "Design and deployment of production-grade machine learning systems.",
  },
  {
    title: "Advanced Analytics & Forecasting",
    description: "Predictive modeling for complex, high-dimensional datasets.",
  },
  {
    title: "Automation Systems",
    description: "AI-driven workflow and decision automation.",
  },
  {
    title: "Data Engineering",
    description: "Robust pipelines, preprocessing, and model-ready data systems.",
  },
  {
    title: "Decision Support Tools",
    description: "Interfaces that translate models into operational insight.",
  },
  {
    title: "Model Evaluation & Validation",
    description: "Reliability, accuracy, and performance auditing.",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Core Capabilities
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-8 bg-black border border-neutral-800 rounded hover:border-neutral-600 transition-colors"
            >
              <h3 className="text-lg font-medium mb-3 text-white">{capability.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
