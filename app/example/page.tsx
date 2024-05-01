"use client";

import { useWeb3Auth } from "@/hooks/useWeb3Auth";
import { IProvider } from "@web3auth/base";
import { ethers } from "ethers";
import { useState } from "react";
const web3auth = useWeb3Auth;

export default function Home() {
  const web3Auth = useWeb3Auth
  const login = async () => {
    // IMP START - Login
    try {
      await web3auth.initModal();
    } catch (error) {
      console.log(error);
    }

    await web3auth.connect();
    // IMP END - Login
    if (web3auth.connected) {
    }
  };
  const contractABI = [
    { inputs: [{ internalType: "string", name: "initMessage", type: "string" }], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "message", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    {
      inputs: [{ internalType: "string", name: "newMessage", type: "string" }],
      name: "update",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contractAddress = "0x04cA407965D60C2B39d892a1DFB1d1d9C30d0334";
  const writeContract = async () => {
    // const provider = await new ethers.providers.Web3Provider(web3auth.provider as IProvider)
    // const signer = await provider.getSigner()
    // const contract = new ethers.Contract(contractAddress, contractABI, signer)
    // console.log(1)
    // const receipt = await contract.methods.update("W3A").send({
    //   from: (await web3.eth.getAccounts())[0],
    // const  = await tx.wait()
    // console.log("Write on blockchain", recipt)
  }
  const readContract = async () => {
    const provider = await new ethers.providers.Web3Provider(web3auth.provider as IProvider)
    const signer = await provider.getSigner()
    const contract = await new ethers.Contract(contractAddress, contractABI, signer)
    console.log(1)
    const message = await contract.message();
    console.log(message)
  }
  return (
    <div>
      <h1>This is example page</h1>
      <button onClick={login} className="outline px-2 py-4">login</button>
      <button onClick={writeContract} className="outline px-2 py-4">Write Contract</button>
      <button onClick={readContract} className="outline px-2 py-4">Read Contract</button>
    </div>
  );
}

