import Navbar from "../components/Navbar";
import { useState } from "react";
import MyCategories from "@/components/Category";
import PlusSign from "../../public/icons/PlusSign";
import RentIcon from "../../public/icons/RentIcon";
import OneRecord from "../components/OneRecord";

const categories = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

const Records = () => {
  const [selected, setSelected] = useState("All");

  const handleChange = (option) => {
    setSelected(option);
  };
  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar />
      <div className="flex gap-6">
        <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl">
          <div className="flex flex-col gap-6">
            <p> Records </p>
            <button className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center">
              <PlusSign color="white" /> Add
            </button>
          </div>
          <input
            placeholder="Search"
            className="border border-[#D1D5DB] rounded-lg px-4 py-1"
          />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-base text-[#1F2937] mb-3">Types</p>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <input
                type="checkbox"
                checked={"All" === selected}
                className="checkbox"
                onChange={() => handleChange("All")}
              />
              All
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <input
                type="checkbox"
                checked={"Income" === selected}
                className="checkbox"
                onChange={() => handleChange("Income")}
              />
              Income
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <input
                type="checkbox"
                checked={"Expense" === selected}
                className="checkbox"
                onChange={() => handleChange("Expense")}
              />
              Expense
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="font-semibold text-base">Category</p>
              <p className="font-normal text-base opacity-20"> Clear </p>
            </div>
            <div className="flex flex-col gap-2">
              {categories.map((category1, index) => {
                return <MyCategories key={index} categoryName={category1} />;
              })}
            </div>
            <div className="flex gap-2 py-1.5 pl-3 items-center">
              <PlusSign color={"#0166FF"} />
              <p>Add category </p>
            </div>
          </div>
        </div>
        <div className="w-[894px] flex flex-col gap-4">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Records;
