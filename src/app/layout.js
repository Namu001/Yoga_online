import "./globals.css";

export const metadata = {
  title: "Streaming App",
  description: "Next.js Streaming Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f13] overflow-hidden">
        {children}
      </body>
    </html>
  );
}
