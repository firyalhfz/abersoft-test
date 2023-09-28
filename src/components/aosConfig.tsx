// aosConfig.ts

import AOS, { AosOptions } from "aos";

export default function initAOS() {
  const aosConfig: AosOptions = {
    offset: 100,
    duration: 1000,
    easing: "ease-in-out",
    once: false,
  };
  AOS.init(aosConfig);
}
