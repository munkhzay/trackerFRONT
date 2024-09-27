import Navbar from "../components/Navbar";
import { useState } from "react";
import MyCategories from "@/components/Category";
import PlusSign from "../../public/icons/PlusSign";
import OneRecord from "../components/OneRecord";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";

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

const records = [
  [
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
  ],
  [
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
  ],
];

const Records = () => {
  const [selected, setSelected] = useState("All");
  const [myRecords, setRecords] = useState(records);
  const handleExpense = () => {
    const filtered = records.map((day) =>
      day.filter((oneRecord) => oneRecord.money.includes("-"))
    );
    setRecords(filtered);
  };
  const handleIncome = () => {
    const filtered = records.map((day) =>
      day.filter((oneRecord) => oneRecord.money.includes("+"))
    );
    setRecords(filtered);
  };
  const handleAll = () => {
    setRecords(records);
  };
  const handleChange = (option) => {
    setSelected(option);
  };
  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar />
      <div className="flex gap-6">
        <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit">
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
                onClick={() => handleAll()}
              />
              All
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <input
                type="checkbox"
                checked={"Income" === selected}
                className="checkbox"
                onChange={() => handleChange("Income")}
                onClick={() => handleIncome()}
              />
              Income
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <input
                type="checkbox"
                checked={"Expense" === selected}
                className="checkbox"
                onChange={() => handleChange("Expense")}
                onClick={() => handleExpense()}
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
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                <FaChevronLeft />
              </div>
              <p className="font-normal text-base"> Last 30 Days</p>
              <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                <FaAngleRight />
              </div>
            </div>
            <select className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]">
              <option selected>Newest First</option>
              <option> Latest First </option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base"> Today </p>
            <div className="flex flex-col gap-3 mb-3">
              {myRecords[0].map((recordToday, index) => {
                return (
                  <OneRecord
                    key={index}
                    text={recordToday.text}
                    image={recordToday.image}
                    time={recordToday.time}
                    color={recordToday.color}
                    money={recordToday.money}
                    iconColor={recordToday.iconColor}
                  />
                );
              })}
            </div>
            <p className="font-semibold text-base"> Yesterday </p>
            <div className="flex flex-col gap-3">
              {myRecords[1].map((recordToday, index) => {
                return (
                  <OneRecord
                    key={index}
                    text={recordToday.text}
                    image={recordToday.image}
                    time={recordToday.time}
                    color={recordToday.color}
                    money={recordToday.money}
                    iconColor={recordToday.iconColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
