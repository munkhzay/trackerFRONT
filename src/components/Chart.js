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
  const [amount, setAmount] = useState();
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
  const circleAmount = amountData?.map((one) => {
    return one.amount;
  });
  const expenseAmount = amountData?.map((onedata) => {
    if (onedata.transaction === "Expense") return onedata.amount;
  });
  const incomeAllAmount = amountData?.map((onedata) => {
    if (onedata.transaction === "Income") return onedata.amount;
  });

  const categoryName = amountData?.map((name) => {
    return name.categoryname;
  });
  console.log(circleAmount);
  const data = {
    labels: categoryName,
    datasets: [
      {
        label: "Expense",
        data: expenseAmount,
        backgroundColor: ["#f05e0a "],

        borderWidth: 1,
      },
      {
        label: "Income",
        data: incomeAllAmount,
        backgroundColor: ["#099139 "],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
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
    <div className="flex items-center gap-7">
      <div
        style={{ height: "200px", width: "400px", backgroundColor: "white" }}
      >
        <Bar data={data} options={options} />
      </div>{" "}
      <div>
        <Doughnut data={ChartData} options={optionsCircle} />
      </div>
      {/* {amountData.map((amount, index) => {
        return <div key={index}>{amount.categoryname}</div>;
      })} */}
    </div>
  );
};

export default MyChart;
