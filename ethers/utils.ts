// @ts-nocheck
import { FC, FormEventHandler, useState } from "react";
// 0x77929F1f2a404a6dEB38124E0E0c4d7F5500c595
import { ethers } from "ethers";
import {
  Account,
  Chain,
  Hex,
  Transport,
  WalletClient,
  PublicClient,
  parseEther,
} from "viem";

import {
  useDynamicContext,
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { contractAddress, contractAbi } from "@/ethers/contractConfig";
const { primaryWallet } = useDynamicContext();
export const provider = async () => {
  return await primaryWallet?.connector.ethers?.getSigner();
};
export async function updateNumber() {
  const functionName = "store";
  const functionArguments = [13];
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  try {
    const tx = await contract[functionName](...functionArguments);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}
