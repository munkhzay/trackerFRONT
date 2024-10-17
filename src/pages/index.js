import Navbar from "../components/Navbar";
import { useEffect, useReducer, useState } from "react";
import PlusSign from "../../public/icons/PlusSign";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import AddRecord from "@/components/AddRecord";
import NewCategories from "@/components/newCategory";
import { useQueryState } from "next-usequerystate";
import Categories from "@/components/Categories";
import Transaction from "@/components/Records";
import { useRouter } from "next/router";
import { useAuthContext } from "@/providers/AuthProvider";

const Home = () => {
  const router = useRouter();
  const { currentUser, isLoading } = useAuthContext();

  const [showAdd, setShowAdd] = useState(false);
  const [showcategory, setShowcategory] = useState(false);
  const [selected, setSelected] = useState("All");
  const [myrecords, setMyrecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [category, setCategory] = useState();
  const [search, setSearch] = useQueryState("search");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  console.log(currentUser, isLoading);
  useEffect(() => {
    if (!currentUser && !isLoading) {
      router.push("/auth/signIn");
    }
  }, [currentUser, isLoading]);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const getCategories = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
    );
    const formattedCategories = data.map((category) => {
      return {
        ...category,
        selected: true,
      };
    });
    setCategory(formattedCategories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const sortTransaction = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/transaction/join`
      );
      setMyrecords(data);
      setAllRecords(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sortTransaction();
  }, []);

  const handleChangeRecordsType = (type) => {
    const filteredrecordsByType = allRecords.filter((onerecord) => {
      if (type === "All") return true;
      return onerecord.transaction === type;
    });
    setSelected(type);
    setMyrecords(filteredrecordsByType);
  };

  const onSelectCategory = (onecategory) => {
    setSelectedCategory(onecategory);
    const updatedCategory = category.map((category) => {
      if (category.categoryid === onecategory.categoryid) {
        return {
          ...category,
          selected: !category.selected,
        };
      }
      return category;
    });
    setCategory(updatedCategory);
  };

  const handleAll = () => {
    setMyrecords(allRecords);
  };
  const handleChange = (option) => {
    setSelected(option);
  };

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };
  const handlecategory = () => {
    setShowcategory(!showcategory);
  };
  const handleClear = () => {
    const clearCategory = category.map((category) => {
      if (category.selected === true) {
        return {
          ...category,
          selected: !category.selected,
        };
      }
      return category;
    });
    setCategory(clearCategory);
  };

  return (
    <div>
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} refetchRecord={sortTransaction} />
        </div>
      )}
      {showcategory && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center">
          <NewCategories
            onCloseModal={handlecategory}
            refetchRecord={getCategories}
          />
        </div>
      )}
      <div className={`bg-[#F3F4F6] flex flex-col gap-8 items-center relative`}>
        <Navbar />
        <div className="flex gap-6">
          <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit border border-[#E5E7EB]">
            <div className="flex flex-col gap-6">
              <p> Records </p>
              <button
                onClick={() => handleAdd()}
                className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center"
              >
                <PlusSign color="white" /> Add
              </button>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="border border-[#D1D5DB] rounded-lg px-4 py-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base text-[#1F2937] mb-3">
                Types
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  checked={"All" === selected}
                  className="checkbox"
                  onClick={() => handleChangeRecordsType("All")}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  checked={"Income" === selected}
                  className="checkbox"
                  onClick={() => handleChangeRecordsType("Income")}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  checked={"Expense" === selected}
                  className="checkbox"
                  onClick={() => handleChangeRecordsType("Expense")}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <div
                  className="font-normal text-base opacity-20"
                  onClick={handleClear}
                >
                  {" "}
                  Clear{" "}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Categories
                  categories={category}
                  onSelectCategory={onSelectCategory}
                  refetchRecord={getCategories}
                />
              </div>
              <button onClick={handlecategory}>
                <div className="flex gap-2 py-1.5 pl-3 items-center">
                  <PlusSign color={"#0166FF"} />
                  Add category
                </div>{" "}
              </button>
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
                <Transaction
                  onSelectCategory={onSelectCategory}
                  categories={category}
                  myrecords={myrecords}
                  allRecords={allRecords}
                  setAllRecords={setAllRecords}
                  selectedcategory={selectedCategory}
                  refetchRecord={sortTransaction}
                />
              </div>
              <p className="font-semibold text-base"> Yesterday </p>
              <div className="flex flex-col gap-3">
                {/* <Recor
                  myrecords={myrecords}
                  allRecords={allRecords}
                  setAllRecords={setAllRecords}
                  categories={category}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
