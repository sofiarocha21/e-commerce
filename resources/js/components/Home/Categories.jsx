import Category from "../Components/Category";
import bedroom from "../../../images/home/bedroom.png";
import dining from "../../../images/home/dining.png";
import livingRoom from "../../../images/home/living-room.png";
import bathroom from "../../../images/home/bathroom.jpg";

export default function Categories() {
  return (
    <div className="flex flex-col justify-center text-center text-font my-6 lg:my-16 px-4 lg:px-40">
      <h1 className="capitalize font-semibold text-[20px] lg:text-[32px] xl:text-[34px]">
        Browse the range
      </h1>
      <p className="text-gray-seven font-light text-[15px] leading-5 lg:text-[20px] lg:leading-6 mt-2 lg:mt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-5 lg:mt-15 flex flex-col lg:flex-row justify-center xl:gap-6">
        <section className="flex gap-3 lg:gap-6">
          <Category image={dining} categoryName={"Dining"} />
          <Category image={livingRoom} categoryName={"Living"} />
        </section>
        <section className="flex gap-3 lg:gap-6 mt-10 lg:mt-0">
          <Category image={bedroom} categoryName={"Bedroom"} />
          <Category image={bathroom} categoryName={"Bathroom"} />
        </section>
      </div>
    </div>
  );
}
