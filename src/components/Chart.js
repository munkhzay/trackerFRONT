// src/components/MyChart.js

import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  const [amountData, setAmountData] = useState();
  const [date, setDate] = useState();
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

  const circleAmount = amountData?.map((one) => {
    return one.createdat;
  });
  // const time = amountData.map((data) => {
  //   data.
  // });
  // const expenseAmount = amountData?.map((onedata) => {
  //   if (onedata.transaction === "Expense") return onedata.amount;
  // });
  // const incomeAllAmount = amountData?.map((onedata) => {
  //   if (onedata.transaction === "Income") return onedata.amount;
  // });

  const categoryName = amountData?.map((name) => {
    return name.categoryname;
  });
  // console.log(circleAmount);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expense",
        // data: expenseAmount,
        backgroundColor: ["#eb4934 "],
        borderWidth: 1,
      },
      {
        label: "Income",
        // data: incomeAllAmount,
        backgroundColor: ["#34eb8f"],
        borderWidth: 1,
      },
    ],
  };

  const optionsCircle = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const ChartData = {
    labels: categoryName,
    datasets: [
      {
        label: "My Dataset",
        data: circleAmount,
        backgroundColor: [
          "#bd1577",
          "#1555bd",
          "#18d6c3",
          "#18d641",
          "#d63118",
          "#ede611",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex justify-evenly items-center gap-7 ">
      <div className="w-full bg-white rounded-2xl">
        <div className="py-4 pl-6">
          <p className="font-semibold text-base"> Income - Expense</p>
        </div>
        <div className="h-[284px] p-5">
          {" "}
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="w-full bg-white rounded-2xl ">
        <div className="px-6 py-4 justify-between flex">
          <p className="font-semibold text-base">Income - Expense</p>
          <p className="font-normal text-base">Jun 1 - Nov 30</p>
        </div>
        <div className="p-5 h-[284px] ">
          <Doughnut data={ChartData} options={optionsCircle} />
        </div>
      </div>
    </div>
  );
};

export default MyChart;
