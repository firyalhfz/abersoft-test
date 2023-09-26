import Image from "next/image";
import React from "react";

export default function Services() {
  const dataCategories = [
    {
      title: "App Development",
      desc: "With over 10 years of experience of creating apps on both Android and iOS we can create the perfect app for you.",
      content:
        "We have built app portfolios with over 400 million downloads world wide ranging from AR Games to complicated business apps. We always strive to build apps with the latest technology and that will be easy for our clients to manage and handle in the future. We use frameworks such as React Native and Flutter to create amazing cross platform applications.",
    },
    {
      title: "Websites",
      desc: "Having a professional website can sometimes be the difference between getting a new client or not.",
      content:
        "With long experience of creating websites both from scratch and using many frameworks such as Wordpress, WooCommerce and other platforms we can create the perfect website for you. We always try making the website as smooth and fast as possible with the right SEO to help you get found online.",
    },
    {
      title: "UI/UX Design",
      desc: "If your tech is like the brain, design is like the heart. In order to get clients to fall in love with your product you need to have great design in place.",
      content:
        "We know design can be tricky so we are here to assist you creating beautiful UI/UX Design following the latest trends and designs. We always use industry standard softwares such as Figma, Adobe and Photoshop.",
    },
    {
      title: "Consultants",
      desc: "For already established companies we offer ongoing consultants at unbeatable prices.",
      content:
        "Sometimes you do not need or want to employ a full time worker because it is more flexible with an ongoing consultant. We can offer a wide variety of services ranging from really cost effective remote consultants with Swedish project management to on site Swedish developers. ",
    },
  ];

  return (
    <div className="ml-36 mr-36">
      <div className="flex items-center mt-24">
        <div className="w-1/2 ml-10">
          <h1 className="font-bold tracking-normal leading-normal text-primary text-5xl">
            We make your ideas become
            <span className="text-cgrey"> reality.</span>
          </h1>
          <h1 className="font-light tracking-tight text-cgrey sm:text-2xl mt-4">
            Whether or not you are an established company or a new start up, we
            will create the solution you need.
          </h1>
        </div>
        <div className=" w-1/2 flex justify-center">
          <Image
            src={require("@/assets/jelly-bear.png")}
            alt="image"
            width="500"
            height="500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 ml-2 mt-40 mr-4">
        {dataCategories.map((item) => {
          return (
            <div key={item.title} className="mx-8 mt-10">
              <div className="flex justify-center"></div>
              <div className="mt-4">
                <h1 className="font-bold text-primary sm:text-3xl ">
                  {item.title}
                </h1>
                <h1 className="font-bold text-gray-500 sm:text-1xl mt-2">
                  {item.desc}
                </h1>
                <h1 className="font-light text-cgrey sm:text-1xl mt-2">
                  {item.content}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-60 mx-9 mb-12">
        <div className="w-1/2">
          <h1 className="font-bold tracking-tight text-primary sm:text-5xl">
            Contact Us.
          </h1>
          <h1 className="font-light tracking-tight text-cgrey sm:text-2xl mt-4">
            We know that it sometimes can be hard to know where to start. Let’s
            chat and see if we can help you!
          </h1>
          <div className="flex justify-between w-2/4 mt-40">
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
        <div className="flex w-1/2 ml-20">
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
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex mt-8 h-[50px] justify-end items-center w-1/3 rounded-full justify-center bg-primary px-3 py-1.5 text-lg font-light leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:secondary"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
