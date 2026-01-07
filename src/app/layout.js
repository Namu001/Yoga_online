import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Streaming App",
  description: "Next.js Streaming Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f13] flex flex-col min-h-screen"
        suppressHydrationWarning>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
