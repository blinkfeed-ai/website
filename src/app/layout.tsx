import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blinkfeed. Never read emails again.',
  description:
    'Reply to 100 emails in 10 minutes. Schedule meetings and generate replies with AI aware of your calendar, preferences, and knowledge base.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
