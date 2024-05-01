import { AbiReferFactory, ContractAddressReferFactory } from "@/config";
import { Providers } from "@/context/atoms/Provider";
import { WalletAddress } from "@/context/atoms/walletAddress";
import { ethers } from "ethers";
import { useRecoilState } from "recoil";

export const useContractInstance = async () => {
    const [Web3Provider, setWeb3AuthProvider] = useRecoilState(Providers)
    const [walletAddress, setWalletAddress] = useRecoilState(WalletAddress)
    if (Web3Provider) {
        const provider = await new ethers.providers.Web3Provider(Web3Provider as any)
        const signer = provider.getSigner()
        const accountAddress = await signer.getAddress()
        setWalletAddress(accountAddress)
        const ContractInstance = await new ethers.Contract(ContractAddressReferFactory, AbiReferFactory, signer)
        return ContractInstance
    }
}

