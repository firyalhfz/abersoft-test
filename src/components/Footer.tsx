import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 pt-20 md:px-48 bg-primary xs:justify-items-center">
        <div className="md:self-start md:justify-self-start">
          <h1 className="text-lg font-bold text-white xs:text-center md:text-left">
            Our Services
          </h1>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            App Development
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            Websites
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            UI/UX Design
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            Ongoing Consultation
          </div>
        </div>

        <div className="grid md:self-start md:justify-self-end lg:justify-self-start xs:mt-10 md:mt-0">
          <h1 className="text-lg font-bold text-white md:text-right lg:text-left xs:text-center">
            Documents
          </h1>
          <div className="mt-4 text-md font-medium text-white md:text-right lg:text-left xs:text-center">
            Terms & Conditions
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-right lg:text-left xs:text-center">
            Privacy Policy
          </div>
        </div>

        <div className="lg:mt-0 md:mt-12 md:self-start md:justify-self-start xs:mt-10">
          <h1 className="text-lg font-bold text-white xs:text-center md:text-left">
            Inhouse
          </h1>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            Haunted House AR
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            Abersoft Blog
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-left xs:text-center">
            Work with us
          </div>
        </div>

        <div className="grid md:place-items-end md:justify-items-end pb-16 md:-mt-10 lg:mt-0 xs:mt-10">
          <h1 className="text-lg font-bold text-white xs:text-center">
            Address
          </h1>
          <div className="mt-4 text-md font-medium text-white md:text-right xs:text-center">
            Kometvägen 3 183 33 TÄBY Stockholm, Sweden
          </div>
          <div className="mt-4 text-md font-medium text-white md:text-right xs:text-center">
            Kampung Yadika Regency Blok H Nomer 4 Pasuruan, Indonesia
          </div>
          <Image
            className="mt-12 xs:justify-self-center md:justify-self-end md:-mr-2"
            src={require("@/assets/logo.png")}
            alt="logo"
            width="200"
            height="50"
          />
        </div>
      </div>
    </section>
  );
}
