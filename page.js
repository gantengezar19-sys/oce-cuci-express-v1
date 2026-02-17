import './globals.css';

export const metadata = {
  title: 'Oce Cuci Express',
  description: 'Laundry Cepat, Bersih & Wangi - Gratis Antar Jemput Maks. 3KM',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
