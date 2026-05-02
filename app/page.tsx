export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">ComplianceTrack</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#21262d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6">
          SOC2 · GDPR · ISO 27001 · HIPAA
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Never miss a compliance<br />
          <span className="text-[#58a6ff]">deadline again</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          ComplianceTrack keeps every SOC2, GDPR, and audit deadline in one place.
          Automated reminders, document checklists, and renewal tracking — built for SaaS teams of 10–500.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-md font-semibold text-base hover:bg-[#79b8ff] transition-colors">
            Start tracking for $15/mo
          </a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-md font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            Learn more
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['Deadline dashboard','Email reminders','Document checklist','Renewal tracking','Team alerts','Audit log'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#21262d] rounded-full px-4 py-2 text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple, transparent pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-xl">Pro</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded-full">POPULAR</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited compliance deadlines',
              'Automated email reminders',
              'Document upload & checklist',
              'Team member access',
              'Audit-ready reports',
              'SOC2, GDPR, HIPAA, ISO 27001'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] text-center py-3 rounded-md font-semibold hover:bg-[#79b8ff] transition-colors">
            Get started now
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-3">Cancel anytime · No setup fees</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Which compliance frameworks does it support?</h3>
            <p className="text-[#8b949e] text-sm">ComplianceTrack supports SOC2, GDPR, HIPAA, ISO 27001, PCI-DSS, and more. You can also add custom frameworks and deadlines specific to your business.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">How do the automated reminders work?</h3>
            <p className="text-[#8b949e] text-sm">Set reminder windows (e.g. 90, 30, 7 days before) and ComplianceTrack sends email alerts to your team. Never scramble at the last minute before an audit again.</p>
          </div>
          <div className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your account settings with no penalties or fees. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] px-6 py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} ComplianceTrack. Built for SaaS compliance teams.</p>
      </footer>
    </main>
  )
}
