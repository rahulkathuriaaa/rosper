"use client";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
const clientId =
  "BG3_rdY0W38xjWDXL_FqZv1CinC4a0dmVB8jjbvqUqBVguzX9KmY4Zo-g5T5TTBeKStmrPL_RtE2rsTAeDTENVw";
const chainConfig = {
  chainNamespace: "eip155",
  chainId: "0x13882", // hex of 80002, polygon testnet
  rpcTarget: "https://rpc.ankr.com/polygon_amoy",
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
  displayName: "Polygon Amoy Testnet",
  blockExplorerUrl: "https://amoy.polygonscan.com/",
  ticker: "MATIC",
  tickerName: "MATIC",
  logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
};
const privateKeyProvider = new EthereumPrivateKeyProvider({
  //@ts-ignore
  config: { chainConfig: chainConfig }
});

export const useWeb3Auth = new Web3Auth({
  // Get it from Web3Auth Dashboard
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider: privateKeyProvider,
});

