import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export const Nav = ({ onClickShoppingButton }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className=" z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      {/* Burguer button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className=" dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}

      <div
        className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul
          className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 
                    rounded-lg p-4 lg:bg-transparent lg:border-none dark:lg:text-white"
        >
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent px-3 py-2 rounded cursor-pointer ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }
                ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/*Cart button*/}
      <div
        onClick={onClickShoppingButton}
        className=" btn-press-anim cursor-pointer fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="flex-center rounded-full bg-white shadow-md h-12 w-12">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};
