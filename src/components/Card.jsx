export const Card = ({ item, onClick }) => {
  return (
    <div
    onClick={()=>onClick(item)}
      className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className=" text-2xl font-bold">{item.title}</div>
        <div className=" underline underline-offset-4 font-semibold mt-10">
          SHOP NOW +
        </div>
      </div>
      <img
        className=" absolute left-[40%] top-5 h-40 w-56"
        src={item.src}
        alt=""
      />
    </div>
  );
};
