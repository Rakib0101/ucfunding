import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "United Capital Funding | Invoice Factoring Services",
  description: "UC Funding converts your business or government invoices into working capital quickly. Bank-owned factoring company — lower fees, high quality service nationwide.",
  keywords: "invoice factoring, accounts receivable factoring, working capital, UCFunding, United Capital Funding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
