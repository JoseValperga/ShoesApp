import { Card } from "./Card";

export const NewArrivalsSection = ({ items, onClickCard }) => {
  return (
    <div className="mt-20">
      <div className=" flex-center">
        <div className=" dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="  justify-between mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
};
