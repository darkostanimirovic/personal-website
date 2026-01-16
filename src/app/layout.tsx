import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Darko Stanimirović - Product Manager',
  description: 'Official homepage of Darko Stanimirović - AI Product Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
