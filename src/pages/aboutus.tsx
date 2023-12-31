import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row place-content-center items-center md:mx-36 xs:mx-12 xs:h-screen">
        <div
          data-aos="zoom-in"
          className="lg:hidden xs:w-full flex justify-center"
        >
          <Image
            src={require("@/assets/team.png")}
            alt="image"
            width="400"
            height="500"
          />
        </div>
        <div className="xs:w-full lg:w-1/2 lg:ml-10 grid place-content-center ">
          <h1
            data-aos="zoom-in"
            className="font-bold tracking-normal md:leading-normal text-cgrey text-3xl md:text-5xl xs:mt-[30px] md:mt-0"
          >
            Who are we? <br /> We are{" "}
            <span className="text-primary">Abersoft..</span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="font-light tracking-tight text-cgrey sm:text-2xl mt-4"
          >
            Whether or not you are an established company or a new start up, we
            will create the solution you need.
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="xs:hidden lg:w-1/2 lg:flex justify-center lg:ml-24"
        >
          <Image
            src={require("@/assets/team.png")}
            alt="image"
            width="800"
            height="500"
          />
        </div>
      </div>

      <div className="grid w-full h-[640px] min-h-full box-content items-center bg-primary justify-center">
        <div data-aos="zoom-in" className="grid justify-center mt-[123px]">
          <Image
            src={require("@/assets/icon-quote-right.png")}
            alt="image"
            width="50"
            height="50"
          />
        </div>
        <h1
          data-aos="zoom-in"
          className="font-bold tracking-normal leading-relaxed md:leading-relaxed text-white text-3xl md:text-5xl align-center text-center"
        >
          Creating software <br /> is not our work, <br />
          it is our passion.
        </h1>
        <div data-aos="zoom-in" className="grid justify-center mb-[123px]">
          <Image
            src={require("@/assets/icon-quote-left.png")}
            alt="image"
            width="50"
            height="50"
          />
        </div>
      </div>

      <div className="grid lg:h-[640px] min-h-full grid-row lg:grid-cols-2 xs:mx-12 md:mx-36 items-center">
        <div className="lg:mt-4 xs:mt-20 ml-1 xs:pr-0 lg:pr-20 ">
          <h1
            data-aos="zoom-in-right"
            className="font-bold text-primary text-2xl md:text-4xl "
          >
            Our philosophy.
          </h1>
          <h1
            data-aos="zoom-in-right"
            className="font-bold text-gray-500 text-1xl mt-2"
          >
            Our mission is to make our clients life as smooth and problem free
            as possible and deliver top products.
          </h1>
          <h1
            data-aos="zoom-in-right"
            className="font-light text-c-gey sm:text-[16px] mt-2"
          >
            We have been in the tech industry over a decade and know that it can
            sometimes be a jungle for someone who is unfamilliar with it. We are
            here to assist you and make it fun and easy for you to work. We have
            spent the past years in putting together an international team and
            workflow so we can optimize cost, work fast and deliver great
            results. 2019 we won the Innovation & Entrepreneurship Award in
            Kunming for our work.
          </h1>
        </div>
        <div data-aos="fade-up" className="flex justify-center z-0">
          <Image
            src={require("@/assets/img-hand.png")}
            alt="image"
            width="700"
            height="500"
          />
        </div>
      </div>

      <div className="grid w-full h-[640px] min-h-full items-center z-10 bg-primary justify-center">
        <h1
          data-aos="zoom-in"
          className="font-bold tracking-normal leading-relaxed md:leading-relaxed text-white text-3xl md:text-5xl align-center text-center"
        >
          Abersoft, <br /> more than just <br /> a software house.
        </h1>
      </div>

      <div className="grid sm:h-screen grid-row lg:grid-cols-2 xs:mx-12 md:mx-36 items-center -z-10 ">
        <div
          data-aos="zoom-in"
          className="lg:hidden flex justify-center z-0 xs:mt-20"
        >
          <Image
            src={require("@/assets/img-gamestudio.png")}
            alt="image"
            width="700"
            height="500"
          />
        </div>
        <div className="mt-4 ml-1 lg:pr-20">
          <h1
            data-aos="fade-right"
            className="font-bold text-primary text-2xl md:text-4xl "
          >
            Game Studio & Inhouse Apps.{" "}
          </h1>
          <h1
            data-aos="fade-right"
            className="font-light text-c-gey sm:text-[16px] mt-2"
          >
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
          data-aos="fade-down"
          className="xs:hidden lg:flex lg:justify-center z-0"
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

      <div className="xs:mx-6 md:mx-28  lg:mx-28 xs:mt-30">
        <ContactUs />
      </div>
    </div>
  );
}
