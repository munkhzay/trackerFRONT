import useSWR from "swr";
import OneRecord from "./OneRecord";
import axios from "axios";
import { useEffect, useState } from "react";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Recor = () => {
  const [record, setRecord] = useState([]);
  //   console.log(record);

  //   const { data, isLoading, error } = useSWR(
  //     fetcher,
  //     "http://localhost:8070/api/transaction"
  //   );
  //   if (isLoading) return <div>isLoading</div>;
  //   if (error) return <div>oh sorry error</div>;

  //   console.log(data?.data);

  useEffect(() => {
    const getrecord = async () => {
      const data = await axios.get("http://localhost:8070/api/transaction");
      setRecord(data.data);
    };
    getrecord();
  }, []);

  return (
    <div>
      {record.map((item) => {
        return (
          <OneRecord
            time={item.userid}
            text={item.recordname}
            // image={item.description}
            // time={record.time}
            color={record.color}
            money={item.amount}
            //   iconColor={record.iconColor}
          />
        );
      })}
    </div>
  );
};
export default Recor;
