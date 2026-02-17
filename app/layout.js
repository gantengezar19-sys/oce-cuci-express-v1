
import './globals.css'

export const metadata = {
  title: 'Oce Cuci Express',
  description: 'Laundry Cepat, Bersih & Wangi - Bogor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
