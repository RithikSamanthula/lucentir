const focusAreas = [
  "Research analytics platforms",
  "Anomaly and signal detection",
  "Predictive modeling for complex systems",
  "Data-driven automation",
  "AI system reliability and validation",
]

export function FocusAreas() {
  return (
    <section id="focus-areas" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Focus Areas
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-3xl">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-b border-neutral-800"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0" />
              <span className="text-white">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
