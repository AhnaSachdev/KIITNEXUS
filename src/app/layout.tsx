import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'KiitNexus',
  description: 'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'KiitNexus',
    description: 'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
    images: ['/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KiitNexus',
    description: 'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
    images: ['/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
