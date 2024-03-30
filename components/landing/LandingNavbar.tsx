"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicConnectButton, DynamicWidget, getAuthToken, useDynamicContext, useIsLoggedIn } from "@/lib/dynamic"



function LandingNavbar() {
  const [Toggle, setToggle] = useState(true);
  const { user, authToken, isAuthenticated, setShowAuthFlow, handleLogOut } = useDynamicContext()
  // const isUserLoggedIn = useIsLoggedIn()
  // console.log(isUserLoggedIn)
  if (isAuthenticated) console.log("user payload data", user)
  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <nav className="z-10 md:bg-[#4A4A4A] mt-2 md:mt-10 w-[90%] rounded-md items-center justify-between text-[0.75rem] lg:text-sm font-semibold text-white flex">
        <Link href="/" className="md:w-[10%]">
          <Image
            src="/refer-logo.png"
            width="252"
            height="300"
            className="w-[70%] md:w-[60%] md:ml-4 my-2"
            alt="Ref3r logo"
          />
        </Link>

        <div className="md:flex w-[90%] justify-evenly items-center hidden">
          <div className="flex gap-[2rem] justify-center items-center w-[80%]">
            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Home</p>
            </Link>

            <Link
              // target="_blank"
              href="/"
            >
              <p className="hoverUnderline hover:text-[#00B24F]">Benefits</p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                What we offer
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                How it works
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                Testimonials
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Contact us</p>
            </Link>
          </div>

          <div className="mr-4">
            {/* <Link href="/" className="">
              <Image
                src="/login.svg"
                width="252"
                height="300"
                className="w-[70%] md:ml-4 my-2"
                alt="Ref3r logo"
              />
            </Link> */}
            {/* <DynamicWidget /> */}
            {/* <DynamicConnectButton> {isAuthenticated ? 'logout' : 'login'}</DynamicConnectButton> */}

            <button className="border px-6 py-2 rounded hover:bg-white hover:text-black" onClick={() => isAuthenticated ? handleLogOut() : setShowAuthFlow(true)}>{isAuthenticated ? "sign out" : "login"}</button>

          </div>
        </div>

        {Toggle ? (
          <Image
            src="/small.svg"
            alt="menu"
            width="65"
            height="30"
            className="z-0 md:hidden"
            onClick={handleClick}
          />
        ) : (
          <Image
            src="/close.png"
            alt="close"
            width="20"
            height="30"
            className="z-0 md:hidden"
            onClick={handleClick}
          />
        )}

        <div
          className={`delay-300 md:hidden text-center flex justify-center items-center gap-8 py-12 h-screen bg-black/70 w-full fixed top-[55px] text-white flex-col ${Toggle ? "right-[100%]" : "left-[100%]}"
            }`}
        >
          <div className="flex flex-col gap-[2rem]  w-[80%]">
            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Home</p>
            </Link>

            <Link
              // target="_blank"
              href="/"
            >
              <p className="hoverUnderline hover:text-[#00B24F]">Benefits</p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                What we offer
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                How it works
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">
                Testimonials
              </p>
            </Link>

            <Link href="/">
              <p className="hoverUnderline hover:text-[#00B24F]">Contact us</p>
            </Link>
          </div>

          <div className="md:mr-4">icon</div>
        </div>
      </nav>
    </div>
  );
}

export default LandingNavbar;
