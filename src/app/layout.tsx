import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav, Footer } from "@/components";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Afrilion Consulting | Leading Telecom BSS/OSS Services in Africa",
  description:
    "Afrilion Consulting delivers innovative BSS, OSS, and VAS solutions for MNOs and MVNOs across Africa. Expert project management, IT testing, and business process consulting for telecom excellence.",
  keywords:
    "Afrilion Consulting, telecom consulting, BSS, OSS, VAS, Africa, project management, IT testing, business process consulting",
  openGraph: {
    title: "Afrilion Consulting | Leading Telecom BSS/OSS Services in Africa",
    description:
      "Innovative telecom solutions for MNOs and MVNOs across Africa",
    url: "https://www.afrilionconsulting.com",
    siteName: "Afrilion Consulting",
    images: [
      {
        url: "https://www.afrilionconsulting.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-dark`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
