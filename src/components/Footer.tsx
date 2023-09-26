import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-4 pt-20 pr-48 pl-48 bg-[#0E97FD]">
      <div className="   ">
        <h1 className="text-lg font-bold text-white">Our Services</h1>
        <div className="mt-4 text-md font-medium text-white">
          App Development
        </div>
        <div className="mt-4 text-md font-medium text-white">Websites</div>
        <div className="mt-4 text-md font-medium text-white">UI/UX Design</div>
        <div className="mt-4 text-md font-medium text-white">
          Ongoing Consultation
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">Documents</h1>
        <div className="mt-4 text-md font-medium text-white">
          Terms & Conditions
        </div>
        <div className="mt-4 text-md font-medium text-white">
          Privacy Policy
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">Inhouse</h1>
        <div className="mt-4 text-md font-medium text-white">
          Haunted House AR
        </div>
        <div className="mt-4 text-md font-medium text-white">Abersoft Blog</div>
        <div className="mt-4 text-md font-medium text-white">Work with us</div>
      </div>

      <div className="grid place-items-end justify-items-end pb-16">
        <h1 className="text-lg font-bold text-white">Address</h1>
        <div className="mt-4 text-md font-medium text-white text-right">
          Kometvägen 3 183 33 TÄBY Stockholm, Sweden
        </div>
        <div className="mt-4 text-md font-medium text-white text-right">
          Kampung Yadika Regency Blok H Nomer 4 Pasuruan, Indonesia
        </div>
        <Image
          className="mt-12"
          src={require("@/assets/logo.png")}
          alt="logo"
          width="200"
          height="50"
        />
      </div>
    </div>
  );
}
