"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function InfProfileSettings() {
  const [choose, setChoose] = useState(true);

  const handleClick = () => {
    setChoose(!choose);
  };
  return (
    <div className="flex flex-col gap-28">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-2xl text-white font-semibold">Name</label>
          <input
            type="text"
            id="event-name"
            placeholder="Name"
            className="bg-[#27292D] outline-none rounded-xl p-3 text-white  w-[40%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl text-white font-semibold">Bio</label>
          <textarea
            placeholder="Description..."
            rows={4}
            className="bg-[#27292D] outline-none rounded-xl p-3 text-white resize-none w-[40%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-2xl text-white font-semibold">
            Your Niche
          </label>
          <input
            type="text"
            id="event-name"
            // placeholder="Link"
            className="bg-[#27292D] outline-none rounded-xl p-3 text-white  w-[40%]"
          />
        </div>
        <div className="flex flex-col gap-2 w-[20%]">
          <label className="text-2xl text-white font-semibold cursor-pointer">
            Profile Picture
            <input type="file" name="pic_upload" id="" className="hidden" />
            <Image
              src="/LogoUpload.svg"
              width="252"
              height="300"
              className="w-[60%]"
              alt="Ref3r logo"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <div className="text-2xl text-white font-semibold">
          Profile Visibility
          <div className="mt-10 w-[50%] pl-[7%] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-semibold">Public</div>
              {choose ? (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-semibold">Private</div>
              {choose ? (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-bold">Limited</div>
              {choose ? (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>

        <div className="text-2xl text-white font-semibold">
          Partnerships Visibility
          <div className="mt-10 w-[50%] pl-[7%] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-semibold">
                Current Partnership
              </div>
              {choose ? (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-semibold">
                Past Partnership
              </div>
              {choose ? (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl text-white font-bold">Both</div>
              {choose ? (
                <Image
                  src="/icons/NoAllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              ) : (
                <Image
                  src="/icons/AllowSetting.svg"
                  width="252"
                  height="300"
                  className="w-[10%]"
                  alt="Ref3r logo"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-[70%]">
          <div className="text-2xl text-white font-bold">
            Total Follower Counts
          </div>
          <input
            type="text"
            id="event-name"
            placeholder="Peter Griffin"
            className="bg-[#27292D] text-lg rounded-2xl p-4 text-white  w-[50%]"
          />
        </div>
      </div>

      <div className="flex flex-col w-[65%]">
        <div className="flex justify-between items-center">
          <p className="text-white text-lg">Connect/Disconnect Social Media</p>
          <button className="text-[#00B24F] text-xl font-medium px-4 py-2 border-2 border-[#00B24F] rounded-lg">
            Social Media Accounts
          </button>
        </div>
      </div>

      <div className="gap-4 flex ">
        <button className="bg-[#00B24F] py-2 px-1 text-white rounded-xl min-w-[15%]">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default InfProfileSettings;
