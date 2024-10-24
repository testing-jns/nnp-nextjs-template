"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import "../styles/index.css";
import { useTranslation } from "react-i18next";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  return (
    <html suppressHydrationWarning lang={i18n.language}>
      <head />
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children} {/* The actual page content will be rendered here */}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;