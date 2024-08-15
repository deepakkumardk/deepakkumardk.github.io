import type { Metadata } from "next";
import "./globals.css";
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "./providers";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Deepak Kumar",
  description: "Deepak Kumar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
