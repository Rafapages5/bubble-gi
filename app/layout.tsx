import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bubble GI - Regalos Personalizados',
  description: 'Encanto en cada burbuja. Regalos personalizados únicos para ocasiones especiales.',
  keywords: [
    'regalos personalizados',
    'globos personalizados',
    'esferas gigantes',
    'tarjetas navideñas',
    'sudaderas personalizadas',
    'tote bags',
    'arreglos florales',
    'México',
  ],
  authors: [{ name: 'Bubble GI' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://bubblegi.com',
    title: 'Bubble GI - Regalos Personalizados',
    description: 'Encanto en cada burbuja. Regalos personalizados únicos para ocasiones especiales.',
    siteName: 'Bubble GI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble GI - Regalos Personalizados',
    description: 'Encanto en cada burbuja. Regalos personalizados únicos para ocasiones especiales.',
  },
  verification: {
    google: 'PENDING_USER_VERIFICATION_CODE', // TODO: User needs to provide this code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-bubble-dark min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
