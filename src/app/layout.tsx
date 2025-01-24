import type { Metadata } from "next";
import localFont from "next/font/local";
import ReduxProvider from "@/Components/ReduxProvider/ReduxProvider";
import Navbar from "@/Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer/Footer";
import './globals.css' 
 const fonts = localFont({
  src: "../Components/assets/Fonts/FontsFree-Net-Proxima-Nova-Sbold.otf",
});
export const metadata: Metadata = {
  title: "Bouncer",
  description:
    "Welcome to Bouncer, your one-stop online shop for a vast selection of quality products. From the latest electronics and fashionable clothing to home essentials and unique gifts, we have something for everyone. Explore our easy-to-navigate website, enjoy secure shopping, and benefit from fast delivery to your doorstep. Shop now for unbeatable prices, amazing deals, and exclusive discounts!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} antialiased overflow-x-hidden`}>
        <ReduxProvider>
          <Navbar />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 1500,
              },
              error: {
                duration: 4000,
              },
            }}
          />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
