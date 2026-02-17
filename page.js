export const metadata = {
  title: "OCE Cuci Express",
  description: "Laundry Express Profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',scrollBehavior:'smooth'}}>
        {children}
      </body>
    </html>
  );
}
