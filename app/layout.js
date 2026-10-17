import { Young_Serif, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Social from "@/components/Social";
import "./globals.css";

const serif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Welcome",
  description: "Koleksi gambar siro_gane",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
        <Header />
        {children}
        <Social />
      </body>
    </html>
  );
}
