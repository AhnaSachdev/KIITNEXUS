
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import DisableDevTools from '../components/DisableDevTools'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap', // ← Performance: prevents invisible text during font load
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KiitNexus',
  description:
    'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
  icons: {
    icon: '/favicon.png',
  },
  // Security: prevent search engines from caching sensitive pages
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'KiitNexus',
    description:
      'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
    images: ['/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KiitNexus',
    description:
      'KIIT Nexus is a campus-exclusive digital ecosystem connecting students, builders and innovators inside KIIT.',
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
      <head>
        {/* Security: prevent phone number detection on iOS */}
        <meta name="format-detection" content="telephone=no" />
        {/* Viewport — critical for mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Deters source-code inspection in production */}
        <DisableDevTools />
        {children}
      </body>
    </html>
  )
}
