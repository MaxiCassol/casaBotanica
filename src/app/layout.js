import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '../app/components/Header/Header'
import Footer from '../app/components/Footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Casa Botánica | Diseño de jardines en Nordelta',
  description:
    'Estudio de paisajismo especializado en jardines frente al lago, palmeras, olivos, césped, riego e iluminación exterior en Nordelta, Buenos Aires.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} text-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
