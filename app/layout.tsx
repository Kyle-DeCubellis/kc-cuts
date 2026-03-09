import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KC Cuts and Style LLC | Sensory-Friendly Mobile Haircuts | Southborough, MA",
    template: "%s | KC Cuts and Style LLC",
  },
  description:
    "Licensed hairstylist specializing in therapeutic, sensory-friendly haircuts for children and adults with ASD and SPD. Mobile in-home service in Southborough, MA and surrounding communities. 25+ years experience.",
  keywords: [
    "sensory haircuts",
    "autism haircuts",
    "ASD haircuts",
    "SPD haircuts",
    "mobile hairstylist",
    "Southborough MA",
    "sensory-friendly salon",
    "therapeutic haircuts",
    "KC Cuts",
  ],
  openGraph: {
    title: "KC Cuts and Style LLC | Sensory-Friendly Mobile Haircuts",
    description:
      "Therapeutic, sensory-friendly mobile haircuts for clients with ASD and SPD. Serving Southborough, MA and a 15-mile radius.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KC Cuts and Style LLC",
    description:
      "Sensory-friendly mobile haircuts for clients with ASD and SPD in Southborough, MA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
