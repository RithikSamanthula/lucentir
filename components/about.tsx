export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            About Lucentir
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Lucentir builds applied artificial intelligence and machine learning systems designed for real-world decision environments.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            The company focuses on bridging research, engineering, and deployment to deliver reliable, interpretable, and scalable software systems.
          </p>
        </div>
      </div>
    </section>
  )
}
