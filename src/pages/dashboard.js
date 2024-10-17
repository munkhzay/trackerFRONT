import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";
import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [amountData, setAmountData] = useState();
  // const router = useRouter();
  // const { currentUser, isLoading } = useAuthContext;
  // useEffect(() => {
  //   if (!currentUser && !isLoading) {
  //     router.push("/auth/signIn");
  //   }
  // }, [!currentUser, isLoading]);
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
  console.log(amountData);
  const amountdata = amountData?.map((onedata) => {
    return onedata.amountData;
  });
  console.log(amountdata);
  const data = {
    labels: ["jun", "fed"],
    datasets: [
      {
        label: "Income",
        data: amountdata,
        backgroundColor: "#32a852",
        borderColor: "white",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [""],
        backgroundColor: "#f09c2e",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  // Define the chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sample Bar Chart",
      },
    },
  };

  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar />
      <div className="flex flex-col gap-6 w-full px-[120px]">
        <div className="flex gap-6">
          <div className="w-full rounded-[18px] bg-[#0166FF]"></div>
          <Income
            color={"#84CC16"}
            title={"Your Income"}
            money={"1,200,000₮"}
            text={"Your Income Amount"}
            description={"32% from last month"}
            icon={<IncomeLogo />}
          />
          <Income
            color={"#0166FF"}
            title={"Your Expense"}
            money={"-1,200,000₮"}
            text={"Your Expense Amount"}
            description={"32% from last month"}
            icon={<ExpenseLogo />}
          />
        </div>
      </div>
      <div className="px-6">
        <div className="w-full">
          <p className="font-semibold text-base py-4"> last Records </p>
        </div>
      </div>
      <div
        className=""
        style={{ width: "800px", height: "200px", backgroundColor: "white" }}
      >
        <Bar options={options} data={data} />
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
    </div>
  );
};

export default Dashboard;
