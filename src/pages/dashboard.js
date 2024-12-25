import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import axios from "axios";
import MyChart from "@/components/Chart";
import { Cart } from "../../public/icons/Cart";
import { Wifi } from "../../public/icons/Wifi";
import OneRecord from "@/components/OneRecord";
import Transaction from "@/components/Records";
import AddRecord from "@/components/AddRecord";

const Dashboard = () => {
  const [amountData, setAmountData] = useState();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [myrecords, setMyrecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const router = useRouter();
  const { currentUser, isLoadin, setCurrentUser } = useAuthContext;
  useEffect(() => {
    if (!currentUser && !isLoading) {
      router.push("/auth/signIn");
    }
  }, [!currentUser, isLoading]);
  const recordData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/transaction/join`
      );
      setAmountData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    recordData();
  }, []);

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
  const sum = amountData?.map((amountdata) => {
    return amountdata.amount;
  });

  const expenseAmount = amountData?.filter((onedata) =>
    onedata.transaction === "Expense" ? onedata.amount : 0
  );
  const expensedata = expenseAmount?.map((amount) => {
    return amount.amount;
  });
  const sumExpense = expensedata?.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  const incomedata = amountData?.filter(
    (oneincome) => oneincome.transaction === "Income"
  );
  const incomeAmount = incomedata?.map((data) => {
    return data.amount;
  });

  const sumIncome = incomeAmount?.reduce(
    (currentValue, previousValue) => previousValue + currentValue
  );
  const cash = sumIncome - sumExpense;

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  const signOut = () => {
    setCurrentUser("");
    const user = localStorage.getItem("user");
    if (user.email === undefined) router.push("/auth/signIn");
  };
  useEffect(() => {
    signOut;
  }, []);

  return (
    <div>
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} refetchRecord={sortTransaction} />
        </div>
      )}
      <div className="bg-[#F3F4F6] flex flex-col  gap-8">
        <Navbar signOut={signOut} handleAdd={() => handleAdd()} />
        <div className="flex flex-col gap-6 w-full px-[120px]">
          <div className="flex gap-6">
            <div className="w-full rounded-[18px] bg-[#0166FF] relative">
              <div className="absolute top-7 left-10">
                {" "}
                <Cart />
              </div>{" "}
              <p className="absolute bottom-20 left-6 text-gray-200">
                Cash
              </p>{" "}
              <p className="absolute bottom-14 left-6 text-white font-bold">
                {cash}
              </p>
              <div className="absolute bottom-12 right-10">
                <Wifi />
              </div>
            </div>
            <Income
              color={"#84CC16"}
              title={"Your Income"}
              money={sumIncome}
              text={"Your Income Amount"}
              description={"32% from last month"}
              icon={<IncomeLogo />}
            />
            <Income
              color={"#0166FF"}
              title={"Your Expense"}
              money={-sumExpense}
              text={"Your Expense Amount"}
              description={"32% from last month"}
              icon={<ExpenseLogo />}
            />
          </div>
        </div>
        {/* <div className="flex gap-6 px-[120px]">
        <div className="w-full bg-white">
          <div className="py-4 pl-6">
            <p className="font-semibold text-base"> Income - Expense</p>
          </div>
          <div className="pt-8 py-6">
            <img src="/images/Income.png" />
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="px-6 py-4 justify-between flex">
            <p className="font-semibold text-base">Income - Expense</p>
            <p className="font-normal text-base">Jun 1 - Nov 30</p>
          </div>
          <div className="pt-8 py-6">
            <img src="/images/Expense.png" />
          </div>
        </div>
      </div> */}
        <div className="px-[120px] flex flex-col gap-8">
          <div>
            {" "}
            <MyChart category={category} />
          </div>
          <div className="w-fill ">
            {" "}
            <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl font-bold">
              {" "}
              Last Records
            </div>
            <Transaction
              onSelectCategory={onSelectCategory}
              categories={category}
              myrecords={myrecords}
              refetchRecord={sortTransaction}
            />
            {/* {amountData?.map((record) => {
            return (
              <div key={record.userid}>
                <OneRecord
                  text={record.categoryname}
                  transaction_type={record.transaction}
                  money={record.amount}
                  time={record.createdat}
                />
              </div>
            );
          })} */}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
