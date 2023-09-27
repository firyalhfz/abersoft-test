import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <div className="lg:flex mt-32 lg:mx-10 xs:mx-7 md:mx-8 mb-12">
      <div className="w-full lg:w-1/2">
        <h1 className="font-bold text-primary text-3xl md:text-5xl ">
          Contact Us.
        </h1>
        <h1 className="text-cgrey sm:text-1xl mt-4">
          We know that it sometimes can be hard to know where to start. Let’s
          chat and see if we can help you!
        </h1>
        <div className="hidden lg:flex lg:justify-between lg:w-2/4 lg:mt-40">
          <Image
            src={require("@/assets/icon-fb.png")}
            alt="img-fb"
            width="50"
            height="50"
          />
          <Image
            src={require("@/assets/icon-ig.png")}
            alt="img-ig"
            width="50"
            height="50"
          />
          <Image
            src={require("@/assets/icon-linkedin.png")}
            alt="img-linkedin"
            width="50"
            height="50"
          />
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 lg:ml-20 lg:mt-0 xs:mt-10">
        <div className="w-full">
          <div className=" bg-[#F6F6F9] rounded-full p-4">
            <input
              type="text"
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div className="mt-8 bg-[#F6F6F9] rounded-full p-4">
            <input
              type="text"
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mt-8 bg-[#F6F6F9] rounded-[29px] p-4">
            <textarea
              rows={6}
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="Message"
            />
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <button
              type="submit"
              className="flex mt-8 h-[50px] justify-end items-center w-2/3 lg:w-1/3 rounded-full justify-center bg-primary px-3 py-1.5 text-lg font-light leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:secondary"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex justify-between md:justify-around xs:mt-20">
        <Image
          src={require("@/assets/icon-fb.png")}
          alt="img-fb"
          width="50"
          height="50"
        />
        <Image
          src={require("@/assets/icon-ig.png")}
          alt="img-ig"
          width="50"
          height="50"
        />
        <Image
          src={require("@/assets/icon-linkedin.png")}
          alt="img-linkedin"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
}
