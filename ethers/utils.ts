import { useRecoilState } from "recoil";
import { Providers } from "@/context/atoms/Provider";
import { ContractAddressReferFactory, AbiReferFactory } from "@/config"
import { ethers } from "ethers"
import { useWeb3Auth } from "@/hooks/useWeb3Auth";

export const ContractInstance = async () => {
    const [web3AuthProvider, setWeb3AuthProvider] = useRecoilState(Providers)
    console.log("Web3 provider is", web3AuthProvider)
    if (web3AuthProvider !== null) {
        const provider = await new ethers.providers.Web3Provider(useWeb3Auth.provider as any)
        const signer = provider.getSigner()
        const contractInstance = new ethers.Contract(ContractAddressReferFactory, AbiReferFactory, signer)
        return contractInstance
    }
    return "Please connect wallet to interact with the contract"
}
export const useWalletAddress = async () => {
    const [web3AuthProvider, setWeb3AuthProvider] = useRecoilState(Providers)
    if (web3AuthProvider != null) {
        console.log('reached here')
        const provider = await new ethers.providers.Web3Provider(useWeb3Auth.provider as any)
        const signer = provider.getSigner()
        return signer
    }
    return "Sign in to get the wallet address"
}
export const useCreateCampaignContract = async ({ time, amount, rate }: { time: Number, amount: string, rate: string }) => {
    const contract = await ContractInstance();
    if (contract && typeof contract !== 'string') {
        const amountInWei = ethers.utils.parseEther(amount);
        const rateInWei = ethers.utils.parseEther(rate);
        const tx = await contract.createCampaign(time, amountInWei, rateInWei);
        await tx.wait();
        console.log("Campaign Created");
    } else {
        console.error("Please connect wallet to interact with the contract");
    }
}

