export function WhyLucentir() {
  return (
    <section id="why" className="py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12">
          What Lucentir Delivers
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Core Offerings */}
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                Machine Learning System Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Design and implementation of production-grade ML pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Model development for classification, forecasting, anomaly detection, and risk scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Evaluation focused on reliability, error characteristics, and real-world constraints</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                Data & Analytics Engineering
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Data ingestion, transformation, and validation pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Feature engineering for sparse, noisy, or high-dimensional datasets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Analytics systems that support operational and scientific decision-making</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
                Applied AI for Specialized Domains
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Computer vision and geospatial analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Time-series and sensor data modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                  <span className="text-neutral-400">Research-to-production translation for experimental models</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - How Clients Use It */}
          <div>
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-4">
              How Clients Use It
            </h3>
            <p className="text-neutral-300 mb-6">Lucentir systems are used to:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                <span className="text-neutral-400">Detect anomalies and emerging patterns in large datasets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                <span className="text-neutral-400">Automate analysis workflows previously performed manually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                <span className="text-neutral-400">Support decisions with model outputs that include confidence and uncertainty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0" />
                <span className="text-neutral-400">Deploy ML models into constrained or regulated environments</span>
              </li>
            </ul>
            <p className="text-neutral-600 text-sm mt-8">
              Engagements range from early-stage prototyping to full system deployment.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 pt-16 border-t border-neutral-800">
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl">
            Lucentir builds machine learning systems designed to function reliably beyond demos and prototypes.
          </p>
        </div>
      </div>
    </section>
  )
}
