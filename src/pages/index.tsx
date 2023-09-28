import ContactUs from "@/components/ContactUs";
import Image from "next/image";

export default function Home() {
  const dataCategories = [
    {
      title: "App Development",
      desc: "We help you build native and cross-platform apps. We have helped clients reach Top Grossing apps with over 400 million downloads world wide. ",
      img: require("@/assets/img-app-dev.png"),
    },
    {
      title: "Websites",
      desc: "We work with all the most common websites systems such as Wordpress och WooCommerce. But we also build websites from scratch for you.",
      img: require("@/assets/img-web.png"),
    },
    {
      title: "MVP & Prototype",
      desc: "If you have an MVP that you need help getting developed or an idea of a prototype, let us know and we will assist you with the whole process.",
      img: require("@/assets/img-mvp.png"),
    },
    {
      title: "UI/UX Design",
      desc: "Besides development we also have a great team of UI/UX designers that will take your old design to a whole new level or create new one from scratch.. ",
      img: require("@/assets/img-uiux.png"),
    },
    {
      title: "Consultant",
      desc: "We can also provide you with an ongoing consultant that will be a great addition to your already established team. ",
      img: require("@/assets/img-cons.png"),
    },
    {
      title: "Software Systems",
      desc: "We work with all kinds of software technologies such as Unity, Strapi & other useful integrations that will help you and your company.",
      img: require("@/assets/img-soft-sys.png"),
    },
  ];
  // xl:mt-60 xl:mb-32
  return (
    <section className="mx-6 md:mx-36">
      <div className="flex w-full flex-col lg:flex-row my-6 mt-24 xl:mt-44 xs:px-8 ">
        <div className="lg:hidden mt-6 mb-10" data-aos="fade-up">
          <Image
            className="h-auto sm:ml-12 relative"
            src={require("@/assets/image_phone.png")}
            alt="img_phone"
            width="0"
            height="0"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-9 lg:ml-24 grid place-content-center">
          <h1
            data-aos="zoom-in"
            className="font-bold tracking-normal md:leading-normal text-primary text-3xl md:text-5xl"
          >
            We help you build the tech solutions of the future.
          </h1>
          <h1
            data-aos="zoom-in"
            className="font-light leading-normal text-cgrey text-lg md:text-2xl mt-4"
          >
            When you need help with development or design we are here to create
            the best solutions for you. With over a decade of experience in
            software development.
          </h1>
        </div>
        <div
          data-aos="fade-left"
          className="hidden lg:flex lg:absolute lg:right-10 lg:top-52 xl:top-60"
        >
          <Image
            src={require("@/assets/image_phone.png")}
            alt="image"
            width="800"
            height="500"
          />
        </div>
      </div>

      <div className="grid grid-row lg:grid-cols-3 md:grid-cols-2 lg:ml-4 mt-36 xl:mt-60">
        {dataCategories.map((item) => {
          return (
            <div key={item.title} className="mx-7 my-10">
              <div className="flex justify-center" data-aos="fade-up">
                <Image src={item.img} alt="image" width="300" height="300" />
              </div>
              <div className="mt-4" data-aos="fade-up">
                <h1 className="font-bold text-primary text-2xl ">
                  {item.title}
                </h1>
                <h1 data-aos="fade-up" className="text-cgrey xs:text-1xl mt-2">
                  {item.desc}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <ContactUs />
    </section>
  );
}
