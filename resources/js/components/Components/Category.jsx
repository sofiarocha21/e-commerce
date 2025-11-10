export default function Category({ image, categoryName, ...props }) {
  return (
    <section {...props} className="w-full h-[200px] lg:h-[480px]">
      <img src={image} className="rounded-[10px] h-full w-full"></img>
      <p className="font-poppins text-[14px] lg:text-[24px] font-semibold mt-1 lg:mt-7.5">
        {categoryName}
      </p>
    </section>
  );
}
