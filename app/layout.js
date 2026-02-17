import "./globals.css";

export const metadata = {
  title: "OCE Cuci Express",
  description: "Laundry service landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}