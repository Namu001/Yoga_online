import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Streaming App",
  description: "Next.js Streaming Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-[#0f0f13] min-h-full flex flex-col"
        suppressHydrationWarning>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}