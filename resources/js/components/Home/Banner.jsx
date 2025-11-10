import imgBanner from "../../../images/home/banner.webp";

export default function Banner() {
  return (
    <div className="w-screen relative font-poppins">
      <img src={imgBanner} className="object-cover w-full"></img>

      <section className=" flex justify-center flex-col text-left lg:absolute bg-beje px-4 py-6 lg:px-10 lg:pb-10 lg:pt-16 lg:top-38 lg:right-40">
        <p className="font-semibold tracking-[3px] lg:text-[16px]">
          New Arrival
        </p>
        <h1 className="text-primary text-[18px] lg:text-[52px] lg:leading-[65px] font-bold pb-3 lg:pb-4">
          Discover Our <br className="hidden lg:block"></br>New Collection
        </h1>
        <p className="text-[14px] lg:text-[18px] font-normal lg:leading-6 lg:max-w-[700px] w-full pb-3 lg:pb-13">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <button className="uppercase bg-primary py-2 lg:py-6 lg:px-18 text-white text-[16px] font-bold cursor-pointer hover:bg-hover duration-300 transition-all lg:max-w-fit w-full">
          Buy now
        </button>
      </section>
    </div>
  );
}
