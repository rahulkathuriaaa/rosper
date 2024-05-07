"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { generateDiscountCode } from "../../utils";
import { useBrandData } from "@/store";
const ReferalCode = () => {
  const shopifyToken = useBrandData.getState().api_key
  const shopifyStore = useBrandData.getState().website
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("Generating ..");

  const togglePopup = () => {
    handleCodeGeneration()
    setIsOpen(!isOpen);
  };

  const handleCodeGeneration = async () => {
    const res = await generateDiscountCode(20, "ll",shopifyToken,shopifyStore);
    setCode(res.code);
  };

  return (
    <div className="">
      <button
        onClick={() => {
           togglePopup();
        }}
        className="px-4 py-2 border rounded-lg"
      >
        Get Code
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-[4px] z-10">
          <div className="bg-[#7EE5A1] px-6 py-10 rounded-[0.6rem] flex flex-col gap-6 w-[50%] justify-center items-center shadow-lg">
            <button
              onClick={togglePopup}
              className="text-[#4F4F4F] text-xl font-bold py-2 px-4 rounded-full bg-[#61BC84]"
            >
              X
            </button>
            <h2 className="text-center text-[#000000B2] text-5xl font-bold">
              Affiliate Code
            </h2>
            <p className="text-center text-[#000000B2]">
              Scan with your phone’s camera or QR code app to view.
            </p>
            <Image
              src={"/QR.svg"}
              width={150}
              height={100}
              alt="QR"
              className=""
            />
            <h1 className="text-center text-[#000000B2] text-5xl font-bold">
              {code}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferalCode;
