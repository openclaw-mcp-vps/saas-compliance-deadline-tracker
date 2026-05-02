import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ComplianceTrack — Never miss SOC2, GDPR, or audit deadlines',
  description: 'Track all compliance deadlines, renewal dates, and required documentation for your SaaS company. Automated reminders so nothing slips through the cracks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b47af4d0-9dcf-41ae-96be-247813469934"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
