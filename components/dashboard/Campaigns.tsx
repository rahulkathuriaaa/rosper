// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import ActiveCampaigns from "./ActiveCampaigns";
import PastCampaigns from "./PastCampaigns";
import CreateCampaign from "./CreateCampaign";
import { ethers } from "ethers";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useIsInfluencer } from "@/store";
import {
  counterContractAbi,
  counterContractAddress,
  tokenContractAbi,
  tokenContractAddress,
  referFactoryContractAddress,
  referFactoryContractAbi,
} from "@/ethers/contractConfig";

const Campaigns = () => {
  const [choose, setChoose] = useState(false);
  const [create, setCreate] = useState(true);
  const [allCampaigns, setAllCampaigns] = useState([]);

  const { primaryWallet } = useDynamicContext();
  const { user } = useDynamicContext();
  const walletAddress = user?.verifiedCredentials[1].address;
  const isInfluencer = useIsInfluencer.getState().isInfluencer;
  console.log("wallet ", walletAddress);
  const getSigner = async () => {
    return await primaryWallet?.connector.ethers?.getSigner();
  };
  const getProvider = async () => {
    return await primaryWallet?.connector.ethers?.getWeb3Provider();
  };
  const getSigner2 = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        return signer;
      } catch (error) {
        console.error("Error requesting accounts:", error);
        return null;
      }
    } else {
      console.error("MetaMask not detected");
      return null;
    }
  };

  const getBrandCampaigns = async () => {
    const provider = await getProvider();
    //  console.log(provider);
    const contract = new ethers.Contract(
      referFactoryContractAddress,
      referFactoryContractAbi,
      provider
    );
    try {
      const tx = await contract.fetchBrandCampaign(
        "0x063145aa5f16FAD2C8179c1E0Ff1a1a39D95AF9d"
      );
      //await tx.wait();
      console.log(tx);
      return tx;
    } catch (error) {
      console.error("Transaction failed:", error);
      return false;
    }
  };
  const getJoinedCampaigns = async () => {
    const provider = await getProvider();
    //  console.log(provider);
    const contract = new ethers.Contract(
      referFactoryContractAddress,
      referFactoryContractAbi,
      provider
    );
    try {
      const tx = await contract.fetchJoinedCampaign(walletAddress);
      //await tx.wait();
      console.log(tx);
      return tx;
    } catch (error) {
      console.error("Transaction failed:", error);
      return false;
    }
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (isInfluencer) {
        const allCampaigns = await getJoinedCampaigns();
        setAllCampaigns(allCampaigns);
      } else {
        const allCampaigns = await getBrandCampaigns();
        setAllCampaigns(allCampaigns);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <div
        className={`w-[98%] flex flex-col pt-10 pb-6 gap-10 pl-4 ${
          create ? "flex" : "hidden"
        } `}
      >
        {!isInfluencer ? (
          <div className="flex justify-between items-center">
            <p className="text-5xl font-semibold text-white">Campaigns</p>
            <button
              className="py-2 px-3 bg-[#00B24F] text-white text-sm rounded-lg cursor-pointer"
              onClick={() => {
                setCreate(false);
              }}
            >
              Create Campaign
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="w-[30%] flex justify-center items-center gap-2">
          <button
            className={`flex justify-center items-center p-1 w-[50%] rounded-full text-sm ${
              choose
                ? "bg-[#909090] text-black font-medium"
                : "bg-[#00B24F] text-white"
            }`}
            onClick={() => setChoose(false)}
          >
            Active Campaigns
          </button>
          <button
            className={`flex justify-center items-center p-1 w-[50%] rounded-full text-sm ${
              choose
                ? "bg-[#00B24F] text-white"
                : "bg-[#909090] text-black font-medium"
            }`}
            onClick={() => setChoose(true)}
          >
            Past Campaigns
          </button>
        </div>

        {allCampaigns && (
          <div className="w-[85%]">
            {choose ? (
              <PastCampaigns />
            ) : (
              <ActiveCampaigns campaigns={allCampaigns} />
            )}
          </div>
        )}
      </div>

      {create ? "" : <CreateCampaign />}

      {/* comment out line 62 to see View Campaign & Chat UI */}
      {/* <ViewCampaign /> */}
    </>
  );
};

export default Campaigns;
