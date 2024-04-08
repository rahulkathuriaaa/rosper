import React from "react";
import Image from "next/image";
import CardsWhitelistInfluencer from "../cards/CardsWhitelistInfluencer";

function WhitelistInfluencer() {
  return (
    <>
      <div className="w-[98%] flex flex-col gap-2 py-6 pl-4">
        <div>
          <h2>Whitelist Influencers</h2>
          <p>
            Allot upfront budget to influencers you like and we will send them
            request to join the campaign
          </p>
        </div>

        <div>
          <p>Search</p>
          <div className="flex">
            <div className="flex items-center text-white border-white w-[60%] bg-[#27292D]  rounded-xl px-2 gap-3">
              <Image
                src="/search.svg"
                width="252"
                height="300"
                className="w-[5%]"
                alt="Ref3r logo"
              />
              <input
                type="text"
                placeholder="Enter influencer’s name or wallet address"
                className="text-white h-[2.5rem] w-[90%] rounded-xl border-white bg-[#27292D] px-2 outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <p>Sort by</p>
              <p>Popularity</p>
            </div>
            <div>
              <p>Saved Influencers</p>
            </div>
          </div>

          <div className="bg-[#27292D] w-full rounded-xl flex flex-col gap-4">
            <div className="w-full bg-[#2D2D2D] px-6 py-4 flex justify-between items-center rounded-t-xl">
              <div className="">
                <p className="text-white text-lg font-semibold">NAME</p>
              </div>
              <div className="w-[20%]">
                <p className="text-gray-400 font-semibold">
                  Remaining Budget -{" "}
                  <span className="text-white text-lg font-semibold">$100</span>
                </p>
              </div>
            </div>

            <CardsWhitelistInfluencer image={"/icons/ProfileIcon.svg"} name='Jane Cooper' />
            <CardsWhitelistInfluencer image={"/icons/ProfileIcon.svg"} name='Jane Cooper' />

            <div className="w-full bg-[#2D2D2D] px-6 py-3 flex items-center justify-center text-center rounded-b-xl">
                <p className="text-gray-400">Showing 6 of 6 people</p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default WhitelistInfluencer;
