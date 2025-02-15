import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blinkfeed, The AI-First Email Client.',
  description:
    'Never read emails again. Reply to 100 emails in 10 minutes. Schedule meetings and generate replies with AI aware of your preferences, and knowledge base.',
  keywords: 'email, reply, ai, gpt, gmail, assistant',
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
