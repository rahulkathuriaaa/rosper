// @ts-nocheck
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  EthersExtension,
  ZeroDevSmartWalletConnectors,
  DynamicWagmiConnector,
} from "../lib/dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosper",
  description: "Democratizing the Social Media Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.DYNAMIC_PROJECT_ID || "",
            walletConnectors: [
              EthereumWalletConnectors,
              ZeroDevSmartWalletConnectors,
            ],
            walletConnectorExtensions: [EthersExtension],
          }}
        >
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
