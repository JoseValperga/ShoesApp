//import nike1 from "../assets/n1-min.png";
import { useState } from "react";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";

export const ShoeDetail = ({ shoe, onClickAdd }) => {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className=" flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/*Shoe image*/}
      <div className="flex-1 lg:-mt-32 lg:ml-32">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} alt="" />
        </div>
      </div>

      <div className=" flex-1 space-y-6">
        {/*Shoe text details*/}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>

        <div className="font-medium md:text-xl">{shoe.description}</div>

        <div className=" flex space-x-6">
          <div className=" text-3xl font-extrabold md:text-6xl">
            ${shoe.price}
          </div>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>

        <div className=" space-x-10">
          {/*Shoe buton and links*/}
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className=" dark:bg-white dark:text-black btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700"
          >
            Add to bag
          </button>
          <a
            href="#"
            className=" text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};
