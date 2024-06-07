import type {Metadata} from 'next'
// import { Inter } from "next/font/google";
import './globals.css'
import Head from 'next/head'
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Blinkfeed: AI-powered mail client',
  description: 'Blinkfeed is an AI-powered mail client that helps you focus on what matters.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      {/*<Head>*/}
      {/*  <link rel='icon' type='image/png' href='/favicon/16x16.png' />*/}
      {/*</Head>*/}
      <body>{children}</body>
    </html>
  )
}
// className={inter.className}
