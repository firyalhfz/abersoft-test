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

  return (
    <div className="mx-36">
      <div className="flex my-36">
        <div className="w-1/2 ml-9">
          <h1 className="font-bold tracking-normal leading-normal text-primary text-5xl">
            We help you build the tech solutions of the future.
          </h1>
          <h1 className="font-light leading-normal text-cgrey text-2xl mt-4">
            When you need help with development or design we are here to create
            the best solutions for you. With over a decade of experience in
            software development.
          </h1>
        </div>
        <div className="absolute mr-10 right-0">
          <div
            style={{
              overflow: "hidden",
              marginLeft: "-80px",
            }}
          >
            <Image
              src={require("@/assets/image_phone.png")}
              alt="image"
              width="900"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 ml-4 mt-72">
        {dataCategories.map((item) => {
          return (
            <div key={item.title} className="mx-7 my-10">
              <div className="flex justify-center">
                <Image src={item.img} alt="image" width="300" height="300" />
              </div>
              <div className="mt-4">
                <h1 className="font-bold text-primary sm:text-3xl ">
                  {item.title}
                </h1>
                <h1 className="font-light text-cgrey sm:text-1xl mt-2">
                  {item.desc}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex mt-60 mx-9 mb-12">
        <div className="w-1/2">
          <h1 className="font-bold text-primary sm:text-5xl">Contact Us.</h1>
          <h1 className="font-light text-cgrey sm:text-2xl mt-4">
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
