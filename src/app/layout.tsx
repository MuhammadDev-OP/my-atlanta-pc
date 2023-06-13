import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "AtlantaAir",
  description: "Air Reservation System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        {children}
        </ClientOnly>
        </body>
    </html>
  );
}
