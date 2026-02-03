export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Contact
          </h2>
          <div className="w-16 h-px bg-white" />
        </div>

        <div className="max-w-xl space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500 w-20">
              Email
            </span>
            <a
              href="mailto:rithik@lucentir.com"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              rithik@lucentir.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500 w-20">
              LinkedIn
            </span>
            <a
              href="https://linkedin.com/company/lucentir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              linkedin.com/company/lucentir
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
