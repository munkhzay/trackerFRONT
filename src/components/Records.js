import useSWR from "swr";
import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const Recor = () => {
  const [record, setRecord] = useState([]);
  console.log(record);

  //   const { data, isLoading, error } = useSWR(
  //     fetcher,
  //     "http://localhost:8070/api/transaction"
  //   );
  //   if (isLoading) return <div>isLoading</div>;
  //   if (error) return <div>oh sorry error</div>;

  //   console.log(data?.data);

  useEffect(() => {
    const getRecord = async () => {
      const { data } = await axios.get("http://localhost:8070/api/transaction");
      setRecord(data?.data);
    };
    getRecord();
  }, []);

  return (
    <div>
      {record.map((record) => {
        <OneRecord
          key={record.index}
          time={record.userid}
          //   text={record.recordname}
          //   image={record.description}
          //   time={record.time}
          //   color={record.color}
          //   money={record.amount}
          //   iconColor={record.iconColor}
        ></OneRecord>;
      })}
    </div>
  );
};
