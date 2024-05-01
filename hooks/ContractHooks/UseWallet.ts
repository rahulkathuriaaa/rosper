import { useRecoilState } from "recoil"
import { useWeb3Auth } from "../useWeb3Auth"
import { ethers } from "ethers"
import { Providers } from "@/context/atoms/Provider"
import { WalletAddress } from "@/context/atoms/walletAddress"
import { IProvider } from "@web3auth/base"
import { json } from "stream/consumers"
import { useEffect, useState } from "react"

export function useWalletAddress() {
    const [web3Provider, setWeb3Provider] = useRecoilState(Providers)
    const Web3Auth = useWeb3Auth
    const [walletAddress, setWalletAddress] = useState('')
    // console.log("Wallet address", walletAddress)
    console.log('11')
    useEffect(() => {


    }, [])
    return { walletAddress }
}
