import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "./components/navbar/Navbar";
import RentModal from "./components/modals/RentModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "AtlantaAir",
  description: "Air Reservation System",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
          <RentModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
