import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="flex items-center mt-24 mx-36">
        <div className="w-1/2 ml-10">
          <h1 className="font-bold tracking-normal leading-normal text-cgrey text-5xl">
            Who are we? <br /> We are{" "}
            <span className="text-primary">Abersoft..</span>
          </h1>
          <h1 className="font-light tracking-tight text-cgrey sm:text-2xl mt-4">
            Whether or not you are an established company or a new start up, we
            will create the solution you need.
          </h1>
        </div>
        <div className="w-1/2 flex justify-center">
          <div style={{ marginRight: "-500px", overflow: "hidden" }}>
            <Image
              src={require("@/assets/img-team.png")}
              alt="image"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="grid w-full h-[640px] min-h-full box-content items-center mt-24 bg-primary justify-center">
        <div className="grid justify-center mt-[123px]">
          <Image
            src={require("@/assets/icon-quote-right.png")}
            alt="image"
            width="50"
            height="50"
          />
        </div>
        <h1 className="font-bold tracking-normal leading-normal text-white text-5xl align-center text-center">
          Creating software <br /> is not our work, <br />
          it is our passion.
        </h1>
        <div className="grid justify-center mb-[123px]">
          <Image
            src={require("@/assets/icon-quote-left.png")}
            alt="image"
            width="50"
            height="50"
          />
        </div>
      </div>
      <div className="grid h-[644px] min-h-full grid-cols-2 ml-44 mr-4 items-center -z-10">
        <div className="mt-4 ml-1 pr-20">
          <h1 className="font-bold text-primary sm:text-[32px] ">
            Our philosophy.
          </h1>
          <h1 className="font-bold text-gray-500 sm:text-[16px] mt-2">
            Our mission is to make our clients life as smooth and problem free
            as possible and deliver top products.
          </h1>
          <h1 className="font-light text-c-gey sm:text-[16px] mt-2">
            We have been in the tech industry over a decade and know that it can
            sometimes be a jungle for someone who is unfamilliar with it. We are
            here to assist you and make it fun and easy for you to work. We have
            spent the past years in putting together an international team and
            workflow so we can optimize cost, work fast and deliver great
            results. 2019 we won the Innovation & Entrepreneurship Award in
            Kunming for our work.
          </h1>
        </div>
        <div
          className="flex justify-center z-0"
          style={{
            marginTop: "180px",
            overflow: "hidden",
          }}
        >
          <Image
            src={require("@/assets/img-hand.png")}
            alt="image"
            width="700"
            height="500"
          />
        </div>
      </div>
      <div className="grid w-full h-[640px] min-h-full items-center z-10 bg-primary justify-center">
        <h1 className="font-bold tracking-normal leading-normal text-white text-5xl align-center text-center">
          Abersoft, <br /> more than just <br /> a software house.
        </h1>
      </div>
      <div className="grid h-[644px] min-h-full grid-cols-2 ml-44 mr-4 items-center -z-10">
        <div className="mt-4 ml-1 pr-20">
          <h1 className="font-bold text-primary sm:text-[32px] ">
            Game Studio & Inhouse Apps.{" "}
          </h1>
          <h1 className="font-light text-c-gey sm:text-[16px] mt-2">
            Besides helping companies and start ups to create awesome apps and
            websites we also have our own inhouse branch where we explore new
            technologies that we find interesting. <p /> <br />
            Lately we have been focusing on exploring the field of Augmented
            Reality, more commonly known as AR. Besides AR we also love building
            software that makes life easier for our users.
            <p /> <br />
            Are you looking for a tech partner for your idea, we sometimes go in
            as part owners in ideas we feel passionate about. Contact us if you
            have an idea that you think we might be interested in.
          </h1>
        </div>
        <div
          className="flex justify-center z-0"
          style={{
            marginTop: "180px",
            overflow: "hidden",
          }}
        >
          <Image
            src={require("@/assets/img-gamestudio.png")}
            alt="image"
            width="700"
            height="500"
          />
        </div>
      </div>
      <div className="flex mt-60 mx-44 mb-12">
        <div className="w-1/2 ml-2">
          <h1 className="font-bold tracking-tight text-primary sm:text-5xl">
            Contact Us.
          </h1>
          <h1 className="font-light tracking-tight text-gray-900 sm:text-2xl mt-4">
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
        <div className="flex w-1/2 ml-20 mr-3">
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
