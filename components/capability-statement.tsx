export function CapabilityStatement() {
  return (
    <section id="capability-statement" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Capability Statement
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                Core Competencies
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Applied AI & ML systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Analytics and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Data engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Decision support tools</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                Differentiators
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Research-driven engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Deployment-ready systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Emphasis on reliability and validation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                Target Sectors
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Government</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Research institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <span className="text-white">Enterprise</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                NAICS Codes
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-sm font-mono text-white rounded">
                  541511
                </span>
                <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-sm font-mono text-white rounded">
                  541512
                </span>
                <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-sm font-mono text-white rounded">
                  541715
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
