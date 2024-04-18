import { CiTrash } from "react-icons/ci";
import { Select } from "../components/Select";
import { QTY, SIZES } from "../constant";

export const CartItem = ({ item: { product, qty, size }, onClickTrash }) => {
  return (
    <div className="hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50 dark:bg-transparent dark:hover:bg-gray-700 space-y-2">
      <div className="flex space-x-2">
        {/*Image*/}
        <img className="h-24" src={product.src} alt="" />
        <div className=" space-y-2">
          {/*Title & Description*/}
          <div className=" dark:text-white font-bold">{product.title}</div>
          <div className=" text-sm text-gray-400">{product.description}</div>
        </div>
        {/*Price*/}
        <div className=" dark:text-white font-bold">${product.price}</div>
      </div>

      <div className="flex justify-between">
        {/*SIZE & QTY*/}
        <div className="flex space-x-6 pl-32">
          <div>
            <div className=" dark:text-white font-bold">SIZES</div>
            <Select
              value={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>

          <div>
            <div className=" dark:text-white font-bold">QTY</div>
            <Select value={qty} title="" options={QTY} className={"w-16 p-1"} />
          </div>
        </div>

        {/*TRASH*/}
        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className=" dark:text-white text-black" />
        </button>
      </div>
    </div>
  );
};
